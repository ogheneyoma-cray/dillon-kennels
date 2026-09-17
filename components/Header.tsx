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
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-oat/95 backdrop-blur">
      {/* Row 1: currency + cart flank a centered logo */}
      <div className="container-page relative flex h-20 items-center justify-between">
        <CurrencyToggle className="hidden sm:inline-flex" />
        <Link href="/" className="absolute left-1/2 -translate-x-1/2" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex min-h-[44px] min-w-[44px] items-center justify-center"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-aubergine">
              <path d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-peach font-body text-[10px] font-bold text-aubergine-dark">
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
              <span className={`h-[1.5px] w-6 bg-aubergine transition-transform ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-6 bg-aubergine transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[1.5px] w-6 bg-aubergine transition-transform ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Row 2: centered italic-serif nav with a thin rule above and below */}
      <nav className="hidden border-y border-line md:block">
        <div className="container-page flex items-center justify-center gap-10 py-3">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm italic transition-colors ${
                  active ? "text-aubergine underline decoration-peach decoration-2 underline-offset-4" : "text-ink-soft hover:text-aubergine"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {menuOpen && (
        <nav className="border-t border-line bg-oat md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center font-display text-base italic text-aubergine"
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
