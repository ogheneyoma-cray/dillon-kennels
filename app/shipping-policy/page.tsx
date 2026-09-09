import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when you get your download after purchasing from Lawin Store.",
};

const SECTIONS = [
  {
    heading: "How Delivery Works",
    body: `${site.wordmark} sells downloadable themes and plugins only — there is no physical product and nothing is shipped. Once payment is confirmed, your download link is generated automatically and emailed to you.`,
  },
  {
    heading: "Timing",
    body: `Delivery is instant in almost all cases. If your confirmation email hasn't arrived within 30 minutes, check your spam folder before contacting ${site.email} — delivery issues are usually resolved within one business hour.`,
  },
  {
    heading: "Re-downloading a Product",
    body: "Download links stay active for 30 days after purchase. If yours has expired, email us your order number and we'll reissue it at no charge.",
  },
  {
    heading: "Account & Access Issues",
    body: `If you're having trouble with a download link, contact us at ${site.email} or ${site.phone} with your order number and we'll restore access promptly.`,
  },
];

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
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
