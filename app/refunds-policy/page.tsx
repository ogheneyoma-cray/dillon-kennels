import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for zenpulse digital course purchases.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">Refund Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept refund requests within 7 days of purchase for courses
            that don&apos;t meet your expectations, provided less than 30% of the
            course content has been viewed. This lets us honor genuine
            requests while keeping the catalogue fair for instructors.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How to Request a Refund</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and the reason for
            your request within 7 days of purchase. Our team will confirm
            your eligibility and process approved refunds back to your
            original payment method.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Once your request is approved, refunds are processed back to
            your original payment method within 5–10 business days,
            depending on your bank or card issuer&apos;s processing times. Access
            to the course is revoked once a refund is issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Access Issues & Faulty Content</h2>
          <p className="mt-3 leading-relaxed">
            If a course fails to load, is missing lessons, or otherwise
            doesn&apos;t work as described, contact us within 48 hours of noticing
            the issue. We will fix the access problem or issue a full refund
            at no additional charge to you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Order Cancellations</h2>
          <p className="mt-3 leading-relaxed">
            Orders can be changed or cancelled free of charge within 2 hours
            of purchase, before access is provisioned. Contact {site.email}{" "}
            or {site.phone} as soon as possible if you need to make a
            change.
          </p>
        </section>
      </div>
    </div>
  );
}
