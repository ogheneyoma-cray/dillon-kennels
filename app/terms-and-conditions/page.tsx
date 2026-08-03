import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you browse or buy from the Xira Dix online store.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Terms & Conditions"
        intro="The agreement between you and us when you use this site. Last updated 1 August 2026."
      />

      <div className="shell py-14 lg:py-20">
        <div className="prose-legal max-w-3xl">
          <p>
            These terms govern your use of the {site.name} website and any order
            you place through it. By browsing the site or completing a checkout
            you accept them. If you do not accept them, please do not use the
            site. We are based at {site.addressOneLine}.
          </p>

          <h2>1. This is a demonstration storefront</h2>
          <p>
            This build exists to demonstrate the storefront. No payment is
            processed, no card details are collected, and orders placed here
            create no obligation on either side to deliver or to pay. Every
            clause below describes how the store operates when live, and is set
            out so the terms are complete rather than because a transaction has
            occurred.
          </p>

          <h2>2. Who can order</h2>
          <p>
            You must be at least 18 years old and able to enter a binding
            contract. By ordering you confirm that the details you give us are
            accurate and that you are authorised to use the delivery address
            supplied.
          </p>

          <h2>3. Products, sizes and colour</h2>
          <p>
            We photograph every piece in daylight and describe the fabric and
            cut as precisely as we can. Even so, colour reproduces differently
            on different screens, and a satin or a marl in particular can look a
            shade off from what arrives. Natural fibres also vary between dye
            lots. These variations are characteristic of the cloth, not faults,
            and they do not on their own make a piece defective — though they
            are of course covered by your right to return under our{" "}
            <Link
              href="/refunds-policy"
              className="text-orchid underline underline-offset-4"
            >
              refunds policy
            </Link>
            .
          </p>
          <p>
            Sizes follow the measurements on each product page rather than any
            national standard. Where a piece is listed as one size, the
            measurements given are the finished garment measurements.
          </p>

          <h2>4. Prices and currency</h2>
          <p>
            All prices are set in US dollars. The naira figures shown when you
            switch currency are a conversion at a fixed indicative rate, offered
            for guidance only; the amount actually charged is calculated in the
            currency your payment provider settles in, and their rate may
            differ. Prices include VAT where it applies and exclude delivery
            unless the order qualifies for free delivery.
          </p>
          <p>
            We may change prices at any time, but never after you have completed
            a checkout. If a piece is listed at a price that is obviously wrong
            — a decimal in the wrong place, for instance — we may cancel the
            order and refund you in full rather than fulfil it, and we will tell
            you why.
          </p>

          <h2>5. Orders and acceptance</h2>
          <p>
            Placing an order is an offer to buy. The contract forms when we send
            you a dispatch confirmation, not when you complete the checkout. We
            may decline an order where the item has sold out, where we cannot
            deliver to the address given, or where we reasonably suspect fraud.
          </p>

          <h2>6. Delivery</h2>
          <p>
            Delivery timelines, costs and areas are set out in our{" "}
            <Link
              href="/shipping-policy"
              className="text-orchid underline underline-offset-4"
            >
              shipping policy
            </Link>
            , which forms part of these terms. Risk in the goods passes to you
            on delivery.
          </p>

          <h2>7. Returns</h2>
          <p>
            Your right to return and the conditions attached are set out in our{" "}
            <Link
              href="/refunds-policy"
              className="text-orchid underline underline-offset-4"
            >
              refunds policy
            </Link>
            , which also forms part of these terms. Nothing in these terms
            reduces any right you have under the Federal Competition and
            Consumer Protection Act.
          </p>

          <h2>8. Our content</h2>
          <p>
            The photography, product descriptions, illustrations, logo and page
            designs on this site belong to us. You may not copy, republish or
            use them commercially without written permission. You are welcome to
            share links to any page.
          </p>

          <h2>9. Acceptable use</h2>
          <p>
            Please do not attempt to interfere with the site, scrape it at
            volume, place orders you do not intend to complete, or submit false
            details. We may suspend access where any of these occur.
          </p>

          <h2>10. Liability</h2>
          <p>
            We are responsible for loss you suffer that is a foreseeable result
            of us breaking these terms or failing to use reasonable care. We are
            not responsible for loss that was not foreseeable, for business
            losses, or for delays caused by events outside our reasonable
            control. Nothing here limits our liability for death or personal
            injury caused by our negligence, for fraud, or for anything else
            that cannot lawfully be limited.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria, and the Nigerian courts have jurisdiction over any dispute.
          </p>

          <h2>12. Reaching us</h2>
          <p>
            Questions about these terms can go to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-orchid underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            or through the{" "}
            <Link
              href="/contact"
              className="text-orchid underline underline-offset-4"
            >
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
