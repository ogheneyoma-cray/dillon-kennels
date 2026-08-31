import Link from "next/link";
import { getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BookCover from "@/components/BookCover";
import NewArrivalsTabs from "@/components/NewArrivalsTabs";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

const CATEGORY_TILES = [
  { category: "Fiction & Novels" as const, tone: "bg-wine-dark" },
  { category: "Mystery & Thriller" as const, tone: "bg-ink" },
  { category: "Drama" as const, tone: "bg-wine-light" },
  { category: "Cookery & Recipe Books" as const, tone: "bg-gold" },
  { category: "Memoir & Lifestyle" as const, tone: "bg-moss" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const pickedByReaders = products
    .filter((p) => !p.popular && p.rating >= 4)
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-cream">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Welcome to {site.wordmark}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Discover your
              <br />
              next book
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop the Catalogue
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center py-6">
            <div className="w-36 -rotate-6 sm:w-44">
              <BookCover
                src={featured[2].image}
                alt={`${featured[2].name} cover`}
                priority
                className="shadow-lift w-full"
              />
            </div>
            <div className="z-10 -mx-4 w-44 sm:w-52">
              <BookCover
                src={featured[0].image}
                alt={`${featured[0].name} cover`}
                priority
                className="shadow-lift w-full"
              />
            </div>
            <div className="w-36 rotate-6 sm:w-44">
              <BookCover
                src={featured[1].image}
                alt={`${featured[1].name} cover`}
                priority
                className="shadow-lift w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals, tabbed by category */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">The Shelf</p>
          <h2 className="section-heading mt-3">Browse by Category</h2>
        </div>
        <div className="mt-10">
          <NewArrivalsTabs />
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/shop" className="btn-primary">
            Discover More Books
          </Link>
        </div>
      </section>

      {/* Newsletter band */}
      <section className="bg-wine text-cream">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Stay in Touch with Our Updates
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream/80">
            New releases, staff picks and the occasional discount — no spam,
            unsubscribe any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Browse by Genre</p>
          <h2 className="section-heading mt-3">Choose Your Book</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.category}
              href={`/shop?category=${encodeURIComponent(tile.category)}`}
              className={`group relative flex aspect-[3/4] items-end overflow-hidden p-5 text-cream transition-transform hover:-translate-y-1 ${tile.tone}`}
            >
              <span className="font-display text-lg leading-tight sm:text-xl">
                {tile.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Picked by readers */}
      {pickedByReaders.length > 0 && (
        <section className="border-t border-ink/10 bg-paper">
          <div className="container-page py-16 lg:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Reader Favorites</p>
                <h2 className="section-heading mt-3">Picked by Readers</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View Full Shop →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
              {pickedByReaders.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust strip */}
      <section className="bg-ink text-cream">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-xl">Handpicked Titles</p>
            <p className="mt-2 text-sm text-cream/75">
              Every book on the shelf is chosen, not just stocked.
            </p>
          </div>
          <div>
            <p className="font-display text-xl">USD or NGN Pricing</p>
            <p className="mt-2 text-sm text-cream/75">
              Switch currencies from the header — the total updates instantly.
            </p>
          </div>
          <div>
            <p className="font-display text-xl">Nationwide Delivery</p>
            <p className="mt-2 text-sm text-cream/75">
              Every order ships from Lagos to anywhere in Nigeria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
