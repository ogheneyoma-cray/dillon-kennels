import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Site Optex collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you book a service, contact us, or browse our site, we may
            collect your name, email address, phone number and service
            history. Where a service requires temporary access to your
            systems, we only collect what is strictly necessary to complete
            that engagement. Payment card details entered at checkout are
            used solely to process your transaction and are never stored on
            our servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use your information to schedule and deliver booked services,
            respond to support inquiries, send booking confirmations and
            follow-up communication. We do not sell your personal
            information to third parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Cookies & Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember your cart and
            preferred currency between visits. This data stays on your
            device and is never transmitted to our servers. You can clear it
            anytime through your browser's site data settings for
            siteoptex.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Data Handled During Service Delivery</h2>
          <p className="mt-3 leading-relaxed">
            Services such as Cloud Storage Setup or Computer Repair &
            Diagnostics may require temporary access to files or devices you
            authorize. We access only what is required, do not retain
            copies once the engagement is closed, and never share this data
            with third parties beyond what is required to deliver the
            service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            {site.email}. We will respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-extrabold uppercase text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this Privacy Policy can be sent to {site.email}{" "}
            or {site.phone}, or mailed to {site.addressOneLine}.
          </p>
        </section>
      </div>
    </div>
  );
}
