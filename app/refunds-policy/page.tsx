import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Richavaid digital product purchases.",
};

const SECTIONS = [
  {
    heading: "Refund Window",
    body: "We accept refund requests within 7 days of purchase for products that have not been extensively used or deployed to a production site. This keeps the policy fair to both customers and our product team.",
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
    heading: "Non-Refundable Items",
    body: "Products that have been downloaded and deployed to a live production environment may not be eligible for a full refund. In these cases, we will work with you to resolve any issues with the product itself.",
  },
  {
    heading: "Order Cancellations",
    body: `Orders can be cancelled within 2 hours of purchase before download links are accessed. Contact ${site.email} or ${site.phone} as soon as possible if you need to cancel.`,
  },
];

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-6">
        {SECTIONS.map((section, i) => (
          <section
            key={section.heading}
            className="rounded-2xl border border-line bg-white p-6 shadow-tile"
          >
            <h2 className="flex items-center gap-3 font-display text-lg font-bold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-pale font-display text-xs font-bold text-violet">
                {i + 1}
              </span>
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
