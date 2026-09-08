import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund terms for Myevolt product purchases.",
};

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Digital Goods, Limited Refunds</h2>
          <p className="mt-3 leading-relaxed">
            Because every product is delivered instantly as a downloadable
            file, refunds are limited compared to a physical product store.
            We will issue a full refund where the file you received is
            genuinely corrupted, missing, or clearly not the product you
            ordered.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">One Round of Revisions</h2>
          <p className="mt-3 leading-relaxed">
            Every order includes one round of reasonable revisions —
            colours, copy placement and minor layout adjustments — requested
            within 7 days of delivery. Requesting a revision does not affect
            your refund eligibility under this policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">How to Request a Refund</h2>
          <p className="mt-3 leading-relaxed">
            Email{" "}
            <a href={`mailto:${site.email}`} className="text-teal-dark underline underline-offset-4">
              {site.email}
            </a>{" "}
            with your order number and a short description of the problem,
            within 7 days of purchase. Our team will confirm eligibility
            and, where a refund is approved, explain how and when it will
            be paid back.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Refund Processing</h2>
          <p className="mt-3 leading-relaxed">
            Approved refunds are processed back to the original Mastercard
            or Visa card used for the order within 5–10 business days,
            depending on your card issuer's processing times.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Ordered the Wrong Product</h2>
          <p className="mt-3 leading-relaxed">
            If you bought the wrong product by mistake, contact us right
            away — if you haven't downloaded the files yet, we can usually
            correct the order to the right product rather than issue a full
            refund.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Change of Mind</h2>
          <p className="mt-3 leading-relaxed">
            Because the files are available to you the moment payment
            clears, a simple change of mind after a successful download is
            not eligible for a refund under this policy.
          </p>
        </section>
      </div>
    </div>
  );
}
