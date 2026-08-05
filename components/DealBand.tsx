"use client";

import Link from "next/link";
import BookCover from "@/components/BookCover";
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
    const timer = window.setInterval(
      () => setRemaining(msUntilMidnight()),
      1000
    );
    return () => window.clearInterval(timer);
  }, []);

  const total = Math.max(0, Math.floor((remaining ?? 0) / 1000));
  const cells = [
    { label: "Hrs", value: Math.floor(total / 3600) },
    { label: "Min", value: Math.floor((total % 3600) / 60) },
    { label: "Sec", value: total % 60 },
  ];

  return (
    <div className="flex gap-3">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-2xl bg-paper shadow-card"
        >
          <span className="font-display text-2xl font-bold leading-none text-clay">
            {remaining === null ? "--" : String(cell.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-display text-[10px] font-semibold uppercase tracking-wide2 text-muted">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Offer band: one reduced title with a countdown to midnight and a bar showing
 * how much of the launch allocation has gone — the promotional strip the
 * reference drops between its product rows.
 */
export default function DealBand() {
  const product = dealProducts[0];
  if (!product) return null;

  const sold = (product.stockTotal ?? 0) - (product.stockLeft ?? 0);
  const pct = product.stockTotal
    ? Math.round((sold / product.stockTotal) * 100)
    : 0;

  return (
    <section className="relative isolate overflow-hidden bg-sand">
      <span
        aria-hidden="true"
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-clay/10"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 right-10 h-72 w-72 rounded-[45%_55%_60%_40%] bg-rose/10"
      />

      <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div className="flex justify-center">
          <div className="relative w-[240px] sm:w-[290px]">
            <BookCover
              src={product.image}
              alt={`${product.name} by ${product.author}`}
              className="w-full rounded-r-lg shadow-lift"
            />
            <span className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-clay font-display text-[13px] font-bold uppercase text-paper">
              Offer
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow">Ends at midnight</p>
          <h2 className="display-2 mt-3">{product.name}</h2>
          <p className="mt-1.5 text-[15px] text-muted">by {product.author}</p>

          <StarRating
            rating={product.rating}
            reviews={product.reviews}
            className="mt-4"
          />

          <p className="mt-4 max-w-lg text-[15px] leading-relaxed">
            {product.description.split(". ").slice(0, 2).join(". ")}.
          </p>

          <ProductPrice
            priceUsd={product.price}
            compareAtUsd={product.compareAt}
            className="mt-5 text-3xl"
            compareClassName="text-lg"
          />

          <div className="mt-6 max-w-sm">
            <div className="flex items-center justify-between font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted">
              <span>Sold: {sold}</span>
              <span>Left: {product.stockLeft}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-paper">
              <div
                className="h-full rounded-full bg-clay"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="mt-7">
            <Countdown />
          </div>

          <Link href={`/shop/${product.slug}`} className="btn-clay mt-8">
            Get this title
          </Link>
        </div>
      </div>
    </section>
  );
}
