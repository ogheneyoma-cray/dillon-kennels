"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const SLIDES = [
  {
    image: "/mydriad/hero-01.jpg",
    eyebrow: "The house cut",
    title: "Tailoring that\nholds its line",
    copy: "Half-canvas chests, side vents, and a shoulder that follows yours instead of arguing with it.",
    href: "/shop?category=Suits",
    cta: "Shop the suits",
  },
  {
    image: "/mydriad/hero-02.jpg",
    eyebrow: "Twenty pieces",
    title: "One standard,\none price band",
    copy: "Every jacket in the collection sits between $20 and $40. There is no better version held back for a higher tier.",
    href: "/shop",
    cta: "See everything",
  },
  {
    image: "/mydriad/hero-03.jpg",
    eyebrow: "After dark",
    title: "Black tie,\nby the letter",
    copy: "Barathea, satin facings, covered buttons and a braided outseam. The old rules, kept because they work.",
    href: "/shop?category=Dinner+Jackets",
    cta: "Dinner jackets",
  },
];

/**
 * Split hero: copy on black at the left, a cross-fading image at the right,
 * with a vertical rail down the outer edge — the frame the reference builds
 * around its slider.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative isolate grid bg-ink lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.05fr_1fr]">
      {/* Left rail — the tagline set vertically, standing in for the vertical
          column the reference runs down the edge of its slider. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-16 items-center justify-center border-r border-rule lg:flex">
        <span className="rotate-180 text-[10px] uppercase tracking-mega text-slate [writing-mode:vertical-rl]">
          {site.tagline}
        </span>
      </div>

      {/* Copy half */}
      <div className="relative flex items-center px-5 py-20 sm:px-8 lg:py-28 lg:pl-28 lg:pr-14">
        <div className="max-w-xl">
          <p key={`e-${index}`} className="eyebrow animate-lift">
            {slide.eyebrow}
          </p>
          <h1
            key={`t-${index}`}
            className="display-1 mt-6 animate-lift whitespace-pre-line"
          >
            {slide.title}
          </h1>
          <p
            key={`c-${index}`}
            className="mt-7 max-w-md animate-lift text-[15px] font-light leading-[1.9] text-smoke"
          >
            {slide.copy}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={slide.href} className="btn-brass">
              {slide.cta}
            </Link>
            <Link href="/about" className="btn-line">
              How we cut
            </Link>
          </div>

          {/* Slide numerals, laid along a hairline */}
          <div className="mt-14 flex items-center gap-5">
            {SLIDES.map((item, slideIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                className={`flex items-center gap-3 text-sm tracking-micro transition-colors ${
                  slideIndex === index
                    ? "text-brass"
                    : "text-slate hover:text-bone"
                }`}
              >
                {String(slideIndex + 1).padStart(2, "0")}
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-500 ${
                    slideIndex === index ? "w-12 bg-brass" : "w-5 bg-rule"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image half */}
      <div className="relative min-h-[420px] border-l border-rule lg:min-h-full">
        {SLIDES.map((item, slideIndex) => (
          <div
            key={item.image}
            aria-hidden={slideIndex !== index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        ))}
        {/* Just enough wash to seat the image against the black half. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent"
        />
      </div>
    </section>
  );
}
