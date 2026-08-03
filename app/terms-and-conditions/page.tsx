import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you browse or buy from the Adom Attic online store.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        crumb="Terms"
        intro="The agreement between you and us when you use this site. Last updated 1 August 2026."
      />

      <div className="frame py-14">
        <div className="prose-legal max-w-3xl">
          <p>
            These terms govern your use of the {site.name} website and any order
            placed through it. By browsing the site or completing a checkout you
            accept them. If you do not accept them, please do not use the site.
            We operate from {site.addressOneLine}.
          </p>

          <h2>1. This is a demonstration storefront</h2>
          <p>
            This build exists to demonstrate the storefront. No payment is
            processed, no card details are collected, and orders placed here
            create no obligation on either side to deliver or to pay. The
            clauses below describe how the store operates when live, and are set
            out so the terms are complete rather than because a transaction has
            occurred.
          </p>

          <h2>2. Who can order</h2>
          <p>
            You must be at least 18 years old and able to enter a binding
            contract. We design for teenagers but we sell to adults: if you are
            under 18, a parent or guardian must place the order and it is their
            contract with us, not yours. By ordering you confirm the details you
            give us are accurate and that you are authorised to use the delivery
            address supplied.
          </p>

          <h2>3. Products, sizing and colour</h2>
          <p>
            We photograph every piece in daylight and describe the fabric and
            construction as precisely as we can. Even so, colour reproduces
            differently on different screens, and cotton varies between dye
            lots. Denim in particular is sold with the expectation that it will
            fade, and garment-dyed and stone-washed pieces are individually
            variable by design. These characteristics are not faults.
          </p>
          <p>
            Sizes should be chosen from the measurements in our{" "}
            <Link
              href="/size-guide"
              className="font-semibold text-camel underline underline-offset-4"
            >
              size guide
            </Link>{" "}
            rather than from a letter alone. Where a piece is described as cut
            oversized, or as one to size down in, that is our honest assessment
            and not a guarantee of fit.
          </p>

          <h2>4. Prices and currency</h2>
          <p>
            All prices are set in US dollars, and nothing in the collection is
            priced above $40. The naira figures shown when you switch currency
            are a conversion at a fixed indicative rate offered for guidance
            only; the amount actually charged is calculated in the currency your
            payment provider settles in, and their rate may differ. Prices
            include VAT where it applies and exclude delivery unless the order
            qualifies for free delivery.
          </p>
          <p>
            We may change prices at any time, but never after you have completed
            a checkout. If a piece is listed at a price that is obviously wrong,
            we may cancel and refund the order rather than fulfil it, and we
            will tell you why.
          </p>

          <h2>5. Orders and acceptance</h2>
          <p>
            Placing an order is an offer to buy. The contract forms when we send
            a dispatch confirmation, not when you complete the checkout. We may
            decline an order where the item has sold out, where we cannot
            deliver to the address given, or where we reasonably suspect fraud.
          </p>

          <h2>6. Delivery and returns</h2>
          <p>
            Delivery timelines, costs and areas are set out in our{" "}
            <Link
              href="/shipping-policy"
              className="font-semibold text-camel underline underline-offset-4"
            >
              shipping policy
            </Link>
            , and your right to return is set out in our{" "}
            <Link
              href="/refunds-policy"
              className="font-semibold text-camel underline underline-offset-4"
            >
              refunds policy
            </Link>
            . Both form part of these terms. Risk in the goods passes to you on
            delivery. Nothing here reduces any right you have under the Federal
            Competition and Consumer Protection Act.
          </p>

          <h2>7. Our content</h2>
          <p>
            The photography, product descriptions, illustrations, logo and page
            designs on this site belong to us. You may not copy, republish or
            use them commercially without written permission. You are welcome to
            share links to any page.
          </p>

          <h2>8. Acceptable use</h2>
          <p>
            Please do not interfere with the site, scrape it at volume, place
            orders you do not intend to complete, or submit false details. We
            may suspend access where any of these occur.
          </p>

          <h2>9. Liability</h2>
          <p>
            We are responsible for loss you suffer that is a foreseeable result
            of us breaking these terms or failing to use reasonable care. We are
            not responsible for loss that was not foreseeable, for business
            losses, or for delays caused by events outside our reasonable
            control. Nothing here limits our liability for death or personal
            injury caused by our negligence, for fraud, or for anything else
            that cannot lawfully be limited.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria, and the Nigerian courts have jurisdiction over any dispute.
          </p>

          <h2>11. Reaching us</h2>
          <p>
            Questions about these terms can go to{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-camel underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            or through the{" "}
            <Link
              href="/contact"
              className="font-semibold text-camel underline underline-offset-4"
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
