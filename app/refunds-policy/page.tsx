import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "How to return or exchange a Mydriad piece — the window, the condition we need it in, and how refunds are paid.",
};

const STEPS = [
  {
    title: "Write to us",
    copy: "Email the customer service desk with your order number and which piece is going back. No form to fill in and no automated portal to argue with.",
  },
  {
    title: "We send the label",
    copy: "You get a return instruction and a collection window by reply, usually the same working day.",
  },
  {
    title: "We check the piece",
    copy: "A cutter looks at it within two working days of arrival — mainly to confirm it is unworn and that nothing has been altered.",
  },
  {
    title: "Refund or exchange",
    copy: "Exchanges go back out the same day. Refunds are issued to the original payment method within five working days of the check.",
  },
];

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        title="Returns & Refunds"
        crumb="Returns"
        intro="Fourteen days to change your mind, and the first size exchange is free. Last updated 1 August 2026."
      />

      <div className="ruled">
        <div className="wrap py-16">
          <div className="prose-legal">
            <h2>The window</h2>
            <p>
              You have 14 days from the day a parcel arrives to tell us you want
              to return something, and a further 14 days to get it back to us.
              Tailoring is harder to judge from a photograph than most clothing,
              which is why the window starts when the box lands rather than when
              the order is placed.
            </p>

            <h2>Condition</h2>
            <p>
              The piece needs to come back unworn, with tags attached, in the
              box it arrived in. Trying a jacket on over a shirt to check the
              shoulder is exactly what the window is for. Wearing it to an event
              and returning it on Monday is not, and we will decline those.
            </p>
            <p>
              A piece that has been shortened, taken in or otherwise altered
              cannot be returned as unworn. This does not affect your rights
              where the fault is ours.
            </p>

            <h2>The first exchange is free</h2>
            <p>
              If the size is wrong, the first exchange on any order costs you
              nothing in either direction. Tell us what arrived and what you
              need instead, and we will send the replacement as soon as the
              first is collected. Subsequent exchanges on the same order carry
              the standard $4 delivery charge.
            </p>
          </div>

          <ol className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="bg-panel p-7">
                <span className="text-[11px] tracking-micro text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-base font-light text-bone">
                  {step.title}
                </h2>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-smoke">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <div className="prose-legal mt-14">
            <h2>Who pays for the return</h2>
            <ul>
              <li>
                <strong>We do</strong> where the piece is faulty, damaged in
                transit, described wrongly, or simply not what you ordered.
              </li>
              <li>
                <strong>We do</strong> for the first size exchange on any order.
              </li>
              <li>
                <strong>You do</strong> where you have changed your mind, or for
                a second and further exchange on the same order — a flat $4.
              </li>
            </ul>

            <h2>Faults</h2>
            <p>
              A fault is a failure of construction: a seam that opens, a lining
              that tears at the armhole, a canvas that bubbles across the chest,
              a button that pulls its cloth through. Send photographs with your
              order number and we will replace the garment or refund it in full,
              including delivery both ways.
            </p>
            <p>
              Creasing in linen, a slight shade difference between two rolls of
              cloth, and the way a soft shoulder settles after a few wears are
              properties of the material rather than faults. We describe all
              three on the relevant product pages before you buy.
            </p>

            <h2>Refunds</h2>
            <p>
              Refunds go back to the original payment method within five working
              days of the piece passing its check. If you paid in naira the
              refund is issued in naira at the same conversion applied to the
              order, so the figure you get back matches the figure you paid
              regardless of what the rate has done since.
            </p>
            <p>
              Where an order qualified for free delivery and a partial return
              drops it below the $45 threshold, we do not claw the delivery
              charge back.
            </p>

            <h2>What cannot be returned</h2>
            <p>
              Altered garments, as above. Everything else in the collection can
              come back within the window — there are no final-sale pieces and a
              reduced price does not change your rights.
            </p>

            <h2>Starting a return</h2>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              {site.phone} with your order number. If the return is about fit,
              the <Link href="/size-guide">fit guide</Link> will usually tell us
              which size to send instead before the first parcel is even
              collected.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
