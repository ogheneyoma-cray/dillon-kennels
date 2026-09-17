import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQs | ${site.name}`,
  description: "Answers to common questions about Site Optex services, booking, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Booking",
    items: [
      {
        question: "How do I book a service?",
        answer:
          "Add a service to your cart from the shop page and pay at checkout. You'll get a confirmation email and our team reaches out within one business day to schedule the work.",
      },
      {
        question: "Do you work on-site or remotely?",
        answer:
          "Most services are delivered remotely. Wi-Fi & Network Setup and Computer Repair & Diagnostics may require an on-site visit, which we'll confirm with you after booking.",
      },
    ],
  },
  {
    heading: "Pricing & Payment",
    items: [
      {
        question: "Can I pay in Naira instead of Dollars?",
        answer:
          "Yes — every price is shown in USD by default, but you can switch to NGN anytime with the currency toggle in the header.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Mastercard and Visa cards only, entered securely at checkout.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We accept refund requests within 7 days of booking, provided work has not started. See our Refunds Policy page for full details.",
      },
    ],
  },
  {
    heading: "Support",
    items: [
      {
        question: "What if my issue isn't resolved?",
        answer:
          "Contact us within 7 days of the service and we'll return to complete the work at no extra charge.",
      },
      {
        question: "Is my data safe during a service?",
        answer:
          "Yes. We only access what's needed to complete the booked service and never share your data with third parties.",
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
        Can&apos;t find what you&apos;re looking for? Reach out on the{" "}
        <Link href="/contact" className="font-bold text-ink underline decoration-optic decoration-4 underline-offset-4">
          contact page
        </Link>{" "}
        and our team will get back to you within one business day.
      </p>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-xl font-extrabold uppercase text-ink">{group.heading}</h2>
            <div className="mt-5 divide-y-2 divide-ink border-2 border-ink bg-white">
              {group.items.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:content-none">
                    {item.question}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink bg-optic text-lg leading-none text-ink transition-transform group-open:rotate-45">
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
