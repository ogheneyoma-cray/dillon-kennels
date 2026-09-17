import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Echo E-Rom website and service bookings.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the Echo E-Rom website, you agree to be
            bound by these Terms & Conditions. If you do not agree with any
            part of these terms, please do not use our site or book a
            service with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">2. Services & Pricing</h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and are also displayed
            in Nigerian Naira (₦) for reference using a fixed conversion
            rate, which may differ slightly from real-time exchange rates.
            We reserve the right to update pricing at any time without
            prior notice, though changes will never affect bookings already
            confirmed. Some services, such as Data Recovery, are billed at
            the listed rate only once our engineers confirm the work is
            possible following an initial diagnostic.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">3. Bookings & Payment</h2>
          <p className="mt-3 leading-relaxed">
            By booking a service, you confirm that the payment information
            you provide is accurate and that you are authorized to use the
            payment method submitted. We accept Mastercard and Visa only.
            We reserve the right to refuse or cancel any booking at our
            discretion, including in cases of suspected fraud, in which
            case a full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">4. Client Responsibilities</h2>
          <p className="mt-3 leading-relaxed">
            You are responsible for granting our engineers appropriate
            access to complete a booked service and for ensuring any
            third-party licenses or accounts involved are in good standing.
            Echo E-Rom is not liable for pre-existing issues discovered
            during service delivery that fall outside the scope of the
            service booked.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">5. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including text, logos, and design, is
            the property of Echo E-Rom Ltd and may not be reproduced,
            distributed, or used commercially without our prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">6. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            Echo E-Rom is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            services, including delays caused by third-party providers
            beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">7. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms & Conditions are governed by the laws of the Federal
            Republic of Nigeria. Any disputes arising from these terms will
            be subject to the exclusive jurisdiction of the courts of Ogun
            State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">8. Changes to These Terms</h2>
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
