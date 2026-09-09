import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refunds Policy | ${site.name}`,
  description: "Refund eligibility and timelines for Cyber Travellers service purchases.",
};

const SECTIONS = [
  {
    heading: "Refund Window",
    body: "We accept refund requests within 7 days of purchase for services that have not yet started, or where scoped work has not yet begun. This keeps the policy fair to both clients and our technicians.",
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
    heading: "Work Already in Progress",
    body: "If work on your service has already started, we'll agree a fair partial refund with you based on the portion completed. If delivered work doesn't match what was described, contact us within 48 hours and we will fix it or issue a full refund at no additional charge.",
  },
  {
    heading: "Order Cancellations",
    body: `Orders can be changed or cancelled free of charge within 2 hours of purchase, before scheduling begins. Contact ${site.email} or ${site.phone} as soon as possible if you need to make a change.`,
  },
];

export default function RefundsPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Refunds Policy</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-lg border border-line">
        <div className="flex items-center justify-between bg-gate px-5 py-3 font-display text-xs uppercase tracking-widest2 text-radar">
          <span>Manifest: refunds-policy</span>
          <span className="text-paper/40">Rev. Sep 2026</span>
        </div>
        <div className="divide-y divide-line bg-paper">
          {SECTIONS.map((section, i) => (
            <section key={section.heading} className="p-6">
              <h2 className="flex items-center gap-3 font-display text-lg font-bold text-ink">
                <span className="text-beacon-dark">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <p className="mt-2 leading-relaxed text-ink/80">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
