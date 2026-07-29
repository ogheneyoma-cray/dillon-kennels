import Image from "next/image";
import Link from "next/link";
import { getNewArrivals, getBestSellers, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORY_TILES = [
  {
    label: "Tees",
    href: "/shop?category=Tees",
    image: "/vergemind/category-tees.jpg",
  },
  {
    label: "Outerwear",
    href: "/shop?category=Outerwear",
    image: "/vergemind/category-outerwear.jpg",
  },
  {
    label: "Footwear",
    href: "/shop?category=Footwear",
    image: "/vergemind/category-footwear.jpg",
  },
];

const STATS = [
  { value: "50+", label: "Styles In Rotation" },
  { value: "7-DAY", label: "Easy Returns" },
  { value: "WEEKLY", label: "New Drops" },
  { value: "ILORIN", label: "Free Local Delivery" },
];

const TESTIMONIALS = [
  {
    quote:
      "The Crimson Bomber Jacket is heavier and better made than jackets I've paid double for. Genuinely impressed.",
    name: "Damilare O.",
  },
  {
    quote:
      "Ordered three graphic tees and they all fit exactly true to size. Fast delivery to Ilorin too.",
    name: "Tunde A.",
  },
  {
    quote:
      "The Broxx Street Sneakers have been in daily rotation for two months and still look brand new.",
    name: "Kelvin I.",
  },
];

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  const gridStrip = products.slice(20, 26);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-graphite">
        <Image
          src="/vergemind/hero-main.jpg"
          alt="Vergemind new drop menswear"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
        <div className="container-page relative z-10 pb-16 pt-32">
          <p className="eyebrow">New Drop / 001</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] text-bone sm:text-7xl lg:text-8xl">
            Vergemind
          </h1>
          <p className="mt-5 max-w-md text-sm uppercase tracking-widest2 text-bone/70">
            Menswear built for the edge of the city
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">
              Shop The Drop
            </Link>
            <Link href="/shop" className="btn-secondary">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-graphite"
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/30 transition-colors group-hover:bg-noir/10" />
              <span className="absolute bottom-6 left-6 font-display text-3xl uppercase text-bone">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="container-page pb-16 lg:pb-20">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Fresh In</p>
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

      {/* Stats strip */}
      <section className="border-y border-bone/10 bg-graphite">
        <div className="container-page grid grid-cols-2 gap-8 py-12 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-acid sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest2 text-bone/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial banner */}
      <section>
        <div className="container-page grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
            <Image
              src="/vergemind/editorial-banner.jpg"
              alt="Vergemind brand editorial"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">The Vergemind Standard</p>
            <p className="mt-5 font-display text-3xl leading-snug text-bone sm:text-4xl">
              "BUILT FOR THE STREET. PRICED FOR EVERY DAY."
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/70">
              Vergemind was built out of Ilorin on a simple idea: menswear
              should hold up to daily wear without costing a season's
              budget. Every tee, hoodie, and pair of denim in this
              collection is chosen for genuine durability first — the
              graphics and cuts come second. No filler pieces, no
              throwaway fabrics.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Explore The Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Most Worn</p>
          <h2 className="section-heading mt-3">Bestsellers</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-bone/10 bg-graphite py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 font-display text-3xl text-bone sm:text-4xl">
              What The City Is Saying
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-bone/10 p-6">
                <p className="text-sm leading-relaxed text-bone/85">
                  "{t.quote}"
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest2 text-acid">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the grid strip */}
      <section className="py-16 lg:py-20">
        <div className="container-page flex flex-col items-center text-center">
          <p className="eyebrow">@vergemind</p>
          <h2 className="section-heading mt-3">Shop The Fit</h2>
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
