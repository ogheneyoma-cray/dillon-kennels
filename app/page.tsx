import Image from "next/image";
import Link from "next/link";
import { categories, getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const editorial = products.slice(0, 8);

  return (
    <div>
      {/* Hero — editorial image with oversized serif headline overlapping the edge */}
      <section className="container-page pt-10 lg:pt-16">
        <div className="relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm sm:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80"
              alt="Evintat collection"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-aubergine-dark/20" />
          </div>
          <div className="relative z-10 mx-auto -mt-14 max-w-2xl rounded-sm bg-oat px-6 py-8 text-center shadow-lift sm:-mt-20 sm:px-12 sm:py-12">
            <p className="eyebrow justify-center">{site.tagline}</p>
            <h1 className="section-heading mt-3 text-4xl sm:text-5xl">
              Dressed for <em>every</em> mood
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop the Edit
              </Link>
              <Link href="/faq" className="btn-secondary">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category rail — scrollable italic labels over image swatches */}
      <section className="mt-16 py-8 lg:mt-20">
        <div className="container-page">
          <p className="eyebrow">Shop by Category</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5">
          {categories.map((category, i) => (
            <Link
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className="group relative block h-56 w-full overflow-hidden sm:h-72"
            >
              <Image
                src={products.filter((p) => p.category === category)[0]?.image ?? products[i].image}
                alt={category}
                fill
                sizes="(min-width: 640px) 20vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-aubergine-dark/25 transition-colors group-hover:bg-aubergine-dark/40" />
              <p className="absolute bottom-4 left-0 right-0 text-center font-display text-lg italic text-oat">
                {category}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured — asymmetric masonry (tall / short alternating) */}
      {featured.length > 0 && (
        <section className="py-14 lg:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-2 text-center">
              <p className="eyebrow justify-center">Most Loved</p>
              <h2 className="section-heading">This Week&apos;s Edit</h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product, i) => (
                <div key={product.id} className={i % 3 === 1 ? "sm:mt-10" : ""}>
                  <ProductCard product={product} tall={i % 3 === 1} />
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/shop" className="btn-secondary">
                View Full Collection
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Editorial strip — full-width image quote band */}
      <section className="relative overflow-hidden bg-aubergine py-16 text-center lg:py-24">
        <div className="container-page relative z-10">
          <p className="font-display text-2xl italic leading-snug text-oat sm:text-3xl">
            &ldquo;Style isn&apos;t about the price tag, it&apos;s about the fit.&rdquo;
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest2 text-peach">The Evintat Edit</p>
        </div>
      </section>

      {/* Lookbook grid — plain 4-col, no card chrome, intentionally different from the masonry above */}
      <section className="py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Lookbook</p>
          <h2 className="section-heading mt-3">New In</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {editorial.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="section-heading">Ready to find your fit?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
            Pay securely with Mastercard or Visa — priced in USD or NGN.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Shop All Pieces
          </Link>
        </div>
      </section>
    </div>
  );
}
