import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about delivery, pricing, returns and orders at Ticad Iboo.",
};

const GROUPS = [
  {
    title: "Orders & Delivery",
    faqs: [
      {
        question: "Where do you deliver?",
        answer:
          "We ship from our Lagos base to addresses across Nigeria. Orders within Lagos typically arrive within 1–3 business days of dispatch, while orders to other states usually take 3–7 business days depending on distance.",
      },
      {
        question: "How will I know my order has shipped?",
        answer:
          "You'll get an email as soon as your order leaves our workshop, along with an estimated delivery window. Check the Shipping Policy page for full timelines and costs.",
      },
      {
        question: "Can I change my delivery address after ordering?",
        answer:
          "Email us your order number as soon as possible — if the order hasn't been dispatched yet, we can usually update the address before it ships.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "Are prices shown up front?",
        answer:
          "Yes — every product on the site is priced in full before you buy, in either US Dollars or Nigerian Naira. There are no hidden fees added at checkout beyond the delivery cost shown before you confirm.",
      },
      {
        question: "Which currencies can I pay in?",
        answer:
          "Prices are set in US Dollars and converted to Nigerian Naira using the toggle in the header. The currency you have selected at checkout is the amount charged to your card.",
      },
      {
        question: "Is my card information stored on your site?",
        answer:
          "No. Payment is handled by a hosted payment partner, and card details entered at checkout are never stored on our servers.",
      },
    ],
  },
  {
    title: "Products & Stock",
    faqs: [
      {
        question: "Do your electronics come with a warranty?",
        answer:
          "Small appliances and electronics carry the manufacturer's standard warranty against defects. Keep your order confirmation as proof of purchase if you need to make a claim.",
      },
      {
        question: "What happens if an item is out of stock?",
        answer:
          "Out-of-stock items are clearly marked on the product page and can't be added to your cart. Popular items are usually restocked within a couple of weeks — check back or contact us for an estimate.",
      },
      {
        question: "Do you offer bulk orders for offices or events?",
        answer:
          "Not on the site yet — message us with the items and quantities you need and we'll quote a bulk rate directly.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    faqs: [
      {
        question: "Can I return an item if I change my mind?",
        answer:
          "Yes, unopened items in their original packaging can be returned within 7 days of delivery — see our Refunds Policy for exactly what qualifies and how to start a return.",
      },
      {
        question: "What if an item arrives damaged or faulty?",
        answer:
          "Email us photos of the item and your order number within 48 hours of delivery and we'll arrange a replacement or refund, no questions asked.",
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
        Delivery, pricing, stock and returns — the questions we get asked
        most, answered up front. Still stuck? The{" "}
        <Link href="/contact" className="text-ink underline underline-offset-4">
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
                    <span className="shrink-0 text-xl text-gold-dark transition-transform group-open:rotate-45">
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
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
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
