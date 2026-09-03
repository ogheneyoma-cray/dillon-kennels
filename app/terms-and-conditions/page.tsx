import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: `The terms and conditions governing use of the ${site.name} website and orders.`,
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft/70">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-medium text-navy">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the {site.name} website, you agree to be
            bound by these Terms &amp; Conditions. If you do not agree with
            any part of these terms, please do not use our site or place an
            order with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">2. Products &amp; Pricing</h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and are also displayed in
            Nigerian Naira (₦) for reference using a fixed conversion rate,
            which may differ slightly from real-time exchange rates. We
            reserve the right to update pricing at any time without prior
            notice, though changes will never affect orders already
            confirmed. Slight variation in color between the product photo
            and the item received is expected due to screen display
            differences and is not considered a defect.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">3. Orders &amp; Payment</h2>
          <p className="mt-3 leading-relaxed">
            We accept Visa and Mastercard only. By placing an order, you
            confirm that the payment and delivery information you provide is
            accurate and that you are authorized to use the card submitted.
            We reserve the right to refuse or cancel any order at our
            discretion, including in cases of suspected fraud or
            unavailable stock, in which case a full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">4. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including product photography, text,
            logos, and design, is the property of {site.legalName} and may
            not be reproduced, distributed, or used commercially without our
            prior written consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">5. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            {site.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            products, including delivery delays caused by third-party
            logistics providers beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">6. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms &amp; Conditions are governed by the laws of the
            Federal Republic of Nigeria. Any disputes arising from these
            terms will be subject to the exclusive jurisdiction of the
            courts of Lagos State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">7. Changes to These Terms</h2>
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
