import Image from "next/image";
import Link from "next/link";
import { getNewArrivals, getBestSellers, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORY_TILES = [
  {
    label: "Dresses",
    href: "/shop?category=Dresses",
    image: "/nudgenic/category-dresses.jpg",
  },
  {
    label: "Outerwear",
    href: "/shop?category=Outerwear",
    image: "/nudgenic/category-outerwear.jpg",
  },
  {
    label: "Accessories",
    href: "/shop?category=Accessories",
    image: "/nudgenic/category-accessories.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Noir Evening Slip Dress fits like it was made for me. I've worn it three times in a month and it still looks brand new.",
    name: "Feyisayo A.",
  },
  {
    quote:
      "Ordered the Classic Charcoal Blazer for work and ended up wearing it with everything — jeans, dresses, all of it. Genuinely great quality.",
    name: "Bukola O.",
  },
  {
    quote:
      "Fast delivery to Oyo and the Everyday Straight Jeans fit exactly as described. Already planning my next order.",
    name: "Halimah T.",
  },
];

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  const gridStrip = products.slice(20, 26);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] items-center justify-center overflow-hidden bg-plum">
        <Image
          src="/nudgenic/hero-main.jpg"
          alt="Nudgenic new season womenswear"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/90 via-plum-dark/20 to-transparent" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-ivory">
          <p className="eyebrow text-gold">New Season Arrivals</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Nudgenic
          </h1>
          <p className="mt-5 max-w-md text-sm uppercase tracking-widest2 text-ivory/80">
            Womenswear for everyday confidence
          </p>
          <Link href="/shop" className="btn-primary mt-9 bg-ivory text-ink hover:bg-rose hover:text-ivory">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-plum-dark/25 transition-colors group-hover:bg-plum-dark/40" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold uppercase tracking-widest2 text-ivory">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-page pb-16 lg:pb-20">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Just Landed</p>
          <h2 className="section-heading mt-3">New Arrivals</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/shop" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Editorial banner */}
      <section className="bg-blush">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
            <Image
              src="/nudgenic/editorial-banner.jpg"
              alt="Nudgenic brand editorial"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Our Story</p>
            <p className="mt-5 font-display text-3xl italic leading-snug text-ink sm:text-4xl">
              "Clothing should give you a quiet nudge of confidence, not
              another thing to think about."
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
              Nudgenic is built around pieces that work as hard as you do —
              dresses, tailoring, denim, and accessories designed in Oyo
              Town with a focus on genuine wearability. No trend-chasing,
              no filler pieces. Just clothes you'll actually reach for,
              priced so building a considered wardrobe doesn't mean
              compromising on quality.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Discover The Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Customer Favorites</p>
          <h2 className="section-heading mt-3">Bestsellers</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-plum py-16 text-ivory lg:py-20">
        <div className="container-page">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow text-gold">Reviews</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="text-center">
                <p className="font-display text-xl italic leading-snug text-ivory/90">
                  "{t.quote}"
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the look strip */}
      <section className="py-16 lg:py-20">
        <div className="container-page flex flex-col items-center text-center">
          <p className="eyebrow">@nudgenic</p>
          <h2 className="section-heading mt-3">Shop The Look</h2>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {gridStrip.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group relative block aspect-square overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 640px) 16vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
