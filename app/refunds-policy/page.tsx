import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Returns, exchanges, and refund timelines for Evintat orders.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl italic text-ink">Return Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept returns and exchanges within 7 days of delivery. To be eligible, items must be unworn,
            unwashed, undamaged, and returned with original tags attached. Items marked final sale are not
            eligible for return.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">How to Start a Return</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and reason for return within 7 days of delivery. Our
            team will confirm eligibility and provide return instructions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Once we receive and inspect your returned item, approved refunds are processed back to your
            original Mastercard or Visa card within 5-10 business days. Return shipping is covered by the
            customer unless the return is due to a defect or an error on our part.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Exchanges</h2>
          <p className="mt-3 leading-relaxed">
            If you'd like a different size or color, indicate this when starting your return and we'll
            prioritize shipping the exchange item once your returned item is received, subject to
            availability.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Damaged or Incorrect Items</h2>
          <p className="mt-3 leading-relaxed">
            If your order arrives damaged or you receive the wrong item, contact us within 48 hours of
            delivery with photos of the item and packaging. We will arrange a replacement or full refund at no
            additional charge.
          </p>
        </section>
      </div>
    </div>
  );
}
