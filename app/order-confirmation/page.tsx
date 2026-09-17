"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "EE-000000";

  return (
    <div className="container-page flex flex-col items-center py-20 text-center lg:py-28">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/15 text-mint">
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

      <p className="eyebrow mt-6 justify-center">Booking Confirmed</p>
      <h1 className="section-heading mt-3">Thank you for your booking</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        We&apos;ve received your booking and our team will reach out shortly
        to schedule the work. A confirmation email has been sent to your
        inbox.
      </p>

      <div className="mt-8 rounded-2xl border border-line bg-white px-8 py-5 shadow-tile">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">
          Order Number
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-cobalt">{orderNumber}</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/shop" className="btn-primary">
          Continue Browsing
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
