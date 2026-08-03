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
  { href: "/about", label: "About" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
];

/** Small rotated square used as the nav separator throughout the layout. */
function Diamond() {
  return (
    <span aria-hidden="true" className="h-[6px] w-[6px] rotate-45 bg-camel" />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = query.trim();
    router.push(term ? `/shop?q=${encodeURIComponent(term)}` : "/shop");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      {/* Top row: search left, centred logo, actions right. */}
      <div className="frame grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-4">
        <form onSubmit={search} role="search" className="hidden md:block">
          <label htmlFor="header-search" className="sr-only">
            Search products
          </label>
          <div className="flex max-w-[240px] items-center gap-2 border-b border-line pb-1.5 focus-within:border-camel">
            <input
              id="header-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search here..."
              className="w-full bg-transparent text-sm text-onyx placeholder:text-mist focus:outline-none"
            />
            <button type="submit" aria-label="Search" className="text-onyx">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </form>

        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="justify-self-center md:col-start-2"
        >
          <Logo wordClassName="text-lg sm:text-[1.4rem]" />
        </Link>

        <div className="flex items-center justify-end gap-3">
          <CurrencySwitch className="hidden lg:inline-flex" />

          <Link
            href="/cart"
            aria-label={`Bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            className="relative flex h-11 w-11 items-center justify-center text-onyx transition-colors hover:text-camel"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5.5 8h13l-1 11.2a1.7 1.7 0 0 1-1.7 1.55H8.2A1.7 1.7 0 0 1 6.5 19.2L5.5 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 10V7a3 3 0 1 1 6 0v3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-camel px-1 text-[10px] font-bold text-paper">
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
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`block h-[1.5px] w-[22px] bg-onyx transition-all duration-200 ${
                    menuOpen && index === 0 ? "translate-y-[6.5px] rotate-45" : ""
                  } ${menuOpen && index === 1 ? "opacity-0" : ""} ${
                    menuOpen && index === 2 ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Centred nav with diamond separators. */}
      <nav className="hidden justify-center gap-6 pb-4 lg:flex">
        {NAV_LINKS.map((link, index) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname === link.href;
          return (
            <span key={link.href} className="flex items-center gap-6">
              {index > 0 && <Diamond />}
              <Link
                href={link.href}
                className={`text-[12px] font-bold uppercase tracking-wide2 transition-colors ${
                  active ? "text-camel" : "text-onyx hover:text-camel"
                }`}
              >
                {link.label}
              </Link>
            </span>
          );
        })}
      </nav>

      {menuOpen && (
        <nav className="border-t border-line bg-paper lg:hidden">
          <div className="frame flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[48px] items-center border-b border-line text-[12px] font-bold uppercase tracking-wide2 text-onyx last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-4">
              <CurrencySwitch />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
