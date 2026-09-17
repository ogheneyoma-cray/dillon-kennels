import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Richavaid website and purchases.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing or using the ${site.wordmark} website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our site or make a purchase.`,
  },
  {
    heading: "Products & Pricing",
    body: "All prices are listed in US Dollars ($) and also shown in Nigerian Naira (₦) for reference, using a fixed conversion rate that may differ slightly from real-time exchange rates. We reserve the right to update pricing at any time, though changes never affect orders already confirmed. Product descriptions represent features at the time of sale.",
  },
  {
    heading: "Orders & Payment",
    body: "By placing an order, you confirm that the payment information you provide is accurate and that you are authorized to use the payment method submitted. We accept Mastercard and Visa only. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, in which case a full refund will be issued.",
  },
  {
    heading: "Licensing",
    body: `All products sold on ${site.wordmark} are licensed for single-site use with lifetime updates unless otherwise stated. Redistribution, resale and inclusion in other marketplaces is not permitted without prior written consent.`,
  },
  {
    heading: "Intellectual Property",
    body: `All content on this site, including text, logos and design, is the property of ${site.legalName} and may not be reproduced, redistributed, or resold without prior written consent.`,
  },
  {
    heading: "Limitation of Liability",
    body: `${site.wordmark} is not liable for any indirect, incidental or consequential damages arising from the use of our website or products, including issues caused by third-party hosting, software or browser incompatibilities outside our control.`,
  },
  {
    heading: "Governing Law",
    body: "These Terms & Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Oyo State.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-6">
        {SECTIONS.map((section, i) => (
          <section
            key={section.heading}
            className="rounded-2xl border border-line bg-white p-6 shadow-tile"
          >
            <h2 className="flex items-center gap-3 font-display text-lg font-bold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-pale font-display text-xs font-bold text-violet">
                {i + 1}
              </span>
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
