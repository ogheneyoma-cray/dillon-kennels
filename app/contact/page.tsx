import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CurrencyConverter from "@/components/CurrencyConverter";
import PageHeader from "@/components/PageHeader";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Mydriad customer service desk — email, phone, workroom address and opening hours.",
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
        intro="A question about fit, an order already in transit, or a cloth you want to know more about — it all reaches the same desk, and a person reads every message."
      />

      <div className="ruled">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="display-3">Send a message</h2>
            <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-smoke">
              We answer within one working day. If your message concerns an
              order already placed, include the order number and it will move
              faster.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-7">
              <h2 className="text-[11px] uppercase tracking-micro text-brass">
                The workroom
              </h2>
              <address className="mt-5 space-y-1.5 text-[15px] font-light not-italic leading-relaxed text-smoke">
                {addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <p className="mt-5 text-[13px] font-light leading-relaxed text-slate">
                Fittings are by appointment — message us first so a cutter is
                there to meet you.
              </p>
            </div>

            <div className="card p-7">
              <h2 className="text-[11px] uppercase tracking-micro text-brass">
                Direct
              </h2>
              <dl className="mt-5 space-y-4 text-[15px] font-light">
                <div>
                  <dt className="text-[11px] uppercase tracking-micro text-slate">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-bone transition-colors hover:text-brass"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-micro text-slate">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="text-bone transition-colors hover:text-brass"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card p-7">
              <h2 className="text-[11px] uppercase tracking-micro text-brass">
                Opening hours
              </h2>
              <dl className="mt-5 divide-y divide-rule">
                {HOURS.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex justify-between gap-4 py-3 text-sm font-light"
                  >
                    <dt className="text-smoke">{entry.day}</dt>
                    <dd className="text-bone">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <CurrencyConverter />
          </aside>
        </div>
      </div>
    </>
  );
}
