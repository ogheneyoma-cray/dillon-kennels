import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Feteframe collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you place an order, contact us, or browse our site, we may collect your name, email address,
            phone number, delivery address, and order history. Payment card details entered at checkout are
            used solely to process your transaction and are never stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use your information to process and deliver orders, respond to customer inquiries, and send
            order confirmations and delivery updates. We do not sell your personal information to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cookies & Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember your cart and preferred currency between visits.
            This data stays on your device and is not transmitted to our servers. You can clear it anytime via
            your browser's site data settings for feteframe.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Sharing With Third Parties</h2>
          <p className="mt-3 leading-relaxed">
            We share limited order information — name, address and phone number — with logistics partners
            solely to deliver your order. Payment information is processed through secure third-party
            processors and never stored on our systems in full.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You may request access to, correction of, or deletion of your personal information by contacting
            us at {site.email}. We will respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this Privacy Policy can be sent to {site.email} or {site.phone}, or mailed to{" "}
            {site.addressOneLine}.
          </p>
        </section>
      </div>
    </div>
  );
}
