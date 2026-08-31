import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Returns and refund timelines for alcopip orders.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">Return Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept returns within 7 days of the delivery date shown on
            your order confirmation, for books that arrive damaged,
            defective, or different from what you ordered. To be eligible,
            the book must be returned in the condition it arrived in.
            Discounted or clearance titles marked as final sale at the time
            of purchase are not eligible for return.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How to Start a Return</h2>
          <p className="mt-3 leading-relaxed">
            Email {site.email} with your order number and the reason for your
            return within 7 days of delivery. Our team will confirm your
            eligibility and provide instructions for returning the title,
            including our warehouse address at {site.addressOneLine}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Once we receive and inspect your returned book, we will notify
            you of the approval status of your refund. Approved refunds are
            processed back to your original payment method within 5–10
            business days, depending on your bank or card issuer's
            processing times. Return shipping costs are covered by the
            customer unless the return is due to a defect or an error on our
            part.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Damaged, Missing or Incorrect Titles</h2>
          <p className="mt-3 leading-relaxed">
            If your order arrives damaged, incomplete, or you receive the
            wrong title, contact us within 48 hours of delivery with photos
            of the book and its packaging. We will arrange a replacement or
            full refund, including any delivery costs, at no additional
            charge to you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Order Cancellations</h2>
          <p className="mt-3 leading-relaxed">
            Orders can be changed or cancelled free of charge within 2 hours
            of purchase, before the order is packed for dispatch. Contact{" "}
            {site.email} or {site.phone} as soon as possible if you need to
            make a change.
          </p>
        </section>
      </div>
    </div>
  );
}
