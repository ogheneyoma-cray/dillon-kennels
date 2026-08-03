"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencySwitch from "@/components/CurrencySwitch";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-pine text-canvas">
      <div className="boxed">
        <div className="flex h-[74px] items-center justify-between gap-4">
          {/* Logo sits in a light block, as in the reference header. */}
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="-my-px flex h-full items-center bg-canvas px-4 sm:px-6"
          >
            <Logo
              markClassName="h-8 w-8 sm:h-9 sm:w-9"
              wordClassName="text-xl sm:text-2xl"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-t-2 pt-1 text-[12px] font-bold uppercase tracking-bold3 transition-colors ${
                    active
                      ? "border-tangerine text-tangerine"
                      : "border-transparent text-canvas/85 hover:text-tangerine"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <CurrencySwitch tone="light" className="hidden sm:inline-flex" />

            <Link
              href="/cart"
              aria-label={`Basket, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
              className="relative flex h-11 w-11 items-center justify-center text-canvas transition-colors hover:text-tangerine"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 4h2.2l2 11.2a1.6 1.6 0 0 0 1.6 1.3h8.5a1.6 1.6 0 0 0 1.6-1.2L21 8H6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="20" r="1.4" fill="currentColor" />
                <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-tangerine px-1 text-[10px] font-extrabold text-canvas">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[2px] w-[22px] bg-canvas transition-transform ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-[22px] bg-canvas transition-opacity ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-[22px] bg-canvas transition-transform ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-canvas/10 bg-forest lg:hidden">
          <div className="boxed flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[48px] items-center border-b border-canvas/10 text-[12px] font-bold uppercase tracking-bold3 text-canvas last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-4 sm:hidden">
              <CurrencySwitch tone="light" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
