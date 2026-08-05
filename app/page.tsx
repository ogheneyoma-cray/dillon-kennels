import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ProductTabs from "@/components/ProductTabs";
import BookCover from "@/components/BookCover";
import DealBand from "@/components/DealBand";
import StarRating from "@/components/StarRating";
import {
  FEATURED_AUTHOR,
  bestSellers,
  byAuthor,
  categories,
  products,
  topRated,
} from "@/data/products";

const PROMISES = [
  {
    title: "Instant download",
    copy: "The files are in your account the moment the order clears — no dispatch, no waiting.",
    path: "M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5",
  },
  {
    title: "Three formats, one price",
    copy: "EPUB, MOBI and PDF come with every purchase. Read on whatever you already own.",
    path: "M4 5.5A1.5 1.5 0 0 1 5.5 4H10v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14V4Z",
  },
  {
    title: "Yours to keep",
    copy: "No subscription, no expiry and no device lock. Download the files again any time.",
    path: "M7 10V7.5a5 5 0 0 1 10 0V10M5.5 10h13a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-8A1.5 1.5 0 0 1 5.5 10Z",
  },
];

const GENRE_ICONS: Record<string, string> = {
  "Science Fiction":
    "M12 3.5c3 2.5 4.5 5.5 4.5 9a4.5 4.5 0 1 1-9 0c0-3.5 1.5-6.5 4.5-9Zm0 16.5v-3",
  Fantasy:
    "M12 3.5 14.2 9l5.8.5-4.4 3.9 1.3 5.7L12 16l-4.9 3.1 1.3-5.7L4 9.5 9.8 9 12 3.5Z",
  Romance:
    "M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8.4a3.8 3.8 0 0 1 7 2.4C19 15.6 12 20 12 20Z",
  "Mystery & Thriller":
    "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 4 4",
  "Literary Fiction":
    "M4 5.5C7 4.2 9.8 4.2 12 6c2.2-1.8 5-1.8 8-.5v13c-3-1.3-5.8-1.3-8 .5-2.2-1.8-5-1.8-8-.5v-13Z",
};

const JOURNAL = [
  {
    image: "/coquinate/blog-01.jpg",
    date: "12 July 2026",
    title: "Why we ship three formats and charge for one",
    excerpt:
      "Format-splitting is the oldest trick in digital publishing. Here is the arithmetic on why we refuse to do it.",
  },
  {
    image: "/coquinate/blog-02.jpg",
    date: "28 June 2026",
    title: "How a manuscript becomes a jacket",
    excerpt:
      "Every cover in this catalogue is drawn from the same six colours and five layouts. The constraint is the point.",
  },
  {
    image: "/coquinate/blog-03.jpg",
    date: "9 June 2026",
    title: "On finishing books you are not enjoying",
    excerpt:
      "A short defence of abandoning a novel at page sixty, from a press that would rather you read something else.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I bought Shadow of Decenit at eleven at night and was reading it ninety seconds later. No app to install, no account to verify. That is the entire reason I keep coming back.",
    name: "Rodja Hartmann",
    role: "Reader since 2024",
    image: "/coquinate/testi-01.jpg",
  },
  {
    quote:
      "The EPUB is properly typeset — real small caps, working footnotes, a table of contents that actually jumps. Most stores at this price send you a converted Word file and hope.",
    name: "Alaxander Pall",
    role: "Reader since 2025",
    image: "/coquinate/testi-02.jpg",
  },
  {
    quote:
      "I lost my reader on a flight and had every title back on the replacement before I got home. They do not treat a re-download as a second purchase.",
    name: "Ifeoma Balogun",
    role: "Reader since 2023",
    image: "/coquinate/testi-03.jpg",
  },
];

