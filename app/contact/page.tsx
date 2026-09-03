import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, addressLines } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Get in touch with the ${site.name} team — store address, phone, email, and business hours.`,
};

const FAQS = [
  {
    question: "How long does delivery take within Nigeria?",
    answer:
      "Orders within Lagos typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll receive a tracking update by email once your order has shipped from our Lagos warehouse.",
  },
  {
    question: "Do you ship outside Nigeria?",
    answer:
      "At this time, Venture Collection ships exclusively within Nigeria. We're working on international shipping options and recommend checking back on this page for updates on when international delivery becomes available.",
  },
  {
    question: "What is your returns policy?",
    answer:
      "We accept returns within 7 days of delivery, provided the item is unused and in its original packaging. Please visit our Refunds Policy page for the full process, including how to initiate a return and expected timelines for refunds.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Visa and Mastercard only. Card details are collected securely at checkout and are never stored on our servers.",
  },
  {
    question: "Are your product photos accurate?",
    answer:
      "We use real photography for every listing and describe materials, dimensions and included pieces in each product's Details section. Slight variation in color is possible due to screen display differences.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Have a question about an order, a product, or just want to say hello?
        Send us a message or reach out directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="border border-line bg-cream p-6">
            <h2 className="font-display text-xl font-medium text-navy">Store Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink-soft">
              <div>
                <dt className="font-bold text-ink">Address</dt>
                <dd className="mt-1">{addressLines.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-rust">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-rust">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-line bg-cream p-6">
            <h2 className="font-display text-xl font-medium text-navy">Business Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink-soft">
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

      <section className="mt-20 border-t border-line pt-14">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-navy marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-rust transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
