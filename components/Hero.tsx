"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    image: "/crewsita/hero-01.jpg",
    script: "New season",
    title: "Up to 25% off\nleather formals",
    copy: "Oxfords, brogues and monkstraps in the whole size run — every pair under forty dollars.",
    href: "/shop?category=Men%27s+Formal",
    cta: "Shop men's",
  },
  {
    image: "/crewsita/hero-02.jpg",
    script: "For her",
    title: "Heels you can\nactually stand in",
    copy: "Block heels, pointed pumps and flats built on a last that leaves the toes room to sit.",
    href: "/shop?category=Women%27s+Heels",
    cta: "Shop women's",
  },
  {
    image: "/crewsita/hero-03.jpg",
    script: "Everyday",
    title: "Twenty pairs,\none price band",
    copy: "Nothing in the shop costs more than $40, and nothing is held back for a higher tier.",
    href: "/shop",
    cta: "See everything",
  },
];

/**
 * Full-bleed image slider with the copy block sitting over the left third —
 * the arrangement the reference uses for its nivo slider, including the thin
 * progress rule that runs along the bottom edge.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const go = (next: number) =>
    setIndex((next + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[index];

  return (
    <section className="relative isolate min-h-[460px] overflow-hidden bg-ink sm:min-h-[560px] lg:min-h-[620px]">
      {SLIDES.map((item, slideIndex) => (
        <div
          key={item.image}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className="object-cover object-[50%_72%]"
          />
        </div>
      ))}

      {/* Wash so the copy stays legible over any of the three photographs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.94)_26%,rgba(255,255,255,0.6)_44%,rgba(255,255,255,0)_64%)]"
      />

      <div className="wrap relative flex min-h-[460px] items-center py-16 sm:min-h-[560px] lg:min-h-[620px]">
        <div className="max-w-2xl">
          <p key={`s-${index}`} className="script-line animate-slidein">
            {slide.script}
          </p>
          <h1
            key={`t-${index}`}
            className="display-1 mt-3 animate-slidein whitespace-pre-line"
          >
            {slide.title}
          </h1>
          <p
            key={`c-${index}`}
            className="mt-5 max-w-md animate-slidein text-[15px] leading-relaxed text-body"
          >
            {slide.copy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={slide.href} className="btn-rose">
              {slide.cta}
            </Link>
            <Link href="/about" className="btn-line">
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 right-0 hidden flex-col justify-center gap-2 pr-5 sm:flex">
        {[
          { label: "Previous slide", delta: -1, path: "M15 5 8 12l7 7" },
          { label: "Next slide", delta: 1, path: "m9 5 7 7-7 7" },
        ].map((arrow) => (
          <button
            key={arrow.label}
            type="button"
            onClick={() => go(index + arrow.delta)}
            aria-label={arrow.label}
            className="flex h-11 w-11 items-center justify-center border border-ink/15 bg-paper/80 text-ink transition-colors hover:bg-rose hover:text-paper"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={arrow.path}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>

      {/* Bullets */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5">
        {SLIDES.map((item, slideIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show slide ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            className={`h-2.5 rotate-45 transition-all duration-300 ${
              slideIndex === index
                ? "w-2.5 bg-rose"
                : "w-2.5 bg-ink/25 hover:bg-ink/50"
            }`}
          />
        ))}
      </div>

      {/* Progress rule */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-ink/10">
        <div
          key={index}
          className="h-full bg-rose"
          style={{ animation: "grow 6500ms linear forwards" }}
        />
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
