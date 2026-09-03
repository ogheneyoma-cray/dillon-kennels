import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, addressLines } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Get in touch with the ${site.name} team — support email, phone, and business hours.`,
};

const FAQS = [
  {
    question: "How do I get access to a course after buying it?",
    answer:
      "As soon as your payment is confirmed, we send your course access links and login instructions to the email address you used at checkout. Access is instant and yours to keep — there's no expiry on your course library.",
  },
  {
    question: "Do you offer refunds on courses?",
    answer:
      "Yes, within a limited window before a course has been substantially accessed. Visit our Refunds Policy page for the full eligibility criteria and how to request one.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Visa and Mastercard only. Card details are collected securely at checkout and are never stored on our servers.",
  },
  {
    question: "Can I pay in Naira instead of Dollars?",
    answer:
      "Yes. Use the currency toggle in the header to switch between USD and NGN pricing at any point while browsing or at checkout — the price shown is the price you pay.",
  },
  {
    question: "Do courses expire or require a subscription?",
    answer:
      "No. Every course is a one-time purchase with lifetime access — there's no recurring subscription and no time limit on when you can start or finish a course.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Have a question about a course, an order, or just want to say hello?
        Send us a message or reach out directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="rounded-2xl border border-ink/10 bg-linen p-6">
            <h2 className="font-display text-xl font-bold text-ink">Support Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink/80">
              <div>
                <dt className="font-bold text-ink">Address</dt>
                <dd className="mt-1">{addressLines.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-indigo">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-indigo">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-linen p-6">
            <h2 className="font-display text-xl font-bold text-ink">Support Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink/80">
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd>9:00 AM – 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>10:00 AM – 4:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <section className="mt-20 border-t border-ink/10 pt-14">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-indigo transition-transform group-open:rotate-45">
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
    </div>
  );
}
