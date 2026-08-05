import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Crewsita order has been received.",
};

const STEPS = [
  {
    title: "Confirmation email",
    copy: "A receipt is on its way to the address you gave us. Check spam if nothing lands within ten minutes.",
  },
  {
    title: "Checked and boxed",
    copy: "Every pair is checked over, stuffed at the toe and boxed with the spare laces before it leaves the shop.",
  },
  {
    title: "Courier handover",
    copy: "A tracking number reaches you by email the moment the courier scans the parcel.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="wrap py-20 lg:py-24">
      <SectionHeading
        script="Received"
        title="Thank you"
        subtitle="Your order is in the queue. This is a demonstration storefront, so no payment was taken and nothing will actually ship."
      />

      <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="border border-line p-7">
            <span className="font-display text-[12px] font-bold tracking-wide2 text-rose">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 font-display text-[13px] font-bold uppercase tracking-wide2 text-ink">
              {step.title}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-body">
              {step.copy}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-center gap-5">
        <Link href="/shop" className="btn-rose">
          Back to the shop
        </Link>
        <p className="text-[13px] text-muted">
          Something wrong with the order? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-rose underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
