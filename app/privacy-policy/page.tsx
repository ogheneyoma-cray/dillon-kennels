import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Cyber Travellers collects, uses, and protects your personal data.",
};

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you book a service, contact us, or browse the site, we may collect your name, email address, phone number and order history. Card details entered at checkout are used solely to process your payment and are never stored on our servers. We also collect limited technical data, such as browser type and general usage patterns, to help us improve the site.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to process bookings and schedule the services you purchase, respond to support requests, send booking confirmations, and, where you've opted in, share updates about new services. We do not sell your personal information to anyone.",
  },
  {
    heading: "Local Storage",
    body: "The site uses browser local storage to remember your cart contents and preferred currency between visits. This stays on your device and is never sent to our servers — you can clear it any time by clearing your browser's site data for cybertravellers.com.",
  },
  {
    heading: "Third Parties",
    body: "Payments are processed through secure third-party payment processors and full card details are never stored on our systems. We do not share your personal information with any other third party except where required by law.",
  },
  {
    heading: "Your Rights",
    body: `You can request access to, correction of, or deletion of your personal information at any time by contacting ${site.email}. We will respond within a reasonable timeframe.`,
  },
  {
    heading: "Contact Us",
    body: `Questions about this policy can be sent to ${site.email} or ${site.phone}, or mailed to ${site.addressOneLine}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>

      <div className="mt-8 max-w-3xl overflow-hidden rounded-lg border border-line">
        <div className="flex items-center justify-between bg-gate px-5 py-3 font-display text-xs uppercase tracking-widest2 text-radar">
          <span>Manifest: privacy-policy</span>
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
