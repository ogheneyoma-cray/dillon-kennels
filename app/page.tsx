import Image from "next/image";
import Link from "next/link";
import { categories, getFeaturedProducts, getProductBySlug, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewArrivalsTabs from "@/components/NewArrivalsTabs";
import ProductPrice from "@/components/ProductPrice";

const CATEGORY_ICONS: Record<(typeof categories)[number], string> = {
  "Kitchen & Dining": "M6 10.5h9.5a2.5 2.5 0 0 1 0 5H14 M6 8.5c0-1.4 1.6-2 4-2s4 .6 4 2v9c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-9Z",
  "Cleaning & Laundry": "M9 4.5h6l1 3H8l1-3Z M7.5 7.5h9l1 12h-11l1-12Z M10 11v5M14 11v5",
  "Bed & Bath": "M4 18v-5.5A2.5 2.5 0 0 1 6.5 10H9a2 2 0 0 1 2 2v1 M13 13v-1a2 2 0 0 1 2-2h2.5A2.5 2.5 0 0 1 20 12.5V18 M3 18h18 M6 10V7.5A1.5 1.5 0 0 1 7.5 6h0A1.5 1.5 0 0 1 9 7.5V10",
  "Storage & Organization": "M4.5 8.5h15v10h-15z M4.5 8.5 7 4.5h10l2.5 4 M9.5 12.5h5",
  "Lighting & Decor": "M9 4.5h6l2 6H7l2-6Z M12 10.5v6 M9 19.5h6",
};

const TRUST_ITEMS = [
  { title: "Fast Delivery", copy: "Dispatched within 1–2 business days" },
  { title: "Verified Reviews", copy: "Rated by real repeat customers" },
  { title: "7-Day Returns", copy: "Unopened items, no questions asked" },
  { title: "Secure Checkout", copy: "Your card details stay encrypted" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const spotlight = getProductBySlug("rattan-table-lamp-with-linen-shade") ?? products[0];

  return (
    <div>
      {/* Dual hero banner */}
      <section className="bg-paper">
        <div className="container-page grid grid-cols-1 gap-5 py-8 lg:grid-cols-[1.4fr_1fr] lg:py-10">
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden bg-mist px-8 py-10 sm:px-12">
            <p className="text-sm font-bold uppercase tracking-widest2 text-ink/50">
              Thirty Household Essentials
            </p>
            <h1 className="mt-4 max-w-md font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Everything the house needs, nothing it doesn't
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/70">
              Kitchen, cleaning, bed &amp; bath, storage and decor — priced up
              front in USD or NGN, no surprises at checkout.
            </p>
            <div className="mt-7">
              <Link href="/shop" className="btn-primary">
                Shop Collections
              </Link>
            </div>
            <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-[85%] w-[45%] sm:block">
              <div className="relative h-full w-full">
                <Image
                  src="/products/woven-storage-basket-with-handles.jpg"
                  alt=""
                  fill
                  sizes="30vw"
                  className="rounded-tl-[80px] object-cover shadow-lift"
                />
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-ink px-8 py-10 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest2 text-orange">
                Weekly Spotlight
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight">
                {spotlight.name}
              </h2>
              <div className="mt-4 flex items-baseline gap-3">
                <ProductPrice priceUsd={spotlight.price} className="text-2xl font-extrabold text-orange" />
                <ProductPrice
                  priceUsd={Math.round(spotlight.price * 1.25)}
                  className="text-sm text-white/40 line-through"
                />
              </div>
              <Link href={`/shop/${spotlight.slug}`} className="btn-secondary mt-6 border-white text-white hover:border-orange hover:text-orange">
                View Product
              </Link>
            </div>
            <div className="relative mt-8 h-40 w-full self-center sm:h-48 sm:w-3/4">
              <Image
                src={spotlight.image}
                alt={spotlight.name}
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals tabs */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="container-page py-14 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Fresh In</p>
            <h2 className="section-heading mt-3">New Arrivals</h2>
          </div>
          <div className="mt-10">
            <NewArrivalsTabs products={products} />
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
                  className="group flex flex-col items-center bg-paper p-6 text-center shadow-tile transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange/40 text-ink transition-colors group-hover:border-orange group-hover:bg-orange-pale">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={CATEGORY_ICONS[category]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
                    {category}
                  </span>
                  <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-orange-dark">
                    {count} products →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title}>
              <p className="font-display text-base font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured / popular */}
      <section className="container-page border-t border-ink/10 py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Most Popular</p>
            <h2 className="section-heading mt-3">Customer Favorites</h2>
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
      <section className="bg-orange text-white">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to restock the house?</h2>
          <p className="max-w-md text-sm text-white/90">
            Thirty products across five aisles, every one priced up front and
            ready to ship the moment your order clears.
          </p>
          <Link
            href="/shop"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 bg-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
          >
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
