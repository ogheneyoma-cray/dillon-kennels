"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import CurrencyToggle from "@/components/CurrencyToggle";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

/**
 * Three-row header matching the Ejon reference: a thin dark announcement
 * bar with the currency toggle, a white row with logo + category-led
 * search + cart, and a dark nav bar carrying primary links, quick
 * category links and a support line.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/shop?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink py-2 text-cream sm:block">
        <div className="container-page flex items-center justify-between text-[11px] font-medium uppercase tracking-widest2">
          <span>Free delivery on orders over &#8358;60,000</span>
          <CurrencyToggle tone="dark" />
        </div>
      </div>

      <div className="border-b border-ink/10 bg-paper">
        <div className="container-page flex h-20 items-center justify-between gap-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
            <Logo />
          </Link>

          <form onSubmit={handleSearch} className="hidden max-w-lg flex-1 items-center md:flex">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search household items"
              aria-label="Search products"
              className="h-11 w-full min-w-0 rounded-l-md border border-ink/20 bg-paper px-4 text-sm text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-r-md bg-teal text-white transition-colors hover:bg-teal-dark"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="flex items-center gap-4 sm:gap-5">
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
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white">
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
      </div>

      <div className="hidden border-b border-ink/10 bg-ink-soft md:block">
        <div className="container-page flex h-12 items-center justify-between">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest2 transition-colors ${
                    active ? "text-coral" : "text-cream/85 hover:text-coral"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <span className="h-4 w-px bg-cream/20" aria-hidden="true" />
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                className="hidden text-xs font-medium text-cream/60 transition-colors hover:text-coral lg:inline"
              >
                {category}
              </Link>
            ))}
          </nav>
          <a href={`mailto:${site.email}`} className="text-xs font-semibold text-cream/70 hover:text-coral">
            {site.email}
          </a>
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
                className="flex min-h-[44px] items-center border-b border-ink/5 text-sm font-semibold uppercase tracking-wider text-ink last:border-b-0"
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
