import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Echo E-Rom Ltd collects, uses, and protects your personal data.",
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
            When you book a service, contact us, or browse our site, we may
            collect information including your name, email address, phone
            number, and service history. Where a service requires temporary
            access to your systems (such as a network setup or data
            recovery), we only collect what is strictly necessary to
            complete that engagement. Payment card details entered at
            checkout are used solely to process your transaction and are
            not stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use the information you provide to schedule and deliver
            booked services, respond to support inquiries, send booking
            confirmations and follow-up communication, and improve the
            services we offer. We do not sell your personal information to
            third parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cookies & Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember the contents of
            your cart and your preferred currency between visits. This data
            is stored on your device and is not transmitted to our servers.
            You can clear this data at any time by clearing your browser's
            site data for echoerom.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Data Handled During Service Delivery</h2>
          <p className="mt-3 leading-relaxed">
            Services such as email migration, cloud backup setup, or data
            recovery may require temporary access to files or accounts you
            authorize. We access only what is required to complete the
            booked service, do not retain copies once the engagement is
            closed, and never share this data with third parties outside
            what is required to deliver the service itself.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You have the right to request access to, correction of, or
            deletion of your personal information held by us. To make such a
            request, please contact us at {site.email} and we will respond
            within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            If you have any questions about this Privacy Policy, please
            reach out to us at {site.email} or {site.phone}, or write to us
            at {site.addressOneLine}.
          </p>
        </section>
      </div>
    </div>
  );
}
