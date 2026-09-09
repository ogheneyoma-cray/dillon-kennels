import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: "How and when your Cyber Travellers IT service is delivered after purchase.",
};

const SECTIONS = [
  {
    heading: "How Delivery Works",
    body: `${site.wordmark} sells remote IT services — there is no physical product and nothing is shipped. Once payment is confirmed, our team contacts you by email or phone to schedule and scope the work.`,
  },
  {
    heading: "Timing",
    body: `We reach out within one business day of payment to arrange a time. If you haven't heard from us within that window, check your spam folder before contacting ${site.email}.`,
  },
  {
    heading: "Ongoing Support",
    body: "Services such as monthly helpdesk support run for the period stated on the service page and do not renew automatically — you can purchase again whenever you need continued coverage.",
  },
  {
    heading: "Rescheduling & Issues",
    body: `If you need to reschedule or run into an issue with a service already underway, contact us at ${site.email} or ${site.phone} with your order number and we'll sort it out promptly.`,
  },
];

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-lg border border-line">
        <div className="flex items-center justify-between bg-gate px-5 py-3 font-display text-xs uppercase tracking-widest2 text-radar">
          <span>Manifest: delivery-policy</span>
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
