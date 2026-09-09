import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductCover from "@/components/ProductCover";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

const STATS = [
  { value: "10+", label: "Themes & Plugins" },
  { value: "5", label: "Categories" },
  { value: "4.6", label: "Average Rating" },
  { value: "24/7", label: "Support Access" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const showcase = products.slice(0, 3);

  return (
    <div>
      {/* Hero: headline over a staggered row of browser-mockup previews */}
      <section className="overflow-hidden bg-sand">
        <div className="container-page pt-16 text-center lg:pt-20">
          <p className="eyebrow justify-center">{site.tagline}</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
            Premium themes and plugins for your next build
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Browse the Store
            </Link>
            <Link href="/shop" className="btn-secondary">
              View Categories
            </Link>
          </div>
        </div>

        <div className="container-page mt-14 flex items-end justify-center gap-4 pb-0 sm:gap-6">
          {showcase.map((product, i) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className={`group relative w-1/3 max-w-[340px] overflow-hidden rounded-t-xl border border-x border-t border-line bg-paper shadow-lift transition-transform hover:-translate-y-2 ${
                i === 0 ? "translate-y-6 sm:translate-y-10" : i === 2 ? "translate-y-6 sm:translate-y-10" : ""
              }`}
            >
              <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </div>
              <div className="relative aspect-[4/3]">
                <ProductCover
                  src={product.image}
                  alt={`${product.name} preview`}
                  priority={i === 1}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line bg-paper py-10">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-berry">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category strip */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Shop by Category</p>
          <h2 className="section-heading mt-3">Find Your Next Build</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group rounded-xl border border-line bg-paper p-5 transition-colors hover:border-berry"
                >
                  <p className="font-display text-base font-bold text-ink group-hover:text-berry">
                    {category}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">{count} products</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="bg-sand py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Top Rated</p>
                <h2 className="section-heading mt-3">Staff Picks</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View Full Store →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter band */}
      <section className="bg-ink text-paper">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get New Releases First
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/70">
            New themes and plugins, plus the occasional discount — no spam,
            unsubscribe any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
