import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Aims I-Tech website and orders.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-xl border border-line">
        <div className="window-chrome">
          <span className="window-dot bg-[#FF5F57]" />
          <span className="window-dot bg-[#FEBC2E]" />
          <span className="window-dot bg-[#28C840]" />
          <span className="ml-2 font-display text-[11px] text-ink-soft">
            terms.md — last updated September 2026
          </span>
        </div>
        <div className="space-y-8 rounded-b-xl border border-t-0 border-line bg-paper p-6 text-ink/80 sm:p-8">
          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using the {site.wordmark} website, you agree to
              be bound by these Terms & Conditions. If you do not agree with
              any part of these terms, please do not use our site or place an
              order with us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 2. Products & Pricing</h2>
            <p className="mt-3 leading-relaxed">
              All prices are listed in US Dollars ($) and also shown in
              Nigerian Naira (₦) for reference, using a fixed conversion rate
              that may differ slightly from real-time exchange rates. We
              reserve the right to update pricing at any time, though changes
              never affect orders already confirmed. Product contents are
              occasionally updated and may differ slightly from the version
              shown at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 3. Orders & Payment</h2>
            <p className="mt-3 leading-relaxed">
              By placing an order, you confirm that the payment information
              you provide is accurate and that you are authorized to use the
              payment method submitted. We accept Mastercard and Visa only.
              We reserve the right to refuse or cancel any order at our
              discretion, including in cases of suspected fraud, in which
              case a full refund will be issued.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 4. Intellectual Property & License</h2>
            <p className="mt-3 leading-relaxed">
              Purchasing a product grants you a non-exclusive license to use
              it in a single project. You may not resell, redistribute or
              relicense the source files themselves, whether modified or
              unmodified. All site content, including text, logos and
              design, remains the property of {site.legalName}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 5. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              {site.wordmark} is not liable for any indirect, incidental or
              consequential damages arising from the use of our website or
              products, including issues caused by third-party frameworks,
              libraries or hosting environments outside our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 6. Governing Law</h2>
            <p className="mt-3 leading-relaxed">
              These Terms & Conditions are governed by the laws of the
              Federal Republic of Nigeria. Any disputes arising from these
              terms will be subject to the exclusive jurisdiction of the
              courts of Lagos State.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink"># 7. Changes to These Terms</h2>
            <p className="mt-3 leading-relaxed">
              We may update these Terms & Conditions from time to time.
              Changes will be posted on this page with an updated revision
              date. Continued use of the site after changes are posted
              constitutes acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
