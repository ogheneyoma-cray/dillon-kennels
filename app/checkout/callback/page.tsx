import type { Metadata } from "next";
import Link from "next/link";
import { syncOrder } from "@/lib/orders.server";
import { site } from "@/lib/site";
import { CheckAgainButton, ClearCartOnMount } from "./CallbackActions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Payment Status | ${site.wordmark}`,
  robots: { index: false },
};

type Outcome = "success" | "pending" | "failed";

async function resolveOutcome(reference: string | undefined): Promise<{ outcome: Outcome; customerName: string | null }> {
  if (!reference || reference.length > 100) return { outcome: "failed", customerName: null };
  try {
    const { status, payment } = await syncOrder(reference);
    // "review" = paid but needs a manual check (e.g. amount mismatch), so don't confirm it to the customer yet.
    const outcome: Outcome = status === "paid" ? "success" : status === "pending" || status === "review" ? "pending" : "failed";
    return { outcome, customerName: payment?.customer?.name ?? null };
  } catch (err) {
    console.error(err);
    return { outcome: "pending", customerName: null };
  }
}

export default async function PaymentCallbackPage({
  searchParams,
}: {
  searchParams: { reference?: string };
}) {
  const reference = typeof searchParams.reference === "string" ? searchParams.reference : undefined;
  const { outcome, customerName } = await resolveOutcome(reference);
  const orderRef = reference?.slice(0, 8).toUpperCase();

  if (outcome === "success") {
    return (
      <Shell tone="success" eyebrow="Order Confirmed" title="Thank you for your order">
        <ClearCartOnMount />
        <p className="mt-4 max-w-md text-ink-soft">
          Thank you{customerName ? `, ${customerName.split(" ")[0]}` : ""}. Your payment was successful and your
          course access is being set up. Your login details are on their way to your inbox.
        </p>
        {orderRef && <OrderRef value={orderRef} />}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="btn-primary">
            Continue Shopping
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </Shell>
    );
  }

  if (outcome === "pending") {
    return (
      <Shell tone="pending" eyebrow="Payment Status" title="Confirming your payment">
        <p className="mt-4 max-w-md text-ink-soft">
          We&apos;re waiting for confirmation from the payment provider. Bank transfers can take a few minutes to
          arrive.
        </p>
        {orderRef && <OrderRef value={orderRef} />}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CheckAgainButton />
          <Link href="/contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell tone="failed" eyebrow="Payment Status" title="Payment not completed">
      <p className="mt-4 max-w-md text-ink-soft">
        Your payment didn&apos;t go through. Please try again, or contact us if you were debited or the problem
        continues.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/checkout" className="btn-primary">
          Try Again
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Support
        </Link>
      </div>
    </Shell>
  );
}

function OrderRef({ value }: { value: string }) {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-paper px-8 py-5">
      <p className="text-xs uppercase tracking-wider text-ink-soft">Order Reference</p>
      <p className="mt-1 font-display text-2xl text-magenta">{value}</p>
    </div>
  );
}

const icons = {
  success: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />,
  pending: <path d="M12 7v5l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />,
  failed: <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />,
};

function Shell({
  tone,
  eyebrow,
  title,
  children,
}: {
  tone: Outcome;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const badge = tone === "success" ? "bg-lime/15 text-lime-dark" : tone === "pending" ? "bg-line text-ink" : "bg-magenta/10 text-magenta";
  return (
    <div className="container-page flex flex-col items-center py-20 text-center lg:py-28">
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${badge}`}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {icons[tone]}
        </svg>
      </div>
      <p className="eyebrow mt-6 justify-center">{eyebrow}</p>
      <h1 className="section-heading mt-3">{title}</h1>
      {children}
    </div>
  );
}
