import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Return and refund terms for Ticad Iboo product purchases.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Change of Mind Returns</h2>
          <p className="mt-3 leading-relaxed">
            If you simply change your mind, you can return an unused item in
            its original packaging within 7 days of delivery for a full
            refund of the item price. The cost of returning the item is the
            buyer's responsibility unless the return is due to our error.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Damaged or Faulty Items</h2>
          <p className="mt-3 leading-relaxed">
            If an item arrives damaged, defective, or different from what
            you ordered, email us photos of the item and packaging along
            with your order number within 48 hours of delivery. We'll
            arrange a replacement or a full refund, including any delivery
            fee paid, at no extra cost to you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How to Request a Return</h2>
          <p className="mt-3 leading-relaxed">
            Email{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>{" "}
            with your order number and a short description of the issue. Our
            team will confirm eligibility and share instructions for
            returning the item, where applicable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed back to your original payment
            method once the returned item has been received and inspected,
            typically within 5–10 business days depending on your bank or
            card issuer's processing times.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Items Not Eligible for Return</h2>
          <p className="mt-3 leading-relaxed">
            Items that show signs of use, are missing original packaging, or
            were marked as final sale at the time of purchase are not
            eligible for a change-of-mind return.
          </p>
        </section>
      </div>
    </div>
  );
}
