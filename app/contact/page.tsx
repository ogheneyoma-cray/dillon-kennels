import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CurrencyConverter from "@/components/CurrencyConverter";
import PageHeader from "@/components/PageHeader";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Crewsita customer care desk — email, phone, shop address and opening hours.",
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
        title="Contact"
        intro="A question about sizing, an order already in transit, or a pair you want to try on before buying — it all reaches the same desk, and a person reads every message."
      />

      <div className="wrap grid gap-10 py-14 lg:grid-cols-[1fr_360px] lg:py-20">
        <div>
          <h2 className="display-3">Send a message</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-body">
            We answer within one working day. If your message concerns an order
            already placed, include the order number and it will move faster.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-line p-7">
            <h2 className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
              The shop
              <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
            </h2>
            <address className="mt-5 space-y-1.5 text-[15px] not-italic leading-relaxed text-body">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-5 text-[13px] leading-relaxed text-muted">
              Fittings are welcome during opening hours — message us first and
              we will have your size out of the box and ready.
            </p>
          </div>

          <div className="border border-line p-7">
            <h2 className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
              Direct
              <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
            </h2>
            <dl className="mt-5 space-y-4 text-[15px]">
              <div>
                <dt className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink transition-colors hover:text-rose"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="text-ink transition-colors hover:text-rose"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-line p-7">
            <h2 className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
              Opening hours
              <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
            </h2>
            <dl className="mt-5 divide-y divide-line">
              {HOURS.map((entry) => (
                <div
                  key={entry.day}
                  className="flex justify-between gap-4 py-3 text-sm"
                >
                  <dt className="text-body">{entry.day}</dt>
                  <dd className="text-ink">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <CurrencyConverter />
        </aside>
      </div>
    </>
  );
}
