import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Crewsita chooses and checks the shoes it sells for men and women — what we test for, what we refuse to stock, and why nothing costs more than forty dollars.",
};

const PRINCIPLES = [
  {
    title: "Walk it first",
    copy: "Nobody here lists a pair they have not worn for a full day. If the counter rubs at the heel, if the sole squeaks on tile, if the strap bites at hour four — it does not go on the site, however good the sample photograph looks.",
  },
  {
    title: "Sole before shine",
    copy: "The upper is what sells a shoe and the sole is what ends it. We buy stitched and vulcanised construction wherever the price allows it, and we say plainly on every product page which one you are getting.",
  },
  {
    title: "One last per foot",
    copy: "Women's pairs are cut on a women's last, not a scaled-down men's one — narrower through the heel, deeper at the toe box. That is the difference between a shoe that slips at the back and one that does not.",
  },
  {
    title: "Say the price once",
    copy: "There is no premium line and no better version held back for people who ask. The whole shop sits between $20 and $40, in dollars or naira, and that is the whole of the pricing story.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        crumb="Our Story"
        intro="Crewsita began with one complaint: a decent pair of shoes in Lagos is either a rack shoe that splits at the flex point inside a season, or an import priced past what most people can justify."
      />

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[600px]">
          <Image
            src="/crewsita/studio-01.jpg"
            alt="A pair of leather shoes being checked over before dispatch"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-mist px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="prose-legal">
            <p>
              We started with six pairs and one rule: whatever we could not
              check ourselves, we would not sell. That is why the range is only
              footwear. Every other category is a different craft with a
              different failure point, and stretching across them is how a small
              shop ends up selling twenty mediocre things instead of twenty
              good ones.
            </p>
            <p>
              So the range is shoes: formal and casual for men, heels and flats
              for women, and a sneaker run that either foot can wear. Twenty
              pairs. Five categories. One standard of construction that does not
              move whether you spend twenty-two dollars or forty.
            </p>
            <p>
              The difference between us and the fast footwear at the same price
              is mostly invisible in a photograph, which is precisely why shops
              at this price skip it — a stitched sole rather than a glued one, a
              lined quarter that keeps the collar upright, a real heel counter,
              and a last that leaves the toes room to sit. None of that
              photographs. All of it shows up in month nine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <div className="wrap">
          <SectionHeading
            script="How we work"
            title="Four decisions, made once"
          />

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="border border-line p-8">
                <span className="font-display text-[12px] font-bold tracking-wide2 text-rose">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide2 text-ink">
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

      <section className="relative isolate overflow-hidden">
        <Image
          src="/crewsita/banner-split.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/80" />

        <div className="wrap py-20 text-center lg:py-24">
          <p className="script-line">The whole of it</p>
          <h2 className="mt-2 font-display text-[1.6rem] font-bold uppercase leading-tight tracking-wide2 text-paper sm:text-[2.2rem]">
            Twenty pairs. One standard.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-paper/70">
            Five categories, EU 36 to 46, and prices held in dollars so they
            convert cleanly to naira at whatever the day&rsquo;s rate is.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-rose">
              Open the shop
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
