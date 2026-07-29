"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/Logo";
import CurrencyToggle from "@/components/CurrencyToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const TICKER_ITEMS = [
  "FREE DELIVERY IN ILORIN OVER $120",
  "NEW DROPS WEEKLY",
  "7-DAY EASY RETURNS",
  "MADE FOR THE CITY",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <header className="sticky top-0 z-50 bg-noir/95 backdrop-blur">
      <div className="overflow-hidden border-b border-bone/10 bg-acid py-2">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {tickerContent.map((item, i) => (
            <span
              key={i}
              className="text-[11px] font-bold uppercase tracking-widest2 text-noir"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="border-b border-bone/10">
        <div className="container-page flex h-20 items-center justify-between">
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`h-[2px] w-6 bg-bone transition-transform ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-bone transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-bone transition-transform ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest2 transition-colors ${
                    active ? "text-acid" : "text-bone hover:text-acid"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <CurrencyToggle className="hidden sm:inline-flex" />
            <Link
              href="/cart"
              aria-label="View cart"
              className="relative flex min-h-[44px] min-w-[44px] items-center justify-center"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="text-bone"
              >
                <path
                  d="M6 8h12l-1 12H7L6 8Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8V6a3 3 0 0 1 6 0v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-acid text-[10px] font-bold text-noir">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-b border-bone/10 bg-graphite md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-bone/5 text-xs font-bold uppercase tracking-widest2 text-bone last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-3">
              <CurrencyToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
