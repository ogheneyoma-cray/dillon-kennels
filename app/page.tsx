import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import LimitedRun from "@/components/LimitedRun";
import ProductMiniList from "@/components/ProductMiniList";
import { LogoMark } from "@/components/Logo";
import {
  bestSellers,
  dealProducts,
  featured,
  products,
  topRated,
} from "@/data/products";

const CRAFT = [
  {
    title: "Half-canvas chests",
    copy: "A floating canvas through the chest and lapel, pad-stitched by hand at the roll line so the jacket moulds to you instead of creasing across it.",
  },
  {
    title: "Cloth chosen for heat",
    copy: "Nothing here is heavier than 280gsm and most of it is half-lined. Tailoring designed for a temperate winter does not survive a Lagos afternoon.",
  },
  {
    title: "Seams you can let out",
    copy: "Extra cloth left in the side seams, centre back and trouser waist, so a good tailor can move the fit two sizes rather than one.",
  },
  {
    title: "One price band, no tiers",
    copy: "Every piece falls between $20 and $40. There is no premium line held back — this is the only standard we know how to make.",
  },
];

const TILES = [
  {
    src: "/mydriad/tile-suits.jpg",
    name: "Suits",
    count: "8 cuts",
    href: "/shop?category=Suits",
  },
  {
    src: "/mydriad/tile-blazers.jpg",
    name: "Blazers",
    count: "7 cuts",
    href: "/shop?category=Blazers",
  },
  {
    src: "/mydriad/tile-tuxedos.jpg",
    name: "Dinner Jackets",
    count: "3 cuts",
    href: "/shop?category=Dinner+Jackets",
  },
  {
    src: "/mydriad/tile-waistcoats.jpg",
    name: "Waistcoats",
    count: "2 cuts",
    href: "/shop?category=Waistcoats",
  },
];

const STATS = [
  { figure: "20", label: "Pieces in the range" },
  { figure: "4", label: "Ways a jacket closes" },
  { figure: "48h", label: "From order to courier" },
  { figure: "14", label: "Days to change your mind" },
];

const LOOKBOOK = [
  "look-01",
  "look-02",
  "look-03",
  "look-04",
  "look-05",
  "look-06",
];

const MARQUEE = [
  "Half-canvas construction",
  "Cut in Lagos",
  "$20 – $40, every piece",
  "Priced in USD and NGN",
  "Free delivery over $45",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Craft columns over the atelier image */}
      <section className="relative isolate border-b border-rule">
        <Image
          src="/mydriad/atelier-measure.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-[0.18]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/70" />

        <div className="wrap py-20 lg:py-28">
          <SectionHeading
            eyebrow="The house standard"
            title="Four things we refuse to cheapen"
          />

          <ul className="mt-16 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT.map((item, index) => (
              <li key={item.title} className="bg-panel p-8">
                <span className="text-[11px] tracking-micro text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-light leading-snug text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-smoke">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Category tiles */}
      <section className="ruled">
        <div className="wrap py-20 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow="The collection"
              title="Four ways to be dressed"
            />
            <Link href="/shop" className="link-rule shrink-0">
              All twenty pieces
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TILES.map((tile) => (
              <Link
                key={tile.name}
                href={tile.href}
                className="group relative flex aspect-[3/4] items-end overflow-hidden border border-rule bg-panel"
              >
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                />
                <span className="relative z-10 w-full p-6">
                  <span className="block text-[10px] uppercase tracking-micro text-brass">
                    {tile.count}
                  </span>
                  <span className="mt-2 block text-2xl font-light text-bone">
                    {tile.name}
                  </span>
                  <span className="mt-4 block h-px w-10 bg-brass transition-all duration-500 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee rule */}
      <section
        aria-hidden="true"
        className="overflow-hidden border-y border-rule bg-panel py-4"
      >
        <div className="flex w-max animate-drift">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0">
              {MARQUEE.map((item) => (
                <li
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 whitespace-nowrap px-8 text-[11px] uppercase tracking-micro text-slate"
                >
                  {item}
                  <LogoMark className="h-3.5 w-4 text-brass" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Main grid */}
      <section className="ruled">
        <div className="wrap py-20 lg:py-24">
          <SectionHeading
            eyebrow="Recent cuts"
            title="Eight jackets to start with"
            subtitle="Switch the currency anywhere on the site and every price below re-reads in naira."
          />

          <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/shop" className="btn-line">
              View the full collection
            </Link>
          </div>
        </div>
      </section>

      <LimitedRun products={dealProducts.slice(0, 2)} />

      {/* Split: image left, statement and stats right */}
      <section className="grid border-b border-rule lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[620px]">
          <Image
            src="/mydriad/atelier-fitting.jpg"
            alt="A jacket being fitted on the stand at the Mydriad workroom"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-85"
          />
        </div>

        <div className="flex items-center bg-panel px-6 py-16 sm:px-12 lg:px-16">
          <div>
            <p className="eyebrow">Measured, not guessed</p>
            <h2 className="display-2 mt-5">
              A jacket is a structure. We build it like one.
            </h2>
            <p className="mt-6 max-w-lg text-[15px] font-light leading-[1.9] text-smoke">
              Most tailoring at this price is fused: the canvas is glued to the
              shell, and after a season of heat the chest bubbles and never
              recovers. We float ours. It costs more time and it is the reason
              our jackets are still square in the shoulder three years in.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-px border border-rule bg-rule">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-panel px-6 py-7">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-4xl font-light text-brass">
                      {stat.figure}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-micro text-slate">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <Link href="/about" className="btn-brass mt-10">
              Inside the atelier
            </Link>
          </div>
        </div>
      </section>

      {/* Three mini lists */}
      <section className="ruled">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-3 lg:gap-10">
          <ProductMiniList
            title="Most ordered"
            products={bestSellers.slice(0, 3)}
            href="/shop"
          />
          <ProductMiniList
            title="Highest rated"
            products={topRated.slice(0, 3)}
            href="/shop"
          />
          <ProductMiniList
            title="House picks"
            products={featured.slice(0, 3)}
            href="/shop"
          />
        </div>
      </section>

      {/* Lookbook strip */}
      <section aria-label="Lookbook" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {LOOKBOOK.map((slug) => (
          <div key={slug} className="relative aspect-square border border-rule bg-panel">
            <Image
              src={`/mydriad/${slug}.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 17vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover opacity-70 transition-opacity duration-500 hover:opacity-100"
            />
          </div>
        ))}
      </section>
    </>
  );
}
