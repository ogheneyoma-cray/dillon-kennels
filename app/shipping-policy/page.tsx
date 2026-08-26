import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shipping Policy | ${site.name}`,
  description: "Shipping timelines, costs, and coverage for Ticad Iboo orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="section-heading mt-3">Shipping Policy</h1>
      <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-ink/80">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Order Processing</h2>
          <p className="mt-3 leading-relaxed">
            Every order is processed from our Lagos warehouse. Orders are
            processed Monday through Saturday, excluding public holidays.
            Please allow 1–2 business days for order processing before your
            item ships. You'll receive an email confirmation as soon as your
            order has been dispatched.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Delivery Areas &amp; Timelines</h2>
          <p className="mt-3 leading-relaxed">
            We currently deliver across Nigeria. Orders within Lagos State
            typically arrive within 1–3 business days after dispatch. Orders
            to other states are delivered via our logistics partners and
            typically arrive within 3–7 business days, depending on the
            destination's distance from Lagos. Remote areas may occasionally
            require additional time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Shipping Costs</h2>
          <p className="mt-3 leading-relaxed">
            Shipping costs are calculated at checkout based on your delivery
            address and the size of your order. Orders within Lagos State
            totalling over $150 qualify for free standard delivery. Orders
            below this threshold, and all orders outside Lagos State, will
            show an itemized shipping fee before you confirm payment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Tracking Your Order</h2>
          <p className="mt-3 leading-relaxed">
            Once your order ships, you'll receive tracking information by
            email to the address provided at checkout. If you haven't
            received tracking information within 3 business days of placing
            your order, please contact our support team at{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>{" "}
            or {site.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Failed &amp; Delayed Deliveries</h2>
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
