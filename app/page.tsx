import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const REASONS = [
  { title: "Built to Last", body: "Every item is chosen for durability, not just looks." },
  { title: "Fair Pricing", body: "Nothing on the shelf is priced above $40." },
  { title: "USD & NGN", body: "Switch currencies anytime with the toggle above." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — plain text headline left, index-card spec sheet right (no imagery) */}
      <section className="border-b border-line py-16 lg:py-24">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="mt-5 max-w-lg font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Everything your home actually needs
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">{site.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">Shop the Catalog</Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-6 shadow-tile sm:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-widest2 text-ink-soft">Catalog Index</p>
            <ul className="mt-4 divide-y divide-line">
              {categories.map((category, i) => {
                const count = products.filter((p) => p.category === category).length;
                return (
                  <li key={category}>
                    <Link
                      href={`/shop?category=${encodeURIComponent(category)}`}
                      className="flex items-center justify-between py-3 text-sm font-semibold text-ink transition-colors hover:text-clay-dark"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                        {category}
                      </span>
                      <span className="text-xs font-normal text-ink-soft">{count} items →</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured — swing-tag product grid */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Bestsellers</p>
                <h2 className="section-heading mt-3">Popular This Month</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">View Full Catalog →</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reasons — plain numbered row list, no icons/cards */}
      <section className="border-y border-line bg-white py-14 lg:py-16">
        <div className="container-page divide-y divide-line sm:grid sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {REASONS.map((reason, i) => (
            <div key={reason.title} className="flex gap-4 py-6 sm:px-8 sm:py-0 first:pl-0">
              <span className="font-display text-2xl font-bold text-clay">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-display text-sm font-bold text-ink">{reason.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All categories — full shelf listing */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Full Catalog</p>
          <h2 className="section-heading mt-3">Shop by Department</h2>
          <div className="mt-8 divide-y divide-line rounded-lg border border-line bg-white">
            {categories.map((category, i) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-clay-pale/40"
                >
                  <span className="flex items-center gap-5">
                    <span className="font-display text-xl font-bold text-line group-hover:text-clay">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg font-bold text-ink">{category}</span>
                  </span>
                  <span className="text-sm font-semibold text-ink-soft">{count} items</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-linen sm:text-3xl">Ready to restock your home?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-linen/60">Pay securely with Mastercard or Visa — priced in USD or NGN.</p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex bg-clay hover:bg-clay-dark">Browse the Catalog</Link>
        </div>
      </section>
    </div>
  );
}
