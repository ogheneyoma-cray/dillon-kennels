import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import DealOfDay from "@/components/DealOfDay";
import ProductMiniList from "@/components/ProductMiniList";
import {
  bestSellers,
  dealProducts,
  featured,
  products,
  topRated,
} from "@/data/products";

const PROMOS = [
  {
    src: "/adomattic/promo-best-selling.jpg",
    title: "Best\nSelling",
    copy: "The pieces that keep going out of stock",
    href: "/shop",
  },
  {
    src: "/adomattic/promo-new-season.jpg",
    title: "New\nSeason",
    copy: "Available now",
    href: "/shop?category=Outerwear",
  },
];

const TILES = [
  { src: "/adomattic/tile-trend.jpg", name: "Trend", href: "/shop?category=Tops" },
  { src: "/adomattic/tile-new.jpg", name: "New", href: "/shop?category=Bottoms" },
  { src: "/adomattic/tile-sale.jpg", name: "Sale", href: "/shop?filter=sale" },
];

const LOOKBOOK = ["look-01", "look-02", "look-03", "look-04", "look-05"];

const SERVICES = [
  {
    title: "Free delivery over $45",
    copy: "On every order, dispatched within 48 hours.",
  },
  {
    title: "Secure checkout",
    copy: "No card details are ever stored on this site.",
  },
  {
    title: "30-day returns",
    copy: "Unworn, tags on, and the first size swap is free.",
  },
  {
    title: "Real people",
    copy: "Mon–Sat. A person reads every message you send.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Two promo panels */}
      <section className="frame grid gap-6 py-16 md:grid-cols-2">
        {PROMOS.map((promo) => (
          <div
            key={promo.title}
            className="relative flex min-h-[300px] items-center overflow-hidden bg-haze"
          >
            <div className="relative z-10 max-w-[52%] p-8 lg:p-10">
              <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight text-onyx lg:text-4xl">
                {promo.title}
              </h2>
              <p className="mt-3 text-sm text-ash">{promo.copy}</p>
              <Link href={promo.href} className="btn-camel mt-6">
                Shop now
              </Link>
            </div>
            <div className="absolute inset-y-0 right-0 w-[55%]">
              <Image
                src={promo.src}
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 55vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </section>

      {/* New arrivals grid */}
      <section className="frame pb-16">
        <SectionHeading
          title="New Arrival"
          subtitle="Twenty pieces, nothing over $40, restocked rather than replaced."
        />
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/shop" className="btn-outline">
            View all products
          </Link>
        </div>
      </section>

      {/* Two cards only — the band is a two-up grid, so a third would orphan. */}
      <DealOfDay products={dealProducts.slice(0, 2)} />

      {/* Three category tiles */}
      <section className="frame grid gap-6 py-16 md:grid-cols-3">
        {TILES.map((tile) => (
          <Link
            key={tile.name}
            href={tile.href}
            className="group relative flex min-h-[240px] items-center overflow-hidden bg-haze"
          >
            <div className="relative z-10 p-7">
              <span className="link-underline">Shop now</span>
              <p className="mt-4 text-3xl font-semibold text-onyx">{tile.name}</p>
            </div>
            <div className="absolute inset-y-0 right-0 w-[58%]">
              <Image
                src={tile.src}
                alt=""
                fill
                sizes="(min-width: 768px) 22vw, 58vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </section>

      {/* Three mini-list columns */}
      <section className="frame grid gap-10 pb-16 lg:grid-cols-3 lg:gap-8">
        <ProductMiniList
          title="Best Selling"
          products={bestSellers.slice(0, 3)}
          href="/shop"
        />
        <ProductMiniList
          title="Top Rated"
          products={topRated.slice(0, 3)}
          href="/shop"
        />
        <ProductMiniList
          title="Featured"
          products={featured.slice(0, 3)}
          href="/shop"
        />
      </section>

      {/* Service strip */}
      <section className="border-y border-line">
        <ul className="frame grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <li key={service.title} className="text-center">
              <span
                aria-hidden="true"
                className="mx-auto block h-[9px] w-[9px] rotate-45 bg-camel"
              />
              <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wide2 text-onyx">
                {service.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-[13px] leading-relaxed text-ash">
                {service.copy}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Lookbook strip */}
      <section aria-label="Lookbook" className="grid grid-cols-2 md:grid-cols-5">
        {LOOKBOOK.map((slug) => (
          <div key={slug} className="relative aspect-square bg-haze">
            <Image
              src={`/adomattic/${slug}.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 20vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </>
  );
}
