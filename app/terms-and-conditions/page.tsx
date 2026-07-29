import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vergemind",
  description:
    "The terms and conditions governing use of the Vergemind website and orders.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow text-center">Legal</p>
      <h1 className="section-heading mt-3 text-center">
        Terms & Conditions
      </h1>
      <p className="mt-2 text-center text-sm text-bone/50">
        Last updated: July 2026
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl text-bone">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the Vergemind website, you agree to be
            bound by these Terms & Conditions. If you do not agree, please
            do not use our site or place an order with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            2. Products & Pricing
          </h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and also shown in
            Nigerian Naira (₦) using a fixed conversion rate, which may
            differ slightly from real-time exchange rates. We reserve the
            right to update pricing at any time without prior notice,
            though changes never affect orders already confirmed. Product
            colors may appear slightly different depending on your screen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            3. Orders & Payment
          </h2>
          <p className="mt-3 leading-relaxed">
            By placing an order, you confirm that the payment and delivery
            information you provide is accurate and that you are authorized
            to use the payment method submitted. We reserve the right to
            refuse or cancel any order at our discretion, including in
            cases of suspected fraud or unavailable stock, in which case a
            full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            4. Intellectual Property
          </h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including product photography, text,
            logos, and design, is the property of Vergemind and may not be
            reproduced, distributed, or used commercially without our prior
            written consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            5. Limitation of Liability
          </h2>
          <p className="mt-3 leading-relaxed">
            Vergemind is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            products, including delivery delays caused by third-party
            logistics providers beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            6. Governing Law
          </h2>
          <p className="mt-3 leading-relaxed">
            These Terms & Conditions are governed by the laws of the
            Federal Republic of Nigeria. Any disputes arising from these
            terms will be subject to the exclusive jurisdiction of the
            courts of Kwara State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            7. Changes to These Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms & Conditions from time to time.
            Changes will be posted on this page with an updated revision
            date. Continued use of the site after changes are posted
            constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
