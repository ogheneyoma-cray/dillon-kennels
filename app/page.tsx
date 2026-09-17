import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const CAPABILITIES = ["Fast Turnaround", "Fixed Pricing", "Vetted Engineers", "USD & NGN"];

const PROCESS = [
  { step: "01", title: "Pick a Service", body: "Browse the catalog and choose the fix or setup you need." },
  { step: "02", title: "Pay Securely", body: "Checkout with Mastercard or Visa — priced in USD or NGN." },
  { step: "03", title: "We Get to Work", body: "An engineer is assigned and reaches out within one business day." },
  { step: "04", title: "Confirm & Done", body: "We verify the fix with you before closing out the ticket." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — full-bleed ink block, no imagery, rotated ticket cards */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-ink py-16 lg:py-24">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 border-2 border-optic px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest2 text-optic">
              {site.tagline}
            </span>
            <h1 className="mt-6 max-w-xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl">
              IT problems, <span className="text-optic">fixed on schedule</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse Services
              </Link>
              <Link href="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-ink">
                Read FAQs
              </Link>
            </div>
          </div>

          {/* rotated stacked ticket cards */}
          <div className="relative hidden h-80 lg:block">
            <div className="absolute right-6 top-4 w-64 -rotate-6 border-2 border-ink bg-optic p-5 shadow-lift">
              <p className="font-display text-xs font-bold uppercase tracking-widest2 text-ink/70">Ticket #SO-2201</p>
              <p className="mt-2 font-display text-lg font-extrabold text-ink">Network Setup</p>
              <p className="mt-1 text-xs font-semibold text-ink/70">Status: Resolved</p>
            </div>
            <div className="absolute left-4 top-24 w-64 rotate-3 border-2 border-ink bg-white p-5 shadow-lift">
              <p className="font-display text-xs font-bold uppercase tracking-widest2 text-ink-soft">Ticket #SO-2198</p>
              <p className="mt-2 font-display text-lg font-extrabold text-ink">Security Check</p>
              <p className="mt-1 text-xs font-semibold text-ink-soft">Status: In Progress</p>
            </div>
            <div className="absolute right-2 top-48 w-64 -rotate-2 border-2 border-ink bg-white p-5 shadow-lift">
              <p className="font-display text-xs font-bold uppercase tracking-widest2 text-ink-soft">Ticket #SO-2195</p>
              <p className="mt-2 font-display text-lg font-extrabold text-ink">Cloud Backup</p>
              <p className="mt-1 text-xs font-semibold text-ink-soft">Status: Resolved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability strip — equal-width blocks */}
      <section className="border-b-2 border-ink bg-optic">
        <div className="container-page grid grid-cols-2 divide-x-2 divide-ink sm:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap} className="px-4 py-5 text-center">
              <p className="font-display text-xs font-extrabold uppercase tracking-wide text-ink sm:text-sm">
                {cap}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories — plain equal cards, no bento, no sidebar */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">What We Fix</p>
          <h2 className="section-heading mt-3">Service Categories</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, i) => (
              <Link
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                className="group flex flex-col items-center gap-3 border-2 border-ink bg-white p-5 text-center transition-colors hover:bg-optic"
              >
                <span className="flex h-10 w-10 items-center justify-center border-2 border-ink font-display text-xs font-extrabold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-sm font-bold uppercase text-ink">{category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      {featured.length > 0 && (
        <section className="border-y-2 border-ink bg-white py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Most Booked</p>
                <h2 className="section-heading mt-3">Popular Services</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View All →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process — zig-zag alternating steps */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-heading mt-3">From Booking to Resolved</h2>
          <div className="mt-12 space-y-6">
            {PROCESS.map((item, i) => (
              <div
                key={item.step}
                className={`flex items-center gap-6 border-2 border-ink bg-white p-6 sm:gap-10 ${
                  i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-ink bg-optic font-display text-lg font-extrabold text-ink">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold uppercase text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — inverted colors from hero */}
      <section className="border-y-2 border-ink bg-optic py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-extrabold uppercase text-ink sm:text-3xl">
            Ready to book a fix?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-semibold text-ink/70">
            Pay with Mastercard or Visa and we get to work within one business day.
          </p>
          <Link href="/shop" className="btn-secondary mt-8 inline-flex bg-ink text-optic hover:bg-white hover:text-ink">
            Browse Services
          </Link>
        </div>
      </section>
    </div>
  );
}
