import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Wazuri Technologies website and bookings.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the {site.name} website, you agree to be
            bound by these Terms & Conditions. If you do not agree with any
            part of these terms, please do not use our site or book a service
            with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">2. Services & Pricing</h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and also displayed in
            Ghana Cedis (GH₵) for reference using a fixed conversion rate,
            which may differ slightly from real-time exchange rates. We
            reserve the right to update pricing at any time without prior
            notice, though changes will never affect a booking already
            confirmed. Turnaround times listed on each service page are
            estimates based on typical cases, not guarantees.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">3. Bookings & Payment</h2>
          <p className="mt-3 leading-relaxed">
            By placing a booking, you confirm that the payment and contact
            information you provide is accurate and that you are authorized
            to use the payment method submitted. We reserve the right to
            refuse or cancel any booking at our discretion, including in
            cases of suspected fraud or where a service is outside our
            current coverage, in which case a full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">4. Access to Devices, Accounts and Systems</h2>
          <p className="mt-3 leading-relaxed">
            Where a service requires access to your device, account or
            business system, you confirm you are authorized to grant that
            access. We access only what is required to complete the booked
            service and are not responsible for pre-existing issues,
            unrelated data loss, or third-party software conflicts that were
            not caused by our work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">5. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including text, logos, and design, is
            the property of {site.name} and may not be reproduced,
            distributed, or used commercially without our prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">6. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            {site.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            services, including delays caused by circumstances beyond our
            reasonable control. Our liability for any single booking is
            limited to the amount paid for that booking.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">7. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms & Conditions are governed by the laws of the Republic
            of Ghana. Any disputes arising from these terms will be subject
            to the exclusive jurisdiction of the courts of Accra.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">8. Changes to These Terms</h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms & Conditions from time to time. Changes
            will be posted on this page with an updated revision date.
            Continued use of the site after changes are posted constitutes
            acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
