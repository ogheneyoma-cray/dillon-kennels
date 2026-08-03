"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    kicker: "Sleepwear · New Season",
    title: "Made for the\nlast hour of the day",
    copy: "Satin slips, brushed cotton pyjamas and robes cut for real rest.",
    cta: { href: "/shop", label: "Shop the collection" },
    left: { src: "/xiradix/hero-primary.jpg", alt: "Model in a charcoal belted robe" },
    right: { src: "/xiradix/hero-secondary.jpg", alt: "Model in a cobalt silk kimono" },
  },
  {
    kicker: "Men's & Women's",
    title: "Nothing to adjust\nat 3 a.m.",
    copy: "Fifty pieces, every one cut to be forgotten about the moment it goes on.",
    cta: { href: "/shop?category=Men%27s+Sleepwear", label: "Shop men's" },
    left: { src: "/xiradix/promo-pyjama-set.jpg", alt: "Cream brushed cotton pyjama set" },
    right: { src: "/xiradix/deal-banner.jpg", alt: "Monochrome gingham pyjama set" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-advance, paused whenever the tab is hidden.
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[74vh] min-h-[460px] w-full overflow-hidden bg-midnight lg:h-[86vh]">
      {SLIDES.map((slide, slideIndex) => (
        <div
          key={slide.title}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 grid grid-cols-2 transition-opacity duration-[900ms] ease-out ${
            slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.left.src}
              alt={slide.left.alt}
              fill
              priority={slideIndex === 0}
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={slide.right.src}
              alt={slide.right.alt}
              fill
              priority={slideIndex === 0}
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Readability wash behind the copy, heaviest at the lower left. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-midnight/85 via-midnight/35 to-transparent" />

      <div className="shell relative flex h-full flex-col justify-end pb-16 lg:pb-24">
        <p key={`k-${index}`} className="kicker animate-fadeUp text-moon">
          {SLIDES[index].kicker}
        </p>
        <h1
          key={`t-${index}`}
          className="display-xl mt-4 max-w-3xl animate-fadeUp whitespace-pre-line text-linen"
        >
          {SLIDES[index].title}
        </h1>
        <p
          key={`c-${index}`}
          className="mt-5 max-w-md animate-fadeUp text-[15px] leading-relaxed text-linen/75"
        >
          {SLIDES[index].copy}
        </p>
        <div className="mt-8 flex items-center gap-6">
          <Link href={SLIDES[index].cta.href} className="pill-light">
            {SLIDES[index].cta.label}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="flex items-center gap-2.5">
            {SLIDES.map((slide, slideIndex) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  slideIndex === index
                    ? "w-7 bg-linen"
                    : "w-2.5 bg-linen/40 hover:bg-linen/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
