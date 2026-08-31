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

const STATS = [
  { value: "30+", label: "Courses Available" },
  { value: "20+", label: "Expert Instructors" },
  { value: "6", label: "Course Categories" },
  { value: "4.8", label: "Average Course Rating" },
];

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
    body: "Every course is taught by someone who does the work daily, not just studies it.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-magenta"
        style={{
          backgroundImage:
            "linear-gradient(125deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 35%, transparent 55%)",
        }}
      >
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-[3.3rem]">
              Master New Skills With Industry-Leading Courses
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/85">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-white">
                Shop the Catalogue
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm font-semibold text-paper underline decoration-lime decoration-2 underline-offset-4"
              >
                See All Courses →
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6">
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
                <div className="absolute -bottom-8 -left-10 rounded-2xl bg-navy px-5 py-4 shadow-lift sm:-left-16">
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={hero.rating} className="text-lime" />
                  </div>
                  <p className="mt-2 font-display text-lg font-bold text-paper">
                    <ProductPrice priceUsd={hero.price} />
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-paper/60">
                    {hero.category}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats overview */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="container-page text-center">
          <p className="eyebrow justify-center">Overview</p>
          <h2 className="section-heading mt-3">
            Courses Designed For Your Success
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-navy">
                  {stat.value}
                  <span className="text-lime">+</span>
                </p>
                <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-page text-center">
          <p className="eyebrow justify-center text-lime">Course Categories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Navigate Our Course Library By Subject
          </h2>
          <div className="mt-12 text-left">
            <CategoryIconGrid categories={categories} />
          </div>
        </div>
      </section>

      {/* Bestsellers, tabbed by category */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center">Featured Courses</p>
            <h2 className="section-heading mt-3">
              Top-Rated Courses Chosen Daily
            </h2>
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
      <section className="bg-blush py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center">Why {site.wordmark}</p>
            <h2 className="section-heading mt-3">Built for Doing, Not Just Watching</h2>
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
      <section className="bg-navy text-paper">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Get New Courses First
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/75">
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
