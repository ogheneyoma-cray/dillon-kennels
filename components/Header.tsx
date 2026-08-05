"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import CurrencySwitch from "@/components/CurrencySwitch";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Atelier" },
  { href: "/size-guide", label: "Fit Guide" },
  { href: "/contact", label: "Contact" },
];

/**
 * Full-width bar divided into three bordered cells — logo, navigation, tools —
 * exactly as the reference splits its header. The bar sits on solid black so
 * it stays legible over the hero imagery beneath it.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = query.trim();
    router.push(term ? `/shop?q=${encodeURIComponent(term)}` : "/shop");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ink">
      <div className="grid grid-cols-[1fr_auto] items-stretch lg:grid-cols-[minmax(0,300px)_1fr_auto]">
        {/* Logo cell */}
        <div className="flex items-center border-r border-rule px-5 py-5 sm:px-8">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo wordClassName="text-lg sm:text-[1.35rem]" />
          </Link>
        </div>

        {/* Navigation cell */}
        <nav className="hidden items-center justify-center gap-9 border-r border-rule lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[11px] font-medium uppercase tracking-micro transition-colors ${
                  active ? "text-brass" : "text-bone hover:text-brass"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-brass"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tools cell */}
        <div className="flex items-center gap-1 px-3 sm:px-5">
          <CurrencySwitch className="mr-2 hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setSearchOpen((open) => !open)}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="flex h-11 w-11 items-center justify-center text-bone transition-colors hover:text-brass"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>

          <Link
            href="/cart"
            aria-label={`Bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            className="relative flex h-11 w-11 items-center justify-center text-bone transition-colors hover:text-brass"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 7h14l-1 13.5H6L5 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
              />
              <path
                d="M9 9.5V6a3 3 0 0 1 6 0v3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-1.5 flex h-[17px] min-w-[17px] items-center justify-center bg-brass px-1 text-[10px] font-semibold text-ink">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center text-bone lg:hidden"
          >
            <span className="flex flex-col gap-[6px]">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`block h-px w-[22px] bg-current transition-all duration-200 ${
                    menuOpen && index === 0 ? "translate-y-[7px] rotate-45" : ""
                  } ${menuOpen && index === 1 ? "opacity-0" : ""} ${
                    menuOpen && index === 2 ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-rule bg-pitch">
          <form onSubmit={search} role="search" className="wrap flex items-center gap-4 py-5">
            <label htmlFor="header-search" className="sr-only">
              Search the collection
            </label>
            <input
              id="header-search"
              type="search"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search suits, blazers, dinner jackets…"
              className="min-h-[44px] w-full border-b border-rule bg-transparent text-base font-light text-bone placeholder:text-slate focus:border-brass focus:outline-none"
            />
            <button type="submit" className="btn-brass min-h-[44px] px-6">
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-rule bg-pitch lg:hidden">
          <div className="wrap flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[52px] items-center border-b border-rule text-[11px] font-medium uppercase tracking-micro text-bone last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-5 sm:hidden">
              <CurrencySwitch />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
