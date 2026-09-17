import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Richavaid is and what drives our marketplace of premium themes and plugins.",
};

const VALUES = [
  {
    title: "Quality First",
    body: "Every product is reviewed and tested before it goes on sale — no bloatware, no broken code, no hidden dependencies.",
  },
  {
    title: "Fair Pricing",
    body: "All prices are shown in USD and NGN with a one-click toggle, so you know exactly what you are paying before checkout.",
  },
  {
    title: "Instant Delivery",
    body: "Every purchase is a digital download — no waiting for shipping, no customs, no tracking numbers. Buy it, download it, use it.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo to-violet">
        <div className="container-page py-14 text-center lg:py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-gold">
            About Us
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Premium digital tools for modern web builders
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/65">
            {site.description}
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">Our Story</p>
          <h2 className="section-heading mt-3">Built for Builders</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            {site.wordmark} started with a simple observation: the best themes
            and plugins were scattered across dozens of marketplaces, each with
            different quality standards and pricing conventions. We built a
            curated store where every product is vetted for performance,
            security and compatibility before it goes on sale — so you spend
            your time building, not debugging someone else&apos;s code.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Today we serve designers, developers and small business owners who
            need reliable digital tools without enterprise price tags. Every
            product ships with lifetime updates and is priced fairly in both
            USD and NGN.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Why {site.wordmark}</p>
          <h2 className="section-heading mt-3">What We Stand For</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-line bg-lavender p-6 shadow-tile"
              >
                <p className="font-display text-lg font-bold text-ink">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center lg:py-20">
        <div className="container-page">
          <h2 className="section-heading">Ready to Build Something?</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Browse our curated collection of themes, plugins, UI kits and page
            builders.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
