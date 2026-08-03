import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Xira Dix care team in Ajah, Lagos — email, phone, studio address and opening hours.",
};

const HOURS = [
  { day: "Monday – Friday", time: "9:00 – 18:00 WAT" },
  { day: "Saturday", time: "10:00 – 16:00 WAT" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Get in touch"
        title="Talk to the people who made it"
        intro="Questions about sizing, an order in transit, or a fabric you want to know more about — everything reaches the same small team in Ajah."
      />

      <div className="shell grid gap-14 py-14 lg:grid-cols-[1fr_360px] lg:py-20">
        <div>
          <h2 className="font-display text-3xl font-light">Send a message</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-midnight/70">
            We answer within one working day. If your message is about an order
            already placed, include the order number and it will move faster.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-midnight/10 bg-linen p-7">
            <h2 className="font-body text-sm font-semibold uppercase tracking-wide3 text-slate">
              The studio
            </h2>
            <address className="mt-4 space-y-1 text-[15px] not-italic leading-relaxed text-midnight/80">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4 text-[13px] leading-relaxed text-slate">
              Visits are by appointment — message us first so someone is there
              to meet you.
            </p>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-linen p-7">
            <h2 className="font-body text-sm font-semibold uppercase tracking-wide3 text-slate">
              Direct
            </h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-midnight transition-colors hover:text-orchid"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="text-midnight transition-colors hover:text-orchid"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-linen p-7">
            <h2 className="font-body text-sm font-semibold uppercase tracking-wide3 text-slate">
              Opening hours
            </h2>
            <dl className="mt-4 space-y-2.5 text-[15px]">
              {HOURS.map((entry) => (
                <div key={entry.day} className="flex justify-between gap-4">
                  <dt className="text-midnight/80">{entry.day}</dt>
                  <dd className="text-slate">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </>
  );
}
