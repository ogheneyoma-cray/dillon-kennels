import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const TICKER_ITEMS = [
  "Managed IT Support",
  "Network Setup",
  "Cybersecurity Scans",
  "Cloud Backups",
  "Data Recovery",
  "Email Migration",
  "VPN Setup",
  "POS Integration",
];

const PROCESS = [
  { step: "01", title: "Book", body: "Choose a service and pay securely online in USD or NGN." },
  { step: "02", title: "Diagnose", body: "Our engineers assess your systems remotely or on-site." },
  { step: "03", title: "Resolve", body: "We fix, configure, or install — then confirm everything works." },
  { step: "04", title: "Support", body: "You keep access to our helpdesk for follow-up questions." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — split with a live "status" dashboard card, no imagery mosaic */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {site.tagline}
            </span>
            <h1 className="mt-6 max-w-lg font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
              IT services that keep your business running
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse Services →
              </Link>
              <Link href="/about" className="btn-secondary">
                About Us
              </Link>
            </div>
          </div>

          {/* Dashboard-style status card */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-cobalt-pale" />
            <div className="rounded-3xl border border-line bg-ink p-6 shadow-lift sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold text-white">System Status</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-mint">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" /> All Systems Go
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Avg. Response", value: "18 min" },
                  { label: "Tickets Closed", value: "1,240+" },
                  { label: "Client Rating", value: "4.8 / 5" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                    <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-[11px] text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {categories.slice(0, 3).map((c) => (
                  <div key={c} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
                    <span className="text-xs font-medium text-white/70">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker — echoing service names, ties to the brand name */}
      <section className="overflow-hidden border-b border-line bg-cobalt py-3.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display text-sm font-bold uppercase tracking-widest2 text-white/80"
            >
              {item} <span className="mx-4 text-white/30">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Categories — asymmetric bento grid instead of a row of cards */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-heading mt-3">Service Categories</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, i) => {
              const count = products.filter((p) => p.category === category).length;
              const big = i === 0;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className={`group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-all hover:border-cobalt hover:shadow-tile ${
                    big ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-8">
                    <p className="font-display text-lg font-bold text-ink group-hover:text-cobalt">
                      {category}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">{count} services available</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured services */}
      {featured.length > 0 && (
        <section className="border-y border-line bg-white py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Most Booked</p>
                <h2 className="section-heading mt-3">Popular Services</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View All Services →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process — horizontal signal path */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-heading mt-3">From Booking to Resolved</h2>
          <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
            {PROCESS.map((item) => (
              <div key={item.step} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-fog bg-cobalt font-display text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — diagonal split banner */}
      <section className="relative overflow-hidden bg-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-cobalt sm:block"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="container-page relative flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready when you need IT support?
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Pick a service, pay with Mastercard or Visa, and we get to work.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-flare px-8 py-3 font-display text-sm font-bold text-white transition-all hover:bg-flare-dark hover:shadow-lg"
          >
            Browse Services →
          </Link>
        </div>
      </section>
    </div>
  );
}
