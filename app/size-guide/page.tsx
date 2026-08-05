import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fit Guide",
  description:
    "Jacket, trouser and waistcoat measurements for Mydriad tailoring, with guidance on regular versus long and which cuts run close.",
};

const JACKETS = [
  { size: "36R", chest: "91 – 94", waist: "79 – 82", sleeve: "62.5", length: "74" },
  { size: "38R", chest: "96 – 99", waist: "84 – 87", sleeve: "63.5", length: "75" },
  { size: "40R", chest: "101 – 104", waist: "89 – 92", sleeve: "64.5", length: "76" },
  { size: "42R", chest: "106 – 109", waist: "94 – 97", sleeve: "65.5", length: "77" },
  { size: "44R", chest: "111 – 114", waist: "99 – 102", sleeve: "66.5", length: "78" },
  { size: "46R", chest: "116 – 119", waist: "104 – 107", sleeve: "67.5", length: "79" },
];

const LONGS = [
  { size: "38L", chest: "96 – 99", sleeve: "66", length: "78" },
  { size: "40L", chest: "101 – 104", sleeve: "67", length: "79" },
  { size: "42L", chest: "106 – 109", sleeve: "68", length: "80" },
  { size: "44L", chest: "111 – 114", sleeve: "69", length: "81" },
  { size: "46L", chest: "116 – 119", sleeve: "70", length: "82" },
];

const VESTS = [
  { size: "S", chest: "91 – 96", waist: "79 – 84" },
  { size: "M", chest: "97 – 104", waist: "85 – 92" },
  { size: "L", chest: "105 – 112", waist: "93 – 100" },
  { size: "XL", chest: "113 – 120", waist: "101 – 108" },
  { size: "XXL", chest: "121 – 128", waist: "109 – 116" },
];

const FITS = [
  {
    name: "Take your usual size",
    copy: "The charcoal herringbone, the graphite city suit, the black suit and both dinner jackets are cut to standard drop. If you know your jacket size, order it.",
  },
  {
    name: "Consider one up",
    copy: "The midnight navy slim suit and the cobalt suit are cut closer through the waist and high in the armhole. If you sit between two chest measurements, take the larger.",
  },
  {
    name: "Consider one down",
    copy: "The taupe relaxed blazer and the noir oversized blazer already carry extra volume in the body. Ordering your usual size gives a deliberately loose line; size down for a normal one.",
  },
  {
    name: "Take Long if you are over 6ft",
    copy: "Long adds roughly 2.5cm to the sleeve and 3cm to the body without changing the chest. The espresso suit and the midnight dinner suit are cut in Long only.",
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
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="pb-5 text-left text-[11px] uppercase tracking-micro text-brass">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-rule">
            {columns.map((column) => (
              <th
                key={column}
                className="pb-4 pr-4 text-[11px] font-medium uppercase tracking-micro text-slate"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-light text-smoke">
          {rows.map((row) => (
            <tr key={row.size} className="border-b border-rule/60">
              {keys.map((key) => (
                <td
                  key={key}
                  className={`py-4 pr-4 ${key === "size" ? "text-bone" : ""}`}
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
        title="Fit Guide"
        crumb="Fit"
        intro="All figures below are body measurements in centimetres, not finished garment measurements. Measure over a shirt, keep the tape level, and do not hold your breath."
      />

      <div className="ruled">
        <div className="wrap py-16">
          <div className="prose-legal">
            <h2>How to measure</h2>
            <ul>
              <li>
                <strong>Chest.</strong> Around the fullest part, tape flat
                across the back and level under the arms, arms relaxed at your
                sides. This is the number that sets your jacket size.
              </li>
              <li>
                <strong>Waist.</strong> Around the natural waist, roughly at the
                navel — not where a low-rise trouser sits.
              </li>
              <li>
                <strong>Sleeve.</strong> From the centre back of the neck, over
                the point of the shoulder, down to the wrist bone with the arm
                slightly bent.
              </li>
              <li>
                <strong>Jacket length.</strong> From the base of the collar seam
                straight down the back to the hem. A jacket should finish where
                your fingers curl.
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <Table
              caption="Jackets — Regular"
              columns={[
                "Size",
                "Chest (cm)",
                "Waist (cm)",
                "Sleeve (cm)",
                "Length (cm)",
              ]}
              rows={JACKETS}
            />
          </div>

          <div className="mt-16">
            <Table
              caption="Jackets — Long"
              columns={["Size", "Chest (cm)", "Sleeve (cm)", "Length (cm)"]}
              rows={LONGS}
            />
            <p className="mt-5 max-w-column text-[13px] font-light leading-relaxed text-slate">
              Long carries the same chest as its Regular equivalent. If your
              chest is a 40 but your sleeves finish short in a 40R, 40L is the
              correct order rather than 42R.
            </p>
          </div>

          <div className="mt-16">
            <Table
              caption="Waistcoats"
              columns={["Size", "Chest (cm)", "Waist (cm)"]}
              rows={VESTS}
            />
          </div>

          <div className="mt-20 max-w-column">
            <h2 className="text-[11px] uppercase tracking-micro text-brass">
              Which cuts run close
            </h2>
            <dl className="mt-7 divide-y divide-rule border-y border-rule">
              {FITS.map((fit) => (
                <div key={fit.name} className="py-6">
                  <dt className="text-[15px] text-bone">{fit.name}</dt>
                  <dd className="mt-2 text-[15px] font-light leading-relaxed text-smoke">
                    {fit.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-12 max-w-column border-l border-brass bg-panel p-7 text-[15px] font-light leading-relaxed text-smoke">
            Still unsure? Send your chest, waist and height to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brass underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with the piece you are looking at and we will tell you which size we
            would cut for you. The first size exchange is free — see the{" "}
            <Link
              href="/refunds-policy"
              className="text-brass underline underline-offset-4"
            >
              returns policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
