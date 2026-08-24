import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Digital Delivery | ${site.name}`,
  description: "How Nedupe Limited delivers ebook downloads after purchase.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Digital Delivery</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Nothing Ships — Everything Downloads</h2>
          <p className="mt-3 leading-relaxed">
            Every listing on this site is a digital ebook, so nothing is
            shipped or dispatched. Each title is delivered as a set of
            download links — EPUB and PDF as standard, plus MOBI where a
            title's format list includes it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Order Confirmation</h2>
          <p className="mt-3 leading-relaxed">
            Once your payment clears, you'll land on an order confirmation
            page with your download links, and the same links are emailed
            to the address used at checkout — usually within a few
            minutes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Access to Your Files</h2>
          <p className="mt-3 leading-relaxed">
            Download links don't expire, so you can come back and
            re-download a purchased title at any time. There's no limit on
            the number of your own devices you read a purchased ebook on.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Prices in Cedis</h2>
          <p className="mt-3 leading-relaxed">
            Prices on this site are held in US Dollars. If you're browsing
            in Ghana Cedis, the figure shown is a conversion at the
            demonstration rate used across the site, and the amount
            charged at checkout follows that same rate.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">If a Download Doesn't Arrive</h2>
          <p className="mt-3 leading-relaxed">
            Check your spam folder first — if it's genuinely missing, email{" "}
            <a href={`mailto:${site.email}`} className="text-sky-dark underline underline-offset-4">
              {site.email}
            </a>{" "}
            with your order number and we'll resend the links the same
            day.
          </p>
        </section>
      </div>
    </div>
  );
}
