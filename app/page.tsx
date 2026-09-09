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
  { value: "5", label: "Core IT Services" },
  { value: "48h", label: "Typical Response Time" },
  { value: "5", label: "Service Categories" },
  { value: "4.8", label: "Average Client Rating" },
];

const FEATURES = [
  {
    title: "Fast Turnaround",
    body: "Most engagements kick off within one business day of your payment clearing — no lengthy sales calls first.",
  },
  {
    title: "USD or NGN Pricing",
    body: "Switch currencies from the header and every price on the site updates instantly.",
  },
  {
    title: "Handled by Specialists",
    body: "Every service is delivered by a dedicated technician on our team, not outsourced to a stranger.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const hero = featured[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dusk">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(47,111,237,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(245,185,66,0.25), transparent 40%)",
          }}
        />
        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-sunbeam before:h-1.5 before:w-1.5 before:rounded-full before:bg-sunbeam">
              IT Services, Priced Up Front
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-[3.3rem]">
              Practical IT Support for Growing Businesses
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-white">
                Browse Services
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm font-semibold text-paper underline decoration-sunbeam decoration-2 underline-offset-4"
              >
                See What We Offer →
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-sm">
              {hero && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift">
                  <ProductCover
                    src={hero.image}
                    alt={`${hero.name} preview`}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {hero && (
                <div className="absolute -bottom-8 -left-6 rounded-2xl bg-paper px-5 py-4 shadow-lift sm:-left-10">
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={hero.rating} className="text-sunbeam-dark" />
                  </div>
                  <p className="mt-2 font-display text-lg font-bold text-dusk">
                    <ProductPrice priceUsd={hero.price} />
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-ink-soft">
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
            IT Services Built Around Your Business
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-dusk">
                  {stat.value}
                  <span className="text-sunbeam">+</span>
                </p>
                <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-dusk py-16 lg:py-20">
        <div className="container-page text-center">
          <p className="eyebrow justify-center text-sunbeam">Service Categories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Find the Right Service By Category
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
            <p className="eyebrow justify-center">Our Services</p>
            <h2 className="section-heading mt-3">
              Browse By Category
            </h2>
          </div>
          <div className="mt-10">
            <NewArrivalsTabs />
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center">Why {site.wordmark}</p>
            <h2 className="section-heading mt-3">Built for Results, Not Just Reports</h2>
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
                <p className="eyebrow">Client Favorites</p>
                <h2 className="section-heading mt-3">Most Requested</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View Full Range →
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
      <section className="bg-dusk text-paper">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Get IT Tips & Offers First
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/75">
            Occasional updates on new services and discounts — no spam,
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
