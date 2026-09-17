import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — gradient banner with centered content */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo via-indigo-light to-violet">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-violet blur-[100px]" />
        </div>
        <div className="container-page relative py-20 text-center lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {site.tagline}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Build stunning websites with premium digital tools
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gold px-8 py-3 font-display text-sm font-bold text-indigo transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Browse Products
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Categories</p>
          <h2 className="section-heading mt-3">Browse by Type</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group rounded-2xl border border-line bg-white p-6 text-center shadow-tile transition-all hover:border-violet hover:shadow-glow"
                >
                  <p className="font-display text-base font-bold text-ink group-hover:text-violet">
                    {category}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{count} products</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Top Rated</p>
                <h2 className="section-heading mt-3">Most Popular Products</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View All Products →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value props */}
      <section className="py-16 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "Instant Download",
              desc: "All products are delivered digitally — download immediately after purchase.",
            },
            {
              title: "Quality Assured",
              desc: "Every theme and plugin is tested for performance, security and compatibility.",
            },
            {
              title: "USD & NGN Pricing",
              desc: "Switch currencies with one click using the toggle in the header.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-tile"
            >
              <p className="font-display text-lg font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo text-white">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            New products and occasional discounts — no spam, unsubscribe any
            time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
