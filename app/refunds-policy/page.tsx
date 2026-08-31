import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Webreid course purchases.",
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
            course has been viewed. This keeps the policy fair to both
            learners and instructors.
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
            depending on your bank or card issuer&apos;s processing times. Access
            to the course is revoked once the refund is issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Faulty or Broken Courses</h2>
          <p className="mt-3 leading-relaxed">
            If a course fails to load, is missing lessons, or otherwise
            doesn&apos;t work as described, contact us within 48 hours of
            noticing the issue. We will fix it or issue a full refund at no
            additional charge to you.
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
