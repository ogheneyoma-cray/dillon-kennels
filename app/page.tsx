import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PromoTiles from "@/components/PromoTiles";
import CategoryTabs from "@/components/CategoryTabs";
import { site } from "@/lib/site";

const VALUE_PROPS = [
  { title: "Nationwide Delivery", copy: "Shipped fast across Nigeria" },
  { title: "Secure Checkout", copy: "Visa & Mastercard only" },
  { title: "Easy Returns", copy: "7-day return window" },
  { title: "Built to Last", copy: "Everyday quality, checked twice" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-sand">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rust">
              New Season Household Edit
            </p>
            <h1 className="mt-4 max-w-lg font-display text-4xl font-semibold uppercase leading-[1.05] text-navy sm:text-5xl">
              Everyday Essentials for a Well-Kept Home
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Bathroom accessories, kitchen tools, storage, decor and
              cleaning essentials — priced up front in Dollars or Naira.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/products/hero-living.jpg"
              alt="Household essentials styled in a warm living space"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-line bg-paper">
        <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <div key={item.title}>
              <p className="font-display text-base font-medium leading-tight text-navy">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo tiles */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Shop by Category</p>
            <h2 className="section-heading mt-3">Featured Edits</h2>
          </div>
        </div>
        <div className="mt-10">
          <PromoTiles />
        </div>
      </section>

      {/* Bestsellers */}
      <section className="border-t border-line bg-cream">
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

      {/* Category tabs browse */}
      <section className="container-page py-16 lg:py-20">
        <div>
          <p className="eyebrow">Browse by Room</p>
          <h2 className="section-heading mt-3">Shop by Category</h2>
        </div>
        <div className="mt-10">
          <CategoryTabs />
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-navy-deep text-paper">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-lg font-medium">Considered Materials</p>
            <p className="mt-2 text-sm text-paper/70">
              Real materials and honest construction, not disposable
              gimmicks.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-medium">{site.name} Standard</p>
            <p className="mt-2 text-sm text-paper/70">
              Every piece checked for fit and finish before it ships.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-medium">Fair Pricing</p>
            <p className="mt-2 text-sm text-paper/70">
              Prices shown up front in USD or NGN — no hidden markups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
