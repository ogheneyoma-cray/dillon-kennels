import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import CategoryIconRow from "@/components/CategoryIconRow";
import FeaturedRail from "@/components/FeaturedRail";
import BestsellerSpotlight from "@/components/BestsellerSpotlight";
import NewsletterForm from "@/components/NewsletterForm";
import BookCover from "@/components/BookCover";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroBook = featured[0];

  return (
    <div>
      {/* Hero deal banner */}
      <section className="relative overflow-hidden bg-gold">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[1fr_auto_1fr] lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest2 text-ink/60">
              Fresh Off the Shelf
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Discover your
              <br />
              next book
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/75">
              {site.description}
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Shop Now
            </Link>
          </div>

          <div className="relative mx-auto w-44 sm:w-56">
            <div className="shadow-lift">
              <BookCover
                src={heroBook.image}
                alt={`${heroBook.name} cover`}
                priority
                className="w-full"
              />
            </div>
            <span className="absolute -right-6 -top-6 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-ink text-center text-cream shadow-lift">
              <span className="text-[10px] font-bold uppercase tracking-widest2 text-gold">Top Pick</span>
              <span className="font-display text-lg font-bold">{heroBook.rating}.0★</span>
            </span>
          </div>

          <div className="flex flex-col justify-center gap-3 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest2 text-ink/60">Now Available</p>
            <p className="font-display text-xl font-bold text-ink">{heroBook.name}</p>
            <p className="text-sm text-ink/60">by {heroBook.author}</p>
            <Link href={`/shop/${heroBook.slug}`} className="text-sm font-bold uppercase tracking-wider text-ink underline decoration-2 underline-offset-4">
              Read the Blurb →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section>
        <div className="container-page py-16 lg:py-20">
          <div className="text-center">
            <p className="eyebrow">Featured Categories</p>
            <h2 className="section-heading mt-3">Browse the Shelf</h2>
          </div>
          <div className="mt-10">
            <CategoryIconRow />
          </div>
        </div>
      </section>

      {/* Featured books rail + promo panel */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="container-page py-16 lg:py-20">
          <div className="text-center">
            <p className="eyebrow">The Shelf</p>
            <h2 className="section-heading mt-3">Featured Books</h2>
          </div>
          <div className="mt-10">
            <FeaturedRail />
          </div>
        </div>
      </section>

      {/* Bestseller spotlight */}
      <BestsellerSpotlight books={featured} />

      {/* Newsletter band */}
      <section className="border-t border-ink/10 bg-blush">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Join Our Newsletter
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/65">
            New releases, staff picks and the occasional discount — no spam,
            unsubscribe any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
