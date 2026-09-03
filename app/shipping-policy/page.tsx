import type { Metadata } from "next";
import { site, addressLines } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shipping Policy | ${site.name}`,
  description: `Shipping timelines, costs, and coverage for ${site.name} orders.`,
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Shipping Policy</h1>
      <p className="mt-2 text-sm text-ink-soft/70">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-medium text-navy">Order Processing</h2>
          <p className="mt-3 leading-relaxed">
            Every order placed with {site.name} is processed from our
            warehouse at {addressLines.join(", ")}. Orders are processed
            Monday through Saturday, excluding public holidays. Please allow
            1–2 business days for order processing before your item ships.
            You will receive an email confirmation as soon as your order has
            been dispatched.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">Delivery Areas &amp; Timelines</h2>
          <p className="mt-3 leading-relaxed">
            We currently deliver across Nigeria only. Orders delivered
            within Lagos typically arrive within 1–3 business days after
            dispatch. Orders to other states are delivered via our
            logistics partners and typically arrive within 3–7 business
            days, depending on the destination&apos;s distance from Lagos
            State and local road conditions. Remote areas may occasionally
            require additional time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">Shipping Costs</h2>
          <p className="mt-3 leading-relaxed">
            Shipping costs are calculated at checkout based on your delivery
            address and the size of your order. Orders totalling over $75
            qualify for free standard delivery. Orders below this
            threshold will show an itemized shipping fee before you confirm
            payment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">Tracking Your Order</h2>
          <p className="mt-3 leading-relaxed">
            Once your order ships, you&apos;ll receive tracking information
            by email to the address provided at checkout. If you
            haven&apos;t received tracking information within 3 business
            days of placing your order, please contact our support team at
            {" "}
            {site.email} or {site.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-medium text-navy">Failed &amp; Delayed Deliveries</h2>
          <p className="mt-3 leading-relaxed">
            If a delivery attempt fails because no one is available to
            receive the package, our logistics partner will attempt
            redelivery or contact you to arrange pickup at a nearby
            collection point. {site.name} is not responsible for delays
            caused by incomplete or inaccurate delivery addresses, so please
            double-check your address details at checkout.
          </p>
        </section>
      </div>
    </div>
  );
}
