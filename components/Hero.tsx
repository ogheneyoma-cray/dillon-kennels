"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    kicker: "Sale up to",
    highlight: "30%",
    kickerEnd: "Off",
    script: "New Term",
    sub: "This Week Only",
    href: "/shop?filter=sale",
    cta: "Shop the sale",
  },
  {
    kicker: "Denim from",
    highlight: "$36",
    kickerEnd: "",
    script: "Built to Fade",
    sub: "Rigid, straight and stretch",
    href: "/shop?category=Bottoms",
    cta: "Shop denim",
  },
  {
    kicker: "Everything under",
    highlight: "$40",
    kickerEnd: "",
    script: "No Exceptions",
    sub: "Twenty pieces, one price band",
    href: "/shop",
    cta: "Shop everything",
  },
];

/**
 * Hero with a model image flanking each side of centred copy, matching the
 * reference. The images are fixed; only the copy rotates.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-haze">
      <div className="relative grid min-h-[460px] grid-cols-1 md:min-h-[560px] md:grid-cols-[1fr_minmax(0,640px)_1fr] lg:min-h-[640px]">
        <div className="relative hidden md:block">
          <Image
            src="/adomattic/hero-left.jpg"
            alt=""
            fill
            priority
            sizes="30vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <p key={`k-${index}`} className="animate-rise text-xl text-onyx sm:text-2xl">
            {slide.kicker}{" "}
            <span className="font-semibold text-camel">{slide.highlight}</span>{" "}
            {slide.kickerEnd}
          </p>
          <p
            key={`s-${index}`}
            className="script-accent mt-2 animate-rise text-5xl sm:text-6xl lg:text-7xl"
          >
            {slide.script}
          </p>
          <p
            key={`u-${index}`}
            className="mt-3 animate-rise text-xl text-onyx sm:text-2xl"
          >
            {slide.sub}
          </p>
          <Link href={slide.href} className="btn-camel mt-8">
            {slide.cta}
          </Link>

          <div className="mt-10 flex items-center gap-3">
            {SLIDES.map((item, slideIndex) => (
              <button
                key={item.script}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                  slideIndex === index ? "border-camel" : "border-transparent"
                }`}
              >
                <span
                  className={`h-[7px] w-[7px] rotate-45 transition-colors ${
                    slideIndex === index ? "bg-camel" : "bg-mist"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/adomattic/hero-right.jpg"
            alt=""
            fill
            priority
            sizes="30vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
