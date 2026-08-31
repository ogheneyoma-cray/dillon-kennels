import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    "The story behind zenpulse digital and how we choose the courses we sell.",
};

const VALUES = [
  {
    title: "Practitioners, not theorists",
    body: "Every instructor on zenpulse digital has run the campaigns, built the funnels, or grown the accounts they teach — not just read about them.",
  },
  {
    title: "No padding",
    body: "Courses are built to be finished. We'd rather ship a tight three-hour course than a bloated twenty-hour one nobody completes.",
  },
  {
    title: "Priced to actually buy",
    body: "Every course sits between $20 and $40 — enough to fund good instructors, low enough that trying a new topic isn't a hard decision.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">About Us</p>
      <h1 className="section-heading mt-3 max-w-2xl">
        Practical digital skills, taught by people who use them
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
        {site.wordmark} started as a small catalogue of self-paced courses
        on digital marketing, SEO and content strategy — built for people who
        wanted to learn a skill well enough to use it the same week, not
        collect certificates. Every course in the catalogue is reviewed
        before it&apos;s listed, priced up front, and available instantly in
        either US Dollars or Nigerian Naira.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-2xl border border-line bg-paper p-6">
            <p className="font-display text-lg font-semibold text-ink">{value.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-display text-xl font-semibold text-ink">
          How we choose what to sell
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          We work with a small, vetted group of marketers, analysts and
          content strategists rather than opening the catalogue to anyone.
          Each course is scoped around a single practical outcome — rank a
          page, build a funnel, read a dashboard correctly — so learners
          know exactly what they&apos;re getting before they buy.
        </p>
      </section>

      <div className="mt-16 rounded-2xl bg-indigo-pale p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          Ready to start learning?
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          Browse the full catalogue and find a course that fits what
          you&apos;re trying to build next.
        </p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Shop the Catalogue
        </Link>
      </div>
    </div>
  );
}
