import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "How Mydriad packs and delivers tailoring — dispatch times, delivery windows, charges and what to do if a parcel goes missing.",
};

const RATES = [
  { zone: "Lagos mainland", time: "1 – 2 working days", cost: "$4" },
  { zone: "Lagos island", time: "1 – 2 working days", cost: "$4" },
  { zone: "Rest of Nigeria", time: "3 – 5 working days", cost: "$4" },
  { zone: "Orders over $45", time: "As above", cost: "Free" },
];

export default function ShippingPolicyPage() {
  return (
    <>
      <PageHeader
        title="Shipping & Delivery"
        crumb="Shipping"
        intro="What happens between your order landing and a box arriving. Last updated 1 August 2026."
      />

      <div className="ruled">
        <div className="wrap py-16">
          <div className="prose-legal">
            <h2>Dispatch</h2>
            <p>
              Orders confirmed before 15:00 WAT on a working day are pressed and
              boxed the same day. Anything after that, or over a weekend, goes
              out on the next working day. Every jacket is pressed on the
              shoulder board, folded once at the waist, and boxed flat rather
              than bagged — a tailored shoulder does not survive being crushed
              into a courier sack.
            </p>
            <p>
              You will receive a tracking number by email the moment the courier
              scans the parcel out of the workroom.
            </p>
          </div>

          <div className="mt-14 max-w-column overflow-x-auto">
            <table className="w-full min-w-[440px] border-collapse text-left text-sm">
              <caption className="pb-5 text-left text-[11px] uppercase tracking-micro text-brass">
                Delivery windows and charges
              </caption>
              <thead>
                <tr className="border-b border-rule">
                  {["Destination", "Typical time", "Charge"].map((column) => (
                    <th
                      key={column}
                      className="pb-4 pr-4 text-[11px] font-medium uppercase tracking-micro text-slate"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-light text-smoke">
                {RATES.map((rate) => (
                  <tr key={rate.zone} className="border-b border-rule/60">
                    <td className="py-4 pr-4 text-bone">{rate.zone}</td>
                    <td className="py-4 pr-4">{rate.time}</td>
                    <td className="py-4 pr-4 text-brass">{rate.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-legal mt-14">
            <h2>Delivery charges</h2>
            <p>
              Delivery is a flat $4 anywhere in Nigeria, and free on orders over
              $45. The charge is shown separately at checkout before you place
              the order, and converts to naira alongside everything else if you
              have switched currency.
            </p>

            <h2>Addresses</h2>
            <p>
              Give us the address where somebody will actually be during working
              hours, and use the delivery notes field for landmarks, gate
              colours and anything a courier who does not know the street would
              need. Most failed deliveries in Lagos are address problems rather
              than courier problems.
            </p>
            <p>
              We can change an address while the order is still in the workroom.
              Once it has been scanned by the courier the address is theirs to
              change, not ours, and we will pass on their instructions.
            </p>

            <h2>Delays</h2>
            <p>
              Fuel scarcity, flooding, public holidays and closed roads all move
              delivery windows in ways no courier controls. Where a parcel is
              running past the window above, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> with the order
              number and we will chase it directly and tell you what we learn.
            </p>

            <h2>Missing parcels</h2>
            <p>
              If tracking shows delivered and nothing arrived, tell us within
              seven days. We will open a trace with the courier, which usually
              takes three to five working days. Where a parcel cannot be found
              we replace the order or refund it in full, and we do not ask you
              to argue with the courier on our behalf.
            </p>

            <h2>Checking the parcel</h2>
            <p>
              Open the box while the courier is still there if you can. If
              something is damaged in transit, photograph it before removing the
              garment and send the photographs with your order number — that
              makes the claim straightforward for everyone. Faults, damage and
              wrong items are all covered by the{" "}
              <Link href="/refunds-policy">returns policy</Link> at our cost.
            </p>

            <h2>International orders</h2>
            <p>
              We currently deliver within Nigeria only. If you are outside the
              country and want a piece, write to {site.phone} or{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and we will tell
              you honestly whether we can arrange it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
