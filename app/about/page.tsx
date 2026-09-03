import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `The story behind ${site.name} — a household goods store built around everyday essentials for bathroom, kitchen, storage, decor and cleaning.`,
};

const VALUES = [
  {
    title: "Chosen, Not Just Stocked",
    copy:
      "Every item on the site is picked for daily usefulness first — nothing makes the catalog just to fill a category.",
  },
  {
    title: "Priced Honestly",
    copy:
      "Prices are shown up front in USD or NGN with no last-minute markups sprung on you at checkout.",
  },
  {
    title: "Built for Real Homes",
    copy:
      "We favor materials and finishes that hold up to actual daily use, not just a good product photo.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-sand">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="section-heading mt-3">
              Household Goods, Chosen With Intention
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              {site.name} started with a simple frustration: too many
              household stores mix genuinely useful items with filler.
              We set out to build a catalog of things people actually reach
              for every day — in the bathroom, the kitchen, the closet and
              every room in between.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/products/promo-decor.jpg"
              alt="Home decor styled on a shelf"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <p className="eyebrow">What We Believe</p>
        <h2 className="section-heading mt-3">How We Choose What We Sell</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-medium text-navy">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {value.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="container-page py-16 text-center lg:py-20">
          <h2 className="section-heading">Ready to Shop the Collection?</h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Bathroom accessories, kitchen tools, storage, decor and cleaning
            essentials — all in one place.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
