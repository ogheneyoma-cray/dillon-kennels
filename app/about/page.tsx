import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Myevolt is and how we scope, build and deliver software and web projects.",
};

const STATS = [
  { value: "7", label: "Products in the shop" },
  { value: "3", label: "Days, typical turnaround" },
  { value: "1", label: "Senior engineer per build" },
  { value: "2", label: "Card networks accepted" },
];

const VALUES = [
  {
    title: "Scope before we start",
    copy: "Every order starts with a clear, written scope and a fixed price — not an estimate that grows once work begins.",
  },
  {
    title: "Built by the person you talk to",
    copy: "The engineer who scopes your build is the one who ships it. Nothing is routed to an anonymous queue.",
  },
  {
    title: "You own what you pay for",
    copy: "Every order includes the full source code, delivered as a package you keep — no recurring licence fees.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink">
        <span aria-hidden="true" className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-page relative py-16 lg:py-20">
          <p className="eyebrow-on-dark">About Us</p>
          <h1 className="section-heading-on-dark mt-3 max-w-2xl">
            A small studio that ships software and web projects on a fixed price
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
            {site.description} We started Myevolt because too many small
            businesses and founders were quoted vague hourly estimates for
            work that should be predictable — a marketing site, a storefront,
            an internal dashboard. We scope it properly, quote it once, and
            build it.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-teal-dark sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-mist">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">What We Believe</p>
            <h2 className="section-heading mt-3">How we work</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-paper p-6 shadow-tile">
                <p className="font-display text-lg font-semibold text-ink">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal text-ink">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2>
          <p className="max-w-md text-sm text-ink/70">
            Browse the shop for a ready-scoped product, or get in touch if
            what you need isn't listed yet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
