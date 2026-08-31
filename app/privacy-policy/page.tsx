import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Webreid collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">What We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you enroll in a course, contact us, or browse the site, we
            may collect your name, email address, phone number and order
            history. Card details entered at checkout are used solely to
            process your payment and are never stored on our servers. We
            also collect limited technical data, such as browser type and
            general usage patterns, to help us improve the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How We Use It</h2>
          <p className="mt-3 leading-relaxed">
            We use your information to process orders and grant access to
            the courses you purchase, respond to support requests, send
            order confirmations and login details, and, where you&apos;ve opted
            in, share updates about new courses. We do not sell your
            personal information to anyone.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Local Storage</h2>
          <p className="mt-3 leading-relaxed">
            The site uses browser local storage to remember your cart
            contents and preferred currency between visits. This stays on
            your device and is never sent to our servers — you can clear it
            any time by clearing your browser&apos;s site data for webreid.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Third Parties</h2>
          <p className="mt-3 leading-relaxed">
            Payments are processed through secure third-party payment
            processors and full card details are never stored on our
            systems. We do not share your personal information with any
            other third party except where required by law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You can request access to, correction of, or deletion of your
            personal information at any time by contacting {site.email}. We
            will respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy can be sent to {site.email} or{" "}
            {site.phone}, or mailed to {site.addressOneLine}.
          </p>
        </section>
      </div>
    </div>
  );
}
