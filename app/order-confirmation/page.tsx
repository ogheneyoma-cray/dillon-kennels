import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Adom Attic order has been received.",
};

const STEPS = [
  {
    title: "Confirmation email",
    copy: "A receipt is on its way to the address you gave us. Check spam if nothing lands within ten minutes.",
  },
  {
    title: "Packed in 48 hours",
    copy: "Everything is folded and boxed by hand at the studio before it leaves us.",
  },
  {
    title: "Courier handover",
    copy: "You will get a tracking number by email the moment the courier scans the parcel.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="frame py-20">
      <LogoMark className="mx-auto h-12 w-12 text-camel" />

      <SectionHeading
        className="mt-8"
        title="Thank you"
        subtitle="Your order is in the queue. This is a demonstration storefront, so no payment was taken and nothing will actually ship."
      />

      <ol className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="border border-line p-7 text-center">
            <span className="mx-auto flex h-10 w-10 rotate-45 items-center justify-center bg-camel text-paper">
              <span className="-rotate-45 text-sm font-bold">{index + 1}</span>
            </span>
            <h2 className="mt-5 text-[12px] font-bold uppercase tracking-wide2 text-onyx">
              {step.title}
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-ash">
              {step.copy}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col items-center gap-4">
        <Link href="/shop" className="btn-camel">
          Keep shopping
        </Link>
        <p className="text-[13px] text-ash">
          Something wrong with the order? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-camel underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
