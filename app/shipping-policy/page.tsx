import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when your Richavaid digital products are delivered after purchase.",
};

const SECTIONS = [
  {
    heading: "How Delivery Works",
    body: `${site.wordmark} sells digital products — there is nothing physical to ship. Once payment is confirmed, download links and license keys are sent to the email address you provided at checkout.`,
  },
  {
    heading: "Timing",
    body: `Download links are delivered within minutes of a successful payment. If you haven't received your email within 15 minutes, check your spam folder before contacting ${site.email}.`,
  },
  {
    heading: "Updates",
    body: "Product updates are delivered to the same email address used at checkout. WordPress themes and plugins also support one-click updates from the WordPress dashboard when your license key is activated.",
  },
  {
    heading: "Issues with Downloads",
    body: `If a download link is broken, expired, or you are unable to access your files, contact us at ${site.email} or ${site.phone} with your order number and we will send a fresh link promptly.`,
  },
];

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
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
