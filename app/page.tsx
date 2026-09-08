import Link from "next/link";
import { getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import TrustBadges from "@/components/TrustBadges";
import SpecialOfferGrid from "@/components/SpecialOfferGrid";
import BestsellersTabs from "@/components/BestsellersTabs";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroRight = featured[1];
  const newArrivals = products.slice(0, 4);
  const styleHome = products.find((p) => p.slug === "rattan-pendant-lampshade") ?? products[products.length - 1];

  return (
    <div>
      {/* Hero: two split promo panels */}
      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-4 rounded-lg bg-sand p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-widest2 text-ink/50">New This Week</p>
            <h1 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Everyday household goods, styled right
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">{site.description}</p>
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
          </div>
          <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-lg bg-ink p-8 text-cream sm:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest2 text-cream/50">Featured</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                {heroRight?.name ?? "Best Sellers"}
              </h2>
              <p className="mt-3 max-w-xs text-sm text-cream/65">{heroRight?.spec}</p>
              <Link
                href={heroRight ? `/shop/${heroRight.slug}` : "/shop"}
                className="mt-6 inline-flex text-sm font-bold uppercase tracking-wider text-coral underline decoration-2 underline-offset-4"
              >
                View Product →
              </Link>
            </div>
            {heroRight && (
              <div className="absolute -right-6 -top-2 h-40 w-40 overflow-hidden rounded-lg opacity-90 sm:h-52 sm:w-52">
                <ProductImage src={heroRight.image} alt={heroRight.name} priority className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* New arrivals */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Just In</p>
            <h2 className="section-heading mt-3">New Arrivals</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View All Products →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special offer */}
      <section className="border-t border-ink/10 bg-sand">
        <div className="container-page py-16 lg:py-20">
          <div className="text-center">
            <p className="eyebrow">Limited-Time</p>
            <h2 className="section-heading mt-3">Special Offer</h2>
          </div>
          <div className="mt-10">
            <SpecialOfferGrid />
          </div>
        </div>
      </section>

      {/* Style your home banner */}
      <section className="bg-teal text-white">
        <div className="container-page flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest2 text-white/70">Room by Room</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Style Your Home</h2>
          <p className="max-w-md text-sm text-white/85">
            From the kitchen counter to the bedside table — everything on the
            shelf is picked to sit well together, not just sell separately.
          </p>
          <Link
            href="/shop"
            className="mt-2 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-cream transition-transform hover:-translate-y-0.5"
          >
            Shop the Look
          </Link>
        </div>
      </section>

      {/* Bestsellers by category + style panel */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Shop by Room</p>
          <h2 className="section-heading mt-3">Bestsellers</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
          <BestsellersTabs />
          <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg bg-ink p-8 text-cream">
            <div className="absolute inset-0">
              <ProductImage
                src={styleHome.image}
                alt={styleHome.name}
                className="h-full w-full object-cover opacity-40"
              />
            </div>
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest2 text-coral">Style Pick</p>
              <p className="mt-2 font-display text-xl font-bold">{styleHome.name}</p>
              <Link href={`/shop/${styleHome.slug}`} className="btn-primary mt-5 bg-coral hover:bg-coral-dark">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
