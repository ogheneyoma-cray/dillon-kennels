import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about Echo E-Rom services, booking, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Booking a Service",
    items: [
      {
        question: "How does booking work?",
        answer:
          "Choose a service from our shop, add it to your cart and pay securely at checkout. You'll receive a confirmation email and our team will reach out to schedule the work within one business day.",
      },
      {
        question: "Do you work remotely or on-site?",
        answer:
          "Most services — audits, scans, migrations, VPN setup — are delivered remotely. Services like network setup or POS integration may require an on-site visit, which we'll confirm with you after booking.",
      },
      {
        question: "How fast can you start?",
        answer:
          "For most bookings we schedule an initial call or remote session within 1-2 business days. Urgent issues can be flagged in your order notes and we'll prioritize accordingly.",
      },
    ],
  },
  {
    heading: "Pricing & Payments",
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
          "We accept refund requests within 7 days of purchase, provided work has not already started. Visit our Refunds Policy page for the full process and eligibility details.",
      },
    ],
  },
  {
    heading: "Support & Coverage",
    items: [
      {
        question: "What happens if the issue isn't fully resolved?",
        answer:
          "If a service doesn't resolve the issue it was booked for, contact our helpdesk within 7 days and we'll return to complete the work at no extra charge.",
      },
      {
        question: "Do you offer ongoing support after a one-time service?",
        answer:
          "Yes — many clients follow a one-time service with our Managed IT Support (Monthly) plan for continued coverage and priority response.",
      },
      {
        question: "Is my data safe during a service like data recovery or migration?",
        answer:
          "Yes. We follow strict handling protocols, never share client data with third parties, and only access what's needed to complete the specific service you booked.",
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
        <Link href="/contact" className="font-semibold text-cobalt underline underline-offset-4">
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
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:content-none">
                    {item.question}
                    <span className="shrink-0 rounded-full bg-cobalt-pale p-1 text-lg text-cobalt transition-transform group-open:rotate-45">
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
