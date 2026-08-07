import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dillon Kennels",
  description:
    "Get in touch with the Dillon Kennels team — store address, phone, email, and business hours.",
};

const FAQS = [
  {
    question: "How long does delivery take within Nigeria?",
    answer:
      "Orders within Lagos typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll receive a tracking update by email and SMS once your order has shipped from our Lagos workshop.",
  },
  {
    question: "Do you ship outside Nigeria?",
    answer:
      "At this time, Dillon Kennels ships exclusively within Nigeria. We're working on international shipping options and recommend joining our mailing list or checking back on this page for updates on when international delivery becomes available.",
  },
  {
    question: "What is your returns and exchange policy?",
    answer:
      "We accept returns and exchanges within 7 days of delivery, provided the item is unworn, unwashed, and has its original tags attached. Please visit our Refunds Policy page for the full process, including how to initiate a return and expected timelines for refunds.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "Because many of our pieces are made or finished to order in small batches, we can only accommodate changes or cancellations within 2 hours of the order being placed. Contact our support team immediately by phone or email if you need to make a change.",
  },
  {
    question: "How do I know what size to order?",
    answer:
      "Each product page lists standard sizing based on Nigerian and international measurements. If you're between sizes or unsure what will fit best, message our support team with your usual size in similar brands and we'll recommend the closest match before you order.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="section-heading mt-3">Contact Us</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Have a question about an order, a product, or just want to say hello?
        Send us a message or reach out directly using the details below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Store Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd className="mt-1">
                  8 Olotu House, Opposite Baale House, Abule Tirninmiljeun
                  Odeda, Ajeromi-Ifelodun, Lagos State
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:supportteam@dillonkennels.com"
                    className="hover:text-rust"
                  >
                    supportteam@dillonkennels.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+2349023326345" className="hover:text-rust">
                    +234 902 332 6345
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-ink/10 bg-paper p-6">
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

      <section className="mt-20 border-t border-ink/10 pt-14">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
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
    </div>
  );
}
