import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Lawin Store collects, uses, and protects your personal data.",
};

const SECTIONS = [
  {
    heading: "What We Collect",
    body: "When you order a product, contact us, or browse the site, we may collect your name, email address, phone number and order history. Card details entered at checkout are used solely to process your payment and are never stored on our servers. We also collect limited technical data, such as browser type and general usage patterns, to help us improve the site.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to process orders and deliver the download links for products you purchase, respond to support requests, send order confirmations, and, where you've opted in, share updates about new products. We do not sell your personal information to anyone.",
  },
  {
    heading: "Local Storage",
    body: "The site uses browser local storage to remember your cart contents and preferred currency between visits. This stays on your device and is never sent to our servers — you can clear it any time by clearing your browser's site data for lawinstore.com.",
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
