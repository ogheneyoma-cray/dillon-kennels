import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adom Attic makes clothing and shoes for teenagers, priced so a wardrobe can change as fast as the person wearing it.",
};

const PRINCIPLES = [
  {
    title: "Nothing over $40",
    copy: "A hard ceiling, not a marketing line. Taste changes fast at this age and nothing here should feel too precious to actually wear out.",
  },
  {
    title: "Construction over branding",
    copy: "Twin-needled necks, bar-tacked pockets, vulcanised soles, recovery yarn in the stretch denim. The money goes where the garment fails.",
  },
  {
    title: "Honest descriptions",
    copy: "Every product page says what the fabric will do — what fades, what creases, what needs hand washing. Before you buy, not after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        intro="Adom Attic started from one observation: teenagers are sold either fast fashion that survives a term, or adult brands priced for adult salaries."
      />

      <div className="frame grid gap-12 py-14 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-haze">
          <Image
            src="/adomattic/look-03.jpg"
            alt="An Adom Attic look photographed on location"
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
        </div>

        <div className="prose-legal lg:pt-4">
          <p>
            We began with six pieces and a price ceiling. The ceiling came
            first, because it was the part that mattered: at sixteen you are
            working out what you want to look like, and that process involves
            being wrong a lot. Clothes priced as investments make being wrong
            expensive.
          </p>
          <p>
            So everything here sits between $20 and $40, and the difference
            between us and the fast fashion at the same price is where that
            money goes. There is no licensed graphic, no celebrity name, and no
            campaign budget. What there is instead: a 190gsm cotton instead of a
            140gsm, a vulcanised sole instead of a glued one, a recovery yarn in
            the stretch denim so the knees do not bag, and water-based inks so
            the prints stay soft rather than cracking in half.
          </p>
          <p>
            None of that shows in a photograph, which is exactly why most brands
            at this price skip it. It shows in the second term.
          </p>
        </div>
      </div>

      <section className="frame pb-16">
        <SectionHeading title="How we work" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="border border-line p-7">
              <span
                aria-hidden="true"
                className="block h-[8px] w-[8px] rotate-45 bg-camel"
              />
              <h3 className="mt-5 text-[13px] font-bold uppercase tracking-wide2 text-onyx">
                {principle.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ash">
                {principle.copy}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-haze">
        <div className="frame py-16 text-center">
          <h2 className="display-2">Have a look at the collection</h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ash">
            Twenty pieces, five categories, one price band.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-camel">
              Shop everything
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
