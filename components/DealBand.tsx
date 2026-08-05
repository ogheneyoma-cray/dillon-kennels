"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dealProducts } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";
import StarRating from "@/components/StarRating";

/** Midnight tonight, as the end of the countdown. */
function msUntilMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return end.getTime() - now.getTime();
}

function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    setRemaining(msUntilMidnight());
    const timer = window.setInterval(() => setRemaining(msUntilMidnight()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const total = Math.max(0, Math.floor((remaining ?? 0) / 1000));
  const cells = [
    { label: "Hrs", value: Math.floor(total / 3600) },
    { label: "Min", value: Math.floor((total % 3600) / 60) },
    { label: "Sec", value: total % 60 },
  ];

  return (
    <div className="flex gap-2.5">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex h-16 w-16 flex-col items-center justify-center border border-paper/20 bg-paper/[0.06]"
        >
          <span className="font-display text-xl font-bold leading-none text-amber">
            {remaining === null ? "--" : String(cell.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-display text-[9px] font-semibold uppercase tracking-wide2 text-paper/50">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Deal-of-the-day band: a dark full-width strip carrying one reduced pair,
 * a countdown to midnight and a sold-progress bar — the section the reference
 * drops between its product grids.
 */
export default function DealBand() {
  const product = dealProducts[0];
  if (!product) return null;

  const sold = (product.stockTotal ?? 0) - (product.stockLeft ?? 0);
  const pct = product.stockTotal
    ? Math.round((sold / product.stockTotal) * 100)
    : 0;

  return (
    <section className="bg-ink">
      <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 chip bg-rose text-paper">
            Deal of the day
          </span>
        </div>

        <div>
          <p className="script-line">Ends at midnight</p>
          <h2 className="mt-2 font-display text-[1.6rem] font-bold uppercase leading-tight tracking-wide2 text-paper sm:text-[2rem]">
            {product.name}
          </h2>

          <StarRating
            rating={product.rating}
            reviews={product.reviews}
            className="mt-4"
          />

          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            {product.description.split(". ").slice(0, 2).join(". ")}.
          </p>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 text-2xl"
            compareClassName="text-base"
          />

          <div className="mt-6 max-w-sm">
            <div className="flex items-center justify-between font-display text-[11px] font-semibold uppercase tracking-wide2 text-paper/60">
              <span>Sold: {sold}</span>
              <span>Left: {product.stockLeft}</span>
            </div>
            <div className="mt-2 h-1.5 w-full bg-paper/15">
              <div className="h-full bg-rose" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className="mt-7">
            <Countdown />
          </div>

          <Link href={`/shop/${product.slug}`} className="btn-rose mt-8">
            Grab this pair
          </Link>
        </div>
      </div>
    </section>
  );
}
