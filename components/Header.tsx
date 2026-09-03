"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Courses" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <div className="container-page grid h-20 grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={site.wordmark}
            width={234}
            height={110}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-indigo" : "text-ink/80 hover:text-indigo"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
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
              className="text-ink"
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
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo text-[10px] font-bold text-paper">
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
                className={`h-[2px] w-6 bg-ink transition-transform ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-ink transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-ink transition-transform ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-paper lg:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-ink/5 text-sm font-semibold text-ink last:border-b-0"
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
