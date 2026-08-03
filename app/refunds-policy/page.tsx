import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "How to return or exchange an Adom Attic piece, what qualifies, and how long a refund takes.",
};

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        title="Returns & Refunds"
        crumb="Returns"
        intro="Thirty days to change your mind and a free first size exchange. Last updated 1 August 2026."
      />

      <div className="frame py-14">
        <div className="prose-legal max-w-3xl">
          <p>
            Buying clothes you have not tried on is guesswork, and buying them
            at an age when you are still growing is worse. You have 30 days from
            delivery to start a return for any reason at all — double the
            statutory minimum, and deliberately so.
          </p>

          <h2>What we can accept back</h2>
          <ul>
            <li>Unworn beyond trying on, and unwashed.</li>
            <li>With all original tags still attached.</li>
            <li>In its original packaging where that is still intact.</li>
            <li>Shoes returned unmarked, having only been tried indoors.</li>
          </ul>
          <p>
            The shoe point matters more than it sounds. A vulcanised sole picks
            up scuffs within minutes of going outside and cannot then be resold,
            so please try new pairs on carpet before committing to them.
          </p>

          <h2>What we cannot accept back</h2>
          <p>
            Any item sold as a final-sale clearance piece, which is marked as
            such on the product page before you buy, and gift cards. None of
            this affects your rights if an item arrives faulty or is not as
            described.
          </p>

          <h2>The first size exchange is free</h2>
          <p>
            This is the part most people use. The first size exchange on any
            order is free anywhere in Lagos State — we collect the wrong size
            and deliver the right one in the same visit, at no charge. Elsewhere
            in Nigeria we cover the outbound leg of the replacement and you
            cover the return. Email us the order number and the size you need
            and we will hold the replacement for ten days while the first piece
            comes back.
          </p>

          <h2>Starting a return</h2>
          <p>
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-camel underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with your order number and which pieces you are sending back. You do
            not need to give a reason, though it helps us if you do. We reply
            within one working day with a return authorisation and the address.
          </p>
          <p>
            Within Lagos we arrange a courier pickup at your convenience.
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
            is yours — within Lagos we deduct a flat ₦2,500 pickup fee from the
            refund, which is less than arranging it yourself.
          </p>

          <h2>Refund timing</h2>
          <p>
            We inspect returns on the day they arrive and email you the outcome.
            Approved refunds go back to the original payment method within three
            working days. How long it then takes to appear depends on the bank:
            Nigerian cards are usually 3 to 5 working days, international cards
            up to 10. We refund the price you actually paid, including any
            reduction that applied at the time. Where an order was paid for by a
            parent or guardian, the refund goes back to their card rather than
            to whoever sends the parcel back.
          </p>

          <h2>Faulty pieces</h2>
          <p>
            If something fails in normal wear — a seam opens, a zip breaks, a
            sole separates, a print cracks — tell us within six months of
            delivery and we will repair it, replace it, or refund it in full, at
            your choice. Send a photograph with your first message and we can
            usually resolve it without any back and forth.
          </p>
          <p>
            What is not a fault: denim fading and whiskering, garment-dyed
            colour softening, creasing, ordinary wear at the knee and cuff, and
            canvas marking. Every one of those is described on the relevant
            product page before you buy, because they are what the fabric is
            supposed to do.
          </p>

          <h2>Your statutory rights</h2>
          <p>
            Nothing in this policy limits the rights you have under the Federal
            Competition and Consumer Protection Act. These terms sit alongside
            our{" "}
            <Link
              href="/terms-and-conditions"
              className="font-semibold text-camel underline underline-offset-4"
            >
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/shipping-policy"
              className="font-semibold text-camel underline underline-offset-4"
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
