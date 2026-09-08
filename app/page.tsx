import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORY_ICONS: Record<(typeof categories)[number], string> = {
  "Website Templates": "M4 19V9l8-5 8 5v10 M9 19v-6h6v6",
  "App & Dashboard Kits": "M4 5h16v10H4z M9 19h6 M12 15v4",
  "Growth & Automation": "M4 19h3v-6H4v6Zm6.5 0h3V7h-3v12Zm6.5 0h3v-9h-3v9Z",
};

const PROCESS = [
  {
    step: "01",
    title: "Scope",
    copy: "A short call and a written quote — the full price and build time up front, no hourly surprises.",
  },
  {
    step: "02",
    title: "Build",
    copy: "A senior engineer builds against the agreed scope, with a progress check-in partway through.",
  },
  {
    step: "03",
    title: "Launch",
    copy: "Source files, setup guide and a short handover call — you own the code from day one.",
  },
];

const WHY_US = [
  {
    title: "Fixed Pricing",
    copy: "The price you see is the price you pay — quoted before work starts, never revised after.",
    icon: "M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    title: "Senior Engineers",
    copy: "Every build is written by a working engineer, not routed through a junior queue.",
    icon: "M8 8l-4 4 4 4m8-8 4 4-4 4M14 6l-4 12",
  },
  {
    title: "Fast Turnaround",
    copy: "Most builds ship in days, not months — scoped tightly enough to move quickly.",
    icon: "M12 7v5l3.5 2 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
  },
  {
    title: "Source Included",
    copy: "You receive the full source code and own it outright — no ongoing licence fees.",
    icon: "M9 4h9a2 2 0 0 1 2 2v14 M6 21V4h3 M6 8h6 M6 12h6",
  },
  {
    title: "Free Revisions",
    copy: "One round of revisions is included on every order before the build is marked complete.",
    icon: "M4 12a8 8 0 0 1 14.3-5 M20 4v5h-5 M20 12a8 8 0 0 1-14.3 5 M4 20v-5h5",
  },
  {
    title: "Real Support",
    copy: "Questions after delivery go to the person who built it, not a ticket queue.",
    icon: "M12 20s-7-4.4-7-9.6A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7 3.4C19 15.6 12 20 12 20Z",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <span aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
        <span aria-hidden="true" className="absolute -bottom-24 right-[-4rem] h-80 w-80 rounded-full bg-amber/10 blur-3xl" />

        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow-on-dark">Software &amp; Web Development Studio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Ship your <span className="highlight-bar text-white">next build</span> on a fixed price
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              Myevolt builds websites, storefronts, dashboards and small
              tools — scoped and priced up front, delivered as source-ready
              packages by a small senior team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse Products
              </Link>
              <Link href="/about" className="btn-secondary-on-dark">
                How We Work
              </Link>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-white/35">
              Priced in USD or NGN · Delivered by email
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px]">
              <div className="aspect-square shadow-lift">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <span className="absolute -right-4 -top-4 rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-widest2 text-ink shadow-tile">
                Popular
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-paper">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">How We Do It</p>
            <h2 className="section-heading mt-3">Our Process</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="process-node">
                  <span className="font-display text-2xl font-semibold">{item.step}</span>
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</p>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink/65">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="dot-panel">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow-on-dark">Why People Choose Us</p>
            <h2 className="section-heading-on-dark mt-3">Why Myevolt</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div key={item.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/40 text-teal">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={item.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-ink/10 bg-mist">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Browse By Type</p>
            <h2 className="section-heading mt-3">What we ship</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex flex-col items-center rounded-2xl bg-paper p-8 text-center shadow-tile transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal/40 text-teal-dark transition-colors group-hover:border-teal group-hover:bg-teal-pale">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={CATEGORY_ICONS[category]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">
                    {category}
                  </span>
                  <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-teal-dark">
                    {count} products →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Popular Builds</p>
            <h2 className="section-heading mt-3">Featured Products</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View All Products →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/shop" className="btn-secondary w-full">
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-teal text-ink">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to ship your next build?</h2>
          <p className="max-w-md text-sm text-ink/70">
            Seven products across templates, dashboards and growth tooling —
            every one priced up front and delivered the moment your order clears.
          </p>
          <Link
            href="/shop"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}
