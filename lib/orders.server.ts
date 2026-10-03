// Server-only order storage (Postgres) and Cray status reconciliation. Required env: DATABASE_URL.
import postgres from "postgres";
import { CrayError, queryCrayPayment, type CrayPayment } from "./cray.server";

export type OrderStatus = "pending" | "paid" | "failed" | "abandoned" | "review";

const PENDING_WINDOW_HOURS = 48;
const RECONCILE_EVERY_MS = 2 * 60 * 1000;

let client: postgres.Sql | undefined;
let migrated: Promise<void> | undefined;

function db() {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("Orders database is not configured (DATABASE_URL missing)");
    client = postgres(url, { max: 5, idle_timeout: 30, connect_timeout: 10, onnotice: () => {} });
  }
  return client;
}

async function sql() {
  const s = db();
  migrated ??= migrate(s).catch(err => {
    migrated = undefined;
    throw err;
  });
  await migrated;
  return s;
}

// Digital courses: no shipping, so the PEEK-AURA shipping/address/gift columns are left out.
async function migrate(s: postgres.Sql) {
  await s`
    CREATE TABLE IF NOT EXISTS orders (
      reference           text PRIMARY KEY,
      status              text NOT NULL DEFAULT 'pending',
      amount              numeric(12, 2) NOT NULL,
      currency            text NOT NULL,
      payment_method      text NOT NULL,
      customer_name       text NOT NULL,
      customer_email      text NOT NULL,
      items               jsonb NOT NULL,
      checkout_link       text,
      cray_status         text,
      provider_reference  text,
      payment_channel     text,
      status_note         text,
      check_count         integer NOT NULL DEFAULT 0,
      last_checked_at     timestamptz,
      paid_at             timestamptz,
      created_at          timestamptz NOT NULL DEFAULT now(),
      updated_at          timestamptz NOT NULL DEFAULT now()
    )`;
  await s`CREATE INDEX IF NOT EXISTS orders_open_idx ON orders (created_at) WHERE status IN ('pending', 'failed')`;
  await s`CREATE INDEX IF NOT EXISTS orders_email_idx ON orders (lower(customer_email))`;
}

export type NewOrder = {
  reference: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  customer: { name: string; email: string };
  items: { productId: number; name: string; quantity: number; unitPriceUSD: number }[];
};

export async function createOrder(o: NewOrder) {
  const s = await sql();
  await s`
    INSERT INTO orders (reference, amount, currency, payment_method, customer_name, customer_email, items)
    VALUES (${o.reference}, ${o.amount}, ${o.currency}, ${o.paymentMethod},
            ${o.customer.name}, ${o.customer.email}, ${s.json(o.items)})`;
}

export async function setCheckoutLink(reference: string, link: string) {
  const s = await sql();
  await s`UPDATE orders SET checkout_link = ${link}, updated_at = now() WHERE reference = ${reference}`;
}

export async function markInitFailed(reference: string, note: string) {
  const s = await sql();
  await s`UPDATE orders SET status = 'failed', status_note = ${note.slice(0, 500)}, updated_at = now() WHERE reference = ${reference}`;
}

export type OrderRow = {
  reference: string;
  status: OrderStatus;
  amount: string;
  currency: string;
  payment_method: string;
  customer_name: string;
  customer_email: string;
  items: NewOrder["items"];
  cray_status: string | null;
  payment_channel: string | null;
  status_note: string | null;
  check_count: number;
  paid_at: Date | null;
  created_at: Date;
};

/** Newest orders first, optionally filtered by status and a name/email/reference search. For the admin page. */
export async function listOrders({ status, q, limit = 200 }: { status?: OrderStatus; q?: string; limit?: number }) {
  const s = await sql();
  const like = q ? `%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%` : null;
  return s<OrderRow[]>`
    SELECT reference, status, amount, currency, payment_method, customer_name, customer_email, items,
           cray_status, payment_channel, status_note, check_count, paid_at, created_at
    FROM orders
    WHERE (${status ?? null}::text IS NULL OR status = ${status ?? null})
      AND (${like}::text IS NULL OR customer_email ILIKE ${like} OR customer_name ILIKE ${like} OR reference ILIKE ${like})
    ORDER BY created_at DESC
    LIMIT ${limit}`;
}

/** Order counts and paid revenue per currency, for the admin summary. */
export async function orderSummary() {
  const s = await sql();
  const counts = await s<{ status: OrderStatus; count: number }[]>`
    SELECT status, count(*)::int AS count FROM orders GROUP BY status`;
  const revenue = await s<{ currency: string; total: string }[]>`
    SELECT currency, sum(amount)::text AS total FROM orders WHERE status = 'paid' GROUP BY currency`;
  return { counts, revenue };
}

