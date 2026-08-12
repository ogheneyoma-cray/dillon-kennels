import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refunds and re-service terms for Wazuri Technologies support bookings.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">If the Issue Isn't Resolved</h2>
          <p className="mt-3 leading-relaxed">
            If the specific problem you booked us for is not fixed, we will
            return remotely or on-site to continue working on it at no
            extra charge. If, after a genuine second attempt, the issue still
            isn't resolved, you're entitled to a full refund for that
            booking.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How to Request a Refund</h2>
          <p className="mt-3 leading-relaxed">
            Email <a href={`mailto:${site.email}`} className="text-rust underline underline-offset-4">{site.email}</a> with your
            order number and a short description of what went wrong. Our
            team will confirm eligibility and, where a refund is approved,
            explain how and when it will be paid back.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed back to your original payment
            method within 5–10 business days, depending on your bank or card
            issuer's processing times. Where only part of a multi-service
            booking is refunded, the remaining services stay booked as
            scheduled.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cancelling Before the Appointment</h2>
          <p className="mt-3 leading-relaxed">
            You can cancel or reschedule any booking free of charge up to 4
            hours before the scheduled appointment. Cancellations made after
            that window, or a missed on-site appointment with no notice, may
            be subject to a call-out charge, deducted from any refund.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Change of Mind</h2>
          <p className="mt-3 leading-relaxed">
            If you'd simply rather not go ahead with a service that hasn't
            started yet, contact us before the appointment window and it will
            be cancelled and refunded in full. Once a technician has begun
            work, this policy's resolution terms apply instead.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Hardware and Third-Party Costs</h2>
          <p className="mt-3 leading-relaxed">
            Where a service involves purchasing a replacement part or a
            third-party licence on your behalf and with your prior approval,
            that cost is non-refundable once purchased, even if the
            associated labour is refunded.
          </p>
        </section>
      </div>
    </div>
  );
}
