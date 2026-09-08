import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Acegga is and how we choose the books on our shelf.",
};

const STATS = [
  { value: "15", label: "Titles on the shelf" },
  { value: "5", label: "Genres stocked" },
  { value: "1–7", label: "Days to deliver" },
  { value: "2", label: "Card networks accepted" },
];

const VALUES = [
  {
    title: "Chosen, Not Just Stocked",
    copy: "Every title on the shelf is read and picked by someone on the team — we don't list a book we wouldn't recommend ourselves.",
  },
  {
    title: "Priced Up Front",
    copy: "No surprise fees at checkout. The price you see on the shelf, in USD or Naira, is the price you pay.",
  },
  {
    title: "Delivered Properly",
    copy: "Every order is packed at our Gonin Gora store and tracked from dispatch to your door, anywhere in Nigeria.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gold">
        <div className="container-page py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-widest2 text-ink/60">About Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            A Kaduna bookstore built on picking, not just stocking
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75">
            {site.description} We started Acegga because a good bookstore is
            a curated one — a small, considered shelf beats an endless
            catalogue nobody has actually read.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-blush">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">What We Believe</p>
            <h2 className="section-heading mt-3">How we run the shelf</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-paper p-6 shadow-tile">
                <p className="font-display text-lg font-bold text-ink">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to find your next read?</h2>
          <p className="max-w-md text-sm text-cream/70">
            Browse the full shelf, or get in touch if you're looking for a
            title we don't carry yet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Browse the Shelf
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-cream/40 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-cream/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
