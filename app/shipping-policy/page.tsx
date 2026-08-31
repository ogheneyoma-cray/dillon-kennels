import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Access Policy | ${site.name}`,
  description: "How and when you get access to a zenpulse digital course after purchase.",
};

export default function AccessPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Access Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl text-ink">How Access Works</h2>
          <p className="mt-3 leading-relaxed">
            {site.wordmark} sells self-paced digital courses only — there is
            no physical product and nothing is shipped. Once payment is
            confirmed, access to your course is provisioned automatically
            and you&apos;ll receive an email with your login details and a
            direct link to your course dashboard.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Delivery Timelines</h2>
          <p className="mt-3 leading-relaxed">
            Access is granted immediately in almost all cases. If your
            confirmation email hasn&apos;t arrived within 30 minutes, please
            check your spam folder before contacting support at{" "}
            {site.email} — access issues are usually resolved within one
            business hour.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How Long Access Lasts</h2>
          <p className="mt-3 leading-relaxed">
            Every course purchase includes lifetime access. There is no
            subscription and no expiry date — you can revisit the material
            as many times as you need, on any device, from your course
            dashboard.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Account & Login Issues</h2>
          <p className="mt-3 leading-relaxed">
            If you&apos;re locked out of your course dashboard or need your
            access link resent, contact our support team at {site.email} or{" "}
            {site.phone} with your order number and we&apos;ll restore access
            promptly.
          </p>
        </section>
      </div>
    </div>
  );
}
