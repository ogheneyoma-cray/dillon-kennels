import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Shams Light service purchases.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">Refund Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept refund requests within 7 days of purchase for services
            that have not yet started, or where scoped work has not yet
            begun. This keeps the policy fair to both clients and our
            technicians.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How to Request One</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and the reason for
            your request within 7 days of purchase. Our team will confirm
            your eligibility and process approved refunds back to your
            original payment method.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Processing Time</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed within 5–10 business days,
            depending on your bank or card issuer&apos;s processing times.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Work Already in Progress</h2>
          <p className="mt-3 leading-relaxed">
            If work on your service has already started, we&apos;ll agree a
            fair partial refund with you based on the portion completed. If
            delivered work doesn&apos;t match what was described, contact us
            within 48 hours and we will fix it or issue a full refund at no
            additional charge.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Order Cancellations</h2>
          <p className="mt-3 leading-relaxed">
            Orders can be changed or cancelled free of charge within 2 hours
            of purchase, before scheduling begins. Contact {site.email}{" "}
            or {site.phone} as soon as possible if you need to make a
            change.
          </p>
        </section>
      </div>
    </div>
  );
}
