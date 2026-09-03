"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site, addressLines } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop", label: "All Courses" },
  { href: "/about-us", label: "About Us" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const HELP_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  if (submitted) {
    return (
      <p className="text-sm font-semibold text-paper">
        You&apos;re subscribed — thanks for joining.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs flex-col gap-2 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        className="w-full min-h-[44px] rounded-lg border border-paper/20 bg-navy-soft px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo"
      />
      <button type="submit" className="btn-primary shrink-0">
        Join
      </button>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy bg-navy text-paper/80">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl font-bold text-paper">
            {site.wordmark}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
            {site.tagline}. Self-paced digital courses in business, design,
            marketing, data and productivity, priced up front in USD or NGN.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-pale/70">
            Shop
          </p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-pale/70">
            Help
          </p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-pale/70">
            Newsletter
          </p>
          <p className="mt-4 text-sm text-paper/60">
            New courses and offers, straight to your inbox.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-paper/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>{addressLines.join(", ")}</span>
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
