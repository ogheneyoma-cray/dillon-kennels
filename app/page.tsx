import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryRail from "@/components/CategoryRail";
import ProductTabs from "@/components/ProductTabs";
import CountdownBanner from "@/components/CountdownBanner";
import Testimonials from "@/components/Testimonials";
import FeatureStrip from "@/components/FeatureStrip";
import { bestSellers, byCategory, newArrivals, onSale } from "@/data/products";

const JOURNAL = [
  {
    date: "12 July",
    title: "Satin, sateen and silk: what the labels actually mean",
    excerpt:
      "Three words used interchangeably on most product pages, describing three genuinely different things. Here is how to tell them apart by touch.",
  },
  {
    date: "28 June",
    title: "How to sleep cool through a Lagos August",
    excerpt:
      "Fibre matters more than weight. A short guide to which fabrics move heat away from the skin and which quietly hold it against you.",
  },
];

const MARQUEE = [
  "Free Lagos delivery over ₦75,000",
  "14-day returns",
  "Prices in USD and NGN",
  "Dispatched within 48 hours",
  "Made in Lagos",
];

// The tabbed grid shows a fixed number of tiles per collection so the rows
// stay even at every breakpoint.
const TABS = [
  { id: "new", label: "New Arrivals", products: newArrivals.slice(0, 8) },
  { id: "best", label: "Best Sellers", products: bestSellers.slice(0, 8) },
  { id: "sale", label: "On Sale", products: onSale.slice(0, 8) },
];

export default function HomePage() {
  const womensCount = byCategory("Women's Sleepwear").length;

  return (
    <>
      <Hero />

      {/* Scrolling assurance rail. The second copy is duplicated purely to make
          the loop seamless, so it is hidden from assistive tech. */}
      <div className="overflow-hidden border-b border-midnight/10 bg-linen py-3.5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-12 pr-12" aria-hidden={copy === 1}>
              {MARQUEE.map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap text-[11px] uppercase tracking-wide3 text-slate"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <CategoryRail />
      <ProductTabs tabs={TABS} />

      {/* Two-up promotional panels */}
      <section className="shell grid gap-6 pt-24 lg:grid-cols-2 lg:pt-28">
        {[
          {
            src: "/xiradix/pinstripe-satin-robe.jpg",
            title: "The robe edit",
            copy: "Waffle, terry, satin and cotton lace — ten ways to answer the door.",
            href: "/shop?category=Robes+%26+Kimonos",
          },
          {
            src: "/xiradix/colonnade-draped-nightgown.jpg",
            title: "Women's sleepwear",
            copy: `${womensCount} pieces, from a $22 modal camisole to a floor-length bias-cut gown.`,
            href: "/shop?category=Women%27s+Sleepwear",
          },
        ].map((panel) => (
          <Link
            key={panel.title}
            href={panel.href}
            className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-mist"
          >
            <Image
              src={panel.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/15 to-transparent" />
            <div className="relative p-8 lg:p-10">
              <h3 className="font-display text-3xl font-light text-linen lg:text-4xl">
                {panel.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-linen/75">
                {panel.copy}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 border-b border-linen pb-1 text-sm text-linen">
                Shop now
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </section>

      <CountdownBanner />
      <Testimonials />

      <section className="shell pt-24 lg:pt-28">
        <div>
          <p className="kicker">Journal</p>
          <h2 className="display-lg mt-3">Notes on cloth and rest</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {JOURNAL.map((entry) => (
            <article
              key={entry.title}
              className="rounded-2xl border border-midnight/10 bg-linen p-8"
            >
              <p className="text-[11px] uppercase tracking-wide3 text-orchid">
                {entry.date}
              </p>
              <h3 className="mt-3 font-display text-2xl font-light leading-snug text-midnight">
                {entry.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-midnight/70">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FeatureStrip />
    </>
  );
}
