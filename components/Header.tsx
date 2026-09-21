"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper">
      <div className="container-page flex h-[84px] items-center justify-between gap-6">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Nav rendered as plain inline text links, no pill/capsule wrapper */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-0.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "border-signal text-ink" : "border-transparent text-ink-soft hover:border-line hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <CurrencyToggle className="hidden sm:inline-flex" />
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex min-h-[40px] items-center gap-2 border border-ink px-3 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Cart
            {cartCount > 0 && <span>({cartCount > 9 ? "9+" : cartCount})</span>}
          </Link>
          <button
            type="button"
            className="flex min-h-[40px] min-w-[40px] items-center justify-center border border-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-[2px] w-5 bg-ink transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-ink transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[2px] w-5 bg-ink transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center text-sm font-semibold uppercase tracking-wide text-ink"
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
