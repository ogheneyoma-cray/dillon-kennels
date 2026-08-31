import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Cosmetics Guide | ${site.name}`,
  description: "A plain-language guide to building a skincare routine with Hogposh products.",
};

const ROUTINE_STEPS = [
  {
    step: "1. Cleanse",
    body: "Start with a cleanser suited to your skin type — a gel formula for oilier skin, a balm or cream for dry or sensitive skin. This removes the day's buildup so everything applied after can actually absorb.",
  },
  {
    step: "2. Treat",
    body: "Apply serums and ampoules on clean, slightly damp skin. Vitamin C works best in the morning under sunscreen; treatments like niacinamide or centella can go morning or night depending on your goal.",
  },
  {
    step: "3. Moisturize",
    body: "Seal everything in with a moisturizer matched to your skin's needs — lighter lotions for daytime and combination skin, richer creams and balms for overnight repair.",
  },
  {
    step: "4. Protect",
    body: "Every morning routine ends with sunscreen, rain or shine. It's the single step with the most evidence behind it for keeping skin looking its best long-term.",
  },
];

const CATEGORY_NOTES = [
  {
    title: "Cleansers",
    body: "Used once or twice daily to remove makeup, sunscreen and daily buildup without stripping the skin barrier. Gel formulas suit oilier skin; balms and creams suit dry or sensitive skin.",
  },
  {
    title: "Serums & Treatments",
    body: "Concentrated formulas targeting a specific concern — brightening, redness, pore size. Apply after cleansing and before moisturizer, and introduce one new active at a time.",
  },
  {
    title: "Moisturizers",
    body: "Lock in hydration and support the skin barrier. Texture matters more than marketing here — pick a lotion, cream or balm based on how your skin actually feels through the day.",
  },
  {
    title: "Sun Care",
    body: "The most important step in any routine. Reapply every two to three hours with direct sun exposure, and don't skip it on cloudy days — UV rays pass through cloud cover.",
  },
  {
    title: "Masks & Exfoliants",
    body: "Weekly rather than daily steps that support the routine without replacing it. Over-exfoliating is one of the most common ways people damage their skin barrier, so less is usually more.",
  },
];

export default function CosmeticsGuidePage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Learn</p>
      <h1 className="section-heading mt-3 max-w-2xl">
        A Straightforward Guide to Building Your Routine
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
        You don&apos;t need twelve steps to take care of your skin — you need the
        right few, in the right order. This guide walks through how each
        category in the {site.wordmark} catalogue fits into a routine, and
        how to introduce new products without overwhelming your skin.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-ink">The Basic Order</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTINE_STEPS.map((item) => (
            <div key={item.step} className="rounded-lg border border-line bg-paper p-6">
              <p className="font-display text-lg text-clay">{item.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-ink">Shopping by Category</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {CATEGORY_NOTES.map((note) => (
            <div key={note.title} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <p className="font-display text-lg text-ink">{note.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{note.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-display text-2xl text-ink">Patch Testing</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Whenever you introduce a new product — especially a serum or
          treatment — apply a small amount to your inner arm and wait 24
          hours before using it on your face. This is the simplest way to
          catch a reaction before it happens somewhere visible.
        </p>
      </section>

      <div className="mt-16 rounded-lg bg-blush p-8 text-center">
        <p className="font-display text-xl text-ink">Ready to build your routine?</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          Browse the full catalogue and find the products that fit what your
          skin actually needs.
        </p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Shop the Catalogue
        </Link>
      </div>
    </div>
  );
}
