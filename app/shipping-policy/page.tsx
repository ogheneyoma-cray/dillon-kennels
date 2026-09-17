import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How Site Optex schedules and delivers booked IT services.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Booking Confirmation</h2>
          <p className="mt-3 leading-relaxed">
            Every service booked through Site Optex is confirmed by email
            within minutes of payment. Our team reaches out within one
            business day to schedule the work at a time that suits you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Remote vs. On-Site Delivery</h2>
          <p className="mt-3 leading-relaxed">
            Website Speed Optimization, IT Security Health Check and Cloud
            Storage Setup are delivered remotely, typically within 1-3
            business days of scheduling. Wi-Fi & Network Setup and Computer
            Repair & Diagnostics may require an on-site visit, arranged
            based on your location and our availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Turnaround Times</h2>
          <p className="mt-3 leading-relaxed">
            Standard services are completed within 1-5 business days of the
            scheduled session, depending on complexity.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Rescheduling</h2>
          <p className="mt-3 leading-relaxed">
            To reschedule a confirmed appointment, contact us at least 24
            hours in advance at {site.email} or {site.phone} and we'll find
            a new time at no extra cost.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Delayed or Incomplete Work</h2>
          <p className="mt-3 leading-relaxed">
            If a scheduled service is delayed on our end, we will notify you
            promptly and prioritize rescheduling. Site Optex is not
            responsible for delays caused by inaccurate contact information
            or unavailable access credentials.
          </p>
        </section>
      </div>
    </div>
  );
}
