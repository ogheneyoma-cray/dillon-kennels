import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Body measurements for Adom Attic apparel, denim and shoes, with advice on which cuts to size up in.",
};

const APPAREL = [
  { size: "XS", chest: "82 – 86", waist: "63 – 67", hip: "88 – 92" },
  { size: "S", chest: "87 – 92", waist: "68 – 73", hip: "93 – 98" },
  { size: "M", chest: "93 – 98", waist: "74 – 79", hip: "99 – 104" },
  { size: "L", chest: "99 – 105", waist: "80 – 86", hip: "105 – 111" },
  { size: "XL", chest: "106 – 113", waist: "87 – 94", hip: "112 – 119" },
];

const DENIM = [
  { size: "24", waist: "61 – 63", hip: "86 – 89" },
  { size: "26", waist: "66 – 68", hip: "91 – 94" },
  { size: "28", waist: "71 – 73", hip: "96 – 99" },
  { size: "30", waist: "76 – 79", hip: "101 – 104" },
  { size: "32", waist: "81 – 84", hip: "106 – 109" },
  { size: "34", waist: "86 – 89", hip: "111 – 114" },
];

const SHOES = [
  { size: "EU 36", foot: "22.8", uk: "3.5" },
  { size: "EU 37", foot: "23.5", uk: "4" },
  { size: "EU 38", foot: "24.1", uk: "5" },
  { size: "EU 39", foot: "24.8", uk: "6" },
  { size: "EU 40", foot: "25.4", uk: "6.5" },
  { size: "EU 41", foot: "26.0", uk: "7.5" },
  { size: "EU 42", foot: "26.7", uk: "8" },
];

const FITS = [
  {
    name: "Take your usual size",
    copy: "Tees, the polo dress, the pleated skirt and all footwear. These are cut true and sizing up will only make them look borrowed.",
  },
  {
    name: "Size up if between",
    copy: "The oversized sweatshirt and both hoodies are already generous, but if you want the fully dropped look, go one up rather than two.",
  },
  {
    name: "Size down in rigid denim",
    copy: "Our high-rise mom jeans are rigid and will relax roughly half a size across the waist within a week of wear. Buy them snug.",
  },
  {
    name: "Take your usual size in the sherpa",
    copy: "The lined jacket is already cut wider through the chest and armhole to allow for the lining. Sizing up makes the shoulders drop too far.",
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
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <caption className="pb-4 text-left text-[13px] font-bold uppercase tracking-wide2 text-onyx">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-onyx/20">
            {columns.map((column) => (
              <th
                key={column}
                className="pb-3 pr-4 text-[11px] font-bold uppercase tracking-wide2 text-ash"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-ash">
          {rows.map((row) => (
            <tr key={row.size} className="border-b border-line">
              {keys.map((key) => (
                <td
                  key={key}
                  className={`py-3.5 pr-4 ${
                    key === "size" ? "font-semibold text-onyx" : ""
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
        intro="All measurements below are body measurements in centimetres, not finished garment measurements. Measure over a thin layer and keep the tape level."
      />

      <div className="frame py-14">
        <div className="prose-legal max-w-3xl">
          <h2>How to measure</h2>
          <ul>
            <li>
              <strong>Chest.</strong> Around the fullest part, tape flat across
              the back and level under the arms, arms relaxed.
            </li>
            <li>
              <strong>Waist.</strong> Around the narrowest part of the torso.
              For denim, measure where you actually wear the waistband instead.
            </li>
            <li>
              <strong>Hip.</strong> Around the fullest part, roughly 20cm below
              the waist, with feet together.
            </li>
            <li>
              <strong>Foot length.</strong> Stand on paper, mark heel and
              longest toe, measure between. Do both feet and use the larger.
            </li>
          </ul>
        </div>

        <div className="mt-14">
          <Table
            caption="Apparel"
            columns={["Size", "Chest (cm)", "Waist (cm)", "Hip (cm)"]}
            rows={APPAREL}
          />
        </div>

        <div className="mt-16">
          <Table
            caption="Denim"
            columns={["Size", "Waist (cm)", "Hip (cm)"]}
            rows={DENIM}
          />
        </div>

        <div className="mt-16">
          <Table
            caption="Footwear"
            columns={["Size", "Foot length (cm)", "UK"]}
            rows={SHOES}
          />
          <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-ash">
            Leave about 1cm beyond the longest toe. All three canvas styles are
            built on the same last, so your size carries between them.
          </p>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="text-[13px] font-bold uppercase tracking-wide2 text-onyx">
            Which cuts to size up in
          </h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {FITS.map((fit) => (
              <div key={fit.name} className="py-5">
                <dt className="text-[15px] font-semibold text-onyx">
                  {fit.name}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ash">
                  {fit.copy}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-camel bg-blush p-6 text-[15px] leading-relaxed text-onyx">
          Still unsure? Send your measurements to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-camel-dark underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          with the piece you are looking at and we will tell you which size we
          would send. The first size exchange is free — see the{" "}
          <Link
            href="/refunds-policy"
            className="font-semibold text-camel-dark underline underline-offset-4"
          >
            returns policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
