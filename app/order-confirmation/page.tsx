"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "TI-000000";

  return (
    <div className="container-page flex flex-col items-center py-20 text-center lg:py-28">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className="eyebrow mt-6">Order Confirmed</p>
      <h1 className="section-heading mt-3">Your order is on its way</h1>
      <p className="mt-4 max-w-md text-ink/70">
        We've received your order. A confirmation email with your order
        details and delivery estimate has been sent to your inbox — check
        spam if it hasn't landed within a few minutes.
      </p>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-paper px-8 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
          Order Number
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-ink">{orderNumber}</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/shop" className="btn-primary">
          Continue Shopping
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Support
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmationContent />
    </Suspense>
  );
}
