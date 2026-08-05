"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";
import SectionHeading from "@/components/SectionHeading";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
] as const;

type Remaining = Record<(typeof UNITS)[number]["key"], number>;

/** Rolling deadline: end of the current week, so the run never expires. */
function nextDeadline(): number {
  const now = new Date();
  const end = new Date(now);
  end.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

function split(ms: number): Remaining {
  const clamped = Math.max(0, ms);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor(clamped / 3_600_000) % 24,
    minutes: Math.floor(clamped / 60_000) % 60,
    seconds: Math.floor(clamped / 1000) % 60,
  };
}

function RunCard({
  product,
  remaining,
}: {
  product: Product;
  remaining: Remaining | null;
}) {
  const total = product.stockTotal ?? 0;
  const left = product.stockLeft ?? 0;
  const cutPercent = total > 0 ? Math.round(((total - left) / total) * 100) : 0;

  return (
    <article className="grid grid-cols-1 border border-rule bg-panel sm:grid-cols-[1fr_auto]">
      <div className="flex flex-col p-8">
        <p className="text-[10px] uppercase tracking-micro text-slate">
          {product.category}
        </p>
        <h3 className="mt-3">
          <Link
            href={`/shop/${product.slug}`}
            className="text-xl font-light text-bone transition-colors hover:text-brass"
          >
            {product.name}
          </Link>
        </h3>

        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-4 text-lg text-brass"
          compareClassName="text-[15px]"
        />

        <div className="mt-7 flex justify-between text-[11px] uppercase tracking-micro text-slate">
          <span>{cutPercent}% of the run gone</span>
          <span className="text-bone">{left} left</span>
        </div>
        <div
          className="mt-2.5 h-px w-full bg-rule"
          role="progressbar"
          aria-valuenow={cutPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${cutPercent} percent of the run sold`}
        >
          <div className="h-px bg-brass" style={{ width: `${cutPercent}%` }} />
        </div>

        <div
          className="mt-7 flex gap-7"
          role="timer"
          aria-label="This run closes in"
        >
          {UNITS.map((unit) => (
            <div key={unit.key}>
              <p className="text-2xl font-light text-bone">
                {remaining ? String(remaining[unit.key]).padStart(2, "0") : "--"}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-micro text-slate">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <Link href={`/shop/${product.slug}`} className="btn-line mt-8 self-start">
          View the piece
        </Link>
      </div>

      <Link
        href={`/shop/${product.slug}`}
        className="relative min-h-[280px] w-full bg-raised sm:w-[250px]"
        aria-label={product.name}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="250px"
          className="object-cover opacity-90"
        />
      </Link>
    </article>
  );
}

export default function LimitedRun({ products }: { products: Product[] }) {
  // Left null on the server so markup matches the first client paint.
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const deadline = nextDeadline();
    const tick = () => setRemaining(split(deadline - Date.now()));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="ruled border-y border-rule bg-pitch py-20 lg:py-24">
      <div className="wrap">
        <SectionHeading
          eyebrow="Closing runs"
          title="Cut once, and then not again"
          subtitle="When a cloth is finished we do not reorder it at a worse quality to keep the line alive. These are the last of two runs."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <RunCard
              key={product.id}
              product={product}
              remaining={remaining}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
