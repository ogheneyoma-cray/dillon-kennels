import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when you get your download after purchasing from Silverpoodles.",
};

const SECTIONS = [
  {
    heading: "How Delivery Works",
    body: `${site.wordmark} sells downloadable software and web dev products only — there is no physical product and nothing is shipped. Once payment is confirmed, your download link is generated automatically and emailed to you.`,
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

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="hidden lg:sticky lg:top-28 lg:block lg:h-fit">
          <ol className="space-y-2 border-l-2 border-line pl-4 text-sm">
            {SECTIONS.map((section, i) => (
              <li key={section.heading} className="text-ink-soft">
                <span className="mr-2 font-display font-bold text-fuchsia">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-2xl space-y-10">
          {SECTIONS.map((section, i) => (
            <section key={section.heading}>
              <h2 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
                <span className="text-fuchsia">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
