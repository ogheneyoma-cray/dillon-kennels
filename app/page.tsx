import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-24">
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Dillon Kennels
            </h1>
            <p className="mt-5 max-w-md font-display text-xl italic text-ink/70 sm:text-2xl">
              Heritage weaves, modern silhouettes, everyday wear.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Clothing, footwear, and accessories designed in Lagos and
              crafted with West African textile traditions at their core —
              built to be worn on repeat, not just once.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <div className="relative aspect-[3/4] translate-y-6 overflow-hidden bg-sand">
              <Image
                src="/products/hero-menswear.jpg"
                alt="Model wearing a Dillon Kennels heritage wrap shirt"
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <Image
                src="/products/hero-womenswear.jpg"
                alt="Model wearing Dillon Kennels footwear and accessories"
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="container-page grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_1.4fr] lg:py-20">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading mt-3">
              Rooted in craft, built for daily life
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Dillon Kennels began on the workshop floors of Lagos, where the
              rhythm of hand looms and the sharp smell of indigo dye have
              shaped fashion for generations. We started the label with a
              simple frustration: the clothing that carried our textile
              heritage — aso-oke weaves, adire resist-dyeing, batik, Ankara
              wax prints — rarely showed up in wardrobes built for the
              everyday. It was reserved for weddings, for owambe, for
              once-a-year occasions. We wanted to change that. Every piece in
              our collection starts with a material or technique rooted in
              West African craft, then gets reworked through a contemporary
              tailoring lens so it fits naturally into a Tuesday commute, a
              weekend market run, or a Friday dinner out.
            </p>
            <p>
              We work directly with small ateliers and individual artisans
              across Lagos and the wider South-West, from the narrow-strip
              weavers of Iseyin to the raffia weavers who hand-construct our
              bags. That relationship means slower production runs, genuine
              price transparency, and pieces that carry real variation from
              one to the next — because they were made by hands, not
              machines alone. Every product on this site, from our tailored
              blazers to our woven belts, is built to be worn hard and worn
              often, backed by fabric choices and construction details we're
              proud to stand behind. This is fashion that respects where it
              came from and where you're actually going to wear it.
            </p>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">The Edit</p>
            <h2 className="section-heading mt-3">Featured Pieces</h2>
          </div>
          <Link href="/shop" className="btn-ghost hidden sm:inline-flex">
            View Full Shop →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/shop" className="btn-secondary w-full">
            View Full Shop
          </Link>
        </div>
      </section>

      {/* Promo strip */}
      <section className="bg-rust text-cream">
        <div className="container-page grid grid-cols-1 gap-8 py-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="font-display text-xl">Handwoven Materials</p>
            <p className="mt-2 text-sm text-cream/85">
              Aso-oke, adire, batik, and raffia sourced directly from
              artisans.
            </p>
          </div>
          <div>
            <p className="font-display text-xl">Lagos Delivery</p>
            <p className="mt-2 text-sm text-cream/85">
              Free delivery within Lagos on orders over ₦75,000.
            </p>
          </div>
          <div>
            <p className="font-display text-xl">Made to Last</p>
            <p className="mt-2 text-sm text-cream/85">
              Constructed for daily wear, not just special occasions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
