import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Delivery Policy | ${site.name}`,
  description: `How and when you receive access to ${site.name} courses after purchase.`,
};

export default function DeliveryPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Delivery Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-lg font-bold text-ink">Digital Delivery Only</h2>
          <p className="mt-3 leading-relaxed">
            {site.name} sells digital courses only — there is no physical
            product to ship, and nothing is mailed to you. Every purchase is
            delivered electronically to the email address you provide at
            checkout.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">When You Get Access</h2>
          <p className="mt-3 leading-relaxed">
            As soon as your payment is confirmed, we send an email
            containing your course access link and login instructions. This
            is normally instant, and rarely takes longer than a few minutes
            during high-traffic periods.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Access Duration</h2>
          <p className="mt-3 leading-relaxed">
            Course access is granted for life from the date of purchase —
            there is no expiry date and no recurring subscription. You can
            revisit any course you&apos;ve bought at any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Didn&apos;t Receive Your Access Email?</h2>
          <p className="mt-3 leading-relaxed">
            Check your spam or promotions folder first. If it&apos;s still not
            there within an hour of purchase, email {site.email} with your
            order number and we&apos;ll resend your access details right away.
          </p>
        </section>
      </div>
    </div>
  );
}
