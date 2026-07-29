import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refunds Policy | Vergemind",
  description: "Returns, exchanges, and refund timelines for Vergemind orders.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow text-center">Legal</p>
      <h1 className="section-heading mt-3 text-center">Refunds Policy</h1>
      <p className="mt-2 text-center text-sm text-bone/50">
        Last updated: July 2026
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl text-bone">Return Window</h2>
          <p className="mt-3 leading-relaxed">
            We accept returns and exchanges within 7 days of the delivery
            date shown on your tracking confirmation. To qualify, items
            must be unworn, unwashed, undamaged, and returned with their
            original tags attached. Caps and other headwear are final sale
            for hygiene reasons.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            How to Start a Return
          </h2>
          <p className="mt-3 leading-relaxed">
            Email info@vergemind.com with your order number and the reason
            for your return within 7 days of delivery. Our team will
            confirm eligibility and share instructions for returning the
            item to our Ilorin base at 114, Irewolede Area, Ilorin West
            Local Government Area, Ilorin, Kwara State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Refund Processing
          </h2>
          <p className="mt-3 leading-relaxed">
            Once we receive and inspect your return, we'll notify you of
            its approval status. Approved refunds are processed to your
            original payment method within 5–10 business days, depending on
            your bank or card issuer. Return shipping is covered by the
            customer unless the return is due to a defect or an error on
            our part.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">Exchanges</h2>
          <p className="mt-3 leading-relaxed">
            Need a different size? Let us know when you start your return
            and we'll prioritize shipping the replacement as soon as your
            returned item arrives, subject to availability. If your
            preferred size is out of stock, we'll offer a full refund
            instead.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Damaged or Incorrect Items
          </h2>
          <p className="mt-3 leading-relaxed">
            If your order arrives damaged or you receive the wrong item,
            contact us within 48 hours of delivery with photos of the item
            and packaging. We'll arrange a replacement or full refund,
            including shipping costs, at no charge to you.
          </p>
        </section>
      </div>
    </div>
  );
}
