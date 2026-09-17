import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Site Optex website and service bookings.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By using the Site Optex website you agree to these Terms &
            Conditions. If you do not agree, please do not use our site or
            book a service with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">2. Services & Pricing</h2>
          <p className="mt-3 leading-relaxed">
            Prices are listed in US Dollars ($) and also shown in Nigerian
            Naira (₦) using a fixed conversion rate, which may differ
            slightly from real-time rates. We may update pricing at any
            time, though this never affects bookings already confirmed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">3. Bookings & Payment</h2>
          <p className="mt-3 leading-relaxed">
            By booking a service you confirm the payment information
            provided is accurate and that you are authorized to use it. We
            accept Mastercard and Visa only. We may refuse or cancel a
            booking at our discretion, including suspected fraud, in which
            case a full refund is issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">4. Client Responsibilities</h2>
          <p className="mt-3 leading-relaxed">
            You are responsible for granting appropriate access for us to
            complete a booked service. Site Optex is not liable for
            pre-existing issues discovered outside the scope of the service
            booked.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">5. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including text, logos and design, is
            the property of Site Optex and may not be reproduced or used
            commercially without our written consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">6. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            Site Optex is not liable for indirect, incidental or
            consequential damages arising from use of our website or
            services, including delays caused by third parties beyond our
            control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">7. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms are governed by the laws of the Federal Republic of
            Nigeria, subject to the exclusive jurisdiction of the courts of
            Lagos State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">8. Changes to These Terms</h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms from time to time. Continued use of
            the site after changes are posted means you accept the revised
            terms.
          </p>
        </section>
      </div>
    </div>
  );
}
