import Link from "next/link";
import Image from "next/image";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const latest = products.slice(0, 3);

  return (
    <div>
      {/* Hero — left-aligned text with floating preview mosaic */}
      <section className="relative overflow-hidden bg-indigo">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/4 rounded-full bg-violet/20 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />
        </div>
        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>
              {site.tagline}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
              Premium themes &amp; plugins for the modern web
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-gold px-8 py-3 font-display text-sm font-bold text-indigo transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Explore Marketplace →
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Floating product mosaic — 3 stacked preview tiles */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {latest.slice(0, 2).map((p) => (
                  <Link
                    key={p.id}
                    href={`/shop/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-gold/40"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="280px"
                        className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-3">
                      <p className="truncate text-xs font-semibold text-white/80">
                        {p.name}
                      </p>
                      <p className="mt-0.5 text-xs text-gold">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={`/shop/${latest[2].slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-gold/40"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={latest[2].image}
                      alt={latest[2].name}
                      fill
                      sizes="280px"
                      className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-3">
                    <p className="truncate text-xs font-semibold text-white/80">
                      {latest[2].name}
                    </p>
                    <p className="mt-0.5 text-xs text-gold">${latest[2].price}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats ticker bar */}
      <section className="border-b border-line bg-white">
        <div className="container-page grid grid-cols-2 divide-x divide-line py-6 sm:grid-cols-4">
          {[
            { label: "Products", value: `${products.length}+` },
            { label: "Categories", value: String(categories.length) },
            { label: "Avg. Rating", value: "4.5★" },
            { label: "Instant", value: "Download" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 text-center">
              <p className="font-display text-2xl font-bold text-indigo">{stat.value}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories — icon-less horizontal scroll cards */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Categories</p>
          <h2 className="section-heading mt-3">Browse by Type</h2>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {categories.map((category, i) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex min-w-[200px] shrink-0 items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-violet hover:shadow-glow sm:min-w-0"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-indigo font-display text-lg font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink group-hover:text-violet">
                      {category}
                    </p>
                    <p className="text-xs text-ink-soft">{count} products</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products — stacked horizontal cards */}
      {featured.length > 0 && (
        <section className="bg-white/50 py-16 lg:py-20">
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
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value props — horizontal ribbon */}
      <section className="border-y border-line bg-gradient-to-r from-violet-pale via-white to-violet-pale py-12">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              num: "01",
              title: "Instant Download",
              desc: "All products are digital — download immediately after purchase.",
            },
            {
              num: "02",
              title: "Quality Assured",
              desc: "Every theme and plugin is tested for performance and compatibility.",
            },
            {
              num: "03",
              title: "USD & NGN Pricing",
              desc: "Switch currencies with one click using the toggle in the header.",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo font-display text-xs font-bold text-gold">
                {item.num}
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </div>
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
