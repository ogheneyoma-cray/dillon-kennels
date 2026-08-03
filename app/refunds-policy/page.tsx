import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "How to return or exchange a Xira Dix piece, what qualifies, and how long a refund takes.",
};

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHeader
        kicker="Customer care"
        title="Returns & Refunds"
        intro="Fourteen days to change your mind, and a straightforward process for doing it. Last updated 1 August 2026."
      />

      <div className="shell py-14 lg:py-20">
        <div className="prose-legal max-w-3xl">
          <p>
            Buying nightwear without touching the fabric first is a leap, and we
            would rather you took it knowing you can send something back. You
            have 14 days from delivery to start a return for any reason at all.
          </p>

          <h2>What we can accept back</h2>
          <p>
            To be returnable, a piece needs to come back in the condition it
            arrived in:
          </p>
          <ul>
            <li>Unworn beyond trying it on, and unwashed.</li>
            <li>With all original tags still attached.</li>
            <li>In its original packaging where that is still intact.</li>
            <li>Free of perfume, make-up, deodorant marks and smoke.</li>
          </ul>
          <p>
            Sleepwear sits close to the skin, so this last point matters more
            here than in most categories — a piece that comes back scented or
            marked cannot be resold, and we will have to return it to you.
          </p>

          <h2>What we cannot accept back</h2>
          <p>
            For hygiene reasons we cannot accept returns of pieces where the
            hygiene seal has been removed, or any item bought as a final-sale
            clearance piece, which is marked as such on its product page before
            you buy. Gift cards are not returnable. None of this affects your
            rights if an item arrives faulty or is not as described.
          </p>

          <h2>Starting a return</h2>
          <p>
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-orchid underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with your order number and which pieces you are sending back. You do
            not need to give a reason, though it helps us if you do. We will
            reply within one working day with a return authorisation and the
            address to send it to.
          </p>
          <p>
            Within Lagos we will arrange a courier pickup at your convenience.
            Elsewhere in Nigeria and internationally, you arrange the return
            shipping and we recommend a tracked service — until the parcel
            reaches us it is still your responsibility, and an untracked return
            that goes missing cannot be refunded.
          </p>

          <h2>Who pays return postage</h2>
          <p>
            If the piece is faulty, damaged in transit, or not what you ordered,
            we cover the return cost entirely and refund your original delivery
            charge as well. If you are simply changing your mind, the return
            postage is yours to pay — within Lagos we deduct a flat ₦2,500
            pickup fee from the refund, which is less than arranging it
            yourself.
          </p>

          <h2>Exchanges</h2>
          <p>
            The fastest route to a different size is to return the first piece
            for a refund and place a new order, because it means the size you
            want is held for you immediately rather than after your return
            arrives. If you would rather we handled it as a direct exchange, say
            so in your email and we will reserve the replacement for ten days.
            The first size exchange on any order is free within Lagos.
          </p>

          <h2>Refund timing</h2>
          <p>
            We inspect returns on the day they arrive and email you the outcome.
            Approved refunds are issued to the original payment method within
            three working days. How long it then takes to appear depends on your
            bank: Nigerian cards are usually 3 to 5 working days, international
            cards can take up to 10. We refund the price you actually paid,
            including any reduction that applied at the time.
          </p>

          <h2>Faulty pieces</h2>
          <p>
            If something fails in normal use — a seam opens, a fastening breaks,
            a dye runs — tell us within six months of delivery and we will
            repair it, replace it, or refund it in full, at your choice. Send a
            photograph with your first message and we can usually resolve it
            without any back and forth. Ordinary wear, creasing, and the gentle
            softening or fading described on each product page are not faults.
          </p>

          <h2>Your statutory rights</h2>
          <p>
            Nothing in this policy limits the rights you have under the Federal
            Competition and Consumer Protection Act. These terms sit alongside
            our{" "}
            <Link
              href="/terms-and-conditions"
              className="text-orchid underline underline-offset-4"
            >
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/shipping-policy"
              className="text-orchid underline underline-offset-4"
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
