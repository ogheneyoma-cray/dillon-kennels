import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which Coquinate licenses and sells ebooks through this site — orders, pricing, what you may do with a file, liability and governing law.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        crumb="Terms"
        intro="The agreement between you and this press when you buy from it. Last updated 1 August 2026."
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
            when we issue the download link, not when you complete checkout. We
            may decline an order — if a title has been withdrawn between your
            adding it to the basket and checking out, or if a price has been
            listed in error. Where we decline, nothing is charged and we tell
            you why.
          </p>

          <h2>What you are buying</h2>
          <p>
            You are buying a personal, perpetual, non-exclusive licence to read
            the work, together with the files needed to do so. You are not
            buying the copyright, which remains with the author throughout.
          </p>
          <h3>You may</h3>
          <ul>
            <li>Read the book on as many of your own devices as you like.</li>
            <li>Keep a personal backup, and re-download the files at any time.</li>
            <li>
              Convert a file to another format for your own reading — the files
              carry no DRM precisely so that this is possible.
            </li>
            <li>
              Quote briefly in a review, an essay or a class, with attribution.
            </li>
          </ul>
          <h3>You may not</h3>
          <ul>
            <li>
              Upload the files to a public site, a file-sharing service or a
              group library, or otherwise distribute them.
            </li>
            <li>Resell, sublicense or rent the files.</li>
            <li>
              Strip the author&rsquo;s name, alter the text and pass it on, or
              use the work to train a machine learning model.
            </li>
          </ul>

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
            Prices include applicable taxes. There is no delivery charge on any
            order, in any country, because nothing is shipped — see the{" "}
            <Link href="/shipping-policy">delivery and downloads policy</Link>.
          </p>

          <h2>Demonstration build</h2>
          <p>
            This site is currently a demonstration storefront. No payment is
            processed, no card details are collected at any point, and no
            download link is actually issued. The confirmation screen exists to
            show the flow. When live payments are enabled these terms will be
            updated before the first real order is taken.
          </p>

          <h2>Descriptions</h2>
          <p>
            We describe page counts, formats, publication dates and content as
            accurately as we can. Jacket artwork is our own and is
            representative rather than a photograph of a physical object — there
            is no physical object. A novel being difficult, sad or ambiguous is
            not a defect where the product page says so.
          </p>

          <h2>Availability</h2>
          <p>
            A title may be withdrawn temporarily for correction. If that happens
            after you have bought it, your download continues to work and you
            receive the corrected file at no charge.
          </p>

          <h2>Your account of yourself</h2>
          <p>
            You agree that the billing details you give us are accurate and that
            you are legally able to enter into this contract. You may not use
            this site to place fraudulent orders, to scrape content or pricing,
            or to interfere with its operation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The {site.name} name, the book mark, the site design, the jacket
            artwork and all written copy on this site belong to us or to our
            authors. You may not reproduce them commercially without written
            permission. Linking to any page here is welcome and needs no
            permission.
          </p>

          <h2>Liability</h2>
          <p>
            We are responsible for loss you suffer that is a foreseeable result
            of our breaking these terms or failing to use reasonable care. We
            are not responsible for loss that was not foreseeable, for business
            losses, or for interruption caused by events outside our reasonable
            control — including failures of power, network or third-party
            hosting. Nothing here limits our liability for death or personal
            injury caused by our negligence, for fraud, or for anything that
            cannot lawfully be limited.
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
