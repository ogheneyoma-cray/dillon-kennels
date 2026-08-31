import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: `Returns, exchanges, and refund timelines for ${site.name} orders.`,
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Return Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept returns within 7 days of the delivery date shown on
            your tracking confirmation. To be eligible, items must be
            unopened, unused, and returned in their original packaging.
            Items marked as final sale at the time of purchase are not
            eligible for return.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How to Start a Return</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and the reason for
            your return within 7 days of delivery. Our team will confirm
            your eligibility and provide instructions for returning the
            item, including our office address at {site.addressOneLine}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Once we receive and inspect your returned item, we will notify
            you of the approval status of your refund. Approved refunds are
            processed back to your original payment method within 5–10
            business days, depending on your bank or card issuer's
            processing times. Return shipping costs are covered by the
            customer unless the return is due to a defect or an error on our
            part.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Exchanges</h2>
          <p className="mt-3 leading-relaxed">
            If you'd like a different item, indicate this when starting your
            return and we'll prioritize shipping the exchange as soon as
            your returned item is received, subject to availability. If your
            preferred replacement is out of stock, we will offer a full
            refund instead.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Damaged or Incorrect Items</h2>
          <p className="mt-3 leading-relaxed">
            If your order arrives damaged or you receive the wrong item,
            contact us within 48 hours of delivery with photos of the item
            and packaging. We will arrange a replacement or full refund,
            including any delivery costs, at no additional charge to you.
          </p>
        </section>
      </div>
    </div>
  );
}
