"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";
import { categories } from "@/data/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

/**
 * Two-tier header matching the reference's marketplace layout, but with the
 * tiers in the reference's own order — a solid-orange utility bar on top
 * (logo, search, cart), then a white nav row beneath it with the category
 * menu and a promo callout on the right. Ticad Iboo (the other household
 * storefront in this portfolio) puts its category strip third and colors it
 * gold; this one puts it second and leaves it white, with no gold anywhere.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/shop?q=${encodeURIComponent(trimmed)}` : "/shop");
  };

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="bg-orange">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
            <Logo tone="cream" wordClassName="text-xl sm:text-2xl" markClassName="h-9 w-9 sm:h-10 sm:w-10" />
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 items-center bg-white md:flex"
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find your product"
              aria-label="Search products"
              className="min-h-[42px] w-full bg-transparent px-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex min-h-[42px] min-w-[46px] items-center justify-center bg-ink text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="flex items-center gap-3 sm:gap-4">
            <CurrencyToggle className="hidden border-white/30 text-white sm:inline-flex" />
            <Link
              href="/cart"
              aria-label="View cart"
              className="relative flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path
                  d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white md:hidden"
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
      </div>

      <div className="hidden border-b border-ink/10 bg-paper py-3 md:block">
        <div className="container-page flex items-center gap-8">
          <span className="inline-flex min-h-[36px] shrink-0 items-center gap-2 bg-ink px-4 text-xs font-bold uppercase tracking-widest2 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
            All Categories
          </span>
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                    active ? "text-orange" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ul className="flex flex-1 items-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider text-ink/50">
            {categories.map((category) => (
              <li key={category} className="shrink-0">
                <Link href={`/shop?category=${encodeURIComponent(category)}`} className="transition-colors hover:text-ink">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <p className="shrink-0 text-xs font-bold uppercase tracking-widest2 text-orange">
            New Season · Up to 20% Off
          </p>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-paper md:hidden">
          <div className="container-page flex flex-col py-2">
            <form onSubmit={handleSearch} className="my-3 flex items-center border border-ink/15">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find your product"
                aria-label="Search products"
                className="min-h-[42px] w-full bg-transparent px-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex min-h-[42px] min-w-[46px] items-center justify-center bg-ink text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-ink/10 text-sm font-bold uppercase tracking-wider text-ink"
              >
                {link.label}
              </Link>
            ))}
            {categories.map((category) => (
              <Link
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[40px] items-center border-b border-ink/10 text-xs font-bold uppercase tracking-wider text-ink/60 last:border-b-0"
              >
                {category}
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
