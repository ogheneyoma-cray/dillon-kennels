import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryTiles from "@/components/CategoryTiles";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const spotlight = featured[0] ?? products[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(79,95,242,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(245,166,35,0.18), transparent 40%)",
          }}
        />
        <div className="container-page relative grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              20 Self-Paced Courses
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.08] text-paper sm:text-5xl lg:text-[3.25rem]">
              Skills you can start using today
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
              Business, design, marketing, data and productivity courses
              built around real deliverables, not filler. Priced up front in
              Dollars or Naira, yours the moment you check out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Browse Courses
              </Link>
              <Link
                href="/about-us"
                className="btn-secondary border-paper/25 text-paper hover:border-gold hover:text-gold"
              >
                Why Toyeti Digi
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "20", label: "Courses live" },
                { value: "4.7", label: "Average rating" },
                { value: "Lifetime", label: "Course access" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-paper">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-paper/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-paper/10 bg-paper shadow-lift">
              <div className="relative aspect-[4/5]">
                <Image
                  src={spotlight.image}
                  alt={spotlight.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
                  Best Seller
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo">
                  {spotlight.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold leading-tight text-ink">
                  {spotlight.name}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-ink-soft">
                  <span>{spotlight.hours}h</span>
                  <span className="text-gold-dark">★ {spotlight.rating}</span>
                  <span>{spotlight.level}</span>
                </div>
                <Link href={`/shop/${spotlight.slug}`} className="btn-primary mt-5 w-full">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-ink/10">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {[
            { title: "Instant Access", copy: "Start right after checkout" },
            { title: "Secure Checkout", copy: "Visa & Mastercard only" },
            { title: "USD / NGN Pricing", copy: "Shown up front, no surprises" },
            { title: "Built by Practitioners", copy: "Real deliverables, not theory" },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-display text-base font-bold leading-tight text-ink">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-ink/60">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Browse by Skill</p>
            <h2 className="section-heading mt-3">Choose Your Track</h2>
          </div>
        </div>
        <div className="mt-10">
          <CategoryTiles categories={categories} />
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-ink/10 bg-linen">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Popular Courses</p>
              <h2 className="section-heading mt-3">Choose The Best Course For You</h2>
            </div>
            <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
              View All Courses →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/shop" className="btn-secondary w-full">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-navy text-paper">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-lg font-bold">Practical Curriculum</p>
            <p className="mt-2 text-sm text-paper/60">
              Every course is built around finished work you can show, not
              just watched lectures.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-bold">{site.name} Standard</p>
            <p className="mt-2 text-sm text-paper/60">
              Every lesson reviewed for accuracy before it goes live.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-bold">Fair Pricing</p>
            <p className="mt-2 text-sm text-paper/60">
              Prices shown up front in USD or NGN — no hidden markups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
