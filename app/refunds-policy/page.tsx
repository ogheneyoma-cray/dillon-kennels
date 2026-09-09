import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Aims I-Tech product purchases.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-xl border border-line">
        <div className="window-chrome">
          <span className="window-dot bg-[#FF5F57]" />
          <span className="window-dot bg-[#FEBC2E]" />
          <span className="window-dot bg-[#28C840]" />
          <span className="ml-2 font-display text-[11px] text-ink-soft">
            refunds-policy.md — last updated September 2026
          </span>
        </div>
        <div className="space-y-8 rounded-b-xl border border-t-0 border-line bg-paper p-6 text-ink/80 sm:p-8">
          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Refund Window</h2>
            <p className="mt-3 leading-relaxed">
              We accept refund requests within 7 days of purchase for
              products that haven&apos;t yet been downloaded. Once a download
              link has been used, the purchase is treated as delivered and
              is no longer eligible for a standard refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># How to Request One</h2>
            <p className="mt-3 leading-relaxed">
              Email {site.email} with your order number and the reason for
              your request within 7 days of purchase. Our team will confirm
              your eligibility and process approved refunds back to your
              original payment method.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Processing Time</h2>
            <p className="mt-3 leading-relaxed">
              Approved refunds are processed within 5–10 business days,
              depending on your bank or card issuer&apos;s processing times.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Broken or Incomplete Downloads</h2>
            <p className="mt-3 leading-relaxed">
              If a download is corrupted, missing files, or otherwise
              doesn&apos;t match what was described, contact us within 48 hours
              of noticing the issue. We will fix it or issue a full refund
              at no additional charge to you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Order Cancellations</h2>
            <p className="mt-3 leading-relaxed">
              Orders can be changed or cancelled free of charge within 2
              hours of purchase, before the download link is issued.
              Contact {site.email} or {site.phone} as soon as possible if
              you need to make a change.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
