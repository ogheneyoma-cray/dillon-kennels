import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about delivery, pricing, licensing and revisions for Myevolt products.",
};

const GROUPS = [
  {
    title: "Delivery & Setup",
    faqs: [
      {
        question: "How do I get my files after I pay?",
        answer:
          "Your source files and setup guide arrive by email within minutes of checkout clearing, and the same links are available from your order confirmation page. Every product ships with step-by-step setup instructions.",
      },
      {
        question: "Do I need to know how to code to use a template?",
        answer:
          "Basic comfort editing text and images in a code editor helps, but every product includes a setup guide written for a non-specialist. If you'd rather we install and configure it for you, mention that in the contact form and we'll quote the install separately.",
      },
      {
        question: "My download link isn't working — what do I do?",
        answer:
          "Email us your order number and we'll resend the links the same day. Download links don't expire, so this is almost always a typo in the original email address rather than an actual problem with your order.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "Are prices really shown up front?",
        answer:
          "Yes — every product on the site is priced in full before you buy, in either US Dollars or Naira. There are no hidden fees added at checkout.",
      },
      {
        question: "Which currencies can I pay in?",
        answer:
          "Prices are set in US Dollars and converted to Naira using the toggle in the header. The currency you have selected at checkout is the amount charged to your card.",
      },
      {
        question: "Which cards do you accept?",
        answer:
          "We accept Mastercard and Visa only. Card details entered at checkout are used solely to process your order and are never stored on our servers.",
      },
    ],
  },
  {
    title: "Licensing & Usage",
    faqs: [
      {
        question: "Can I use a template for a client project?",
        answer:
          "Each purchase is licensed for use in a single project, whether that's your own product or a client's. You're welcome to customise the code freely, but reselling or redistributing the template files themselves isn't covered by your purchase — see our Terms & Conditions for the full detail.",
      },
      {
        question: "Do I get the full source code?",
        answer:
          "Yes — every product includes the complete source, not a locked template or a demo. You own the files you receive and can modify them however you like within the licensed project.",
      },
      {
        question: "Do you offer custom builds outside the shop?",
        answer:
          "Not listed on the site yet — message us with what you need and we'll scope a fixed price directly.",
      },
    ],
  },
  {
    title: "Refunds & Revisions",
    faqs: [
      {
        question: "Can I get a refund if I change my mind?",
        answer:
          "Because products are delivered instantly as downloadable files, refunds are limited to cases where a file is genuinely corrupted, missing, or clearly not what was listed — see our Refunds Policy for exactly what qualifies and how to request one.",
      },
      {
        question: "What does the included revision cover?",
        answer:
          "One round of reasonable adjustments to the delivered build — colours, copy placement, minor layout tweaks — requested within 7 days of delivery. It doesn't cover a change of scope to a different product.",
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
        Delivery, pricing, licensing and revisions — the questions we get
        asked most, answered up front. Still stuck? The{" "}
        <Link href="/contact" className="text-teal-dark underline underline-offset-4">
          contact form
        </Link>{" "}
        reaches a person, not a queue.
      </p>

      <div className="mt-12 space-y-14">
        {GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-xl font-semibold text-ink">{group.title}</h2>
            <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {group.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink marker:content-none">
                    {faq.question}
                    <span className="shrink-0 text-xl text-teal-dark transition-transform group-open:rotate-45">
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
        <h2 className="font-display text-xl font-semibold text-ink">Didn't find your answer?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
          Send us a message at{" "}
          <a href={`mailto:${site.email}`} className="text-teal-dark underline underline-offset-4">
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
