import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Anikoda team in Gaa-Saka, Ilorin — email, phone, workroom address and opening hours.",
};

const HOURS = [
  { day: "Monday – Friday", time: "8:30 – 17:30 WAT" },
  { day: "Saturday", time: "9:00 – 15:00 WAT" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Talk to the people who made it"
        intro="Questions about sizing, an order in transit, or a fabric you want to know more about — everything reaches the same small team in Ilorin."
      />

      <div className="boxed grid gap-12 py-14 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="head-lg text-pine">Send a message</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-mudd">
            We answer within one working day. If your message is about an order
            already placed, include the order number and it will move faster.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-pine/10 bg-white p-7">
            <h2 className="head-sm text-pine">The workroom</h2>
            <address className="mt-4 space-y-1 text-[15px] not-italic leading-relaxed text-mudd">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4 text-[13px] leading-relaxed text-mudd">
              Visits are by appointment — message us first so someone is there
              to meet you.
            </p>
          </div>

          <div className="border border-pine/10 bg-white p-7">
            <h2 className="head-sm text-pine">Direct</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-pine transition-colors hover:text-tangerine"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="text-pine transition-colors hover:text-tangerine"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-pine/10 bg-white p-7">
            <h2 className="head-sm text-pine">Opening hours</h2>
            <dl className="mt-4 space-y-2.5 text-[15px]">
              {HOURS.map((entry) => (
                <div key={entry.day} className="flex justify-between gap-4">
                  <dt className="text-pine">{entry.day}</dt>
                  <dd className="text-mudd">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </>
  );
}
