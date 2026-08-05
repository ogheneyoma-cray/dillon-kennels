import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your Coquinate order has been received.",
};

const STEPS = [
  {
    title: "Receipt by email",
    copy: "A receipt is on its way to the address you gave us. Check spam if nothing lands within ten minutes.",
  },
  {
    title: "Download links",
    copy: "The same email carries a link to all three formats. The link does not expire and can be used from any device.",
  },
  {
    title: "Kept on file",
    copy: "Every title you buy stays in your account. Lose a device and you can download the files again at no cost.",
  },
];

export default function OrderConfirmationPage() {
  return (
    <div className="wrap py-20 lg:py-24">
      <SectionHeading
        eyebrow="Received"
        title="Thank you"
        subtitle="Your order is in the queue. This is a demonstration storefront, so no payment was taken and no download link will actually arrive."
      />

      <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="card p-7 shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-display text-[15px] font-bold text-clay">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-5 font-display text-[17px] font-bold text-slate">
              {step.title}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-body">
              {step.copy}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-center gap-5">
        <Link href="/shop" className="btn-clay">
          Back to the catalogue
        </Link>
        <p className="text-[13px] text-muted">
          Something wrong with the order? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-clay underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
