import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Anikoda makes children's clothing and shoes from a workroom in Gaa-Saka, Ilorin. How the brand started and how the clothes are made.",
};

const PRINCIPLES = [
  {
    title: "Built for the third wash",
    copy: "Anything can look good on a hanger. We judge a sample after ten washes and a term of actual wear, which is when the shortcuts show up.",
  },
  {
    title: "Sized for real children",
    copy: "Age sizes with generous room through the chest and hip, adjustable waists where it helps, and a wider shoe last than the European standard.",
  },
  {
    title: "Priced to be replaced",
    copy: "Children outgrow everything. Nothing here costs more than $40, because a garment that is outgrown in a year should not be an investment piece.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A small workroom in Gaa-Saka"
        crumb="About Us"
        intro="Anikoda started because buying decent children's clothes in Ilorin meant choosing between imported prices and something that fell apart by the second term."
      />

      <div className="boxed grid gap-12 py-14 lg:grid-cols-2 lg:gap-16">
        <div className="border border-pine/10 p-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-shell">
            <Image
              src="/anikoda/about-studio.jpg"
              alt="Children's clothing on a rail at the Anikoda workroom"
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose-legal">
          <p>
            We began with eight pieces and one complaint we kept hearing from
            parents: the clothes were either too expensive to let a child ruin,
            or cheap enough that a child ruined them immediately. Neither is
            much use when the same child needs a new size in eight months.
          </p>
          <p>
            So the whole collection is built around a narrow band — nothing here
            costs less than $20 or more than $40 — and the money goes into the
            parts that decide whether a garment survives. Twin-needled neckbands
            rather than single. Bar-tacks at every pocket corner. Vulcanised
            soles instead of glued. Water-based and discharge inks so prints stay
            soft and do not crack. None of it is visible in a photograph, and all
            of it is the difference between a second term and a bin.
          </p>
          <p>
            Everything is cut and packed here in Gaa-Saka. If you order from
            anywhere in Kwara, there is a fair chance one of us folded it.
          </p>
        </div>
      </div>

      <section className="boxed pb-16">
        <SectionHeading title="How we work" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="border border-pine/10 bg-white p-7">
              <h3 className="head-sm text-pine">{principle.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mudd">
                {principle.copy}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-forest">
        <div className="boxed py-16 text-center">
          <h2 className="head-xl text-canvas">Come and see the cloth</h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-canvas/75">
            The workroom is open by appointment at {site.address.line1},{" "}
            {site.address.line2}. Message us first and someone will be there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-solid">
              Browse the collection
            </Link>
            <Link href="/contact" className="btn-ghost-light">
              Book a visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
