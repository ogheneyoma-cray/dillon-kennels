"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
] as const;

type Remaining = Record<(typeof UNITS)[number]["key"], number>;

/** Rolling deadline: always the end of the current week, so it never expires. */
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

export default function CountdownBanner() {
  // Rendered empty on the server so the markup matches the first client paint;
  // the clock only starts once mounted.
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const deadline = nextDeadline();
    const tick = () => setRemaining(split(deadline - Date.now()));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-24 overflow-hidden bg-dusk">
      <div className="absolute inset-0">
        <Image
          src="/xiradix/deal-banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/30" />
      </div>

      <div className="shell relative flex flex-col gap-10 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-lg">
          <p className="kicker text-moon">This week only</p>
          <h2 className="display-lg mt-4 text-linen">
            Up to 20% off selected sleepwear
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-linen/70">
            A small run of slips, sets and robes marked down while stock lasts.
            Reductions are already applied — nothing to enter at checkout.
          </p>
          <Link href="/shop?filter=sale" className="pill-light mt-8">
            Shop the reductions
          </Link>
        </div>

        <div
          className="flex gap-3 sm:gap-4"
          role="timer"
          aria-label="Time remaining in this offer"
        >
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="flex h-[86px] w-[74px] flex-col items-center justify-center rounded-2xl border border-linen/15 bg-linen/5 backdrop-blur sm:h-[100px] sm:w-[88px]"
            >
              <span className="font-display text-3xl font-light text-linen sm:text-4xl">
                {remaining
                  ? String(remaining[unit.key]).padStart(2, "0")
                  : "--"}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wide3 text-linen/55">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
