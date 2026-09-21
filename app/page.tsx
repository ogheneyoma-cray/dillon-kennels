import Link from "next/link";
import Image from "next/image";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const STATS = [
  { value: "25", label: "Services on Offer" },
  { value: "48h", label: "Typical Response" },
  { value: "5", label: "Service Categories" },
  { value: "$20–40", label: "Flat Price Range" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];
  const rest = featured.slice(1);

  return (
    <div>
      {/* Hero — centered editorial headline over a full-bleed image, no split dark panel */}
      <section className="border-b border-line py-14 text-center lg:py-20">
        <div className="container-page">
          <p className="eyebrow justify-center">{site.tagline}</p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl italic leading-[1.05] text-ink sm:text-6xl">
            IT problems, solved on your schedule
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">{site.description}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">Browse Services</Link>
            <Link href="/contact" className="btn-secondary">Talk to Us</Link>
          </div>
        </div>

        {hero && (
          <div className="container-page mt-14">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image src={hero.image} alt={hero.name} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        )}
      </section>

      {/* Stat strip */}
      <section className="border-b border-line bg-stone py-10">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl italic text-signal">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured — asymmetric masonry rather than a uniform grid */}
      {rest.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Most Booked</p>
                <h2 className="section-heading mt-3">Popular Services</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">View All Services →</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {rest.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full category list — editorial index, not icon tiles */}
      <section className="border-t border-line py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Full Catalog</p>
          <h2 className="section-heading mt-3">Shop by Service Type</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex items-baseline justify-between py-6 transition-colors hover:bg-stone"
                >
                  <span className="font-display text-2xl italic text-ink group-hover:text-signal sm:text-3xl">{category}</span>
                  <span className="text-sm font-semibold text-ink-soft">{count} services →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl italic text-paper sm:text-4xl">Ready to fix your tech?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/60">Pay securely with Mastercard or Visa — priced in USD or NGN.</p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex bg-signal hover:bg-paper hover:text-ink">Browse Services</Link>
        </div>
      </section>
    </div>
  );
}
