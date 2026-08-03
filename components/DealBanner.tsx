"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import ProductPrice from "@/components/ProductPrice";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
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

export default function DealBanner({ product }: { product: Product }) {
  // Left null on the server so the markup matches the first client paint.
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const deadline = nextDeadline();
    const tick = () => setRemaining(split(deadline - Date.now()));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-pine">
      <Image
        src="/anikoda/deal-backdrop.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/85 to-pine/50" />

      <div className="boxed relative grid gap-10 py-16 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16 lg:py-20">
        <div className="relative mx-auto w-full max-w-[340px] border-4 border-canvas/15 p-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-shell">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="340px"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-[76px] w-[76px] overflow-hidden"
            >
              <span className="absolute -right-[34px] top-[16px] w-[120px] rotate-45 bg-tangerine py-1 text-center text-[10px] font-bold uppercase tracking-bold3 text-canvas">
                Sale
              </span>
            </span>
          </div>
        </div>

        <div>
          <div
            className="flex flex-wrap gap-3"
            role="timer"
            aria-label="Time remaining in this offer"
          >
            {UNITS.map((unit) => (
              <div
                key={unit.key}
                className="flex h-[78px] w-[74px] flex-col items-center justify-center border-2 border-canvas/25"
              >
                <span className="font-display text-2xl font-extrabold text-canvas">
                  {remaining ? String(remaining[unit.key]).padStart(2, "0") : "--"}
                </span>
                <span className="mt-0.5 text-[10px] font-bold uppercase tracking-bold3 text-canvas/60">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <h2 className="head-xl mt-8 text-canvas">Deal of the week</h2>
          <p className="mt-3 font-display text-xl font-bold uppercase tracking-bold3 text-sunshine">
            {product.name}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-canvas/75">
            {product.description.split(". ").slice(0, 2).join(". ")}.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <ProductPrice
              priceUsd={product.price}
              compareAtUsd={product.compareAt}
              className="text-3xl font-extrabold text-canvas"
              compareClassName="text-lg text-canvas/50"
            />
            <Link href={`/shop/${product.slug}`} className="btn-solid">
              Grab this deal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
