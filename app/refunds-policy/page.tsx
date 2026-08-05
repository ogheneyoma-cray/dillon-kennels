import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "Crewsita's returns policy — the fourteen-day window, what counts as unworn, how exchanges work and how refunds are paid back.",
};

const STEPS = [
  {
    title: "Write to us",
    copy: "Email the order number and say whether you want an exchange or a refund. You do not need to give a reason, though it helps us fix the size guide if you do.",
  },
  {
    title: "We send the label",
    copy: "You get return instructions within one working day, and a drop-off point if you are in Lagos.",
  },
  {
    title: "We check the pair",
    copy: "Returns are inspected within two working days of arriving. Exchanges are dispatched the same day the check clears.",
  },
  {
    title: "Money goes back",
    copy: "Refunds are issued to the original payment method within five working days of the check clearing.",
  },
];

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        title="Returns & Refunds"
        crumb="Returns"
        intro="Fourteen days to change your mind, and a straightforward route back if the size is wrong. Last updated 1 August 2026."
      />

      <div className="wrap py-14 lg:py-16">
        <div className="prose-legal">
          <h2>The window</h2>
          <p>
            You have fourteen days from the day a parcel is delivered to tell us
            you want to return it, and a further fourteen days to get it back to
            us. Both counts run from the delivery date on the courier record.
          </p>

          <h2>What counts as unworn</h2>
          <p>
            Shoes are returnable if they have only been tried on indoors, on a
            clean floor, the way you would try them on in a shop. That means:
          </p>
          <ul>
            <li>No scuffing or dirt on the sole beyond light indoor marks.</li>
            <li>No creasing across the vamp from walking any distance.</li>
            <li>
              Original box intact — it is part of the product, so please do not
              tape a courier label directly onto it.
            </li>
            <li>All spare laces, dust bags and inserts included.</li>
          </ul>
          <p>
            A pair worn outside cannot be resold and cannot be returned. This is
            the one part of this policy we cannot be flexible about.
          </p>

          <h2>How it works</h2>
          <ol className="not-prose my-6 grid gap-5 sm:grid-cols-2">
            {STEPS.map((step, index) => (
              <li key={step.title} className="border border-line p-6">
                <span className="font-display text-[12px] font-bold tracking-wide2 text-rose">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[13px] font-bold uppercase tracking-wide2 text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <h2>Who pays the return postage</h2>
          <ul>
            <li>
              <strong>We do</strong> if the pair is faulty, damaged in transit,
              or not what you ordered.
            </li>
            <li>
              <strong>We do</strong> on your first size exchange for any order —
              getting the size right is our job as much as yours.
            </li>
            <li>
              <strong>You do</strong> on a change-of-mind return, and on any
              second or subsequent exchange of the same order.
            </li>
          </ul>

          <h2>Exchanges</h2>
          <p>
            Exchanges are for a different size of the same pair. If the size you
            want is out of stock we will tell you before you send anything back,
            and you can wait for the next run or take a refund instead. To swap
            for a different style entirely, return the first pair for a refund
            and place a fresh order — it is faster than processing it as an
            exchange.
          </p>

          <h2>Refunds</h2>
          <p>
            Refunds cover the price of the pair and, where the return is our
            fault, the original delivery charge. They are paid to the method you
            paid with, within five working days of the returned pair passing
            inspection. Your bank may take a further few days to show it.
          </p>

          <h2>Faults after wearing</h2>
          <p>
            A sole that separates, a strap that tears at the anchor or stitching
            that comes away within six months of delivery is a manufacturing
            fault, not wear, and we will replace or refund the pair. Send
            photographs to <a href={`mailto:${site.email}`}>{site.email}</a>.
            Ordinary wear — worn-down heel tips, creasing across the vamp,
            scuffed toes, faded suede — is not a fault.
          </p>

          <h2>What cannot be returned</h2>
          <ul>
            <li>Pairs worn outdoors.</li>
            <li>Pairs returned without the original box.</li>
            <li>
              Pairs damaged by being cleaned in a way the product page warns
              against — machine-washing a vulcanised sneaker, for instance.
            </li>
          </ul>

          <h2>Getting it right first time</h2>
          <p>
            Most returns we see are half a size out. The{" "}
            <Link href="/size-guide">size guide</Link> converts EU, UK and US and
            says which way each last runs, and we will happily check a foot
            measurement against a specific pair if you{" "}
            <Link href="/contact">write to us</Link> before ordering.
          </p>

          <h2>Your statutory rights</h2>
          <p>
            Nothing in this policy limits the rights you have under the Federal
            Competition and Consumer Protection Act. Where our policy is more
            generous, our policy applies.
          </p>
        </div>
      </div>
    </>
  );
}
