import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categories, getProductBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryTiles from "@/components/CategoryTiles";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroImage = getProductBySlug("floral-wrap-midi-dress");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/6]">
          {heroImage && (
            <Image
              src={heroImage.image}
              alt={heroImage.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
          <div className="container-page absolute inset-0 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-raspberry">
              New Season
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl uppercase leading-[1.05] text-paper sm:text-6xl">
              The Hotlist of Now
            </h1>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/85">
              Dresses, tops, knitwear, outerwear, denim and accessories —
              priced up front in Dollars or Naira.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link
                href="/size-guide"
                className="btn-secondary border-paper text-paper hover:border-raspberry hover:text-raspberry"
              >
                Find Your Size
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-ink/10">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {[
            { title: "Nationwide Delivery", copy: "Shipped from Port Harcourt" },
            { title: "Secure Checkout", copy: "Visa & Mastercard only" },
            { title: "Easy Returns", copy: "7-day return window" },
            { title: "Real Sizing", copy: "Full size guide included" },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-display text-base leading-tight text-ink">
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
            <h2 className="section-heading mt-3">Explore the Edit</h2>
          </div>
        </div>
        <div className="mt-10">
          <CategoryTiles categories={categories} />
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-ink/10 bg-linen">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Best Sellers</p>
              <h2 className="section-heading mt-3">Popular Right Now</h2>
            </div>
            <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
              View Full Shop →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
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
            <p className="font-display text-lg">Considered Fabrics</p>
            <p className="mt-2 text-sm text-paper/70">
              Real fabrics and construction details, not fast-fashion
              shortcuts.
            </p>
          </div>
          <div>
            <p className="font-display text-lg">{site.name} Standard</p>
            <p className="mt-2 text-sm text-paper/70">
              Every piece checked for fit and finish before it ships.
            </p>
          </div>
          <div>
            <p className="font-display text-lg">Fair Pricing</p>
            <p className="mt-2 text-sm text-paper/70">
              Prices shown up front in USD or NGN — no hidden markups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
