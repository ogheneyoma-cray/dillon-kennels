import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Xira Dix delivery timelines, costs and coverage across Lagos, Nigeria and international destinations.",
};

const ZONES = [
  {
    zone: "Lagos Island, Lekki, Ajah, Ikoyi, Victoria Island",
    time: "1 – 2 working days",
    cost: "₦2,500 · free over ₦75,000",
  },
  {
    zone: "Lagos Mainland",
    time: "2 – 3 working days",
    cost: "₦3,000 · free over ₦75,000",
  },
  {
    zone: "Other Nigerian states",
    time: "3 – 6 working days",
    cost: "From ₦5,500, calculated at checkout",
  },
  {
    zone: "West Africa (ECOWAS)",
    time: "7 – 12 working days",
    cost: "From $22, calculated at checkout",
  },
  {
    zone: "Rest of world",
    time: "10 – 21 working days",
    cost: "From $38, calculated at checkout",
  },
];

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader
        kicker="Customer care"
        title="Shipping Policy"
        intro="Where we deliver, what it costs and how long it takes. Last updated 1 August 2026."
      />

      <div className="shell py-14 lg:py-20">
        <div className="prose-legal max-w-3xl">
          <p>
            Everything is packed by hand at our studio in Ajah and dispatched
            within 48 hours of your order, Monday to Saturday. Orders placed
            after 3pm on a Saturday are packed the following Monday.
          </p>

          <h2>Delivery zones and timelines</h2>
          <p>
            Working days exclude Sundays and Nigerian public holidays. The
            timelines below start from dispatch, not from when you order.
          </p>
        </div>

        <div className="mt-8 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-midnight/15">
                <th className="pb-3 pr-4 font-medium text-midnight">Zone</th>
                <th className="pb-3 pr-4 font-medium text-midnight">
                  After dispatch
                </th>
                <th className="pb-3 font-medium text-midnight">Cost</th>
              </tr>
            </thead>
            <tbody className="text-midnight/75">
              {ZONES.map((row) => (
                <tr key={row.zone} className="border-b border-midnight/10">
                  <td className="py-3.5 pr-4">{row.zone}</td>
                  <td className="py-3.5 pr-4 whitespace-nowrap">{row.time}</td>
                  <td className="py-3.5">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-legal mt-10 max-w-3xl">
          <h2>Free delivery</h2>
          <p>
            Delivery is free anywhere in Lagos State on orders over ₦75,000
            (roughly $48). The threshold is applied to the order value after any
            reductions and before delivery is added. It does not currently
            extend beyond Lagos.
          </p>

          <h2>Tracking</h2>
          <p>
            You will get a tracking number by email as soon as the courier scans
            the parcel. If 48 hours pass after your dispatch confirmation and no
            tracking has arrived, write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-orchid underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            and we will chase it from our end.
          </p>

          <h2>Addresses</h2>
          <p>
            Please give us a landmark alongside the street address — it makes a
            genuine difference to how quickly couriers find you in Lagos, and
            there is a delivery notes field at checkout for exactly this. We
            deliver to residential and business addresses but not to P.O. boxes.
            If an address turns out to be wrong or incomplete and the parcel
            comes back to us, we will resend it once you confirm the correct
            address; the second delivery charge is payable by you.
          </p>

          <h2>Customs and duties on international orders</h2>
          <p>
            Prices on this site do not include import duty or local taxes for
            destinations outside Nigeria. Where those apply they are charged by
            the destination country and are payable by you, usually to the
            courier before delivery. We cannot calculate them in advance or
            reimburse them, and we cannot mark a parcel as a gift or understate
            its value.
          </p>

          <h2>Delays outside our control</h2>
          <p>
            Courier backlogs, customs inspections, weather and public holidays
            all cause occasional delays. We will keep you informed when we know
            something, but we cannot compensate for a delay caused by a third
            party. If a parcel is genuinely lost in transit we will replace it
            or refund it in full.
          </p>

          <h2>Something arrived damaged</h2>
          <p>
            Photograph the parcel and the piece before removing any tags, and
            send the photographs to us within 48 hours of delivery. We will
            arrange a replacement or a full refund, including the delivery you
            paid, and cover the cost of returning the damaged item. This is
            separate from the ordinary right to change your mind set out in the{" "}
            <Link
              href="/refunds-policy"
              className="text-orchid underline underline-offset-4"
            >
              refunds policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
