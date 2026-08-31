import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductCover from "@/components/ProductCover";
import NewArrivalsTabs from "@/components/NewArrivalsTabs";
import NewsletterForm from "@/components/NewsletterForm";
import CategoryTiles from "@/components/CategoryTiles";
import StarRating from "@/components/StarRating";
import ProductPrice from "@/components/ProductPrice";
import { site } from "@/lib/site";

const FEATURES = [
  {
    title: "Clean Formulas",
    body: "Every formula is checked against a clean-beauty ingredient list before it makes the shelf.",
  },
  {
    title: "USD or NGN Pricing",
    body: "Switch currencies from the header and every price on the site updates instantly.",
  },
  {
    title: "Cruelty-Free, Always",
    body: "Nothing we sell is tested on animals, at any stage of formulation.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-sand">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Clean Cosmetics</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
              Minimal <em className="font-light italic text-clay">Ritual</em>
              <br />
              Focus
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Bestsellers
              </Link>
              <Link href="/cosmetics-guide" className="btn-ghost">
                Read the Guide →
              </Link>
            </div>
            {hero && (
              <div className="mt-8 flex items-center gap-2">
                <StarRating rating={hero.rating} />
                <span className="text-sm text-ink-soft">
                  {hero.rating.toFixed(1)} — from verified reviews
                </span>
              </div>
            )}
          </div>

          <div className="relative">
            {hero && (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift">
                <ProductCover
                  src={hero.image}
                  alt={`${hero.name} product photo`}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {hero && (
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-paper px-5 py-4 shadow-lift sm:-left-10">
                <p className="font-display text-base text-ink">{hero.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
                  {hero.volume}
                </p>
                <ProductPrice
                  priceUsd={hero.price}
                  className="mt-1 block font-display text-lg font-semibold text-clay"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center">
          <p className="eyebrow justify-center">Shop by Category</p>
          <h2 className="section-heading mt-3">Choose Your Ritual</h2>
        </div>
        <div className="mt-10">
          <CategoryTiles categories={categories} />
        </div>
      </section>

      {/* Bestsellers, tabbed by category */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center">Best Sellers</p>
            <h2 className="section-heading mt-3">Chosen By Thousands Daily</h2>
          </div>
          <div className="mt-10">
            <NewArrivalsTabs />
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="btn-primary">
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-blush py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center">Why {site.wordmark}</p>
            <h2 className="section-heading mt-3">Formulated With Care</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-lg bg-paper p-6 shadow-tile">
                <p className="font-display text-lg text-ink">{feature.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Customer Favorites</p>
                <h2 className="section-heading mt-3">Most Loved</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View Full Shop →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter band */}
      <section className="bg-ink text-ivory">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Skin News, But Quieter
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/75">
            10% off your first order, plus early access to new formulas. No
            spam, unsubscribe any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
