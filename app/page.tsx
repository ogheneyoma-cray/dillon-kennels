import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductCover from "@/components/ProductCover";
import NewArrivalsTabs from "@/components/NewArrivalsTabs";
import NewsletterForm from "@/components/NewsletterForm";
import CategoryIconGrid from "@/components/CategoryIconGrid";
import StarRating from "@/components/StarRating";
import ProductPrice from "@/components/ProductPrice";
import { site } from "@/lib/site";

const BADGES = ["Instant Access", "Lifetime Access", "Beginner Friendly"];

const FEATURES = [
  {
    title: "Instant Access",
    body: "No shipping, no waiting — your course unlocks the moment payment clears.",
  },
  {
    title: "USD or NGN Pricing",
    body: "Switch currencies from the header and every price on the site updates instantly.",
  },
  {
    title: "Taught by Practitioners",
    body: "Every course is taught by someone who has actually run the campaigns, not just studied them.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Welcome to {site.wordmark}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
              Skills that pay for
              <br />
              themselves
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {BADGES.map((badge) => (
                <span key={badge} className="badge-pill">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop the Catalogue
              </Link>
              <Link href="/about-us" className="btn-ghost">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6">
            <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage via-sage to-indigo opacity-90 sm:inset-8" />
            <div className="relative w-48 sm:w-56">
              {hero && (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift">
                  <ProductCover
                    src={hero.image}
                    alt={`${hero.name} cover`}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {hero && (
                <>
                  <div className="absolute -right-8 -top-6 flex items-center gap-1.5 rounded-xl bg-paper px-3 py-2 shadow-lift sm:-right-12">
                    <StarRating rating={hero.rating} />
                  </div>
                  <div className="absolute -bottom-6 -left-8 rounded-xl bg-paper px-4 py-3 shadow-lift sm:-left-12">
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">Only</p>
                    <ProductPrice
                      priceUsd={hero.price}
                      className="block font-display text-lg font-bold text-indigo"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category icon grid */}
      <section className="container-page py-16 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Browse the Library</p>
          <h2 className="section-heading mt-3">Choose a Topic</h2>
        </div>
        <div className="mt-10">
          <CategoryIconGrid categories={categories} />
        </div>
      </section>

      {/* New arrivals, tabbed by category */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow">The Catalogue</p>
            <h2 className="section-heading mt-3">Bestselling Courses</h2>
          </div>
          <div className="mt-10">
            <NewArrivalsTabs />
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="btn-primary">
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-mint py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow">Why {site.wordmark}</p>
            <h2 className="section-heading mt-3">Built for Doing, Not Just Reading</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-paper p-6 shadow-tile">
                <p className="font-display text-lg font-semibold text-ink">{feature.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Learner Favorites</p>
                <h2 className="section-heading mt-3">Most Recommended</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View Full Catalogue →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter band */}
      <section className="dot-grid-surface bg-indigo text-lavender">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Get New Courses First
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-lavender/80">
            New releases and the occasional discount — no spam, unsubscribe
            any time.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
