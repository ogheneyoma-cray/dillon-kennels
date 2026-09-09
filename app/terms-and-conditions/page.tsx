import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Cyber Travellers website and orders.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing or using the ${site.wordmark} website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our site or place an order with us.`,
  },
  {
    heading: "Services & Pricing",
    body: "All prices are listed in US Dollars ($) and also shown in Nigerian Naira (₦) for reference, using a fixed conversion rate that may differ slightly from real-time exchange rates. We reserve the right to update pricing at any time, though changes never affect orders already confirmed. Service scope is described on each service page and confirmed with you before work begins.",
  },
  {
    heading: "Orders & Payment",
    body: "By placing an order, you confirm that the payment information you provide is accurate and that you are authorized to use the payment method submitted. We accept Mastercard and Visa only. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, in which case a full refund will be issued.",
  },
  {
    heading: "Intellectual Property",
    body: `All content on this site, including text, logos and design, is the property of ${site.legalName} and may not be reproduced, redistributed, or resold without prior written consent. Deliverables produced for you as part of a purchased service become yours to use once payment is complete, unless otherwise agreed in writing.`,
  },
  {
    heading: "Limitation of Liability",
    body: `${site.wordmark} is not liable for any indirect, incidental or consequential damages arising from the use of our website or services, including issues caused by third-party systems, software or hosting providers outside our control.`,
  },
  {
    heading: "Governing Law",
    body: "These Terms & Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Lagos State.",
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

      <div className="mt-8 max-w-3xl overflow-hidden rounded-lg border border-line">
        <div className="flex items-center justify-between bg-gate px-5 py-3 font-display text-xs uppercase tracking-widest2 text-radar">
          <span>Manifest: terms-and-conditions</span>
          <span className="text-paper/40">Rev. Sep 2026</span>
        </div>
        <div className="divide-y divide-line bg-paper">
          {SECTIONS.map((section, i) => (
            <section key={section.heading} className="p-6">
              <h2 className="flex items-center gap-3 font-display text-lg font-bold text-ink">
                <span className="text-beacon-dark">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <p className="mt-2 leading-relaxed text-ink/80">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
