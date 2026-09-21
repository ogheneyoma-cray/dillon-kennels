import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const REASONS = [
  { title: "Certified Technicians", body: "Every job is handled by a vetted, background-checked technician." },
  { title: "Fair, Flat Pricing", body: "Nothing in our catalog is priced above $40." },
  { title: "USD & NGN", body: "Switch currencies anytime with the toggle in the header." },
];

const CATEGORY_ICONS: Record<string, string> = {
  "Support Plans": "🛠️",
  "Network & Security": "🔒",
  "Cloud Services": "☁️",
  "Setup & Installation": "⚙️",
  Maintenance: "🧰",
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — split panel, ink block on the right instead of imagery */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center">
            <span className="tag-pill w-fit">{site.tagline}</span>
            <h1 className="mt-5 max-w-lg font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              IT problems, solved on your schedule
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">{site.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">Browse Services</Link>
              <Link href="/contact" className="btn-secondary">Talk to Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl2 bg-ink p-8 text-white">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-white/50">Service Areas</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-volt hover:bg-white/10"
                >
                  <span className="text-xl">{CATEGORY_ICONS[category]}</span>
                  <p className="mt-3 font-display text-sm font-bold leading-snug">{category}</p>
                </Link>
              ))}
              <Link
                href="/shop"
                className="flex flex-col justify-center rounded-xl border border-dashed border-white/25 p-4 text-sm font-bold text-volt transition-colors hover:border-volt"
              >
                View all →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons band */}
      <section className="border-y border-line bg-white py-12 lg:py-14">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="text-center sm:text-left">
              <p className="font-display text-sm font-bold text-ink">{reason.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{reason.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured — bento product grid */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="tag-pill">Most Booked</span>
                <h2 className="section-heading mt-3">Popular Services</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">View All Services →</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full category grid */}
      <section className="pb-16 lg:pb-20">
        <div className="container-page">
          <span className="tag-pill">Full Catalog</span>
          <h2 className="section-heading mt-3">Shop by Service Type</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="panel-tile flex flex-col justify-between p-6 transition-shadow hover:shadow-lift"
                >
                  <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
                  <div className="mt-6">
                    <p className="font-display text-base font-bold text-ink">{category}</p>
                    <p className="mt-1 text-sm text-ink-soft">{count} services</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to fix your tech?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">Pay securely with Mastercard or Visa — priced in USD or NGN.</p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex bg-volt hover:bg-volt-dark">Browse Services</Link>
        </div>
      </section>
    </div>
  );
}
