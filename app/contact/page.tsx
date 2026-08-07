import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Nudgenic",
  description:
    "Get in touch with the Nudgenic team — store address, phone, email, and business hours.",
};

const FAQS = [
  {
    question: "What sizes does Nudgenic carry?",
    answer:
      "Most of our apparel is available from XS to XL, with the specific size range noted on each product page. If you're between sizes, message our support team with your usual size in similar brands and we'll help you find the closest match before you order.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders within Oyo State typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll receive a tracking update by email and SMS once your order ships from our Oyo Town workshop.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes — we accept returns and exchanges within 7 days of delivery, provided the item is unworn, unwashed, and has its original tags attached. Visit our Refunds Policy page for the full process and expected timelines.",
  },
  {
    question: "Do you restock sold-out items?",
    answer:
      "It depends on the piece. Some items are limited runs that won't return once sold out, while wardrobe staples like denim and knitwear are restocked regularly. Follow us or join the mailing list to be notified the moment a restock lands.",
  },
  {
    question: "Can I change my order after placing it?",
    answer:
      "We begin preparing orders quickly, so we can only accommodate changes or cancellations within 2 hours of the order being placed. Contact our support team immediately by phone or email if you need to make a change.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Get in Touch</p>
        <h1 className="section-heading mt-3">Contact Us</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
          Have a question about an order, sizing, or a product? Send us a
          message or reach out directly using the details below.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Store Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd className="mt-1">
                  Ile Alaso, Imale Falatori Area, Oyo Town, Oyo West Local
                  Government Area, Oyo State
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:csteam@nudgeinc.com"
                    className="hover:text-rose"
                  >
                    csteam@nudgeinc.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+2347088385063" className="hover:text-rose">
                    +234 708 838 5063
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
        <h2 className="section-heading text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-rose transition-transform group-open:rotate-45">
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
