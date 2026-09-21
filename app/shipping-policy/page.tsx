import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "Scheduling timelines and service delivery coverage for Spruce Savers bookings.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Booking Processing</h2>
          <p className="mt-3 leading-relaxed">
            Every booking placed with Spruce Savers is reviewed and assigned to a technician. Bookings are
            processed Monday through Saturday, excluding public holidays. Please allow 1-2 business days for a
            technician to be assigned, and you'll receive an email confirmation once your appointment is set.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Service Areas & Timelines</h2>
          <p className="mt-3 leading-relaxed">
            We currently deliver in-person and remote IT services across Nigeria. On-site visits typically take
            place within 1-3 business days of booking. Remote sessions can usually be scheduled within 24 hours,
            depending on technician availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Service Fees</h2>
          <p className="mt-3 leading-relaxed">
            Service fees are calculated at checkout based on the service selected and your location. Bookings
            totalling over ₦75,000 qualify for a complimentary follow-up check within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Tracking Your Booking</h2>
          <p className="mt-3 leading-relaxed">
            Once your booking is confirmed, you'll receive appointment details by email to the address provided
            at checkout. If you haven't received confirmation within 2 business days, contact us at{" "}
            {site.email} or {site.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Missed & Rescheduled Appointments</h2>
          <p className="mt-3 leading-relaxed">
            If a technician cannot reach you at the scheduled time, we will attempt to reschedule the
            appointment. Spruce Savers is not responsible for delays caused by incomplete or inaccurate contact
            details.
          </p>
        </section>
      </div>
    </div>
  );
}
