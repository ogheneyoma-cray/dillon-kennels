import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about Lawin Store products, downloads, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Getting Started",
    items: [
      {
        question: "How quickly do I get my files after paying?",
        answer:
          "Download links are emailed to you immediately after payment is confirmed. Check your spam folder if it doesn't arrive within a few minutes.",
      },
      {
        question: "What's included in a download?",
        answer:
          "Full theme or plugin files, a documentation guide, and any demo content shown on the preview so you can get set up quickly.",
      },
      {
        question: "Do I need any technical skills to install a theme?",
        answer:
          "Most themes install like any standard theme or plugin package. Documentation walks you through setup step by step — no coding required for standard use.",
      },
    ],
  },
  {
    heading: "Products & Licensing",
    items: [
      {
        question: "Can I use a theme on more than one site?",
        answer:
          "Each purchase is licensed for a single site. If you're building for multiple clients or domains, contact us about a multi-site license.",
      },
      {
        question: "Do you provide free updates?",
        answer:
          "Minor updates and bug fixes are free for any product you've purchased. Major version rewrites are treated as a new product.",
      },
      {
        question: "Can I get help with installation or customization?",
        answer:
          "Every product ships with documentation. For anything beyond that, reach out on the contact page and our team will point you in the right direction.",
      },
    ],
  },
  {
    heading: "Payments & Refunds",
    items: [
      {
        question: "Can I pay in Naira instead of Dollars?",
        answer:
          "Yes — every price on the site is shown in USD by default, but you can switch to NGN at any time using the currency toggle in the header. The total on your order and at checkout updates automatically to match your selection.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Mastercard and Visa cards only, entered securely at checkout.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We accept refund requests within 7 days of purchase if a product hasn't met your expectations and hasn't yet been downloaded. Visit our Refunds Policy page for the full process and eligibility details.",
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
        <Link href="/contact" className="text-berry underline decoration-peach decoration-2 underline-offset-4">
          contact page
        </Link>{" "}
        and our team will get back to you within one business day.
      </p>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-xl font-bold text-ink">{group.heading}</h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
                    {item.question}
                    <span className="shrink-0 text-xl text-berry transition-transform group-open:rotate-45">
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
