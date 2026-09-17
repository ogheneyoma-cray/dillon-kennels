import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQs | ${site.name}`,
  description: "Answers to common questions about Evintat orders, sizing, pricing and returns.",
};

const FAQ_GROUPS = [
  {
    heading: "Orders & Delivery",
    items: [
      {
        question: "How long does delivery take?",
        answer: "Orders are typically delivered within 3-7 business days depending on your location within Nigeria.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes, you'll receive tracking details by email once your order ships.",
      },
    ],
  },
  {
    heading: "Sizing & Fit",
    items: [
      {
        question: "How do I find my size?",
        answer: "Each product page lists measurements. If you're between sizes, we recommend sizing up for a relaxed fit.",
      },
      {
        question: "What if the fit isn't right?",
        answer: "You can request an exchange or refund within 7 days of delivery — see our Refunds Policy for details.",
      },
    ],
  },
  {
    heading: "Payments",
    items: [
      {
        question: "Can I pay in Naira instead of Dollars?",
        answer: "Yes — every price is shown in USD by default, but you can switch to NGN anytime with the currency toggle in the header.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Mastercard and Visa cards only, entered securely at checkout.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Support</p>
      <h1 className="section-heading mt-3">FAQs</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Can&apos;t find what you&apos;re looking for? Visit our{" "}
        <Link href="/contact" className="font-semibold text-aubergine underline decoration-peach decoration-2 underline-offset-4">
          contact page
        </Link>{" "}
        and we&apos;ll get back to you within one business day.
      </p>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-xl italic text-ink">{group.heading}</h2>
            <div className="mt-5 divide-y divide-line rounded-sm border border-line bg-white">
              {group.items.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-base font-semibold text-ink marker:content-none">
                    {item.question}
                    <span className="shrink-0 rounded-full bg-aubergine-pale p-1 text-lg text-aubergine transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
