import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Size Guide | ${site.name}`,
  description: `How to find your correct fit across ${site.name} dresses, tops, knitwear, outerwear and denim.`,
};

const SIZES = [
  { size: "XS", bust: "31–32 in / 79–81 cm", waist: "24–25 in / 61–64 cm", hip: "34–35 in / 86–89 cm" },
  { size: "S", bust: "33–34 in / 84–86 cm", waist: "26–27 in / 66–69 cm", hip: "36–37 in / 91–94 cm" },
  { size: "M", bust: "35–36 in / 89–91 cm", waist: "28–29 in / 71–74 cm", hip: "38–39 in / 96–99 cm" },
  { size: "L", bust: "37–39 in / 94–99 cm", waist: "30–32 in / 76–81 cm", hip: "40–42 in / 102–107 cm" },
  { size: "XL", bust: "40–42 in / 102–107 cm", waist: "33–35 in / 84–89 cm", hip: "43–45 in / 109–114 cm" },
];

export default function SizeGuidePage() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Fit &amp; Sizing</p>
      <h1 className="section-heading mt-3">Size Guide</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
        Every {site.name} product page lists the sizes available for that
        item. Use the chart below to match your own measurements to our
        sizing before you order — if you&apos;re between two sizes, we
        generally recommend sizing up for a more relaxed fit.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-xl text-ink">
          Dresses, Tops, Knitwear &amp; Denim
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Measure bust at the fullest point, waist at the natural waistline,
          and hip at the fullest point below the waist.
        </p>
        <div className="mt-6 overflow-x-auto border border-ink/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="bg-linen text-xs font-bold uppercase tracking-wide text-ink/70">
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Bust</th>
                <th className="px-4 py-3">Waist</th>
                <th className="px-4 py-3">Hip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {SIZES.map((row) => (
                <tr key={row.size}>
                  <td className="px-4 py-3 font-display text-base text-ink">
                    {row.size}
                  </td>
                  <td className="px-4 py-3 text-ink/80">{row.bust}</td>
                  <td className="px-4 py-3 text-ink/80">{row.waist}</td>
                  <td className="px-4 py-3 text-ink/80">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 border-t border-ink/10 pt-10">
        <h2 className="font-display text-xl text-ink">
          How to Measure Yourself
        </h2>
        <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70">
          <li>
            <strong className="text-ink">Bust:</strong> Wrap the tape measure
            around the fullest part of your bust, keeping the tape level
            across your back.
          </li>
          <li>
            <strong className="text-ink">Waist:</strong> Measure around your
            natural waistline, roughly at your navel, without pulling the
            tape tight.
          </li>
          <li>
            <strong className="text-ink">Hip:</strong> Measure around the
            fullest part of your hips, roughly 8 inches below your
            waistline.
          </li>
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/70">
          Still unsure which size to pick? Get in touch on our{" "}
          <Link href="/contact" className="underline hover:text-raspberry">
            Contact page
          </Link>{" "}
          with your usual size in other brands and we&apos;ll recommend the
          closest match.
        </p>
      </section>
    </div>
  );
}
