import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ProductTabs from "@/components/ProductTabs";
import DealBand from "@/components/DealBand";
import { products, topRated } from "@/data/products";

const CATEGORY_TILES = [
  {
    image: "/crewsita/tile-mens-formal.jpg",
    label: "Men's Formal",
    href: "/shop?category=Men%27s+Formal",
    note: "Oxfords, brogues, monkstraps",
  },
  {
    image: "/crewsita/tile-womens-heels.jpg",
    label: "Women's Heels",
    href: "/shop?category=Women%27s+Heels",
    note: "Blocks, pumps, evening straps",
  },
  {
    image: "/crewsita/tile-sneakers.jpg",
    label: "Sneakers",
    href: "/shop?category=Sneakers",
    note: "Leather, canvas and mesh",
  },
];

const PROMISES = [
  {
    title: "Free delivery over $60",
    copy: "Anywhere in Lagos within 48 hours, nationwide within five working days.",
    path: "M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6Z M7 19a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 7 19Zm10 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z",
  },
  {
    title: "14-day exchanges",
    copy: "Wrong size is not a wrong order. Send it back unworn and swap it.",
    path: "M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6M17 3v4h-4M7 21v-4h4",
  },
  {
    title: "Nothing over $40",
    copy: "One price band across the whole shop, in dollars or naira.",
    path: "M12 3v18M8 7.5h6.5a2.75 2.75 0 0 1 0 5.5H9a2.75 2.75 0 0 0 0 5.5H16",
  },
];

export default function HomePage() {
  const newArrivals = products.slice(12, 20);

  return (
    <>
      <Hero />

      {/* Promise strip */}
      <section className="border-b border-line bg-paper">
        <div className="wrap grid gap-px sm:grid-cols-3">
          {PROMISES.map((promise) => (
            <div
              key={promise.title}
              className="flex items-start gap-4 py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d={promise.path}
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
                  {promise.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  {promise.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            script="Where to start"
            title="Shop by category"
            subtitle="Five categories, twenty pairs, and a size run that goes from a 36 to a 46."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CATEGORY_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block font-display text-lg font-bold uppercase tracking-wide2 text-paper">
                    {tile.label}
                  </span>
                  <span className="mt-1 block text-sm text-paper/75">
                    {tile.note}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 border-b-2 border-rose pb-1 font-display text-[11px] font-bold uppercase tracking-wide2 text-paper">
                    Shop now
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed product grid */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            script="Our pairs"
            title="Featured footwear"
            subtitle="Pick a category to filter the grid, or open the shop for the full run with price and size filters."
          />
          <div className="mt-12">
            <ProductTabs limit={8} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/shop" className="btn-ink">
              View all footwear
            </Link>
          </div>
        </div>
      </section>

      {/* Wide banner */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/crewsita/banner-wide.jpg"
          alt=""
          width={1600}
          height={900}
          className="h-[320px] w-full object-cover sm:h-[380px]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/85 to-ink/25"
        />
        <div className="wrap absolute inset-0 flex items-center">
          <div className="max-w-md">
            <p className="script-line">Reduced this week</p>
            <h2 className="mt-2 font-display text-[1.6rem] font-bold uppercase leading-tight tracking-wide2 text-paper sm:text-[2.2rem]">
              Up to 20% off selected pairs
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">
              Five pairs are marked down while the current run lasts. When the
              size is gone, it is gone until the next batch.
            </p>
            <Link href="/shop?filter=sale" className="btn-rose mt-7">
              Shop reduced
            </Link>
          </div>
        </div>
      </section>

      {/* Deal of the day */}
      <DealBand />

      {/* New arrivals */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            script="Just in"
            title="New arrivals"
            subtitle="The most recent cutting — flats, slip-ons and the whole sneaker run."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Split banner + top rated */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/crewsita/banner-split.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              script="Best reviewed"
              title="Top rated by shoppers"
              align="left"
              subtitle="Four pairs that keep coming back with five stars, and the reasons people give."
            />

            <ul className="mt-8 divide-y divide-line border-y border-line">
              {topRated.map((product) => (
                <li key={product.id} className="py-4">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="group flex items-center gap-4"
                  >
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden bg-paper">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[12px] font-semibold uppercase tracking-wide2 text-ink transition-colors group-hover:text-rose">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-[13px] text-body">
                        {product.upper} · {product.reviews} reviews
                      </span>
                    </span>
                    <span className="shrink-0 font-display text-sm font-bold text-rose">
                      ${product.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            script="In their words"
            title="What shoppers say"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "I bought the tan oxford for a wedding and have worn it to work every week since. The grain hides everything Lagos throws at it.",
                name: "Tunde A.",
                role: "Lagos Mainland",
                image: "/crewsita/studio-01.jpg",
              },
              {
                quote:
                  "The block heel is the first pair I have owned that I could wear through a full church service without swapping shoes at the end.",
                name: "Ngozi E.",
                role: "Surulere",
                image: "/crewsita/studio-02.jpg",
              },
              {
                quote:
                  "Ordered the white sneaker in a 43, it fit exactly as the size guide said it would. No logo on it anywhere, which is why I bought it.",
                name: "Kelechi O.",
                role: "Yaba",
                image: "/crewsita/studio-03.jpg",
              },
            ].map((item) => (
              <figure
                key={item.name}
                className="flex flex-col border border-line p-7"
              >
                <span aria-hidden="true" className="font-script text-4xl leading-none text-rose">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-body">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
                      {item.name}
                    </span>
                    <span className="text-[12px] text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
