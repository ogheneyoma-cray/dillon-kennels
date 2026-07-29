import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Vergemind",
  description: "Shipping timelines, costs, and coverage for Vergemind orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow text-center">Legal</p>
      <h1 className="section-heading mt-3 text-center">Shipping Policy</h1>
      <p className="mt-2 text-center text-sm text-bone/50">
        Last updated: July 2026
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-8 text-bone/80">
        <section>
          <h2 className="font-display text-xl text-bone">Order Processing</h2>
          <p className="mt-3 leading-relaxed">
            Every Vergemind order is packed and dispatched from our Ilorin
            base at 114, Irewolede Area, Ilorin West Local Government Area,
            Ilorin, Kwara State. Orders are processed Monday through
            Saturday, excluding public holidays. Please allow 1–2 business
            days for processing before your order ships — you'll receive an
            email confirmation as soon as it leaves our hands.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Delivery Areas & Timelines
          </h2>
          <p className="mt-3 leading-relaxed">
            We currently deliver across Nigeria only. Orders within Ilorin
            typically arrive within 1–3 business days after dispatch. Orders
            to other states are delivered through our logistics partners
            and typically arrive within 3–7 business days, depending on
            distance from Ilorin and local conditions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">Shipping Costs</h2>
          <p className="mt-3 leading-relaxed">
            Shipping costs are calculated at checkout based on your delivery
            address and order size. Orders over $120 qualify for
            complimentary standard shipping anywhere in Nigeria. Orders
            below this threshold will show an itemized shipping fee before
            you confirm payment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Tracking Your Order
          </h2>
          <p className="mt-3 leading-relaxed">
            Once your order ships, you'll receive tracking information by
            email and SMS to the phone number provided at checkout. If you
            haven't received tracking information within 3 business days of
            placing your order, contact our support team at
            info@vergemind.com or +234 808 361 7874.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-bone">
            Failed & Delayed Deliveries
          </h2>
          <p className="mt-3 leading-relaxed">
            If a delivery attempt fails because no one is available to
            receive the package, our logistics partner will attempt
            redelivery or arrange a nearby collection point. Vergemind is
            not responsible for delays caused by incomplete or inaccurate
            delivery addresses, so please double-check your details at
            checkout.
          </p>
        </section>
      </div>
    </div>
  );
}
