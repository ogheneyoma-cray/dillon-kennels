import type { Metadata } from "next";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Ticad Iboo collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you buy a product, contact us, or browse our site, we may
            collect your name, email address, phone number and delivery
            address. Payment card details entered at checkout are used
            solely to process your transaction through our hosted payment
            partner and are not stored on our servers. We also collect
            limited technical information, such as browser type and general
            usage patterns, to help us improve the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use the information you provide to process and deliver your
            order, send order confirmations and delivery updates, respond to
            support enquiries, and, where you've opted in, share updates
            about new products. We do not sell your personal information to
            third parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cookies &amp; Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember the contents of
            your cart and your preferred currency between visits. This data
            is stored on your device and is not transmitted to our servers.
            You can clear it at any time by clearing your browser's site
            data for this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Sharing With Third Parties</h2>
          <p className="mt-3 leading-relaxed">
            Payment information is processed through a secure third-party
            payment processor and is never stored on our systems in full.
            Delivery details are shared with our logistics partners only to
            the extent needed to complete your delivery. We do not share
            your personal details with anyone outside the team that fulfils
            and supports your order.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You have the right to request access to, correction of, or
            deletion of your personal information held by us. To make such
            a request, please contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>{" "}
            and we will respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            If you have any questions about this Privacy Policy, please
            reach out to us at{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>{" "}
            or write to us at {addressLines.join(", ")}.
          </p>
        </section>
      </div>
    </div>
  );
}
