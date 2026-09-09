import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when you get your download after purchasing from Aims I-Tech.",
};

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-xl border border-line">
        <div className="window-chrome">
          <span className="window-dot bg-[#FF5F57]" />
          <span className="window-dot bg-[#FEBC2E]" />
          <span className="window-dot bg-[#28C840]" />
          <span className="ml-2 font-display text-[11px] text-ink-soft">
            delivery-policy.md — last updated September 2026
          </span>
        </div>
        <div className="space-y-8 rounded-b-xl border border-t-0 border-line bg-paper p-6 text-ink/80 sm:p-8">
          <section>
            <h2 className="font-display text-xl font-bold text-ink"># How Delivery Works</h2>
            <p className="mt-3 leading-relaxed">
              {site.wordmark} sells downloadable software products only —
              there is no physical product and nothing is shipped. Once
              payment is confirmed, your download link is generated
              automatically and emailed to you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Timing</h2>
            <p className="mt-3 leading-relaxed">
              Delivery is instant in almost all cases. If your confirmation
              email hasn&apos;t arrived within 30 minutes, check your spam
              folder before contacting {site.email} — delivery issues are
              usually resolved within one business hour.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Re-downloading a Product</h2>
            <p className="mt-3 leading-relaxed">
              Download links stay active for 30 days after purchase. If
              yours has expired, email us your order number and we&apos;ll
              reissue it at no charge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># Account & Access Issues</h2>
            <p className="mt-3 leading-relaxed">
              If you&apos;re having trouble with a download link, contact us at{" "}
              {site.email} or {site.phone} with your order number and
              we&apos;ll restore access promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
