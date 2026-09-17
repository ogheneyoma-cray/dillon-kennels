import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How Echo E-Rom Ltd schedules and delivers booked IT services.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Booking Confirmation</h2>
          <p className="mt-3 leading-relaxed">
            Every service booked through Echo E-Rom is confirmed by email
            within minutes of payment. A member of our team will reach out
            within one business day to schedule the work at a time that
            suits you, whether the service is delivered remotely or
            requires an on-site visit.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Remote vs. On-Site Delivery</h2>
          <p className="mt-3 leading-relaxed">
            Most services — including audits, scans, migrations, and VPN
            setup — are delivered remotely and typically completed within
            1-3 business days of scheduling. Services that require physical
            presence, such as Network & Wi-Fi Setup or POS & Payment System
            Integration, will be scheduled for a site visit based on your
            location and our team's availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Turnaround Times</h2>
          <p className="mt-3 leading-relaxed">
            Standard services are completed within 1-5 business days of the
            scheduled session, depending on complexity. Time-sensitive
            services like Data Recovery begin with a diagnostic, after which
            we provide an estimated completion time based on the extent of
            the issue.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Rescheduling</h2>
          <p className="mt-3 leading-relaxed">
            If you need to reschedule a confirmed appointment, contact us at
            least 24 hours in advance at {site.email} or {site.phone} and
            we'll find a new time that works for you at no extra cost.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Delayed or Incomplete Work</h2>
          <p className="mt-3 leading-relaxed">
            If a scheduled service is delayed due to circumstances on our
            end, we will notify you promptly and prioritize rescheduling.
            Echo E-Rom is not responsible for delays caused by inaccurate
            contact information, unavailable access credentials, or
            third-party systems outside our control.
          </p>
        </section>
      </div>
    </div>
  );
}
