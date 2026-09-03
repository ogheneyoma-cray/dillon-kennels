import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: `Refund eligibility and processing timelines for ${site.name} course purchases.`,
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-lg font-bold text-ink">Refund Window</h2>
          <p className="mt-3 leading-relaxed">
            Because our courses are delivered digitally and access is
            instant, we offer refunds within 48 hours of purchase, provided
            you have not completed more than 20% of the course content.
            This window lets you evaluate whether a course is the right fit
            before we treat the purchase as final.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">How to Request a Refund</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and the course name
            within 48 hours of purchase. Our team will review your request
            against your course progress and confirm eligibility within one
            business day.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed back to the original Visa or
            Mastercard used for payment within 5–10 business days, depending
            on your card issuer&apos;s processing times. Once a refund is
            issued, access to the course is revoked.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Non-Refundable Situations</h2>
          <p className="mt-3 leading-relaxed">
            Requests made after the 48-hour window, or after more than 20%
            of a course has been accessed, are not eligible for a refund.
            This threshold exists because digital course content, once
            substantially consumed, cannot be meaningfully &quot;returned.&quot;
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Access Issues</h2>
          <p className="mt-3 leading-relaxed">
            If you paid for a course but did not receive your access link,
            or you&apos;re experiencing a technical issue accessing your
            course, contact us within 48 hours with your order number and
            we&apos;ll resolve it or issue a full refund at no charge to you.
          </p>
        </section>
      </div>
    </div>
  );
}
