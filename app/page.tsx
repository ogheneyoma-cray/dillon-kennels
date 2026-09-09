import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductCover from "@/components/ProductCover";
import NewsletterForm from "@/components/NewsletterForm";
import StarRating from "@/components/StarRating";
import ProductPrice from "@/components/ProductPrice";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];
  const second = featured[1] ?? products[1];

  return (
    <div>
      {/* Bento grid hero: an irregular mosaic of tiles, not a stacked hero */}
      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {/* Headline tile */}
          <div className="flex flex-col justify-center rounded-2xl bg-steel p-8 text-paper lg:col-span-3 lg:row-span-2">
            <p className="text-xs font-bold uppercase tracking-widest2 text-fuchsia">
              {site.tagline}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] sm:text-4xl">
              Software and web dev products, built to move fast
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              {site.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Browse the Store
              </Link>
              <Link href="/shop" className="btn-white">
                View Categories
              </Link>
            </div>
          </div>

          {/* Featured product preview tile */}
          {hero && (
            <Link
              href={`/shop/${hero.slug}`}
              className="group relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2"
            >
              <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full">
                <ProductCover
                  src={hero.image}
                  alt={`${hero.name} preview`}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5">
                <StarRating rating={hero.rating} className="text-fuchsia" />
                <p className="mt-2 font-display text-base font-bold text-paper">{hero.name}</p>
                <ProductPrice priceUsd={hero.price} className="text-sm font-semibold text-paper/80" />
              </div>
            </Link>
          )}

          {/* Stat tile */}
          <div className="bento-tile flex flex-col justify-center lg:col-span-1">
            <p className="font-display text-3xl font-bold text-fuchsia">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">Products</p>
          </div>

          {/* Second stat tile */}
          <div className="bento-tile flex flex-col justify-center lg:col-span-1">
            <p className="font-display text-3xl font-bold text-fuchsia">USD / NGN</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">Pricing</p>
          </div>
        </div>
      </section>

      {/* Categories as a tag cloud, not a grid or sidebar */}
      <section className="border-y border-line bg-silver-pale py-14">
        <div className="container-page text-center">
          <p className="eyebrow justify-center">Shop by Category</p>
          <h2 className="section-heading mt-3">Find Your Next Build</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-fuchsia hover:text-fuchsia"
                >
                  {category}
                  <span className="ml-2 text-xs text-ink-soft">{count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Second bento row: two-tile spotlight */}
      {second && (
        <section className="container-page py-16 lg:py-20">
          <p className="eyebrow">Editor&apos;s Pick</p>
          <h2 className="section-heading mt-3">This Week&apos;s Spotlight</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
            <Link
              href={`/shop/${second.slug}`}
              className="group relative overflow-hidden rounded-2xl lg:col-span-3"
            >
              <div className="relative aspect-[16/9] w-full">
                <ProductCover
                  src={second.image}
                  alt={`${second.name} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="bento-tile flex flex-col justify-center lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest2 text-fuchsia">
                {second.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{second.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {second.description.slice(0, 120)}…
              </p>
              <div className="mt-4 flex items-center justify-between">
                <ProductPrice priceUsd={second.price} className="font-display text-lg font-bold text-fuchsia" />
                <Link href={`/shop/${second.slug}`} className="btn-secondary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="bg-silver-pale py-16 lg:py-20">
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
      <section className="bg-steel text-paper">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get New Releases First
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/70">
            New products and the occasional discount — no spam, unsubscribe
            any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
