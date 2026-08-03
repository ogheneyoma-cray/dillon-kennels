import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Xira Dix order has been received.",
};

const STEPS = [
  {
    title: "Confirmation email",
    copy: "A receipt is on its way to the address you gave us. Check spam if it has not landed within ten minutes.",
  },
  {
    title: "Packed within 48 hours",
    copy: "Everything is folded in tissue and boxed by hand at the Ajah studio before it leaves us.",
  },
  {
    title: "Courier handover",
    copy: "You will get a tracking number by email the moment the courier scans the parcel.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="shell py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <LogoMark className="mx-auto h-12 w-12 text-orchid" />
        <p className="kicker mt-8">Order received</p>
        <h1 className="display-lg mt-3">Thank you — that is all done</h1>
        <p className="mt-5 text-[15px] leading-relaxed text-midnight/70">
          Your order is in the queue at the studio. This is a demonstration
          storefront, so no payment was taken and nothing will actually ship.
        </p>
      </div>

      <ol className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-midnight/10 bg-linen p-7"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-midnight font-display text-lg text-linen">
              {index + 1}
            </span>
            <h2 className="mt-5 font-body text-[15px] font-semibold text-midnight">
              {step.title}
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-slate">
              {step.copy}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col items-center gap-4">
        <Link href="/shop" className="pill-dark">
          Keep shopping
        </Link>
        <p className="text-[13px] text-slate">
          Something wrong with the order? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-orchid underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
