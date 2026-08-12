import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery & Turnaround | ${site.name}`,
  description: "How Wazuri Technologies schedules, delivers and confirms support bookings.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery & Turnaround</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Nothing Ships — Service Is Delivered</h2>
          <p className="mt-3 leading-relaxed">
            Every listing on this site is a support service, not a physical
            product, so nothing is shipped or dispatched. Each service page
            states its typical turnaround and whether it's delivered
            remotely, on-site, or either — that estimate is what you should
            plan around rather than a delivery date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Booking Confirmation</h2>
          <p className="mt-3 leading-relaxed">
            Once your order clears, you'll receive an email confirmation with
            your order number, and a member of our team will follow up by
            phone or email — usually within a few hours during business
            hours — to confirm the exact appointment time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Remote Services</h2>
          <p className="mt-3 leading-relaxed">
            Remote services are carried out over a secure remote-access
            connection at the confirmed appointment time. You'll need a
            stable internet connection and to be available at your device for
            the duration of the session.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">On-Site Visits</h2>
          <p className="mt-3 leading-relaxed">
            On-site visits currently cover Accra and Kumasi. A technician
            will arrive within the confirmed appointment window; if you need
            to reschedule, contact us as early as possible — see our{" "}
            <a href="/refunds-policy" className="text-rust underline underline-offset-4">
              Refunds Policy
            </a>{" "}
            for the cancellation window.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Prices in Cedis</h2>
          <p className="mt-3 leading-relaxed">
            Prices on this site are held in US Dollars. If you're browsing in
            Ghana Cedis, the figure shown is a conversion at the demonstration
            rate used across the site, and the amount charged at checkout
            follows that same rate.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">If a Technician Runs Late</h2>
          <p className="mt-3 leading-relaxed">
            If we're going to be more than 30 minutes outside a confirmed
            window, we'll contact you before the appointment time to explain
            why and offer to reschedule. Questions about a specific booking
            can go to{" "}
            <a href={`mailto:${site.email}`} className="text-rust underline underline-offset-4">
              {site.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
