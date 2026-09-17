import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about Richavaid products, licensing, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Getting Started",
    items: [
      {
        question: "What happens after I pay?",
        answer:
          "You receive an email with download links and license keys within minutes. All products are delivered digitally — there is nothing to ship.",
      },
      {
        question: "Do I need technical skills to use these products?",
        answer:
          "Most themes and plugins include one-click installation and setup wizards. UI kits ship with documentation. If you get stuck, our support team is available Monday to Saturday.",
      },
      {
        question: "Can I try before I buy?",
        answer:
          "Every product page includes screenshots, a feature list and a detailed description. We do not offer free trials, but our 7-day refund policy means you can request a full refund if the product does not meet your needs.",
      },
    ],
  },
  {
    heading: "Licensing & Updates",
    items: [
      {
        question: "What does the license cover?",
        answer:
          "Each purchase includes a single-site license with lifetime updates. If you need to use a product on multiple sites, purchase additional licenses.",
      },
      {
        question: "How do I receive updates?",
        answer:
          "Updates are emailed to the address you used at checkout. WordPress themes and plugins also support one-click updates from the WordPress dashboard.",
      },
      {
        question: "Can I resell or redistribute a product?",
        answer:
          "No. All products are licensed for personal or client use only. Redistribution, resale and inclusion in other marketplaces is not permitted.",
      },
    ],
  },
  {
    heading: "Payments & Refunds",
    items: [
      {
        question: "Can I pay in Naira instead of Dollars?",
        answer:
          "Yes — every price on the site is shown in USD by default, but you can switch to NGN at any time using the currency toggle in the header.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Mastercard and Visa cards only, entered securely at checkout.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We accept refund requests within 7 days of purchase. Visit our Refunds Policy page for the full process and eligibility details.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Support</p>
      <h1 className="section-heading mt-3">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Can&apos;t find what you&apos;re looking for? Reach out on the{" "}
        <Link href="/contact" className="font-medium text-violet underline underline-offset-4">
          contact page
        </Link>{" "}
        and our team will get back to you within one business day.
      </p>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-xl font-bold text-ink">{group.heading}</h2>
            <div className="mt-5 divide-y divide-line rounded-2xl border border-line bg-white shadow-tile">
              {group.items.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink marker:content-none">
                    {item.question}
                    <span className="shrink-0 rounded-full bg-violet-pale p-1 text-lg text-violet transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
