import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Nedupe Limited website and ebook purchases.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the {site.name} website, you agree to be
            bound by these Terms &amp; Conditions. If you do not agree with
            any part of these terms, please do not use our site or purchase
            an ebook from us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">2. Products &amp; Pricing</h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and also displayed in
            Ghana Cedis (GH₵) for reference using a fixed conversion rate,
            which may differ slightly from real-time exchange rates. We
            reserve the right to update pricing at any time without prior
            notice, though changes will never affect an order already
            confirmed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">3. Orders &amp; Payment</h2>
          <p className="mt-3 leading-relaxed">
            By placing an order, you confirm that the payment and contact
            information you provide is accurate and that you are authorized
            to use the payment method submitted. We reserve the right to
            refuse or cancel any order at our discretion, including in
            cases of suspected fraud, in which case a full refund will be
            issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">4. License to Use</h2>
          <p className="mt-3 leading-relaxed">
            Purchasing an ebook grants you a non-transferable licence to
            read it for personal use on your own devices. You may not
            resell, redistribute, publicly share, or otherwise reproduce
            the file, in whole or in part, without our prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">5. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including text, cover art, and
            design, is the property of {site.name} or its authors and may
            not be reproduced, distributed, or used commercially without
            prior written consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">6. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            {site.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            ebooks. Our liability for any single order is limited to the
            amount paid for that order.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">7. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms &amp; Conditions are governed by the laws of the
            Federal Republic of Nigeria. Any disputes arising from these
            terms will be subject to the exclusive jurisdiction of the
            courts of the Federal Capital Territory, Abuja.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">8. Changes to These Terms</h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms &amp; Conditions from time to time.
            Changes will be posted on this page with an updated revision
            date. Continued use of the site after changes are posted
            constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
