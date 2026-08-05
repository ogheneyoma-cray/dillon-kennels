import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "EU, UK and US shoe size conversions for Crewsita men's and women's footwear, with foot-length measurements and a note on which lasts run narrow.",
};

const MENS = [
  { eu: "40", uk: "6", us: "7", cm: "25.0" },
  { eu: "41", uk: "7", us: "8", cm: "25.7" },
  { eu: "42", uk: "8", us: "9", cm: "26.4" },
  { eu: "43", uk: "9", us: "10", cm: "27.1" },
  { eu: "44", uk: "9.5", us: "10.5", cm: "27.8" },
  { eu: "45", uk: "10.5", us: "11.5", cm: "28.5" },
  { eu: "46", uk: "11.5", us: "12.5", cm: "29.2" },
];

const WOMENS = [
  { eu: "36", uk: "3", us: "5.5", cm: "22.5" },
  { eu: "37", uk: "4", us: "6.5", cm: "23.2" },
  { eu: "38", uk: "5", us: "7.5", cm: "23.9" },
  { eu: "39", uk: "6", us: "8.5", cm: "24.6" },
  { eu: "40", uk: "6.5", us: "9", cm: "25.3" },
  { eu: "41", uk: "7.5", us: "10", cm: "26.0" },
];

const FITS = [
  {
    name: "Take your usual size",
    copy: "The tan grain oxford, the onyx patent derby, the caramel block heel and both loafers are cut on a standard-width last. If you know your EU size, order it.",
  },
  {
    name: "Consider one up",
    copy: "The jet monkstrap and the blush pointed pump are narrow through the forefoot, and the monkstrap has no laces to let out. If you are between sizes, take the larger.",
  },
  {
    name: "Consider one down",
    copy: "The oat soft moccasin and the espresso suede loafer are unlined and give roughly half a size in the first fortnight. Ordering your usual leaves them loose by month two.",
  },
  {
    name: "Whole sizes only",
    copy: "The sneaker run is cut on a unisex last in whole sizes. If you normally take a half size, go up and use the lacing to close the gap.",
  },
];

function Table({
  caption,
  rows,
}: {
  caption: string;
  rows: { eu: string; uk: string; us: string; cm: string }[];
}) {
  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[440px] border-collapse text-sm">
        <caption className="border-b border-line bg-mist px-5 py-3 text-left font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-line">
            {["EU", "UK", "US", "Foot length (cm)"].map((column) => (
              <th
                key={column}
                scope="col"
                className="px-5 py-3 text-left font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.eu} className="border-b border-line last:border-b-0">
              <th
                scope="row"
                className="px-5 py-3 text-left font-display text-[13px] font-bold text-rose"
              >
                {row.eu}
              </th>
              <td className="px-5 py-3 text-body">{row.uk}</td>
              <td className="px-5 py-3 text-body">{row.us}</td>
              <td className="px-5 py-3 text-body">{row.cm}</td>
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
        intro="Every size on this site is quoted in EU. These tables convert it to UK and US, and give the foot length each size is built around."
      />

      <div className="wrap py-14 lg:py-20">
        <section>
          <h2 className="display-3">Measure once</h2>
          <div className="prose-legal mt-5">
            <p>
              Stand on a sheet of paper with your heel against a wall, late in
              the day when your feet are at their largest. Mark the tip of the
              longest toe — which is not always the big toe — and measure from
              the wall to the mark in centimetres. Do both feet and use the
              larger figure.
            </p>
            <p>
              Match that figure to the <strong>foot length</strong> column
              below. If you land between two rows, take the larger size for
              anything laced and the smaller for anything unlined, then read the
              fit notes further down for the specific pair.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Table caption="Men's sizing" rows={MENS} />
          <Table caption="Women's sizing" rows={WOMENS} />
        </div>

        <section className="mt-14">
          <h2 className="display-3">How each last runs</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {FITS.map((fit) => (
              <li key={fit.name} className="border border-line p-7">
                <h3 className="font-display text-[13px] font-bold uppercase tracking-wide2 text-ink">
                  {fit.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {fit.copy}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border border-line bg-mist p-8">
          <h2 className="display-3">Still unsure?</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Send us your foot length in centimetres and the pair you are looking
            at, and we will tell you which size to order — or tell you honestly
            that the shape will not suit your foot. Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-rose underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            or use the{" "}
            <Link
              href="/contact"
              className="text-rose underline underline-offset-4"
            >
              contact form
            </Link>
            .
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            If the size is wrong when it arrives, the{" "}
            <Link
              href="/refunds-policy"
              className="text-rose underline underline-offset-4"
            >
              returns policy
            </Link>{" "}
            gives you fourteen days to exchange it, unworn and in its box.
          </p>
        </section>
      </div>
    </>
  );
}
