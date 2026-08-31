import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the zenpulse digital website and orders.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">1. Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed">
            By accessing or using the {site.wordmark} website, you agree to
            be bound by these Terms & Conditions. If you do not agree with
            any part of these terms, please do not use our site or place an
            order with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">2. Courses & Pricing</h2>
          <p className="mt-3 leading-relaxed">
            All prices are listed in US Dollars ($) and are also displayed in
            Nigerian Naira (₦) for reference using a fixed conversion rate,
            which may differ slightly from real-time exchange rates. We
            reserve the right to update pricing at any time without prior
            notice, though changes will never affect orders already
            confirmed. Course content is periodically updated by instructors
            and may differ slightly from the version shown at the time of
            purchase.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">3. Orders & Payment</h2>
          <p className="mt-3 leading-relaxed">
            By placing an order, you confirm that the payment information you
            provide is accurate and that you are authorized to use the
            payment method submitted. Payments are accepted by card only. We
            reserve the right to refuse or cancel any order at our
            discretion, including in cases of suspected fraud, in which case
            a full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">4. Intellectual Property</h2>
          <p className="mt-3 leading-relaxed">
            All content on this site, including course videos, materials,
            text, logos, and design, is the property of {site.legalName} or
            its respective instructors, and may not be reproduced,
            redistributed, or resold without prior written consent. Course
            access is granted for personal, non-commercial use only.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">5. Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed">
            {site.wordmark} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            courses, including outcomes or results you achieve — or
            don&apos;t achieve — from applying course material.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">6. Governing Law</h2>
          <p className="mt-3 leading-relaxed">
            These Terms & Conditions are governed by the laws of the Federal
            Republic of Nigeria. Any disputes arising from these terms will
            be subject to the exclusive jurisdiction of the courts of
            Katsina State.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">7. Changes to These Terms</h2>
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
