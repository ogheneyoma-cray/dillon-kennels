import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Body measurements for Xira Dix women's and men's sleepwear, plus how to measure and how each cut fits.",
};

const WOMENS = [
  { size: "XS", bust: "79 – 83", waist: "61 – 65", hip: "86 – 90" },
  { size: "S", bust: "84 – 88", waist: "66 – 70", hip: "91 – 95" },
  { size: "M", bust: "89 – 94", waist: "71 – 76", hip: "96 – 101" },
  { size: "L", bust: "95 – 101", waist: "77 – 83", hip: "102 – 108" },
  { size: "XL", bust: "102 – 109", waist: "84 – 91", hip: "109 – 116" },
];

const MENS = [
  { size: "S", chest: "89 – 94", waist: "76 – 81", hip: "91 – 96" },
  { size: "M", chest: "95 – 100", waist: "82 – 87", hip: "97 – 102" },
  { size: "L", chest: "101 – 107", waist: "88 – 94", hip: "103 – 109" },
  { size: "XL", chest: "108 – 114", waist: "95 – 101", hip: "110 – 116" },
  { size: "XXL", chest: "115 – 122", waist: "102 – 109", hip: "117 – 124" },
];

const FITS = [
  {
    name: "Slips and nightdresses",
    copy: "Cut close through the bust and released from the ribcage. Take your usual size; if you are between sizes and want it to skim rather than follow the body, size up.",
  },
  {
    name: "Pyjama and lounge sets",
    copy: "Cut generously by design. Take your usual size — sizing up tends to make the shoulder drop too far and the trouser rise too long.",
  },
  {
    name: "Robes and kimonos",
    copy: "Sized S/M and L/XL, or one size where the block is a true kimono. All are meant to wrap generously with room for a slip underneath.",
  },
  {
    name: "Rib and jersey knits",
    copy: "These stretch and recover. Take your usual size; sizing up will bag at the elbow and knee after a few wears.",
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
    <div className="overflow-x-auto">
      <table className="w-full min-w-[460px] border-collapse text-left text-sm">
        <caption className="pb-4 text-left font-display text-2xl font-light text-midnight">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-midnight/15">
            {columns.map((column) => (
              <th key={column} className="pb-3 pr-4 font-medium text-midnight">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-midnight/75">
          {rows.map((row) => (
            <tr key={row.size} className="border-b border-midnight/10">
              {keys.map((key) => (
                <td
                  key={key}
                  className={`py-3.5 pr-4 ${
                    key === "size" ? "font-medium text-midnight" : ""
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
        kicker="Fit"
        title="Size Guide"
        intro="All measurements are body measurements in centimetres, not finished garment measurements. Measure over bare skin and keep the tape level."
      />

      <div className="shell py-14 lg:py-20">
        <div className="prose-legal max-w-3xl">
          <h2>How to measure</h2>
          <ul>
            <li>
              <strong>Bust or chest.</strong> Around the fullest part, with the
              tape flat across the back and level under the arms.
            </li>
            <li>
              <strong>Waist.</strong> Around the narrowest part of the torso,
              usually just above the navel. Do not pull the tape tight.
            </li>
            <li>
              <strong>Hip.</strong> Around the fullest part, roughly 20cm below
              the waist, with feet together.
            </li>
          </ul>
          <p>
            If two of your measurements fall in different sizes, go with the
            larger one for anything cut close and the smaller for anything cut
            loose.
          </p>
        </div>

        <div className="mt-14 max-w-3xl">
          <Table
            caption="Women's sizing"
            columns={["Size", "Bust (cm)", "Waist (cm)", "Hip (cm)"]}
            rows={WOMENS}
          />
        </div>

        <div className="mt-16 max-w-3xl">
          <Table
            caption="Men's sizing"
            columns={["Size", "Chest (cm)", "Waist (cm)", "Hip (cm)"]}
            rows={MENS}
          />
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-light text-midnight">
            How each cut fits
          </h2>
          <dl className="mt-6 divide-y divide-midnight/10 border-y border-midnight/10">
            {FITS.map((fit) => (
              <div key={fit.name} className="py-5">
                <dt className="font-body text-[15px] font-semibold text-midnight">
                  {fit.name}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-midnight/70">
                  {fit.copy}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 max-w-3xl rounded-2xl border border-midnight/10 bg-linen p-6 text-[15px] leading-relaxed text-midnight/75">
          Still unsure? Send your measurements to{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-orchid underline underline-offset-4"
          >
            {site.email}
          </a>{" "}
          with the piece you are looking at and we will tell you which size we
          would send. The first size exchange within Lagos is free — see the{" "}
          <Link
            href="/refunds-policy"
            className="text-orchid underline underline-offset-4"
          >
            returns policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
