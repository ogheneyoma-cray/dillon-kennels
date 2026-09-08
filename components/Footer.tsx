"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Logo from "@/components/Logo";
import { MastercardMark, VisaMark } from "@/components/PaymentIcons";
import { addressLines, site } from "@/lib/site";

const POLICY_LINKS = [
  { href: "/shipping-policy", label: "Shipping & Delivery" },
  { href: "/refunds-policy", label: "Refunds & Returns" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const SUPPORT_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact Us" },
];

function FooterNewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  if (submitted) {
    return <p className="text-sm font-semibold text-teal">You&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="min-h-[46px] w-full rounded-md border border-cream/25 bg-transparent px-4 text-sm text-cream placeholder:text-cream/45 focus:border-cream focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex min-h-[46px] w-full items-center justify-center rounded-md bg-teal px-6 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

/**
 * Four-column footer matching the Ejon reference — Get in Touch, Policies,
 * Support, Join Our Newsletter — followed by a bottom bar with copyright
 * and card marks. No social links and no street address anywhere but this
 * column and the contact/legal pages.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="eyebrow text-cream">Get in Touch</p>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-cream/70">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <p className="mt-3 text-sm">
            <a href={`mailto:${site.email}`} className="text-cream/70 hover:text-cream">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream">Policies</p>
          <ul className="mt-4 space-y-2">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream">Support</p>
          <ul className="mt-4 space-y-2">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream">Join Our Newsletter</p>
          <p className="mt-4 text-sm text-cream/70">
            Subscribe for restocks, new arrivals and the occasional discount.
          </p>
          <div className="mt-4">
            <FooterNewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo tone="cream" wordClassName="text-lg" markClassName="h-7 w-7" />
            <p className="text-xs text-cream/50">© {year} {site.legalName}.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cream/40">We Accept</span>
            <MastercardMark />
            <VisaMark />
          </div>
        </div>
      </div>
    </footer>
  );
}
