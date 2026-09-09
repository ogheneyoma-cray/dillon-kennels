import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Lawin Store product purchases.",
};

const SECTIONS = [
  {
    heading: "Refund Window",
    body: "We accept refund requests within 7 days of purchase for products that haven't yet been downloaded. Once a download link has been used, the purchase is treated as delivered and is no longer eligible for a standard refund.",
  },
  {
    heading: "How to Request One",
    body: `Email ${site.email} with your order number and the reason for your request within 7 days of purchase. Our team will confirm your eligibility and process approved refunds back to your original payment method.`,
  },
  {
    heading: "Processing Time",
    body: "Approved refunds are processed within 5–10 business days, depending on your bank or card issuer's processing times.",
  },
  {
    heading: "Broken or Incomplete Downloads",
    body: "If a download is corrupted, missing files, or otherwise doesn't work as described, contact us within 48 hours of noticing the issue. We will fix it or issue a full refund at no additional charge to you.",
  },
  {
    heading: "Order Cancellations",
    body: `Orders can be changed or cancelled free of charge within 2 hours of purchase, before the download link is issued. Contact ${site.email} or ${site.phone} as soon as possible if you need to make a change.`,
  },
];

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4">
        {SECTIONS.map((section) => (
          <section key={section.heading} className="rounded-xl border border-line bg-paper p-6">
            <h2 className="font-display text-lg font-bold text-berry">{section.heading}</h2>
            <p className="mt-2 leading-relaxed text-ink/80">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
