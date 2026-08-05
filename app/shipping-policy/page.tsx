import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "How Crewsita packs and delivers footwear — dispatch times, delivery windows, charges and what to do if a parcel goes missing.",
};

const RATES = [
  { zone: "Lagos mainland", time: "1 – 2 working days", cost: "$4" },
  { zone: "Lagos island", time: "1 – 2 working days", cost: "$4" },
  { zone: "Rest of Nigeria", time: "3 – 5 working days", cost: "$4" },
  { zone: "Orders over $60", time: "As above", cost: "Free" },
];

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader
        title="Shipping & Delivery"
        crumb="Shipping"
        intro="What happens between your order landing and a box arriving. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <h2>Dispatch</h2>
          <p>
            Orders confirmed before 15:00 WAT on a working day are checked and
            boxed the same day. Anything after that, or over a weekend, goes out
            on the next working day. Every pair is inspected for glue marks and
            stitch faults, stuffed at the toe so the upper does not crease in
            transit, wrapped, and boxed with the spare laces where the pair
            comes with them.
          </p>
          <p>
            You will get a dispatch email with a tracking number the moment the
            courier scans the parcel. If nothing has arrived in your inbox
            within two working days of ordering, check the spam folder before
            writing to us — the dispatch notice is the message that most often
            gets filtered.
          </p>

          <h2>Rates and delivery windows</h2>
          <div className="not-prose my-6 overflow-x-auto border border-line">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-mist">
                  {["Destination", "Delivery window", "Charge"].map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-3 text-left font-display text-[11px] font-semibold uppercase tracking-wide2 text-ink"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RATES.map((rate) => (
                  <tr
                    key={rate.zone}
                    className="border-b border-line last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-5 py-3 text-left font-normal text-ink"
                    >
                      {rate.zone}
                    </th>
                    <td className="px-5 py-3 text-body">{rate.time}</td>
                    <td className="px-5 py-3 font-display text-[13px] font-bold text-rose">
                      {rate.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Delivery windows are counted in working days from dispatch, not from
            the moment you place the order. They exclude public holidays. The
            free-delivery threshold is measured on the order subtotal before
            delivery is added.
          </p>

          <h2>Charges in naira</h2>
          <p>
            Prices and delivery charges on this site are held in US dollars. If
            you are reading the site in naira, the figure you see is a
            conversion at the rate shown in the footer converter, and the amount
            settled at checkout will follow that same rate. Switching currency
            changes what is displayed, never what is owed in dollar terms.
          </p>

          <h2>Address accuracy</h2>
          <p>
            We send the parcel to the address exactly as entered at checkout. If
            you spot a mistake, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> immediately — we
            can usually correct it before dispatch, but once a parcel is with
            the courier we cannot redirect it. Deliveries returned to us because
            the address was wrong or nobody was available across three attempts
            can be resent, with the second delivery charge payable by you.
          </p>

          <h2>If a parcel is late or missing</h2>
          <p>
            Contact us if tracking has not updated for three working days, or if
            the courier has marked a parcel delivered and you have not received
            it. We will open a case with the courier the same day. Claims must
            reach us within fourteen days of the expected delivery date; after
            that the courier will no longer investigate.
          </p>

          <h2>Damage in transit</h2>
          <p>
            If the box arrives crushed or the pair inside is marked, photograph
            it before wearing it and send the pictures within forty-eight hours
            of delivery. We will replace the pair if the size is still in stock
            or refund it in full if it is not, and we cover the return postage.
            This sits alongside, and does not replace, your rights under the{" "}
            <Link href="/refunds-policy">returns and refunds policy</Link>.
          </p>

          <h2>Collection</h2>
          <p>
            You may collect an order from the shop during opening hours at no
            charge. Choose any delivery option at checkout and note
            &ldquo;collection&rdquo; in the delivery notes; we will hold the
            parcel for fourteen days and email you when it is ready. Bring the
            order number.
          </p>
        </div>
      </div>
    </>
  );
}
