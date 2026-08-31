import type { Metadata } from "next";
import { site, addressLines } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `How ${site.name} collects, uses, and protects your personal data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl uppercase text-ink">Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you place an order, contact us, or browse this site, we may
            collect information including your name, email address, phone
            number, delivery address, and order history. Payment card
            details entered at checkout are used solely to process your
            transaction and are not stored on our servers. We also collect
            limited technical information, such as browser type and general
            usage patterns, to help us improve the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-ink">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use the information you provide to process and deliver your
            orders, respond to customer service inquiries, and send order
            confirmations and shipping updates. We do not sell your personal
            information to third parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-ink">Cookies &amp; Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember the contents of
            your shopping cart and your preferred currency between visits.
            This data is stored on your device and is not transmitted to our
            servers. You can clear this data at any time by clearing your
            browser&apos;s site data for potofoil.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-ink">Sharing With Third Parties</h2>
          <p className="mt-3 leading-relaxed">
            We share limited order information — such as your name, address,
            and phone number — with logistics partners solely for the
            purpose of delivering your order. Payment information is
            processed through secure third-party payment processors and is
            never stored on our systems in full.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You have the right to request access to, correction of, or
            deletion of your personal information held by us. To make such a
            request, please contact us at {site.email} and we will respond
            within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl uppercase text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            If you have any questions about this Privacy Policy, please
            reach out to us at {site.email} or {site.phone}, or write to us
            at {addressLines.join(", ")}.
          </p>
        </section>
      </div>
    </div>
  );
}
