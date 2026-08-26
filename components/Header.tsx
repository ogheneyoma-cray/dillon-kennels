"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";
import { categories } from "@/data/products";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/**
 * A two-tier header matching the reference's marketplace layout: a thin
 * utility strip, a white nav row with the logo and cart, and a gold
 * category/search bar underneath — no social links or store location in
 * either strip.
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
      <div className="hidden border-b border-ink/10 bg-ink py-2 text-center text-[11px] font-semibold uppercase tracking-widest2 text-white/80 sm:block">
        Free delivery within Lagos on orders over $150 · {site.email}
      </div>

      <div className="container-page flex h-20 items-center justify-between border-b border-ink/10">
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Logo wordClassName="text-xl sm:text-2xl" markClassName="h-9 w-9 sm:h-10 sm:w-10" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-bold uppercase tracking-wider transition-colors ${
                  active ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span aria-hidden="true" className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gold" />
                )}
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-ink">
              <path
                d="M4 6h2l1.6 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 9H7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="21" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="17" cy="21" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
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

      <div className="hidden border-b border-ink/10 bg-paper py-3 md:block">
        <div className="container-page flex items-center gap-4">
          <span className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-gold px-5 text-xs font-bold uppercase tracking-widest2 text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
            All Categories
          </span>
          <ul className="flex flex-1 items-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider text-ink/70">
            {categories.map((category) => (
              <li key={category} className="shrink-0">
                <Link href={`/shop?category=${encodeURIComponent(category)}`} className="transition-colors hover:text-ink">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSearch} className="flex w-full max-w-xs shrink-0 items-center rounded-full border border-ink/15">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find your product"
              aria-label="Search products"
              className="min-h-[40px] w-full rounded-l-full bg-transparent px-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full bg-ink text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-paper md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center border-b border-ink/10 text-sm font-bold uppercase tracking-wider text-ink last:border-b-0"
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
