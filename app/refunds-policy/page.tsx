import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Cancellations, rescheduling, and refund timelines for Spruce Savers bookings.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <span className="tag-pill">Legal</span>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cancellation Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept cancellations and rescheduling requests up to 24 hours before your scheduled appointment
            for a full refund. Cancellations made within 24 hours of the appointment are subject to a
            partial service fee.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How to Cancel a Booking</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and reason for cancellation. Our team will confirm
            eligibility and process your request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Once a cancellation is approved, refunds are processed back to your original Mastercard or Visa
            card within 5-10 business days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Rescheduling</h2>
          <p className="mt-3 leading-relaxed">
            If you'd like to reschedule instead of cancelling, indicate this when contacting us and we'll
            prioritize finding the next available technician slot, subject to availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Unsatisfactory Service</h2>
          <p className="mt-3 leading-relaxed">
            If a completed service did not resolve the reported issue, contact us within 48 hours with details
            of the outcome. We will arrange a follow-up visit or a full refund at no additional charge.
          </p>
        </section>
      </div>
    </div>
  );
}
