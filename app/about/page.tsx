import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: "Who Cyber Travellers is and how we approach IT service delivery.",
};

const VALUES = [
  {
    title: "Fast Turnaround",
    body: "Most engagements kick off within one business day of your payment clearing — no lengthy sales calls first.",
  },
  {
    title: "Clear Pricing",
    body: "Every service is priced up front in USD or NGN, so you know exactly what you're paying before you book.",
  },
  {
    title: "Handled by Specialists",
    body: "Every service is delivered by a dedicated technician on our team, not outsourced to a stranger.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gate">
        <div className="container-page py-14 text-center lg:py-20">
          <p className="font-display text-xs uppercase tracking-widest2 text-beacon">
            About Us
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] text-paper sm:text-4xl lg:text-5xl">
            IT services, run like a well-timed departure board
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-paper/65">
            {site.description}
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">Our Story</p>
          <h2 className="section-heading mt-3">Built for Businesses on a Schedule</h2>
          <p className="mt-5 leading-relaxed text-ink/80">
            {site.wordmark} started with a simple frustration: IT support that
            never showed up on time, and pricing that only appeared after a
            long back-and-forth. We built a store where every service is
            priced up front, booked in minutes, and handled by a specialist
            who actually shows up when scheduled.
          </p>
          <p className="mt-4 leading-relaxed text-ink/80">
            Today we help small and growing businesses with the IT work that
            keeps them running — cybersecurity, cloud, support, web
            development and data recovery — without the overhead of hiring a
            full in-house team.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Why {site.wordmark}</p>
          <h2 className="section-heading mt-3">What We Stand For</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-lg border border-line bg-paper p-6 shadow-tile">
                <p className="font-display text-lg font-bold text-ink">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center lg:py-20">
        <div className="container-page">
          <h2 className="section-heading">Ready to Book a Service?</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Browse our full range of IT services, priced up front in USD or
            NGN.
          </p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            View Departures
          </Link>
        </div>
      </section>
    </div>
  );
}
