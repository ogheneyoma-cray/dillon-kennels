import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vergemind",
  description:
    "Get in touch with the Vergemind team — store address, phone, email, and business hours.",
};

const FAQS = [
  {
    question: "What sizes does Vergemind carry?",
    answer:
      "Most apparel runs from S to XXL, with the specific size range noted on each product page. If you're between sizes, message our support team with your usual size in similar brands and we'll help you land on the right fit before you order.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders within Ilorin typically arrive within 1–3 business days. Deliveries to other states across Nigeria take 3–7 business days depending on location. You'll receive a tracking update by email and SMS once your order ships from our Ilorin base.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes — we accept returns and exchanges within 7 days of delivery, provided the item is unworn, unwashed, and has its original tags attached. Visit our Refunds Policy page for the full process and expected timelines.",
  },
  {
    question: "Do you restock sold-out drops?",
    answer:
      "Some pieces are limited-run drops that won't return once sold out, while core styles like tees, denim, and hoodies are restocked regularly. Follow us or join the mailing list to be notified the moment a restock lands.",
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
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/70">
          Have a question about an order, sizing, or a product? Send us a
          message or reach out directly using the details below.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <aside className="space-y-8">
          <div className="border border-bone/10 bg-graphite p-6">
            <h2 className="font-display text-xl text-bone">Store Details</h2>
            <dl className="mt-5 space-y-4 text-sm text-bone/80">
              <div>
                <dt className="font-semibold text-bone">Address</dt>
                <dd className="mt-1">
                  114, Irewolede Area, Ilorin West Local Government Area,
                  Ilorin, Kwara State
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-bone">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:info@vergemind.com"
                    className="hover:text-acid"
                  >
                    info@vergemind.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-bone">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+2348083617874" className="hover:text-acid">
                    +234 808 361 7874
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-bone/10 bg-graphite p-6">
            <h2 className="font-display text-xl text-bone">Business Hours</h2>
            <dl className="mt-5 space-y-2 text-sm text-bone/80">
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

      <section className="mt-20 border-t border-bone/10 pt-14">
        <h2 className="section-heading text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-bone/10 border-y border-bone/10">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-bone marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-acid transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
