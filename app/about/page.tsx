import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "About the Press",
  description:
    "How Coquinate chooses, edits and prices the fiction it publishes — what we pay authors, why every book ships in three formats, and why nothing costs more than forty dollars.",
};

const PRINCIPLES = [
  {
    title: "Edit it properly or don't take it",
    copy: "Every manuscript gets a structural edit, a line edit and two proof passes before it goes near a jacket. If we cannot afford to do all four on a book, we do not sign it. That is the whole of our acquisition policy.",
  },
  {
    title: "Typeset, not converted",
    copy: "The EPUB is built by hand — real small caps, hanging indents, working footnotes and a table of contents that jumps. Most stores at this price export a Word file and call it an ebook. It shows on the third page.",
  },
  {
    title: "One price, three formats",
    copy: "EPUB, MOBI and PDF come with every purchase. Splitting formats to charge twice is the oldest trick in digital publishing, and we would rather have the reader than the extra fourteen dollars.",
  },
  {
    title: "The author gets half",
    copy: "Fifty per cent of the cover price on every copy sold direct, paid quarterly, with the sales dashboard open to the author the whole time. It is a higher rate than we could offer if we also had warehouses.",
  },
];

export default function AboutPage() {
  const authors = Array.from(new Set(products.map((p) => p.author)));

  return (
    <>
      <PageHeader
        title="About the Press"
        crumb="About"
        intro="Coquinate started because two editors were tired of watching good manuscripts die in a submissions pile for reasons that had nothing to do with the writing."
      />

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[600px]">
          <Image
            src="/coquinate/about-01.jpg"
            alt="A reader in the Coquinate reference library"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-sand px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="prose-legal">
            <p>
              We began with four books and one rule: no title goes out that we
              would not press on a friend. That has kept the list small on
              purpose. Twenty books, six authors, five genres — a catalogue you
              can read the whole of in a year, which is the point.
            </p>
            <p>
              Publishing only in ebook form is not a compromise for us; it is
              the reason the numbers work. There is no print run to guess at, no
              unsold stock to pulp, and no shipping cost between a finished
              manuscript and a reader in another country. That saving is what
              pays for four editorial passes and a fifty per cent author share
              on a book that costs under forty dollars.
            </p>
            <p>
              What we will not do is the thing the rest of the market has
              settled into — selling the same novel three times in three
              formats, locking files to one device, or renting you a licence
              that evaporates when a subscription lapses. You buy the book, you
              own the files, and you can download them again in ten years.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blush py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work"
            title="Four decisions, made once"
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="card p-8 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-display text-[15px] font-bold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[19px] font-bold text-slate">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {principle.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-5">
            <Image
              src="/coquinate/about-02.jpg"
              alt=""
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <Image
              src="/coquinate/about-03.jpg"
              alt=""
              width={1200}
              height={1500}
              className="mt-10 aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="The list"
              title={`${authors.length} authors, ${products.length} books`}
              align="left"
              subtitle="Small enough that an editor has read every page we sell, and that the same person answers the email when something goes wrong."
            />
            <p className="mt-5 text-[15px] leading-[1.9]">
              We take unsolicited submissions twice a year and read every one.
              Most of what we publish arrived that way rather than through an
              agent, which is deliberate — an agent is an expense a first
              novelist should not have to carry to be read.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-clay">
                Browse the catalogue
              </Link>
              <Link href="/contact" className="btn-line">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate">
        <div className="wrap relative py-20 text-center lg:py-24">
          <p className="eyebrow justify-center">The whole of it</p>
          <h2 className="mt-3 font-display text-[1.8rem] font-bold leading-tight text-paper sm:text-[2.4rem]">
            Twenty books. One standard.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-paper/70">
            Five genres, three formats each, and prices held in dollars so they
            convert cleanly to naira at whatever the day&rsquo;s rate is.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-clay">
              Open the shop
            </Link>
            <Link href="/reading-guide" className="btn-ghost">
              Reading guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
