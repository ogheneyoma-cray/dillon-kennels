import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
  description: "Answers to common questions about Webreid courses, access, pricing and refunds.",
};

const FAQ_GROUPS = [
  {
    heading: "Getting Started",
    items: [
      {
        question: "How quickly do I get access after paying?",
        answer:
          "Access is granted immediately after payment is confirmed. You'll receive an email with your login details and a link to your course dashboard within a few minutes — check your spam folder if it doesn't arrive.",
      },
      {
        question: "Do I need any prior experience to start?",
        answer:
          "It depends on the course. Each course page lists a level under its details — most of the catalogue is built for beginners, and a handful of advanced titles assume some existing familiarity with the topic.",
      },
      {
        question: "What do I need to take a course?",
        answer:
          "Just a device with a browser and a stable internet connection. Courses are self-paced videos with downloadable materials, so there's nothing to install.",
      },
    ],
  },
  {
    heading: "Access & Courses",
    items: [
      {
        question: "How long do I have access to a course?",
        answer:
          "Every course purchase includes lifetime access, so you can revisit the material whenever you need to, at your own pace, with no expiry date.",
      },
      {
        question: "Can I access a course on my phone?",
        answer:
          "Yes — your course dashboard works on any modern browser, whether you're on a laptop, tablet, or phone.",
      },
      {
        question: "Do I get a certificate when I finish?",
        answer:
          "Yes, each course includes a completion certificate you can download from your course dashboard once you've finished all lessons.",
      },
    ],
  },
  {
    heading: "Payments & Refunds",
    items: [
      {
        question: "Can I pay in Naira instead of Dollars?",
        answer:
          "Yes — every price on the site is shown in USD by default, but you can switch to NGN at any time using the currency toggle in the header. The total on your order and at checkout updates automatically to match your selection.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "We accept refund requests within 7 days of purchase if a course hasn't met your expectations. Visit our Refunds Policy page for the full process and eligibility details.",
      },
      {
        question: "Can I change or cancel my order after placing it?",
        answer:
          "We can accommodate changes or cancellations within 2 hours of the order being placed, before access is provisioned. Contact our support team immediately by phone or email if you need to make a change.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Support</p>
      <h1 className="section-heading mt-3">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Can&apos;t find what you&apos;re looking for? Reach out on the{" "}
        <Link href="/contact" className="text-magenta underline decoration-lime decoration-2 underline-offset-4">
          contact page
        </Link>{" "}
        and our team will get back to you within one business day.
      </p>

      <div className="mt-12 space-y-12">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display text-xl font-semibold text-ink">{group.heading}</h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
                    {item.question}
                    <span className="shrink-0 text-xl text-magenta transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
