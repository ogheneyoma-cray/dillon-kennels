import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Size Guide | ${site.name}`,
  description: `How to find your correct fit across ${site.name} shirts, t-shirts, jackets, sweaters and footwear.`,
};

const TOP_SIZES = [
  { size: "S", chest: "36–38 in / 91–96 cm", waist: "30–32 in / 76–81 cm", length: "27 in / 69 cm" },
  { size: "M", chest: "39–41 in / 99–104 cm", waist: "33–35 in / 84–89 cm", length: "28 in / 71 cm" },
  { size: "L", chest: "42–44 in / 107–112 cm", waist: "36–38 in / 91–96 cm", length: "29 in / 74 cm" },
  { size: "XL", chest: "45–47 in / 114–119 cm", waist: "39–41 in / 99–104 cm", length: "30 in / 76 cm" },
  { size: "XXL", chest: "48–50 in / 122–127 cm", waist: "42–44 in / 107–112 cm", length: "31 in / 79 cm" },
];

const FOOTWEAR_SIZES = [
  { eu: "40", uk: "6", us: "7", footLength: "25.4 cm" },
  { eu: "41", uk: "7", us: "8", footLength: "26.0 cm" },
  { eu: "42", uk: "8", us: "9", footLength: "26.7 cm" },
  { eu: "43", uk: "9", us: "10", footLength: "27.3 cm" },
  { eu: "44", uk: "10", us: "11", footLength: "27.9 cm" },
  { eu: "45", uk: "11", us: "12", footLength: "28.6 cm" },
];

export default function SizeGuidePage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Fit &amp; Sizing</p>
      <h1 className="section-heading mt-3">Size Guide</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
        Every {site.name} product page lists the sizes available for that
        item. Use the charts below to match your own measurements to our
        sizing before you order — if you&apos;re between two sizes, we
        generally recommend sizing up for a more relaxed fit.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl uppercase text-ink">
          Shirts, T-Shirts, Jackets &amp; Sweaters
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Measure chest at the fullest point under the arms, waist at the
          natural waistline, and length from the base of the collar to the
          hem.
        </p>
        <div className="mt-6 overflow-x-auto border border-ink/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="bg-stone text-xs font-bold uppercase tracking-wide text-ink/70">
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Chest</th>
                <th className="px-4 py-3">Waist</th>
                <th className="px-4 py-3">Body Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {TOP_SIZES.map((row) => (
                <tr key={row.size}>
                  <td className="px-4 py-3 font-display text-lg uppercase text-ink">
                    {row.size}
                  </td>
                  <td className="px-4 py-3 text-ink/80">{row.chest}</td>
                  <td className="px-4 py-3 text-ink/80">{row.waist}</td>
                  <td className="px-4 py-3 text-ink/80">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl uppercase text-ink">Footwear</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Measure your foot length while standing, from heel to the tip of
          your longest toe, in the evening when feet are at their largest.
        </p>
        <div className="mt-6 overflow-x-auto border border-ink/10">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="bg-stone text-xs font-bold uppercase tracking-wide text-ink/70">
                <th className="px-4 py-3">EU Size</th>
                <th className="px-4 py-3">UK Size</th>
                <th className="px-4 py-3">US Size</th>
                <th className="px-4 py-3">Foot Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {FOOTWEAR_SIZES.map((row) => (
                <tr key={row.eu}>
                  <td className="px-4 py-3 font-display text-lg uppercase text-ink">
                    {row.eu}
                  </td>
                  <td className="px-4 py-3 text-ink/80">{row.uk}</td>
                  <td className="px-4 py-3 text-ink/80">{row.us}</td>
                  <td className="px-4 py-3 text-ink/80">{row.footLength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 border-t border-ink/10 pt-10">
        <h2 className="font-display text-2xl uppercase text-ink">
          How to Measure Yourself
        </h2>
        <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70">
          <li>
            <strong className="text-ink">Chest:</strong> Wrap the tape
            measure around the fullest part of your chest, under your arms
            and across your shoulder blades, keeping the tape level.
          </li>
          <li>
            <strong className="text-ink">Waist:</strong> Measure around your
            natural waistline, roughly at your navel, without pulling the
            tape tight.
          </li>
          <li>
            <strong className="text-ink">Body Length:</strong> Measure from
            the base of the back collar straight down to where you&apos;d
            like the garment to end.
          </li>
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Still unsure which size to pick? Get in touch on our{" "}
          <Link href="/contact" className="underline hover:text-spruce">
            Contact page
          </Link>{" "}
          with your usual size in other brands and we&apos;ll recommend the
          closest match.
        </p>
      </section>
    </div>
  );
}
