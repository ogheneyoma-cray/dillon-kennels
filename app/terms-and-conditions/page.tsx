import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which Crewsita sells footwear through this site — orders, pricing, currency, liability and governing law.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        crumb="Terms"
        intro="The agreement between you and this shop when you order from it. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <p>
            These terms govern your use of this site and any order you place
            through it. By browsing or ordering you accept them. The seller is{" "}
            {site.name}, trading from {site.addressOneLine}, contactable at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Orders</h2>
          <p>
            An order placed on this site is an offer to buy. The contract forms
            when we send the dispatch email, not when you complete checkout. We
            may decline an order — if a size has sold out between your adding it
            to the bag and checking out, if a price has been listed in error, or
            if we cannot deliver to the address given. Where we decline, nothing
            is charged and we tell you why.
          </p>

          <h2>Pricing and currency</h2>
          <p>
            Every price on this site is set in US dollars. The naira figures
            shown when you switch currency are a conversion at the rate
            published in the footer converter and are shown for convenience.
            Where a dollar and a naira figure disagree, the dollar figure is the
            price. We may change prices at any time, but never after your order
            is confirmed.
          </p>
          <p>
            Prices include applicable taxes. Delivery is charged separately at
            the rates set out in the{" "}
            <Link href="/shipping-policy">shipping policy</Link>, and is free on
            orders over $60.
          </p>

          <h2>Demonstration build</h2>
          <p>
            This site is currently a demonstration storefront. No payment is
            processed, no card details are collected at any point, and no order
            placed through it will ship. The confirmation screen exists to show
            the flow. When live payments are enabled these terms will be updated
            before the first real order is taken.
          </p>

          <h2>Product descriptions and photography</h2>
          <p>
            We describe materials, sole construction and heel heights as
            accurately as we can. Colours vary between screens, and leather is a
            natural material — grain, shade and burnishing differ between pairs
            of the same style. Those variations are a property of the material,
            not a fault, and are not grounds for a faulty-goods claim. They are
            of course grounds for a change-of-mind return within the ordinary{" "}
            <Link href="/refunds-policy">returns window</Link>.
          </p>

          <h2>Availability</h2>
          <p>
            Stock figures on this site reflect a limited run. A size shown as
            available may sell out while your bag is open. If that happens after
            you have checked out, we contact you within one working day to offer
            an alternative size or a full refund.
          </p>

          <h2>Your account of yourself</h2>
          <p>
            You agree that the delivery and contact details you give us are
            accurate and that you are legally able to enter into this contract.
            You may not use this site to place fraudulent orders, to scrape
            content or pricing, or to interfere with its operation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The {site.name} name, the shoe mark, the site design, the product
            photography and all written copy on this site belong to us. You may
            not reproduce them commercially without written permission. Linking
            to any page here is welcome and needs no permission.
          </p>

          <h2>Liability</h2>
          <p>
            We are responsible for loss you suffer that is a foreseeable result
            of our breaking these terms or failing to use reasonable care. We
            are not responsible for loss that was not foreseeable, for business
            losses, or for delays caused by events outside our reasonable
            control — including courier disruption, industrial action or
            interruption to power or network infrastructure. Nothing here limits
            our liability for death or personal injury caused by our negligence,
            for fraud, or for anything that cannot lawfully be limited.
          </p>

          <h2>Links out</h2>
          <p>
            Where this site links to somewhere else, we are not responsible for
            the content or the practices of that other site.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may revise these terms. The version that applies to your order is
            the one published when you placed it, and material changes are dated
            at the top of this page.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria, and the courts of Lagos State have jurisdiction over any
            dispute arising under them.
          </p>

          <h2>Reaching us</h2>
          <p>
            Any question about these terms goes to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, or through the{" "}
            <Link href="/contact">contact page</Link>. We reply within one
            working day.
          </p>
        </div>
      </div>
    </>
  );
}
