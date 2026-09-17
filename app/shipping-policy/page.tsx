import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shipping Policy | ${site.name}`,
  description: "Shipping timelines, costs, and coverage for Evintat orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Shipping Policy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: September 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink-soft">
        <section>
          <h2 className="font-display text-xl italic text-ink">Order Processing</h2>
          <p className="mt-3 leading-relaxed">
            Every order placed with Evintat is processed from our FCT studio. Orders are processed Monday
            through Saturday, excluding public holidays. Please allow 1-2 business days for order processing
            before your item ships, and you'll receive an email confirmation once dispatched.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Delivery Areas & Timelines</h2>
          <p className="mt-3 leading-relaxed">
            We currently deliver across Nigeria only. Orders within the FCT typically arrive within 1-3
            business days after dispatch. Orders to other states are delivered via our logistics partners and
            typically arrive within 3-7 business days, depending on distance and local road conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Shipping Costs</h2>
          <p className="mt-3 leading-relaxed">
            Shipping costs are calculated at checkout based on your delivery address and the size of your
            order. Orders within the FCT totalling over ₦75,000 qualify for free standard delivery.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Tracking Your Order</h2>
          <p className="mt-3 leading-relaxed">
            Once your order ships, you'll receive tracking information by email to the address provided at
            checkout. If you haven't received tracking within 3 business days, contact us at {site.email} or{" "}
            {site.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl italic text-ink">Failed & Delayed Deliveries</h2>
          <p className="mt-3 leading-relaxed">
            If a delivery attempt fails because no one is available to receive the package, our logistics
            partner will attempt redelivery or arrange a nearby collection point. Evintat is not responsible
            for delays caused by incomplete or inaccurate delivery addresses.
          </p>
        </section>
      </div>
    </div>
  );
}
