import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Get in touch with the ${site.name} team — office address, email, and support hours.`,
};

const FAQS = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders within Lagos typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll get an email as soon as your order has shipped from our warehouse.",
  },
  {
    question: "Which currencies can I pay in?",
    answer:
      "Prices are set in US Dollars and converted to Nigerian Naira using the toggle in the header. The currency you have selected at checkout is the amount charged to your card.",
  },
  {
    question: "What is your returns and refunds policy?",
    answer:
      "We accept returns within 7 days of delivery, provided the item is unopened and in its original packaging. Visit our Refunds Policy page for the full process, including how to start a return and expected refund timelines.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "Email us your order number as soon as possible — if the order hasn't been dispatched yet, we can usually update the address or cancel before it ships.",
  },
  {
    question: "Is my card information stored on your site?",
    answer:
      "No. Payment is handled by a hosted payment partner, and card details entered at checkout are never stored on our servers.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        A question about an order, a product that arrived damaged, or
        something you&apos;d rather ask before buying — send a message or reach
        out directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl font-bold text-ink">Office Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd className="mt-1">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-orange">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-orange">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl font-bold text-ink">Support Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-ink/80">
              <div className="flex justify-between">
                <dt>Monday – Friday</dt>
                <dd>8:00 AM – 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>9:00 AM – 3:00 PM</dd>
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
                <span className="shrink-0 text-xl text-orange transition-transform group-open:rotate-45">
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

      <section className="mt-16 border border-ink/10 bg-paper p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink">Didn&apos;t find your answer?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
          Send us a message at{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
            {site.email}
          </a>{" "}
          or use the contact form above and we&apos;ll reply within one business day.
        </p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Continue Shopping
        </Link>
      </section>
    </div>
  );
}
