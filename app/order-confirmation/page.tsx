import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Mydriad order has been received.",
};

const STEPS = [
  {
    title: "Confirmation email",
    copy: "A receipt is on its way to the address you gave us. Check spam if nothing lands within ten minutes.",
  },
  {
    title: "Pressed and boxed",
    copy: "Every jacket is pressed on the shoulder board and boxed flat by hand before it leaves the workroom.",
  },
  {
    title: "Courier handover",
    copy: "A tracking number reaches you by email the moment the courier scans the parcel.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="ruled">
      <div className="wrap py-24">
        <SectionHeading
          eyebrow="Received"
          title="Thank you"
          subtitle="Your order is in the queue. This is a demonstration storefront, so no payment was taken and nothing will actually ship."
        />

        <ol className="mx-auto mt-16 grid max-w-4xl gap-px border border-rule bg-rule md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="bg-panel p-8">
              <span className="text-[11px] tracking-micro text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-base font-light text-bone">
                {step.title}
              </h2>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-smoke">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-center gap-5">
          <Link href="/shop" className="btn-brass">
            Back to the collection
          </Link>
          <p className="text-[13px] font-light text-slate">
            Something wrong with the order? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brass underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
