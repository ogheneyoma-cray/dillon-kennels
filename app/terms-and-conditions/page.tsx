import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Spruce Savers website and bookings.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <span className="tag-pill">Legal</span>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By using the Spruce Savers website you agree to these Terms & Conditions. If you do not agree,
            please do not use our site or book a service with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">2. Services & Pricing</h2>
          <p className="mt-3 leading-relaxed">
            Prices are listed in US Dollars ($) and also shown in Nigerian Naira (₦) using a fixed conversion
            rate, which may differ slightly from real-time rates. We may update pricing at any time, though
            this never affects bookings already confirmed. Service duration and scope may vary slightly based
            on the complexity of the issue encountered on-site or remotely.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">3. Bookings & Payment</h2>
          <p className="mt-3 leading-relaxed">
            By placing a booking, you confirm the payment and contact information provided is accurate and
            that you are authorized to use the payment method submitted. We accept Mastercard and Visa only.
            We may refuse or cancel a booking at our discretion, including suspected fraud or unavailable
            technician slots, in which case a full refund is issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">4. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including service descriptions, text, logos and design, is the property
            of Spruce Savers and may not be reproduced or used commercially without our written consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">5. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            Spruce Savers is not liable for indirect, incidental or consequential damages arising from use of
            our website or services, including delays caused by third-party hardware or software providers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">6. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms are governed by the laws of the Federal Republic of Nigeria, subject to the exclusive
            jurisdiction of the courts of Oyo State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">7. Changes to These Terms</h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms from time to time. Continued use of the site after changes are posted
            means you accept the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
