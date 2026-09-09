import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const board = products.slice(0, 6);

  return (
    <div>
      {/* Hero: a departure board of services, not a split hero */}
      <section className="bg-gate">
        <div className="container-page py-14 text-center lg:py-20">
          <p className="font-display text-xs uppercase tracking-widest2 text-beacon">
            {site.tagline}
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] text-paper sm:text-4xl lg:text-5xl">
            IT services for businesses ready to depart on time
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-paper/65">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              View Departures
            </Link>
            <Link href="/about" className="btn-white">
              About Us
            </Link>
          </div>
        </div>

        <div className="container-page pb-14 lg:pb-20">
          <div className="overflow-hidden rounded-lg border border-gate-soft">
            <div className="flex items-center gap-3 border-b border-gate-soft bg-gate-soft/40 px-4 py-2.5 font-display text-[11px] uppercase tracking-widest2 text-paper/50">
              <span className="w-14 shrink-0 sm:w-20">Code</span>
              <span className="min-w-0 flex-1">Service</span>
              <span className="hidden w-40 shrink-0 sm:block">Category</span>
              <span className="w-16 shrink-0 text-right">Price</span>
              <span className="w-20 shrink-0 text-right">Status</span>
            </div>
            {board.map((item, i) => (
              <Link
                key={item.id}
                href={`/shop/${item.slug}`}
                className="group flex items-center gap-3 border-b border-gate-soft/60 px-4 py-3 font-display text-sm transition-colors last:border-b-0 hover:bg-gate-soft/40"
              >
                <span className="w-14 shrink-0 text-beacon sm:w-20">
                  CT{String(i + 101)}
                </span>
                <span className="min-w-0 flex-1 truncate text-paper/90 group-hover:text-paper">
                  {item.name}
                </span>
                <span className="hidden w-40 shrink-0 truncate text-xs text-paper/50 sm:block">
                  {item.category}
                </span>
                <span className="w-16 shrink-0 text-right text-paper/80">${item.price}</span>
                <span className="w-20 shrink-0 text-right text-xs font-bold uppercase tracking-widest2 text-radar">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories as terminal gates */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Terminal Map</p>
          <h2 className="section-heading mt-3">Choose Your Gate</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category, i) => {
              const count = products.filter((p) => p.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group rounded-lg border border-line bg-paper p-5 transition-colors hover:border-beacon-dark"
                >
                  <p className="font-display text-xs text-ink-soft">GATE {i + 1}</p>
                  <p className="mt-2 font-display text-base font-bold text-ink group-hover:text-beacon-dark">
                    {category}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">{count} services</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products as boarding passes */}
      {featured.length > 0 && (
        <section className="bg-mist py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Priority Boarding</p>
                <h2 className="section-heading mt-3">Most Booked Services</h2>
              </div>
              <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
                View All Departures →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter band */}
      <section className="bg-gate text-paper">
        <div className="container-page py-14 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Boarding Announcements
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper/65">
            New services and the occasional discount — no spam, unsubscribe
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
