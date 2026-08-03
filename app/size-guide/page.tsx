import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Age-based sizing for Anikoda children's clothing and shoes, with height, chest and foot-length measurements and advice on sizing up.",
};

const CLOTHING = [
  { size: "6-12M", height: "68 – 76", chest: "46 – 48", waist: "46 – 48" },
  { size: "12-18M", height: "76 – 83", chest: "48 – 50", waist: "48 – 50" },
  { size: "18-24M", height: "83 – 90", chest: "50 – 52", waist: "50 – 51" },
  { size: "2-3Y", height: "90 – 98", chest: "52 – 55", waist: "51 – 53" },
  { size: "4-5Y", height: "104 – 110", chest: "56 – 59", waist: "53 – 55" },
  { size: "6-7Y", height: "116 – 122", chest: "61 – 64", waist: "56 – 58" },
  { size: "8-9Y", height: "128 – 134", chest: "66 – 70", waist: "59 – 62" },
  { size: "10-11Y", height: "140 – 146", chest: "72 – 76", waist: "63 – 66" },
];

const SHOES = [
  { size: "EU 24", foot: "14.5", age: "18-24 months" },
  { size: "EU 26", foot: "16.0", age: "2-3 years" },
  { size: "EU 28", foot: "17.3", age: "3-4 years" },
  { size: "EU 30", foot: "18.6", age: "5-6 years" },
  { size: "EU 32", foot: "19.9", age: "7-8 years" },
  { size: "EU 34", foot: "21.2", age: "9-11 years" },
];

const RULES = [
  {
    name: "Buy to fit",
    copy: "Shoes, party dresses and anything with a fitted bodice. A shoe that is too big changes how a child walks, and a loose bodice will not stay on the shoulder.",
  },
  {
    name: "Safe to size up",
    copy: "Tees, hoodies, jersey shorts and lounge sets. All are cut loose already, so a size up simply buys another season rather than swamping a child.",
  },
  {
    name: "Adjustable",
    copy: "Our chino shorts and trousers have internal elastic tabs at both sides of the waist, so one pair genuinely fits across a growth spurt.",
  },
];

function Table({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: Record<string, string>[];
}) {
  const keys = Object.keys(rows[0]);

  return (
    <div className="max-w-3xl overflow-x-auto">
      <table className="w-full min-w-[460px] border-collapse text-left text-sm">
        <caption className="head-sm pb-4 text-left text-pine">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-pine/15">
            {columns.map((column) => (
              <th
                key={column}
                className="pb-3 pr-4 text-[11px] font-bold uppercase tracking-bold3 text-mudd"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-mudd">
          {rows.map((row) => (
            <tr key={row.size} className="border-b border-pine/10">
              {keys.map((key) => (
                <td
                  key={key}
                  className={`py-3.5 pr-4 ${
                    key === "size" ? "font-bold text-pine" : ""
                  }`}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <>
      <PageHeader
        title="Size Guide"
        intro="Age sizes are a starting point, not a rule — children of the same age vary enormously. Measure once and use the numbers instead."
      />

      <div className="boxed py-14">
        <div className="prose-legal max-w-3xl">
          <h2>How to measure</h2>
          <ul>
            <li>
              <strong>Height.</strong> Against a wall, shoes off, heels
              together, with a book flat on the head. This is the single most
              reliable number for children&apos;s clothing.
            </li>
            <li>
              <strong>Chest.</strong> Around the fullest part, tape level and
              flat under the arms, arms relaxed down.
            </li>
            <li>
              <strong>Foot length.</strong> Stand the child on paper, mark heel
              and longest toe, and measure between the marks. Do both feet and
              use the larger one.
            </li>
          </ul>
          <p>
            All measurements below are body measurements in centimetres, not
            finished garment measurements.
          </p>
        </div>

        <div className="mt-14">
          <Table
            caption="Clothing"
            columns={["Size", "Height (cm)", "Chest (cm)", "Waist (cm)"]}
            rows={CLOTHING}
          />
        </div>

        <div className="mt-16">
          <Table
            caption="Shoes"
            columns={["Size", "Foot length (cm)", "Typical age"]}
            rows={SHOES}
          />
          <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-mudd">
            Leave roughly 1cm of room beyond the longest toe. Our lasts are cut
            slightly wider than the European standard, so a child who is usually
            between sizes should take the smaller one.
          </p>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="head-sm text-pine">Sizing up: what takes it well</h2>
          <dl className="mt-6 divide-y divide-pine/10 border-y border-pine/10">
            {RULES.map((rule) => (
              <div key={rule.name} className="py-5">
                <dt className="font-body text-[15px] font-bold text-pine">
                  {rule.name}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-mudd">
                  {rule.copy}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 max-w-3xl border-l-4 border-sunshine bg-sunshine/15 p-6 text-[15px] leading-relaxed text-forest">
          Still unsure? Send us a height and a chest measurement at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-bold text-tangerine-dark underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          with the piece you are looking at and we will tell you which size we
          would send. The first size exchange within Ilorin is free — see the{" "}
          <Link
            href="/refunds-policy"
            className="font-bold text-tangerine-dark underline underline-offset-4"
          >
            returns policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
