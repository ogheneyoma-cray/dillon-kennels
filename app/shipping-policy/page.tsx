import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when your Shams Light IT service is delivered after purchase.",
};

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">How Delivery Works</h2>
          <p className="mt-3 leading-relaxed">
            {site.wordmark} sells remote IT services — there is no physical
            product and nothing is shipped. Once payment is confirmed, our
            team contacts you by email or phone to schedule and scope the
            work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Timing</h2>
          <p className="mt-3 leading-relaxed">
            We reach out within one business day of payment to arrange a
            time. If you haven&apos;t heard from us within that window, check
            your spam folder before contacting {site.email}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Ongoing Support</h2>
          <p className="mt-3 leading-relaxed">
            Services such as monthly helpdesk support run for the period
            stated on the service page and do not renew automatically — you
            can purchase again whenever you need continued coverage.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Rescheduling & Issues</h2>
          <p className="mt-3 leading-relaxed">
            If you need to reschedule or run into an issue with a service
            already underway, contact us at {site.email} or {site.phone}{" "}
            with your order number and we&apos;ll sort it out promptly.
          </p>
        </section>
      </div>
    </div>
  );
}
