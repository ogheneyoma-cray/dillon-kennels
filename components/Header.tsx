"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/**
 * A near-black sticky header matching the reference's dark nav bar, with a
 * glowing teal accent for the active link and cart badge.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="hidden border-b border-white/10 bg-ink py-2 text-center text-[11px] font-semibold uppercase tracking-widest2 text-teal/80 sm:block">
        Fixed price · Delivered in days · {site.email}
      </div>
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Logo tone="cream" wordClassName="text-xl sm:text-2xl" markClassName="h-8 w-8 sm:h-9 sm:w-9" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-bold uppercase tracking-wider transition-colors ${
                  active ? "text-teal" : "text-white/80 hover:text-teal"
                }`}
              >
                {link.label}
                {active && (
                  <span aria-hidden="true" className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <CurrencyToggle tone="dark" className="hidden sm:inline-flex" />
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white">
              <path
                d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber text-[10px] font-bold text-ink">
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
              <span className={`h-[2px] w-6 bg-white transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[2px] w-6 bg-white transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-ink md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-white/10 text-sm font-bold uppercase tracking-wider text-white last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-3">
              <CurrencyToggle tone="dark" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
