import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which Mydriad sells tailoring through this site, including orders, pricing, currency and liability.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        crumb="Terms"
        intro="The agreement between you and this shop when you place an order. Last updated 1 August 2026."
      />

      <div className="ruled">
        <div className="wrap py-16">
          <div className="prose-legal">
            <p>
              This site is operated by {site.name} from{" "}
              {site.addressOneLine}. By browsing it or placing an order you
              accept the terms below. If you do not accept them, please do not
              order.
            </p>

            <h2>Orders</h2>
            <p>
              An order placed on this site is an offer to buy. That offer is
              accepted when we send the confirmation email, and the contract
              exists from that moment. We may decline an order where a piece has
              sold out between the click and the confirmation, where a price or
              description was clearly wrong, or where we cannot deliver to the
              address supplied.
            </p>
            <p>
              This is a demonstration storefront. No payment is processed, no
              card details are collected at any point, and nothing placed
              through it will be dispatched.
            </p>

            <h2>Prices and currency</h2>
            <p>
              Every price is held in US dollars. The naira figure shown when you
              switch currency, or produced by the converter, is a conversion at
              a rate fixed in this build for demonstration and is not a live
              market rate. Where the two disagree, the dollar price is the price
              of the garment.
            </p>
            <p>
              Prices include the cost of the garment only. Delivery is shown
              separately at checkout and is free above the threshold set out in
              the{" "}
              <Link href="/shipping-policy">shipping policy</Link>. We may change
              prices at any time, but never after an order has been confirmed.
            </p>

            <h2>Description of the garments</h2>
            <p>
              We describe cloth weight, construction and fit as accurately as we
              can, and every product page states how the piece is built. Colour
              rendering varies between screens, and natural fibres vary between
              rolls of cloth — a slight difference in shade between two orders
              of the same piece is a property of the material rather than a
              fault.
            </p>
            <p>
              Where a jacket is described as half-canvas, half-lined or cut with
              spare cloth in the seams, that description is a term of this
              contract. If a garment you receive does not match it, it is faulty
              and the{" "}
              <Link href="/refunds-policy">returns policy</Link> applies at our
              cost.
            </p>

            <h2>Alterations</h2>
            <p>
              Our garments are cut to be altered, and we encourage it. Once a
              piece has been shortened, taken in or otherwise worked on by a
              third party, it can no longer be returned as unworn — but your
              rights in respect of a genuine manufacturing fault are unaffected
              by an unrelated alteration.
            </p>

            <h2>Your use of this site</h2>
            <p>
              You may browse, share links, and print pages for your own use. You
              may not copy the photography, product text or page design for
              commercial use, scrape the site by automated means, or attempt to
              interfere with its operation. All content on this site remains our
              property or that of our licensors.
            </p>

            <h2>Liability</h2>
            <p>
              We are responsible for loss you suffer as a foreseeable result of
              us breaking this contract or failing to use reasonable care. We
              are not responsible for loss that was not foreseeable, for
              business losses, or for delays caused by events outside our
              reasonable control. Nothing here limits liability for death or
              personal injury caused by our negligence, for fraud, or for
              anything else that cannot lawfully be limited.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria, and the Nigerian courts have jurisdiction over any
              dispute arising from them.
            </p>

            <h2>Reaching us</h2>
            <p>
              Questions about these terms go to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
