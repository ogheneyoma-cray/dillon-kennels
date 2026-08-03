import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Xira Dix makes nightwear for men and women from a studio in Ajah, Lagos. How the brand started and how the pieces are made.",
};

const PRINCIPLES = [
  {
    title: "Fabric before shape",
    copy: "We choose the cloth first and design to it. A beautiful cut in the wrong fibre is uncomfortable by two in the morning, which is the only test that counts.",
  },
  {
    title: "Small runs, repeated",
    copy: "We cut in short runs and remake what sells rather than chasing a new range every season. It is why the same slip has been in the collection since the first year.",
  },
  {
    title: "Honest about wear",
    copy: "Linen creases. Indigo gives up dye. Cotton softens and fades a little. We say so on the product page rather than letting you find out after delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Our story"
        title="A small studio in Ajah making things to sleep in"
        crumb="Our Story"
        intro="Xira Dix started because good nightwear was strangely hard to buy in Lagos — everything was either flimsy and synthetic or imported at four times the price."
      />

      <div className="shell grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist">
          <Image
            src="/xiradix/antique-lace-sleep-robe.jpg"
            alt="A Xira Dix piece photographed in the studio"
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
        </div>

        <div className="prose-legal lg:pt-4">
          <p>
            We began with six pieces and one problem to solve: nightwear that
            was comfortable enough to actually sleep in and good enough that you
            were not embarrassed to answer the door in it. The first run was a
            satin slip, a cotton nightshirt and a poplin pyjama set, cut in a
            rented room off Babatunde Street with a single industrial machine.
          </p>
          <p>
            Fifty pieces later, the method has not changed much. We buy cloth in
            single dye lots so colours match across a set. We wash and wear a
            sample of everything before it goes on sale, usually for a few
            weeks, because a fabric that feels lovely in the hand can behave
            completely differently against skin at three in the morning. And we
            write the product descriptions ourselves, including the parts that
            are inconvenient — which fabrics crease, which will fade, which need
            hand washing.
          </p>
          <p>
            Everything is still made and packed in Ajah. If you order from
            anywhere in Lagos, there is a reasonable chance one of us folded it.
          </p>
        </div>
      </div>

      <section className="shell">
        <ul className="grid gap-8 border-t border-midnight/10 pt-14 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title}>
              <h2 className="font-display text-2xl font-light text-midnight">
                {principle.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-midnight/70">
                {principle.copy}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell mt-20 rounded-3xl bg-midnight px-8 py-16 text-center lg:px-16">
        <h2 className="display-lg text-linen">Come and see the cloth</h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-linen/70">
          The studio is open by appointment at {site.address.line1},{" "}
          {site.address.line2}. Message us first and someone will be there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="pill-light">
            Browse the collection
          </Link>
          <Link
            href="/contact"
            className="pill border border-linen/30 text-linen transition-colors hover:border-moon hover:text-moon"
          >
            Book a visit
          </Link>
        </div>
      </section>
    </>
  );
}
