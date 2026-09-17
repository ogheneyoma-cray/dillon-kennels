import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Echo E-Rom Ltd is and the IT services we deliver for small and growing businesses.",
};

const VALUES = [
  {
    title: "Fast Response",
    body: "Most support requests get a first reply within hours, not days, because downtime costs you money.",
  },
  {
    title: "Fair Pricing",
    body: "Every service is priced between $20-$40 with transparent USD/NGN conversion — no hidden call-out fees.",
  },
  {
    title: "Real Engineers",
    body: "Every ticket is handled by a qualified technician, not a script — so fixes actually hold.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — centered, no location shown */}
      <section className="border-b border-line bg-white py-16 text-center lg:py-24">
        <div className="container-page">
          <p className="eyebrow justify-center">About {site.wordmark}</p>
          <h1 className="section-heading mx-auto mt-4 max-w-2xl">
            IT support built for businesses without an IT department
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
        </div>
      </section>

      {/* Values — three cards on a cobalt strip */}
      <section className="bg-cobalt py-14 lg:py-16">
        <div className="container-page grid grid-cols-1 gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading mt-3 max-w-xs">Why Echo E-Rom Exists</h2>
          </div>
          <div className="max-w-xl space-y-4 text-sm leading-relaxed text-ink-soft lg:ml-auto">
            <p>
              Most small businesses don&apos;t need a full-time IT department —
              they need someone reliable to call when the network drops, the
              backups fail, or a laptop won&apos;t connect to the printer.
              Echo E-Rom was built to be that call.
            </p>
            <p>
              We package the IT services businesses ask for most often —
              support, networking, security and cloud & data — into clear,
              fixed-price bundles you can book online in minutes, instead of
              waiting on a quote.
            </p>
            <p>
              Every engagement is handled by a vetted technician, priced
              fairly in USD or NGN, and backed by a helpdesk you can return
              to whenever something else comes up.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 text-center lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Need something fixed or set up?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            Browse our services and book the one that fits — support,
            security, networking, or cloud & data.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Browse Services →
          </Link>
        </div>
      </section>
    </div>
  );
}
