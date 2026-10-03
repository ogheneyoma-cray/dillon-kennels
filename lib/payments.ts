"use server";
// Cray Hosted Checkout server actions. They run on the server only, so the secret key and database client
// never reach the browser bundle.
// Required env: CRAY_SECRET_KEY, CRAY_BASE_URL, CRAY_SUBACCOUNT_TOKEN, DATABASE_URL. Optional: SITE_URL.
import { headers } from "next/headers";
import { z } from "zod";
import { products } from "@/data/products";
import { cray, getSubaccountToken } from "./cray.server";
import { createOrder, markInitFailed, setCheckoutLink } from "./orders.server";
import { computeOrderTotal } from "./pricing";

const initializeInput = z.object({
  customer: z.object({
    fullName: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
  }),
  items: z
    .array(z.object({ productId: z.number().int(), quantity: z.number().int().min(1).max(99) }))
    .min(1)
    .max(50),
  currency: z.enum(["USD", "NGN"]),
  payment: z.enum(["card", "bank"]),
});

export type InitializeCheckoutInput = z.infer<typeof initializeInput>;

function siteOrigin() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  const h = headers();
  const proto = h.get("x-forwarded-proto")?.split(",")[0] ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  return `${proto}://${host}`;
}

// Errors thrown from server actions are redacted in production, so failures come back as a value.
export async function initializeCheckout(
  input: InitializeCheckoutInput,
): Promise<{ ok: true; link: string } | { ok: false; error: string }> {
  const parsed = initializeInput.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Please check your details and try again." };
  const data = parsed.data;

  const reference = crypto.randomUUID();
  const method = data.payment === "card" ? "card" : "transfer";
  let total: number;
  let items: { productId: number; name: string; quantity: number; unitPriceUSD: number }[];
  try {
    total = computeOrderTotal(data.items, data.currency);
    items = data.items.map((i) => {
      const product = products.find((p) => p.id === i.productId)!;
      return { productId: i.productId, name: product.name, quantity: i.quantity, unitPriceUSD: product.price };
    });
    // Record the order before sending the customer to Cray, so every payment attempt has a row to reconcile.
    await createOrder({
      reference,
      amount: total,
      currency: data.currency,
      paymentMethod: method,
      customer: { name: data.customer.fullName, email: data.customer.email },
      items,
    });
  } catch (err) {
    console.error("Checkout order creation failed:", err);
    return { ok: false, error: "We couldn't start your checkout. Please try again." };
  }

  try {
    const result = await cray<{ link: string; reference: string; payCode: string }>("/api/checkout/initialize", {
      method: "POST",
      body: JSON.stringify({
        amount: total,
        currency: data.currency,
        ...(method === "card" ? { token: getSubaccountToken() } : {}),
        reference,
        defaultPaymentMethod: method,
        feeBearer: "merchant",
        narration: `Webreid order ${reference.slice(0, 8).toUpperCase()}`,
        paymentMethods: [method],
        callback_url: `${siteOrigin()}/checkout/callback?reference=${reference}`,
        customer: { name: data.customer.fullName, email: data.customer.email },
        metadata: {
          courses: items.map((i) => `${i.name} x${i.quantity}`).join(", "),
        },
      }),
    });
    await setCheckoutLink(reference, result.link);
    return { ok: true, link: result.link };
  } catch (err) {
    await markInitFailed(reference, `Checkout initialize failed: ${err instanceof Error ? err.message : String(err)}`).catch(() => {});
    return { ok: false, error: "The payment provider is unavailable right now. Please try again." };
  }
}
