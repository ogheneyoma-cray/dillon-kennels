import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about downloads, formats, pricing and licensing for Nedupe Limited ebooks.",
};

const GROUPS = [
  {
    title: "Downloads & Formats",
    faqs: [
      {
        question: "How do I get my ebook after I pay?",
        answer:
          "Your download links arrive by email within minutes of checkout clearing, and the same links are available from your order confirmation page. Each title ships as EPUB and PDF, with MOBI included where the title's format list mentions it.",
      },
      {
        question: "Can I read the ebook on my phone, e-reader and laptop?",
        answer:
          "Yes — there's no device limit on a single purchase. EPUB works on most e-readers and reading apps, PDF opens anywhere, and MOBI is for older Kindle devices. Use whichever format your device prefers.",
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
          "Yes — every ebook on the site is priced in full before you buy, in either US Dollars or Ghana Cedis. There are no hidden fees added at checkout.",
      },
      {
        question: "Which currencies can I pay in?",
        answer:
          "Prices are set in US Dollars and converted to Ghana Cedis using the toggle in the header. The currency you have selected at checkout is the amount charged to your card.",
      },
      {
        question: "Is my card information stored on your site?",
        answer:
          "No. Payment is handled by a hosted payment partner, and card details entered at checkout are never stored on our servers.",
      },
    ],
  },
  {
    title: "Licensing & Usage",
    faqs: [
      {
        question: "Can I share the ebook I bought with someone else?",
        answer:
          "Each purchase is licensed for personal use by the buyer. You're welcome to read it across your own devices, but reselling, redistributing or publicly sharing the file isn't covered by your purchase — see our Terms & Conditions for the full detail.",
      },
      {
        question: "Can I buy a copy as a gift?",
        answer:
          "You can, but the download links go to the email address used at checkout, so use the recipient's email if you'd like them to receive it directly, or forward the confirmation email yourself.",
      },
      {
        question: "Do you offer bulk or team licensing?",
        answer:
          "Not on the site yet — message us with the title and number of copies you need and we'll quote a bulk rate directly.",
      },
    ],
  },
  {
    title: "Refunds",
    faqs: [
      {
        question: "Can I get a refund if I change my mind?",
        answer:
          "Because ebooks are delivered instantly, refunds are limited to cases where a file is genuinely corrupted, missing, or clearly not what was listed — see our Refunds Policy for exactly what qualifies and how to request one.",
      },
      {
        question: "What if I bought the wrong title by mistake?",
        answer:
          "Email us right away with your order number — if you haven't downloaded the file yet, we can usually correct the order rather than issue a full refund.",
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
        Downloads, formats, pricing and licensing — the questions we get
        asked most, answered up front. Still stuck? The{" "}
        <Link href="/contact" className="text-sky-dark underline underline-offset-4">
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
                    <span className="shrink-0 text-xl text-sky-dark transition-transform group-open:rotate-45">
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
          <a href={`mailto:${site.email}`} className="text-sky-dark underline underline-offset-4">
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
