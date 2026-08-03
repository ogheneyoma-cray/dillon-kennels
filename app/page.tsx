import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import DealBanner from "@/components/DealBanner";
import ProductMiniList from "@/components/ProductMiniList";
import {
  bestSellers,
  byCategory,
  getProduct,
  newArrivals,
  onSale,
  products,
} from "@/data/products";

const PROMOS = [
  {
    src: "/anikoda/promo-dresses.jpg",
    title: "Dresses that spin",
    copy: "Poplin, gingham and tulle, cut with the twirl test in mind.",
    href: "/shop?category=Dresses",
  },
  {
    src: "/anikoda/promo-rail.jpg",
    title: "The everyday rail",
    copy: "Tees, shorts and sets that go straight from school to the yard.",
    href: "/shop?category=Tops+%26+Tees",
  },
  {
    src: "/anikoda/promo-boots.jpg",
    title: "Shoes for real ground",
    copy: "Vulcanised soles and leather linings, sized on a wider last.",
    href: "/shop?category=Shoes",
  },
];

const JOURNAL = [
  {
    date: "18 July",
    author: "Team Anikoda",
    comments: 4,
    title: "How to buy a size ahead without drowning a child in cloth",
    excerpt:
      "There is a right way and a wrong way to size up. A short guide to which garments take it well, and which two you should always buy to fit.",
  },
  {
    date: "02 July",
    author: "Team Anikoda",
    comments: 7,
    title: "Why we stopped using plastisol prints on children's tees",
    excerpt:
      "The print that cracks down the middle after ten washes is not bad luck — it is a choice made at the factory. Here is what we use instead.",
  },
];

export default function HomePage() {
  // The deal band features the deepest reduction currently running.
  const dealProduct = getProduct("cloud-fleece-hoodie") ?? products[0];

  return (
    <>
      <Hero />

      {/* Three promo panels */}
      <section className="boxed grid gap-5 py-16 md:grid-cols-3">
        {PROMOS.map((promo) => (
          <Link
            key={promo.title}
            href={promo.href}
            className="group relative flex aspect-[4/5] items-end overflow-hidden border border-pine/10"
          >
            <Image
              src={promo.src}
              alt=""
              fill
              sizes="(min-width: 768px) 32vw, 92vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/25 to-transparent" />
            <div className="relative p-7">
              <h3 className="head-lg text-canvas">{promo.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-canvas/80">
                {promo.copy}
              </p>
              <span className="btn-ghost-light mt-5">Shop now</span>
            </div>
          </Link>
        ))}
      </section>

      {/* Featured grid */}
      <section className="boxed pb-16">
        <SectionHeading
          title="Featured products"
          subtitle="The pieces parents come back for, restocked continuously rather than seasonally."
        />

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-6">
          {bestSellers.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* line — (+) — line, as in the reference */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-pine/15" />
          <Link
            href="/shop"
            aria-label="View all products"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-pine/20 text-pine transition-colors hover:border-tangerine hover:bg-tangerine hover:text-canvas"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 3.5v13M3.5 10h13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <span className="h-px w-16 bg-pine/15" />
        </div>
      </section>

      <DealBanner product={dealProduct} />

      {/* Three mini-list columns */}
      <section className="boxed grid gap-6 py-16 lg:grid-cols-3">
        {/* All three capped at the same length so the columns line up. */}
        <ProductMiniList
          title="New arrivals"
          products={newArrivals.slice(0, 3)}
          href="/shop"
        />
        <ProductMiniList
          title="On sale"
          products={onSale.slice(0, 3)}
          href="/shop?filter=sale"
        />
        <ProductMiniList
          title="Little ones"
          products={byCategory("Sets & Rompers").slice(0, 3)}
          href="/shop?category=Sets+%26+Rompers"
        />
      </section>

      {/* Journal */}
      <section className="boxed pb-20">
        <SectionHeading title="From the journal" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {JOURNAL.map((entry) => (
            <article
              key={entry.title}
              className="border border-pine/10 bg-white p-7"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-pine/10 pb-3 text-[11px] font-bold uppercase tracking-bold3 text-mudd">
                <span>{entry.date}</span>
                <span>By {entry.author}</span>
                <span>{entry.comments} comments</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase leading-snug tracking-wide text-pine">
                {entry.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mudd">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
