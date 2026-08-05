import Link from "next/link";
import BookCover from "@/components/BookCover";
import { getProduct } from "@/data/products";

const STATS = [
  { figure: "20", label: "Titles in print" },
  { figure: "6", label: "House authors" },
  { figure: "3", label: "Formats per book" },
];

/**
 * Hero: copy at the left, a standing jacket at the right, and the loose
 * decorative shapes the reference scatters behind its composition — a ringed
 * circle, a soft blob and a dotted grid.
 */
export default function Hero() {
  const lead = getProduct("nine-doors-of-ulm");

  return (
    <section className="relative isolate overflow-hidden bg-sand">
      {/* Decorative shapes */}
      <span
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-clay/10"
      />
      <span
        aria-hidden="true"
        className="absolute right-[42%] top-16 hidden h-32 w-32 animate-spinslow rounded-full border-[14px] border-dashed border-rose/25 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-32 right-[-6rem] h-96 w-96 rounded-full bg-rose/10"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-[46%] hidden h-24 w-24 rounded-[38%_62%_55%_45%] bg-clay/15 lg:block"
      />

      <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="eyebrow">Independent fiction, delivered instantly</p>
          <h1 className="display-1 mt-4">
            The whole shelf,
            <br />
            <span className="text-clay">none of the shipping</span>
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.9]">
            Twenty novels and collections from six writers we publish
            ourselves. Buy one and it lands in your reader before the page has
            finished reloading — EPUB, MOBI and PDF, no subscription, no
            device lock.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/shop" className="btn-clay">
              Browse the catalogue
            </Link>
            <Link href="/about" className="btn-line">
              About the press
            </Link>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-bold text-slate">
                    {stat.figure}
                  </span>
                  <span className="mt-1 block font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Standing jacket */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[260px] sm:w-[320px] lg:w-[360px]">
            <span
              aria-hidden="true"
              className="absolute -inset-x-10 -bottom-8 top-14 rounded-[3rem] bg-paper/60"
            />
            {lead && (
              <Link
                href={`/shop/${lead.slug}`}
                className="relative block animate-float"
                aria-label={`${lead.name} by ${lead.author}`}
              >
                <BookCover
                  src={lead.image}
                  alt={`${lead.name} by ${lead.author}`}
                  priority
                  className="w-full rounded-r-lg shadow-lift"
                />
              </Link>
            )}

            {/* Floating price tag, as the reference pins to its hero image */}
            <span className="absolute -left-4 bottom-10 rounded-2xl bg-paper px-5 py-3 text-center shadow-card sm:-left-8">
              <span className="block font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted">
                New this month
              </span>
              <span className="mt-0.5 block font-display text-xl font-bold text-clay">
                ${lead?.price ?? 38}.00
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
