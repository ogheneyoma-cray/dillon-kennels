"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "ALC-000000";

  return (
    <div className="container-page flex flex-col items-center py-20 text-center lg:py-28">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-moss/15 text-moss">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className="eyebrow mt-6">Order Confirmed</p>
      <h1 className="section-heading mt-3">Thank you for your order</h1>
      <p className="mt-4 max-w-md text-ink/70">
        We've received your order and we're getting it ready. A confirmation
        email with your order details has been sent to your inbox.
      </p>

      <div className="mt-8 border border-ink/10 bg-paper px-8 py-5">
        <p className="text-xs uppercase tracking-wider text-ink/50">
          Order Number
        </p>
        <p className="mt-1 font-display text-2xl text-wine">{orderNumber}</p>
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
