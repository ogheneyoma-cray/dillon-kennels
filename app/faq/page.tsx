import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about Cyber Travellers services, scheduling, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Getting Started",
    items: [
      {
        question: "What happens right after I pay?",
        answer:
          "Our team reaches out to the email you provide at checkout within one business day to schedule your service and confirm any details we need from you.",
      },
      {
        question: "Do you work with businesses outside Lagos?",
        answer:
          "Most of our services are delivered remotely, so we can support clients anywhere as long as scheduling can be arranged around a compatible time zone.",
      },
      {
        question: "What do I need to get started?",
        answer:
          "Just a device with an internet connection and, depending on the service, access to the relevant accounts or systems. We'll tell you exactly what's needed when we confirm your booking.",
      },
    ],
  },
  {
    heading: "Services & Delivery",
    items: [
      {
        question: "Are these one-time services or subscriptions?",
        answer:
          "Every service on the site is a one-time engagement — you pay once, we deliver the work. Ongoing support like the monthly helpdesk plan simply renews if you choose to purchase it again.",
      },
      {
        question: "How long does a typical service take?",
        answer:
          "Turnaround varies by service and is confirmed with you when we schedule the work — most engagements are completed within a few business days of kickoff.",
      },
      {
        question: "Can I request changes after the work is delivered?",
        answer:
          "Yes, most services include a round of follow-up. Details are listed on each service page, and our team will confirm scope with you before starting.",
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
          "We accept refund requests within 7 days of purchase if work hasn't yet started. Visit our Refunds Policy page for the full process and eligibility details.",
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
        <Link href="/contact" className="text-beacon-dark underline decoration-beacon decoration-2 underline-offset-4">
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
                    <span className="shrink-0 text-xl text-beacon-dark transition-transform group-open:rotate-45">
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
