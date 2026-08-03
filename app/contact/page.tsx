import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Adom Attic support team — email, phone, studio address and opening hours.",
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
        intro="Questions about sizing, an order in transit, or a fabric you want to know more about — everything reaches the same small team."
      />

      <div className="frame grid gap-12 py-14 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="display-2">Send a message</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ash">
            We answer within one working day. If your message is about an order
            already placed, include the order number and it will move faster.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-line p-7">
            <h2 className="text-[12px] font-bold uppercase tracking-wide2 text-onyx">
              The studio
            </h2>
            <address className="mt-4 space-y-1 text-[15px] not-italic leading-relaxed text-ash">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4 text-[13px] leading-relaxed text-ash">
              Visits are by appointment — message us first so someone is there
              to meet you.
            </p>
          </div>

          <div className="border border-line p-7">
            <h2 className="text-[12px] font-bold uppercase tracking-wide2 text-onyx">
              Direct
            </h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-onyx transition-colors hover:text-camel"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="text-onyx transition-colors hover:text-camel"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-line p-7">
            <h2 className="text-[12px] font-bold uppercase tracking-wide2 text-onyx">
              Opening hours
            </h2>
            <dl className="mt-4 space-y-2.5 text-[15px]">
              {HOURS.map((entry) => (
                <div key={entry.day} className="flex justify-between gap-4">
                  <dt className="text-onyx">{entry.day}</dt>
                  <dd className="text-ash">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </>
  );
}
