import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Cancellations and refund timelines for Site Optex service bookings.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Refund Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept refund requests within 7 days of booking, provided the
            service has not already been scheduled or started. Once work
            has begun, refunds are assessed case by case.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">How to Request a Refund</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and reason for your
            request within 7 days of booking. We will confirm eligibility
            and process approved refunds to your original payment method.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed back to your original Mastercard
            or Visa card within 5-10 business days, depending on your card
            issuer's processing times. We do not offer cash, bank transfer,
            or alternative payout methods for refunds.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Unsatisfactory Service</h2>
          <p className="mt-3 leading-relaxed">
            If a completed service does not resolve the issue it was booked
            for, contact us within 7 days and we will return to complete the
            work at no additional charge.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Non-Refundable Services</h2>
          <p className="mt-3 leading-relaxed">
            Diagnostic work already performed is non-refundable once
            completed, even if you choose not to proceed with the full
            service afterward.
          </p>
        </section>
      </div>
    </div>
  );
}
