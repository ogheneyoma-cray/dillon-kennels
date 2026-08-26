import Image from "next/image";
import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORY_ICONS: Record<(typeof categories)[number], string> = {
  "Kitchen & Dining": "M6 10.5h9.5a2.5 2.5 0 0 1 0 5H14 M6 8.5c0-1.4 1.6-2 4-2s4 .6 4 2v9c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-9Z",
  "Small Appliances": "M4.5 10a2.5 2.5 0 0 1 2.5-2.5h10A2.5 2.5 0 0 1 19.5 10v7h-15v-7Z M9 8v-1M15 8v-1",
  "Home & Living": "M8 4.5h8l2.5 6H5.5L8 4.5Z M12 10.5v6 M8 19.5h8",
  "Audio & Accessories": "M5 14.5v-2a7 7 0 0 1 14 0v2 M3.5 13.5h4v6h-4z M16.5 13.5h4v6h-4z",
  "Smart Gadgets": "M7 10.5h10v8h-10z M9.5 10.5V7M14.5 10.5V7",
};

const PROMISES = [
  {
    title: "Fast Lagos delivery",
    copy: "Orders placed before 2pm ship the same day from our Lagos workshop, with tracked delivery across Nigeria.",
  },
  {
    title: "Priced up front",
    copy: "Every item is priced before you buy — no surprise fees added once you reach checkout.",
  },
  {
    title: "USD or NGN",
    copy: "Toggle currency in the header any time; the price you see at checkout is the price you pay.",
  },
];

const PROMO_TILES = [
  {
    eyebrow: "Kitchen, Reimagined",
    heading: "Get Everyday\nKitchen Deals",
    cta: "Shop Kitchen",
    href: "/shop?category=Kitchen%20%26%20Dining",
    image: "/products/stainless-steel-electric-kettle.jpg",
  },
  {
    eyebrow: "Up to 20% Off",
    heading: "Small Appliances\nFor Small Kitchens",
    cta: "Shop Appliances",
    href: "/shop?category=Small%20Appliances",
    image: "/products/compact-air-fryer-2-5l.jpg",
  },
  {
    eyebrow: "Sound & Charge",
    heading: "Audio Gear\nThat Keeps Up",
    cta: "Shop Audio",
    href: "/shop?category=Audio%20%26%20Accessories",
    image: "/products/over-ear-wireless-headphones.jpg",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroProduct = products.find((p) => p.slug === "video-doorbell-camera") ?? products[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist">
        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest2 text-gold-dark">
              Home goods &amp; electronics, done properly
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Everyday gear <span className="highlight-bar text-ink">worth buying twice</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Ticad Iboo stocks kitchen essentials, small appliances, lighting,
              audio and smart gadgets for the home — thirty pieces, every one
              priced up front in USD or NGN.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop All Products
              </Link>
              <Link href="/shop" className="btn-ghost">
                Browse Categories
              </Link>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-ink/40">
              30 Products Across 5 Categories
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] transition-transform duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute -right-4 -top-4 rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-widest2 text-white shadow-tile">
                New In
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section className="bg-paper">
        <div className="container-page grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
          {PROMISES.map((promise) => (
            <div key={promise.title}>
              <p className="font-display text-lg font-bold text-ink">{promise.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{promise.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo tiles */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="container-page py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PROMO_TILES.map((tile) => (
              <Link
                key={tile.heading}
                href={tile.href}
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-6 shadow-tile transition-transform hover:-translate-y-1"
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-widest2 text-white/75">
                    {tile.eyebrow}
                  </p>
                  <h3 className="mt-2 whitespace-pre-line font-display text-2xl font-extrabold leading-tight text-white">
                    {tile.heading}
                  </h3>
                </div>
                <span className="relative inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-transform group-hover:-translate-y-0.5">
                  {tile.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="border-t border-ink/10 bg-mist">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Browse By Category</p>
            <h2 className="section-heading mt-3">Five aisles, one cart</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex flex-col items-center rounded-2xl bg-paper p-6 text-center shadow-tile transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/50 text-ink transition-colors group-hover:border-gold group-hover:bg-gold-pale">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={CATEGORY_ICONS[category]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
                    {category}
                  </span>
                  <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-gold-dark">
                    {count} products →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured / popular */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Most Popular</p>
            <h2 className="section-heading mt-3">Trending Products</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View All Products →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/shop" className="btn-secondary w-full">
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink text-white">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to restock the house?</h2>
          <p className="max-w-md text-sm text-white/85">
            Thirty products across five categories, every one priced up front
            and ready to ship the moment your order clears.
          </p>
          <Link
            href="/shop"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
          >
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
