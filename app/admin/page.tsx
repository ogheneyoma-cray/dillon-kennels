import type { Metadata } from "next";
import Link from "next/link";
import { adminConfigured, isAdmin } from "@/lib/admin-auth.server";
import { listOrders, orderSummary, type OrderStatus } from "@/lib/orders.server";
import { site } from "@/lib/site";
import { logout } from "./actions";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Orders | ${site.wordmark} Admin`,
  robots: { index: false, follow: false },
};

const STATUSES: OrderStatus[] = ["paid", "pending", "review", "failed", "abandoned"];

const statusStyles: Record<OrderStatus, string> = {
  paid: "bg-lime/15 text-lime-dark",
  pending: "bg-line text-ink",
  review: "bg-magenta-pale text-magenta-dark",
  failed: "bg-magenta/10 text-magenta",
  abandoned: "bg-line text-ink-soft",
};

function money(amount: string | number, currency: string) {
  return new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "NGN" ? 0 : 2,
  }).format(Number(amount));
}

const dateTime = (d: Date) =>
  new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Lagos" }).format(d);

export default async function AdminPage({ searchParams }: { searchParams: { status?: string; q?: string } }) {
  if (!adminConfigured()) {
    return (
      <Centered title="Admin is not set up">
        <p className="mt-4 max-w-md text-ink-soft">
          Set an <code>ADMIN_PASSWORD</code> environment variable (at least 12 characters) and redeploy.
        </p>
      </Centered>
    );
  }

  if (!isAdmin()) {
    return (
      <Centered title="Admin sign in">
        <LoginForm />
      </Centered>
    );
  }

  const status = STATUSES.includes(searchParams.status as OrderStatus) ? (searchParams.status as OrderStatus) : undefined;
  const q = searchParams.q?.trim().slice(0, 100) || undefined;

  let data: { orders: Awaited<ReturnType<typeof listOrders>>; summary: Awaited<ReturnType<typeof orderSummary>> };
  try {
    const [orders, summary] = await Promise.all([listOrders({ status, q }), orderSummary()]);
    data = { orders, summary };
  } catch (err) {
    console.error("Admin orders query failed:", err);
    return (
      <Centered title="Couldn't load orders">
        <p className="mt-4 max-w-md text-ink-soft">The orders database is unreachable. Check DATABASE_URL and the app logs.</p>
      </Centered>
    );
  }

  const { orders, summary } = data;
  const count = (s: OrderStatus) => summary.counts.find((c) => c.status === s)?.count ?? 0;
  const total = summary.counts.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="container-page py-10 lg:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="section-heading mt-3">Orders</h1>
        </div>
        <form action={logout}>
          <button type="submit" className="btn-secondary">
            Sign Out
          </button>
        </form>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Paid revenue">
          {summary.revenue.length ? summary.revenue.map((r) => <div key={r.currency}>{money(r.total, r.currency)}</div>) : "—"}
        </Stat>
        {STATUSES.map((s) => (
          <Stat key={s} label={s}>
            {count(s)}
          </Stat>
        ))}
      </dl>

      <form method="get" className="mt-8 flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1 sm:max-w-xs">
          <label htmlFor="q" className="label-text">
            Search
          </label>
          <input id="q" name="q" defaultValue={q} placeholder="Name, email or reference" className="input-field" />
        </div>
        <div>
          <label htmlFor="status" className="label-text">
            Status
          </label>
          <select id="status" name="status" defaultValue={status ?? ""} className="input-field capitalize">
            <option value="">All ({total})</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s} ({count(s)})
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-primary">
          Filter
        </button>
        {(status || q) && (
          <Link href="/admin" className="btn-secondary">
            Clear
          </Link>
        )}
      </form>

      {orders.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-line bg-paper p-8 text-center text-ink-soft">
          {status || q ? "No orders match these filters." : "No orders yet."}
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-paper">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="border-b border-line text-xs uppercase tracking-wider text-ink-soft">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Reference</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Courses</th>
                <th className="px-4 py-3 text-right font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {orders.map((o) => (
                <tr key={o.reference} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-ink-soft">{dateTime(o.created_at)}</td>
                  <td className="px-4 py-3 font-mono text-xs text-ink" title={o.reference}>
                    {o.reference.slice(0, 8).toUpperCase()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink">{o.customer_name}</div>
                    <a href={`mailto:${o.customer_email}`} className="text-ink-soft hover:text-magenta">
                      {o.customer_email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">
                    {o.items.map((i) => (
                      <div key={i.productId}>
                        {i.name}
                        {i.quantity > 1 && ` × ${i.quantity}`}
                      </div>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-ink">
                    {money(o.amount, o.currency)}
                    <div className="text-xs font-normal capitalize text-ink-soft">
                      {o.payment_channel ?? (o.payment_method === "transfer" ? "bank transfer" : o.payment_method)}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[o.status]}`}>
                      {o.status}
                    </span>
                    {o.paid_at && <div className="mt-1 text-xs text-ink-soft">Paid {dateTime(o.paid_at)}</div>}
                    {o.status_note && <div className="mt-1 max-w-[16rem] text-xs text-magenta">{o.status_note}</div>}
                    {!o.paid_at && o.check_count > 0 && (
                      <div className="mt-1 text-xs text-ink-soft">Checked {o.check_count}×</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {orders.length === 200 && <p className="mt-3 text-xs text-ink-soft">Showing the latest 200 orders. Use search to narrow down.</p>}
    </div>
  );
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-4">
      <dt className="text-xs uppercase tracking-wider text-ink-soft">{label}</dt>
      <dd className="mt-1 font-display text-xl text-ink">{children}</dd>
    </div>
  );
}

function Centered({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container-page flex flex-col items-center py-20 text-center lg:py-28">
      <p className="eyebrow justify-center">Admin</p>
      <h1 className="section-heading mt-3">{title}</h1>
      {children}
    </div>
  );
}
