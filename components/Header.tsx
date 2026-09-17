"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-linen">
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Nav rendered as a numbered index list, catalog-style */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 font-display text-sm font-bold transition-colors ${
                  active ? "text-clay-dark" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span className="text-xs text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <CurrencyToggle className="hidden sm:inline-flex" />
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-line"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-ink">
              <path d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-clay font-display text-[10px] font-bold text-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-[2px] w-6 bg-ink transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[2px] w-6 bg-ink transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-linen md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center font-display text-sm font-bold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-line py-3">
              <CurrencyToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