export default function HomePage() {
  const authorBooks = byAuthor(FEATURED_AUTHOR);
  const newest = products.slice(14, 19);

  return (
    <>
      <Hero />

      {/* Promise strip */}
      <section className="bg-paper">
        <div className="wrap grid gap-8 py-12 sm:grid-cols-3">
          {PROMISES.map((promise) => (
            <div key={promise.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d={promise.path}
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-[17px] font-bold text-slate">
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

      {/* Trending */}
      <section className="bg-blush py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Trending on Coquinate"
            title="What everyone is reading"
            subtitle="The five titles moving fastest this month, across every genre we publish."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
            {bestSellers.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special offers — two promo panels */}
      <section className="bg-paper pb-16 lg:pb-20">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          {[
            {
              image: "/coquinate/banner-offer.jpg",
              eyebrow: "Special offer",
              title: "Two novels, twenty per cent off",
              copy: "Buy any two reduced titles this month and the discount applies to both.",
              href: "/shop?filter=sale",
              cta: "Shop reduced",
            },
            {
              image: "/coquinate/banner-wide.jpg",
              eyebrow: "Starter shelf",
              title: "New here? Begin with five",
              copy: "The five books we hand to anyone who asks where to start with the press.",
              href: "/shop?category=Literary+Fiction",
              cta: "See the shelf",
            },
          ].map((panel) => (
            <div
              key={panel.title}
              className="relative isolate overflow-hidden rounded-3xl"
            >
              <Image
                src={panel.image}
                alt=""
                width={1600}
                height={900}
                className="h-[300px] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-slate/92 via-slate/70 to-slate/20"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-9">
                <p className="font-display text-[13px] font-semibold uppercase tracking-wide3 text-clay-soft">
                  {panel.eyebrow}
                </p>
                <h3 className="mt-2 max-w-xs font-display text-[1.6rem] font-bold leading-tight text-paper">
                  {panel.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/75">
                  {panel.copy}
                </p>
                <Link
                  href={panel.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-pill bg-clay px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wide2 text-paper transition-colors hover:bg-paper hover:text-clay"
                >
                  {panel.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book of the month — tabbed grid */}
      <section className="bg-blush py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Book of the month"
            title="Browse by genre"
            subtitle="Pick a genre to filter the shelf, or open the shop for the full catalogue with author and price filters."
          />
          <div className="mt-12">
            <ProductTabs limit={10} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/shop" className="btn-slate">
              View all titles
            </Link>
          </div>
        </div>
      </section>

      {/* Deal band */}
      <DealBand />

      {/* Best seller author */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-clay/10"
            />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/coquinate/author-portrait.jpg"
                alt={FEATURED_AUTHOR}
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-5 right-5 rounded-2xl bg-clay px-6 py-4 text-center text-paper shadow-lift">
              <span className="block font-display text-2xl font-bold leading-none">
                {authorBooks.length}
              </span>
              <span className="mt-1 block font-display text-[11px] font-semibold uppercase tracking-wide2 text-paper/80">
                Titles in print
              </span>
            </span>
          </div>

          <div>
            <SectionHeading
              eyebrow="Author of the month"
              title={FEATURED_AUTHOR}
              align="left"
            />
            <p className="mt-5 max-w-lg text-[15px] leading-[1.9]">
              Martin has written for us since the press started, and has the
              unusual distinction of publishing both the shortest book on this
              list and the longest. He writes slowly, revises in public, and
              refuses to explain his own endings — which is why readers argue
              about them for years.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {authorBooks.map((book) => (
                <Link
                  key={book.id}
                  href={`/shop/${book.slug}`}
                  className="group"
                >
                  <BookCover
                    src={book.image}
                    alt={book.name}
                    className="w-full rounded-r-md shadow-card transition-transform duration-500 group-hover:-translate-y-1.5"
                  />
                  <span className="mt-2.5 block font-display text-[13px] font-semibold leading-snug text-slate transition-colors group-hover:text-clay">
                    {book.name}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href={`/shop?q=${encodeURIComponent(FEATURED_AUTHOR)}`}
              className="btn-line mt-8"
            >
              All {FEATURED_AUTHOR} titles
            </Link>
          </div>
        </div>
      </section>

      {/* Top categories */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Top categories"
            title="Five shelves, twenty books"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
            {categories.map((category) => {
              const count = products.filter(
                (p) => p.category === category
              ).length;
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="group flex flex-col items-center rounded-3xl bg-paper p-7 text-center transition-shadow hover:shadow-lift"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-clay transition-colors group-hover:bg-clay group-hover:text-paper">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={GENRE_ICONS[category]}
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="mt-4 font-display text-[15px] font-bold leading-snug text-slate">
                    {category}
                  </span>
                  <span className="mt-1 text-[13px] text-muted">
                    {count} titles
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newest */}
      <section className="bg-blush py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Just published"
            title="New on the shelf"
            subtitle="The most recent titles to come off the press, newest first."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
            {newest.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top rated list over a wide banner */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Best reviewed"
              title="Highest rated by readers"
              align="left"
              subtitle="The titles that keep coming back with five stars, and what readers say about them."
            />

            <ul className="mt-8 divide-y divide-line border-y border-line">
              {topRated.map((product) => (
                <li key={product.id} className="py-4">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="group flex items-center gap-4"
                  >
                    <BookCover
                      src={product.image}
                      alt=""
                      className="h-24 w-16 shrink-0 rounded-r-sm object-cover shadow-card transition-transform duration-500 group-hover:-translate-y-1"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[16px] font-bold text-slate transition-colors group-hover:text-clay">
                        {product.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-muted">
                        {product.author} · {product.pages} pages
                      </span>
                      <StarRating
                        rating={product.rating}
                        reviews={product.reviews}
                        className="mt-1.5"
                      />
                    </span>
                    <span className="shrink-0 font-display text-lg font-bold text-clay">
                      ${product.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-40 w-40 rounded-[45%_55%_60%_40%] bg-rose/15"
            />
            <Image
              src="/coquinate/hero-library.jpg"
              alt=""
              width={1600}
              height={900}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading eyebrow="Reader reviews" title="What readers say" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col rounded-3xl bg-paper p-8 shadow-card"
              >
                <span aria-hidden="true" className="text-5xl leading-none text-clay/25">
                  &ldquo;
                </span>
                <blockquote className="-mt-3 flex-1 text-[15px] leading-relaxed text-body">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <Image
                    src={item.image}
                    alt=""
                    width={400}
                    height={400}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-display text-[15px] font-bold text-slate">
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

      {/* Journal */}
      <section className="bg-blush py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="From the press"
            title="Notes and news"
            subtitle="Occasional writing about publishing, jackets and the books we are working on."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {JOURNAL.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl bg-paper shadow-card"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    width={1600}
                    height={900}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-pill bg-paper px-4 py-1.5 font-display text-[12px] font-semibold uppercase tracking-wide2 text-clay">
                    {post.date}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-[19px] font-bold leading-snug text-slate">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
