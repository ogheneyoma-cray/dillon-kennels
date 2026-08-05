import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "The Atelier",
  description:
    "How Mydriad cuts men's suits, blazers, dinner jackets and waistcoats — what we spend on, what we refuse to fake, and why every piece sits in one price band.",
};

const PRINCIPLES = [
  {
    title: "Float the canvas",
    copy: "Fusing is glue. It is faster, it is cheaper, and in heat it bubbles across the chest within a season. We pad-stitch a floating canvas into every jacket instead, and it is the single largest cost in the garment.",
  },
  {
    title: "Cut for the climate",
    copy: "Nothing in the range is heavier than 280gsm, most of it is half-lined, and the linings we do use are woven rather than solid polyester. A suit that cannot be worn at two in the afternoon is not a suit here.",
  },
  {
    title: "Leave room to alter",
    copy: "Every jacket carries spare cloth in the side seams and centre back; every trouser carries it at the waist and seat. Your tailor can move our fit properly rather than fighting it.",
  },
  {
    title: "Say the price once",
    copy: "There is no premium line, no anniversary edition, no better cloth held back for people who ask. The whole collection sits between $20 and $40 and that is the whole of the pricing story.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="The Atelier"
        crumb="Atelier"
        intro="Mydriad began with one complaint: a man in Lagos looking for a first proper suit is offered either a fused rack jacket that dies in a season, or bespoke priced for a salary he does not have yet."
      />

      <section className="grid border-b border-rule lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Image
            src="/mydriad/atelier-portrait.jpg"
            alt="A cutter at work in the Mydriad workroom"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-85"
          />
        </div>

        <div className="ruled flex items-center px-6 py-16 sm:px-12 lg:px-16">
          <div className="prose-legal">
            <p>
              We started with four jackets and one rule: whatever we could not
              afford to do properly, we would not do at all. That is why there
              is no shirt in this collection, no tie, no shoe. Every one of
              those is a different craft with a different failure point, and
              stretching across them is how a small house ends up selling
              twenty mediocre things instead of twenty good ones.
            </p>
            <p>
              So the range is jackets, and the trousers and waistcoats that go
              with them. Twenty pieces. Four ways a jacket closes. One standard
              of construction that does not move whether you spend twenty
              dollars or forty.
            </p>
            <p>
              The difference between us and the fast tailoring at the same price
              is not visible in a photograph, which is precisely why most houses
              at this price skip it. It is a floating canvas instead of glue, a
              woven lining instead of a plastic one, spare cloth in the seams
              instead of a raw edge, and a shoulder built with an unpadded head
              so it follows yours. None of that photographs. All of it shows up
              in year three.
            </p>
          </div>
        </div>
      </section>

      <section className="ruled">
        <div className="wrap py-20 lg:py-24">
          <SectionHeading
            eyebrow="Working method"
            title="Four decisions, made once"
          />

          <ul className="mt-16 grid gap-px border border-rule bg-rule md:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="bg-panel p-9">
                <span className="text-[11px] tracking-micro text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-light text-bone">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-smoke">
                  {principle.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate border-t border-rule">
        <Image
          src="/mydriad/banner-showroom.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-25"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/60" />

        <div className="wrap py-24 text-center">
          <h2 className="display-2">Twenty pieces. One standard.</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] font-light leading-relaxed text-smoke">
            Four categories, six sizes, and prices held in dollars so they
            convert cleanly to naira at whatever the day's rate is.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-brass">
              Open the collection
            </Link>
            <Link href="/contact" className="btn-line">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
