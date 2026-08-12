import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description:
    "Answers to common questions about booking, pricing, coverage and trust for Wazuri Technologies support services.",
};

const GROUPS = [
  {
    title: "Booking & Turnaround",
    faqs: [
      {
        question: "How fast can you actually get to me?",
        answer:
          "Most remote requests are picked up the same day they're booked. On-site visits in Accra and Kumasi are typically scheduled within 24–48 hours, and same-day slots are often available — the exact turnaround for each service is listed on its page.",
      },
      {
        question: "Can I book more than one service at once?",
        answer:
          "Yes — add each service to your cart the same way you would items in a shop, and they're handled as one booking. For larger jobs like an office network install, message us first so we can scope it properly before you pay.",
      },
      {
        question: "Can I reschedule or cancel a booking?",
        answer:
          "Yes, free of charge up to 4 hours before the scheduled appointment. See our Refunds Policy for what happens after that window or on a missed on-site visit.",
      },
    ],
  },
  {
    title: "Coverage & Delivery",
    faqs: [
      {
        question: "Do you cover locations outside Accra and Kumasi?",
        answer:
          "Remote support reaches anywhere with an internet connection, so most of our service list is available nationwide. On-site visits are currently limited to Accra and Kumasi; if you're elsewhere, message us and we'll tell you honestly whether we can help.",
      },
      {
        question: "What do I need for a remote session?",
        answer:
          "A stable internet connection and to be available at your device for the duration of the appointment. We'll send a secure remote-access link ahead of the confirmed time.",
      },
      {
        question: "What if a technician runs late for an on-site visit?",
        answer:
          "If we're going to be more than 30 minutes outside a confirmed window, we'll contact you before the appointment time to explain why and offer to reschedule.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "Are prices really shown up front?",
        answer:
          "Yes — every service on the site is priced in full before you book, in either US Dollars or Ghana Cedis. There are no call-out fees added afterward.",
      },
      {
        question: "What if the fix doesn't actually work?",
        answer:
          "If the issue you booked us for isn't resolved, we come back or continue remotely at no extra charge until it is, or refund the service — see our Refunds Policy for the full detail.",
      },
      {
        question: "Do you charge for parts or third-party licences?",
        answer:
          "Only where a service involves buying a replacement part or licence on your behalf and with your prior approval — that cost is separate from the listed service price and confirmed with you before we spend it.",
      },
    ],
  },
  {
    title: "Trust & Security",
    faqs: [
      {
        question: "Do you sign a confidentiality agreement before working on business systems?",
        answer:
          "Yes, on request, before we're given access to business accounts, servers or client data. Ask for one when you book and we'll send it ahead of the appointment.",
      },
      {
        question: "How much access does a technician actually get to my device?",
        answer:
          "Only what's needed for the specific service you booked. Remote access tools are removed once the job is closed unless you've asked us to leave them for ongoing support.",
      },
      {
        question: "Is my card information stored on your site?",
        answer:
          "No. Payment is handled by a hosted payment partner, and card details entered at checkout are never stored on our servers.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Support</p>
      <h1 className="section-heading mt-3">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Booking, pricing, coverage and trust — the questions we get asked
        most, answered up front. Still stuck? The{" "}
        <Link href="/contact" className="text-rust underline underline-offset-4">
          contact form
        </Link>{" "}
        reaches a person, not a queue.
      </p>

      <div className="mt-12 space-y-14">
        {GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-xl font-bold text-ink">{group.title}</h2>
            <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {group.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink marker:content-none">
                    {faq.question}
                    <span className="shrink-0 text-xl text-rust transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/70">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-ink/10 bg-paper p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink">Didn't find your answer?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
          Send us a message at{" "}
          <a href={`mailto:${site.email}`} className="text-rust underline underline-offset-4">
            {site.email}
          </a>{" "}
          or use the contact form and we'll reply within one business day.
        </p>
        <Link href="/contact" className="btn-primary mt-6 inline-flex">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
