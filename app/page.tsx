import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categories, getProductBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryTiles from "@/components/CategoryTiles";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroLeft = getProductBySlug("tan-suede-bomber-jacket");
  const heroRight = getProductBySlug("brown-leather-chukka-boots");

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-stone">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="badge-pill">New Season</p>
            <h1 className="mt-5 font-display text-6xl uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl">
              Menswear
              <br />
              <span className="text-spruce">that fits right.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Shirts, tees, jackets, sweaters and footwear built for daily
              wear — priced up front in Dollars or Naira, no surprises at
              checkout.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link href="/size-guide" className="btn-secondary">
                Find Your Size
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] translate-y-8 overflow-hidden bg-stone">
                {heroLeft && (
                  <Image
                    src={heroLeft.image}
                    alt={heroLeft.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                {heroRight && (
                  <Image
                    src={heroRight.image}
                    alt={heroRight.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 border-4 border-paper bg-ink px-6 py-4 text-center shadow-lift">
              <p className="text-[11px] font-bold uppercase tracking-widest text-mustard">
                Limited Time
              </p>
              <p className="font-display text-3xl uppercase text-paper">
                Up to 20% Off
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-ink/10">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {[
            { title: "Nationwide Delivery", copy: "Shipped from Port Harcourt" },
            { title: "Secure Checkout", copy: "Card payments only" },
            { title: "Easy Returns", copy: "7-day return window" },
            { title: "Real Sizing", copy: "Full size guide included" },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-display text-lg uppercase leading-tight text-ink">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-ink/60">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Shop by Category</p>
            <h2 className="section-heading mt-3">Find Your Fit</h2>
          </div>
        </div>
        <div className="mt-10">
          <CategoryTiles categories={categories} />
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-ink/10 bg-stone">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Bestsellers</p>
              <h2 className="section-heading mt-3">Popular Right Now</h2>
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

          <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/shop" className="btn-secondary w-full">
              View Full Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-ink text-paper">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-2xl uppercase">Built to Last</p>
            <p className="mt-2 text-sm text-paper/70">
              Real fabrics and construction details, not fast-fashion
              shortcuts.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl uppercase">{site.name} Standard</p>
            <p className="mt-2 text-sm text-paper/70">
              Every piece checked for fit and finish before it ships.
            </p>
          </div>
          <div>
            <p className="font-display text-2xl uppercase">Fair Pricing</p>
            <p className="mt-2 text-sm text-paper/70">
              Prices shown up front in USD or NGN — no hidden markups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
