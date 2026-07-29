import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vergemind",
  description: "How Vergemind collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow text-center">Legal</p>
      <h1 className="section-heading mt-3 text-center">Privacy Policy</h1>
      <p className="mt-2 text-center text-sm text-bone/50">
        Last updated: July 2026
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl text-bone">
            Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            When you place an order, contact us, or subscribe to our list,
            we may collect your name, email address, phone number, delivery
            address, size preferences, and order history. Payment card
            details entered at checkout are used solely to process your
            transaction and are never stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            How We Use Your Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We use the information you provide to process and deliver
            orders, respond to customer service inquiries, send order and
            shipping updates, and — where you've opted in — share news about
            new drops and restocks. We do not sell your personal
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Cookies & Local Storage
          </h2>
          <p className="mt-3 leading-relaxed">
            Our site uses browser local storage to remember the contents of
            your shopping bag and your preferred currency between visits.
            This data stays on your device and is never transmitted to our
            servers. You can clear it at any time by clearing your
            browser's site data for this domain.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Sharing With Third Parties
          </h2>
          <p className="mt-3 leading-relaxed">
            We share limited order details — such as name, address, and
            phone number — with logistics partners solely to deliver your
            order. Payment information is processed through secure
            third-party payment processors and is never stored on our
            systems in full.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You may request access to, correction of, or deletion of your
            personal information at any time. To make a request, email
            info@vergemind.com and we'll respond within a reasonable
            timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this Privacy Policy can be sent to
            info@vergemind.com or +234 808 361 7874, or by post to 114,
            Irewolede Area, Ilorin West Local Government Area, Ilorin,
            Kwara State.
          </p>
        </section>
      </div>
    </div>
  );
}