function mapCrayStatus(raw: string): "paid" | "pending" | "failed" {
  const s = raw.toLowerCase();
  if (/^(success|successful|completed|paid|approved)/.test(s)) return "paid";
  if (/(fail|declin|cancel|revers|expire|reject|error)/.test(s)) return "failed";
  return "pending";
}

/** Ask Cray for the latest status and persist it. Never downgrades an order that is already paid or under review. */
export async function syncOrder(reference: string): Promise<{ status: OrderStatus | "unknown"; payment: CrayPayment | null }> {
  const s = await sql();
  const [order] = await s<{ status: OrderStatus; amount: string; currency: string }[]>`
    SELECT status, amount, currency FROM orders WHERE reference = ${reference}`;

  if (order && (order.status === "paid" || order.status === "review")) return { status: order.status, payment: null };

  let payment: CrayPayment | null = null;
  try {
    payment = await queryCrayPayment(reference);
  } catch (err) {
    // 404 means the customer never reached the payment step; anything else is transient — try again later.
    if (!(err instanceof CrayError && err.httpStatus === 404)) throw err;
  }

  if (!order) return { status: payment ? mapCrayStatus(payment.status) : "unknown", payment };

  let next: OrderStatus = payment ? mapCrayStatus(payment.status) : "pending";
  let note: string | null = null;
  if (next === "paid" && payment?.amount != null && Math.abs(Number(payment.amount) - Number(order.amount)) > 0.01) {
    next = "review";
    note = `Amount mismatch: Cray reported ${payment.amount}, order total ${order.amount} ${order.currency}`;
    console.error(`Order ${reference}: ${note}`);
  }

  const [updated] = await s<{ status: OrderStatus }[]>`
    UPDATE orders SET
      status             = ${next},
      cray_status        = ${payment?.status ?? null},
      provider_reference = COALESCE(${payment?.provider_reference ?? null}, provider_reference),
      payment_channel    = COALESCE(${payment?.payment_channel ?? null}, payment_channel),
      status_note        = COALESCE(${note}, status_note),
      paid_at            = CASE WHEN ${next} IN ('paid', 'review') THEN COALESCE(paid_at, now()) ELSE paid_at END,
      check_count        = check_count + 1,
      last_checked_at    = now(),
      updated_at         = now()
    WHERE reference = ${reference} AND status NOT IN ('paid', 'review')
    RETURNING status`;

  return { status: updated?.status ?? order.status, payment };
}

let reconciling = false;

/** Re-check open orders with Cray, backing off as they age, and abandon ones left unpaid past the window. */
export async function reconcileOpenOrders() {
  if (reconciling) return;
  reconciling = true;
  try {
    const s = await sql();
    const due = await s<{ reference: string }[]>`
      SELECT reference FROM orders
      WHERE status IN ('pending', 'failed')
        AND created_at > now() - make_interval(hours => ${PENDING_WINDOW_HOURS})
        AND (last_checked_at IS NULL
             OR last_checked_at < now() - LEAST(interval '30 minutes', GREATEST(interval '2 minutes', (now() - created_at) / 10)))
      ORDER BY created_at
      LIMIT 50`;

    for (const { reference } of due) {
      try {
        await syncOrder(reference);
      } catch (err) {
        console.error(`Reconcile ${reference} failed:`, err);
      }
    }

    const abandoned = await s`
      UPDATE orders SET status = 'abandoned', updated_at = now()
      WHERE status = 'pending' AND created_at <= now() - make_interval(hours => ${PENDING_WINDOW_HOURS})`;
    if (due.length || abandoned.count) console.log(`Order reconcile: checked ${due.length}, abandoned ${abandoned.count}`);
  } catch (err) {
    console.error("Order reconcile run failed:", err);
  } finally {
    reconciling = false;
  }
}

/** Start the background reconciler once per process. No-op when the database is not configured. */
export function startOrderReconciler() {
  const g = globalThis as { __orderReconciler?: NodeJS.Timeout };
  if (g.__orderReconciler || !process.env.DATABASE_URL) return;
  g.__orderReconciler = setInterval(reconcileOpenOrders, RECONCILE_EVERY_MS);
  g.__orderReconciler.unref?.();
  setTimeout(reconcileOpenOrders, 10_000).unref?.();
}
