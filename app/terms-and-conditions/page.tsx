import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "The terms and conditions governing use of the Silverpoodles website and orders.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing or using the ${site.wordmark} website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our site or place an order with us.`,
  },
  {
    heading: "Products & Pricing",
    body: "All prices are listed in US Dollars ($) and also shown in Nigerian Naira (₦) for reference, using a fixed conversion rate that may differ slightly from real-time exchange rates. We reserve the right to update pricing at any time, though changes never affect orders already confirmed. Product contents are occasionally updated and may differ slightly from the version shown at the time of purchase.",
  },
  {
    heading: "Orders & Payment",
    body: "By placing an order, you confirm that the payment information you provide is accurate and that you are authorized to use the payment method submitted. We accept Mastercard and Visa only. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, in which case a full refund will be issued.",
  },
  {
    heading: "Intellectual Property & License",
    body: `Purchasing a product grants you a non-exclusive license to use it in a single project. You may not resell, redistribute or relicense the source files themselves, whether modified or unmodified. All site content, including text, logos and design, remains the property of ${site.legalName}.`,
  },
  {
    heading: "Limitation of Liability",
    body: `${site.wordmark} is not liable for any indirect, incidental or consequential damages arising from the use of our website or products, including issues caused by third-party frameworks, libraries or hosting environments outside our control.`,
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
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="hidden lg:sticky lg:top-28 lg:block lg:h-fit">
          <ol className="space-y-2 border-l-2 border-line pl-4 text-sm">
            {SECTIONS.map((section, i) => (
              <li key={section.heading} className="text-ink-soft">
                <span className="mr-2 font-display font-bold text-fuchsia">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-2xl space-y-10">
          {SECTIONS.map((section, i) => (
            <section key={section.heading}>
              <h2 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
                <span className="text-fuchsia">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
