import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Get in touch with the Hogposh team — store address, phone, email, and business hours.",
};

const FAQS = [
  {
    question: "How long does delivery take within Nigeria?",
    answer:
      "Orders within Abuja typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll receive a tracking update by email once your order has shipped from our Lugbe warehouse.",
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer:
      "Most of our formulas are fragrance-free or low-fragrance and dermatologist tested, but everyone's skin reacts differently. Check the ingredient list on each product page and patch-test on your inner arm 24 hours before applying anything new to your face.",
  },
  {
    question: "What is your returns policy?",
    answer:
      "We accept returns within 7 days of delivery for unopened products in their original packaging. Please visit our Refunds Policy page for the full process, including how to initiate a return.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "We can accommodate changes or cancellations within 2 hours of the order being placed, before it's packed for dispatch. Contact our support team immediately by phone or email if you need to make a change.",
  },
  {
    question: "Can I pay in Naira instead of Dollars?",
    answer:
      "Yes — every price on the site is shown in USD by default, but you can switch to NGN at any time using the currency toggle in the header. The total on your order and at checkout updates automatically to match your selection.",
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
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Store Details</h2>
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
                  <a href={`mailto:${site.email}`} className="hover:text-clay">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneHref}`} className="hover:text-clay">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Business Hours</h2>
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

      <section className="mt-20 border-t border-line pt-14">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-clay transition-transform group-open:rotate-45">
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
