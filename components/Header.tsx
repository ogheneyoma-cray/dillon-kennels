"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import { site } from "@/lib/site";
import { categories } from "@/data/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper">
      {/* Utility bar */}
      <div className="hidden bg-navy-deep text-paper/80 sm:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            Free shipping on orders over $75
          </p>
          <p className="font-medium tracking-wide">
            Hotline:{" "}
            <a href={`tel:${site.phoneHref}`} className="text-paper hover:text-rust">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-navy">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="relative block h-9 w-[180px] shrink-0 sm:h-10 sm:w-[210px]"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo-white.png"
              alt={site.wordmark}
              fill
              priority
              sizes="210px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden flex-1 items-center gap-4 lg:flex">
            <CurrencyToggle className="border-paper/25 text-paper" />
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <CurrencyToggle className="border-paper/25 text-paper lg:hidden" />
            <Link
              href="/cart"
              aria-label="View cart"
              className="relative flex min-h-[44px] min-w-[44px] items-center justify-center text-paper"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rust text-[10px] font-bold text-paper">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`h-[2px] w-6 bg-paper transition-transform ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-6 bg-paper transition-opacity ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-6 bg-paper transition-transform ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Category / nav bar */}
      <nav className="hidden border-b border-line bg-paper lg:block">
        <div className="container-page flex h-14 items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  active ? "text-rust" : "text-navy hover:text-rust"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mx-2 h-5 w-px bg-line" />
          {categories.map((category) => (
            <Link
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-rust"
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>

      {menuOpen && (
        <nav className="border-b border-line bg-paper lg:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-line text-sm font-bold uppercase tracking-wide text-navy"
              >
                {link.label}
              </Link>
            ))}
            {categories.map((category) => (
              <Link
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-line text-sm font-medium text-ink-soft last:border-b-0"
              >
                {category}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
