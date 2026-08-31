"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site, addressLines } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const HELP_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Shipping Policy" },
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
      <p className="text-sm font-semibold text-ink">
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
        className="input-field"
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
    <footer className="border-t border-ink/10 bg-linen">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl text-ink">{site.wordmark}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">
            {site.tagline}. Dresses, tops, knitwear, outerwear, denim and
            accessories, priced up front in USD or NGN.
          </p>
        </div>

        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/80 transition-colors hover:text-raspberry"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Help</p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/80 transition-colors hover:text-raspberry"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-4 text-sm text-ink/70">
            New arrivals and offers, straight to your inbox.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-ink/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>{addressLines.join(", ")}</span>
            <a href={`mailto:${site.email}`} className="hover:text-raspberry">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-raspberry">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
