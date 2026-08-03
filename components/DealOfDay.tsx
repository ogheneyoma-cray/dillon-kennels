"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";
import SectionHeading from "@/components/SectionHeading";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
] as const;

type Remaining = Record<(typeof UNITS)[number]["key"], number>;

/** Rolling deadline: end of the current week, so the offer never expires. */
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

function DealCard({
  product,
  remaining,
}: {
  product: Product;
  remaining: Remaining | null;
}) {
  const total = product.stockTotal ?? 0;
  const left = product.stockLeft ?? 0;
  const soldPercent = total > 0 ? Math.round(((total - left) / total) * 100) : 0;

  return (
    <article className="grid grid-cols-1 border border-line bg-paper sm:grid-cols-[1fr_auto]">
      <div className="flex flex-col p-7">
        <h3>
          <Link
            href={`/shop/${product.slug}`}
            className="text-[13px] font-semibold uppercase tracking-wide2 text-onyx transition-colors hover:text-camel"
          >
            {product.name}
          </Link>
        </h3>

        <ProductPrice
          priceUsd={product.price}
          compareAtUsd={product.compareAt}
          className="mt-3 text-lg font-semibold text-camel"
          compareClassName="text-[15px]"
        />

        <div className="mt-6 flex justify-between text-[13px] text-ash">
          <span>{soldPercent}% Already Sold</span>
          <span>
            Available: <span className="font-semibold text-onyx">{left}</span>
          </span>
        </div>
        <div
          className="mt-2 h-1.5 w-full bg-line"
          role="progressbar"
          aria-valuenow={soldPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${soldPercent} percent sold`}
        >
          <div
            className="h-full bg-camel"
            style={{ width: `${soldPercent}%` }}
          />
        </div>

        <div className="mt-6 flex gap-5" role="timer" aria-label="Offer ends in">
          {UNITS.map((unit) => (
            <div key={unit.key}>
              <p className="text-xl font-semibold text-onyx">
                {remaining ? String(remaining[unit.key]).padStart(2, "0") : "--"}
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide2 text-mist">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        <Link href={`/shop/${product.slug}`} className="btn-dark mt-7 self-start">
          Shop now
        </Link>
      </div>

      <Link
        href={`/shop/${product.slug}`}
        className="relative min-h-[240px] w-full bg-haze sm:w-[230px]"
        aria-label={product.name}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="230px"
          className="object-cover"
        />
      </Link>
    </article>
  );
}

export default function DealOfDay({ products }: { products: Product[] }) {
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
    <section className="bg-blush py-20">
      <div className="frame">
        <SectionHeading
          title="Deal of the day"
          subtitle="A short run at a lower price, and then it goes back up."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <DealCard
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
