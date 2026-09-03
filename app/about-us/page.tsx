import type { Metadata } from "next";
import Link from "next/link";
import { categories, products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Why ${site.name} builds practical, self-paced digital courses in business, design, marketing, data and productivity.`,
};

const VALUES = [
  {
    title: "Built Around Deliverables",
    copy: "Every course is structured around something you finish and can point to — a model, a dashboard, a campaign brief — not a stack of watched videos.",
  },
  {
    title: "Reviewed Before It Ships",
    copy: "Course content is checked for accuracy and relevance before it goes live, and revisited as tools and best practice change.",
  },
  {
    title: "Priced Without Games",
    copy: "One price, shown up front in USD or NGN. No drip-fed upsells once you're already enrolled.",
  },
];

export default function AboutUsPage() {
  return (
    <div>
      <section className="bg-navy text-paper">
        <div className="container-page py-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            About {site.name}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            We build courses people actually finish
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">
            {site.name} is a digital marketplace for practical, self-paced
            courses across business, design, marketing, data and
            productivity. We started it because too many online courses are
            long on lecture time and short on anything you can actually use
            afterward — so every course we publish is built the other way
            around.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-tile">
              <h2 className="font-display text-lg font-bold text-ink">{value.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-linen">
        <div className="container-page py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">How We Work</p>
              <h2 className="section-heading mt-3">Six tracks, one standard</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
                Rather than chasing every trending topic, we keep our catalog
                focused on six skill tracks we can stand behind — Business &amp;
                Finance, Design &amp; Creative, Marketing &amp; Sales, Data &amp;
                Analytics, Productivity &amp; Tools, and Personal Growth. Each
                course is self-paced, comes with lifetime access, and
                includes the templates or files used throughout.
              </p>
              <Link href="/shop" className="btn-primary mt-8">
                Browse the Catalog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {categories.map((category) => {
                const count = products.filter((p) => p.category === category).length;
                return (
                  <div
                    key={category}
                    className="rounded-2xl border border-ink/10 bg-paper p-5 shadow-tile"
                  >
                    <p className="font-display text-sm font-bold leading-tight text-ink">
                      {category}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">{count} courses</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center lg:py-20">
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Ready to start your next skill?
          </h2>
          <Link href="/shop" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
