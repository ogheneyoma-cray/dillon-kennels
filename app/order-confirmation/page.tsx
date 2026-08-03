import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Anikoda order has been received.",
};

const STEPS = [
  {
    title: "Confirmation email",
    copy: "A receipt is on its way to the address you gave us. Check spam if it has not landed within ten minutes.",
  },
  {
    title: "Packed in 48 hours",
    copy: "Everything is folded and boxed by hand at the Gaa-Saka workroom before it leaves us.",
  },
  {
    title: "Courier handover",
    copy: "You will get a tracking number by email the moment the courier scans the parcel.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="boxed py-20">
      <div className="mx-auto max-w-2xl text-center">
        <LogoMark className="mx-auto h-14 w-14 animate-floaty" />
      </div>

      <SectionHeading
        className="mt-8"
        title="Thank you — that's all done"
        subtitle="Your order is in the queue at the workroom. This is a demonstration storefront, so no payment was taken and nothing will actually ship."
      />

      <ol className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="border border-pine/10 bg-white p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tangerine font-display text-lg font-extrabold text-canvas">
              {index + 1}
            </span>
            <h2 className="head-sm mt-5 text-pine">{step.title}</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-mudd">
              {step.copy}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col items-center gap-4">
        <Link href="/shop" className="btn-solid">
          Keep shopping
        </Link>
        <p className="text-[13px] text-mudd">
          Something wrong with the order? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-bold text-tangerine underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
