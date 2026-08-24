import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import EbookCover from "@/components/EbookCover";

const CATEGORY_ICONS: Record<(typeof categories)[number], string> = {
  "Business & Finance": "M4 19h16 M7 19V9 M12 19V5 M17 19v-7",
  "Personal Development": "M12 3l1.9 4.8 5.1.4-3.9 3.3 1.3 5-4.4-2.8-4.4 2.8 1.3-5-3.9-3.3 5.1-.4Z",
  "Technology & Coding": "M8 8l-4 4 4 4m8-8 4 4-4 4M14 6l-4 12",
  "Health & Wellness": "M12 20s-7-4.4-7-9.6A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7 3.4C19 15.6 12 20 12 20Z",
  "Fiction & Storytelling": "M4 5.5c3.4-1.6 6.6-1.6 9.5 0v13c-2.9-1.6-6.1-1.6-9.5 0v-13Z M20 5.5c-3.4-1.6-6.6-1.6-9.5 0v13c2.9-1.6 6.1-1.6 9.5 0v-13Z",
};

const PROMISES = [
  {
    title: "Instant download",
    copy: "Every ebook lands in your inbox and account the moment checkout clears — no waiting on shipping.",
  },
  {
    title: "Read on any device",
    copy: "Every title ships as EPUB, PDF and, where noted, MOBI — pick whichever your reader or app prefers.",
  },
  {
    title: "Priced in USD or GHS",
    copy: "Toggle currency in the header any time; the price you see at checkout is the price you pay.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroBook = products[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist">
        <span aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
        <span aria-hidden="true" className="absolute -bottom-24 right-[-4rem] h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest2 text-sky-dark">
              A digital bookstore, done properly
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Ebooks worth <span className="highlight-bar text-ink">staying up for</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Nedupe Limited curates practical, well-edited ebooks across
              business, self-development, technology, health and fiction —
              every title delivered instantly, priced up front in USD or GHS.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Ebooks
              </Link>
              <Link href="/shop" className="btn-ghost">
                Browse Categories
              </Link>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-ink/40">
              Available in EPUB, PDF &amp; MOBI
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] -rotate-3 transition-transform duration-500 hover:rotate-0">
              <div className="aspect-[3/4] shadow-lift">
                <EbookCover product={heroBook} className="rounded-xl" />
              </div>
              <span className="absolute -right-6 -top-5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-widest2 text-white shadow-tile">
                New
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
              <p className="font-display text-lg font-semibold text-ink">{promise.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{promise.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories grid */}
      <section className="border-t border-ink/10 bg-mist">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Browse By Topic</p>
            <h2 className="section-heading mt-3">Five shelves, one library</h2>
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
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-sky/40 text-sky-dark transition-colors group-hover:border-sky group-hover:bg-sky-pale">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={CATEGORY_ICONS[category]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">
                    {category}
                  </span>
                  <span className="mt-2 text-[12px] font-bold uppercase tracking-wider text-sky-dark">
                    {count} ebooks →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured / bestsellers */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Most Read</p>
            <h2 className="section-heading mt-3">Bestselling Ebooks</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View All Ebooks →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/shop" className="btn-secondary w-full">
            View All Ebooks
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sky text-white">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready to start reading?</h2>
          <p className="max-w-md text-sm text-white/85">
            Thirty titles across five shelves, every one priced up front and
            ready to download the moment your order clears.
          </p>
          <Link
            href="/shop"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-sky-dark transition-transform hover:-translate-y-0.5"
          >
            Shop Ebooks
          </Link>
        </div>
      </section>
    </div>
  );
}
