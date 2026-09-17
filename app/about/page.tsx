import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Richavaid is and what drives our marketplace of premium themes and plugins.",
};

const TIMELINE = [
  {
    year: "Step 1",
    title: "Curate",
    body: "We source and vet every theme, plugin, and UI kit for code quality, performance and compatibility — so you never have to.",
  },
  {
    year: "Step 2",
    title: "Price Fairly",
    body: "All products are priced between $20-$40 with transparent USD/NGN conversion. No subscription traps, no hidden fees.",
  },
  {
    year: "Step 3",
    title: "Deliver Instantly",
    body: "Every purchase is a digital download. Pay with Mastercard or Visa, download immediately, start building right away.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Split hero — dark left, accent right */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center bg-indigo px-6 py-14 sm:px-12 lg:py-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
            About {site.wordmark}
          </span>
          <h1 className="mt-6 max-w-lg font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Premium digital tools for modern web builders
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-br from-violet to-indigo-light px-8 py-14 lg:py-24">
          <div className="grid max-w-xs grid-cols-2 gap-4 text-center">
            {[
              { val: "10+", label: "Products" },
              { val: "4", label: "Categories" },
              { val: "4.5★", label: "Avg Rating" },
              { val: "∞", label: "Updates" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-gold">{s.val}</p>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story — offset columns */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading mt-3 max-w-xs">Built for Builders</h2>
          </div>
          <div className="max-w-xl space-y-4 text-sm leading-relaxed text-ink-soft lg:ml-auto">
            <p>
              {site.wordmark} started with a simple observation: the best themes
              and plugins were scattered across dozens of marketplaces, each with
              different quality standards and pricing conventions.
            </p>
            <p>
              We built a curated store where every product is vetted for
              performance, security and compatibility before it goes on sale — so
              you spend your time building, not debugging someone else&apos;s
              code.
            </p>
            <p>
              Today we serve designers, developers and small business owners who
              need reliable digital tools without enterprise price tags. Every
              product ships with lifetime updates and is priced fairly in both
              USD and NGN.
            </p>
          </div>
        </div>
      </section>

      {/* How it works — vertical timeline */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow text-center">How It Works</p>
          <h2 className="section-heading mt-3 text-center">Three Simple Steps</h2>
          <div className="relative mx-auto mt-12 max-w-2xl pl-10">
            <div className="absolute left-4 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-violet via-gold to-indigo" />
            {TIMELINE.map((item, i) => (
              <div key={item.title} className={`relative ${i > 0 ? "mt-10" : ""}`}>
                <span className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-violet font-display text-xs font-bold text-white shadow-glow">
                  {i + 1}
                </span>
                <p className="font-display text-[11px] font-semibold uppercase tracking-widest2 text-violet">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to Build Something?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            Browse our curated collection of themes, plugins, UI kits and page
            builders.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-gold px-8 py-3 font-display text-sm font-bold text-indigo transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Browse Products →
          </Link>
        </div>
      </section>
    </div>
  );
}
