import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "How to return or exchange an Anikoda piece, what qualifies, and how long a refund takes.",
};

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        title="Returns & Refunds"
        crumb="Returns"
        intro="Thirty days to change your mind, free size exchanges, and a process built around the fact that children grow. Last updated 1 August 2026."
      />

      <div className="boxed py-14">
        <div className="prose-legal max-w-3xl">
          <p>
            Buying clothes for a child who is not standing next to you is
            guesswork, and our returns window is longer than most because of it.
            You have 30 days from delivery to start a return for any reason at
            all — double the statutory minimum, and deliberately so.
          </p>

          <h2>What we can accept back</h2>
          <ul>
            <li>Unworn beyond trying on, and unwashed.</li>
            <li>With all original tags still attached.</li>
            <li>In its original packaging where that is still intact.</li>
            <li>Shoes returned unmarked, having only been tried indoors.</li>
          </ul>
          <p>
            The shoe point matters more than it sounds. A sole that has been
            outside picks up scuffs within minutes and cannot be resold, so
            please try new shoes on carpet before committing to them.
          </p>

          <h2>What we cannot accept back</h2>
          <p>
            Pierced-ear accessories and any item sold as a final-sale clearance
            piece, which is marked as such on the product page before you buy.
            Gift cards are not returnable. None of this affects your rights if
            an item arrives faulty or is not as described.
          </p>

          <h2>Size exchanges are free</h2>
          <p>
            This is the part parents use most. The first size exchange on any
            order is free anywhere in Kwara State — we collect the wrong size
            and deliver the right one in the same visit, at no charge. Elsewhere
            in Nigeria we cover the outbound leg of the replacement and you
            cover the return. Just email us the order number and the size you
            need, and we will hold the replacement for ten days while the first
            piece comes back.
          </p>

          <h2>Starting a return</h2>
          <p>
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-tangerine underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with your order number and which pieces you are sending back. You do
            not need to give a reason, though it helps us if you do. We reply
            within one working day with a return authorisation and the address.
          </p>
          <p>
            Within Ilorin we arrange a courier pickup at your convenience.
            Elsewhere you arrange the return shipping, and we strongly recommend
            a tracked service — until the parcel reaches us it is still your
            responsibility, and an untracked return that goes missing cannot be
            refunded.
          </p>

          <h2>Who pays return postage</h2>
          <p>
            If the piece is faulty, damaged in transit, or not what you ordered,
            we cover the return cost entirely and refund your original delivery
            charge as well. If you are simply changing your mind, return postage
            is yours — within Ilorin we deduct a flat ₦2,000 pickup fee from the
            refund, which is less than arranging it yourself.
          </p>

          <h2>Refund timing</h2>
          <p>
            We inspect returns on the day they arrive and email you the outcome.
            Approved refunds are issued to the original payment method within
            three working days. How long it then takes to appear depends on your
            bank: Nigerian cards are usually 3 to 5 working days, international
            cards up to 10. We refund the price you actually paid, including any
            reduction that applied at the time.
          </p>

          <h2>Faulty pieces</h2>
          <p>
            Children&apos;s clothes take a beating, and we would rather know
            when something fails. If a seam opens, a popper pulls out, a sole
            separates or a print cracks in normal wear, tell us within six
            months of delivery and we will repair it, replace it, or refund it
            in full, at your choice. Send a photograph with your first message
            and we can usually resolve it without any back and forth.
          </p>
          <p>
            What is not a fault: ordinary wear at the knee and cuff, gradual
            softening and fading, creasing in linen and lawn, and the marks that
            come from a garment being used the way a child uses it. Those are
            described on each product page before you buy.
          </p>

          <h2>Your statutory rights</h2>
          <p>
            Nothing in this policy limits the rights you have under the Federal
            Competition and Consumer Protection Act. These terms sit alongside
            our{" "}
            <Link
              href="/terms-and-conditions"
              className="font-bold text-tangerine underline underline-offset-4"
            >
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/shipping-policy"
              className="font-bold text-tangerine underline underline-offset-4"
            >
              shipping policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
