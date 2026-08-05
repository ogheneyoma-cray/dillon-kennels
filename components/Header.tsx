"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import CurrencySwitch from "@/components/CurrencySwitch";
import Logo from "@/components/Logo";
import { categories } from "@/data/products";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/reading-guide", label: "Reading Guide" },
  { href: "/contact", label: "Contact" },
];

/**
 * Two-tier header, following the reference: a dark slate utility bar carrying
 * the delivery promise, currency and support number, then a white band holding
 * the logo, a genre-scoped search, the navigation and the bag. The white band
 * is the one that sticks.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (genre !== "All") params.set("category", genre);
    const qs = params.toString();
    router.push(qs ? `/shop?${qs}` : "/shop");
  };

  return (
    <header className="relative z-50">
      {/* Tier 1 — dark utility bar */}
      <div className="bg-slate">
        <div className="wrap flex h-11 items-center justify-between gap-4">
          <p className="hidden font-display text-[13px] font-semibold uppercase tracking-wide2 text-paper/70 sm:block">
            Instant download · Read on any device
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="font-display text-[13px] font-semibold uppercase tracking-wide2 text-paper/85 transition-colors hover:text-clay"
            >
              Support: {site.phone}
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-paper/25" />
            <CurrencySwitch />
          </div>
        </div>
      </div>

      {/* Tier 2 — main bar */}
      <div className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="wrap flex items-center gap-6 py-4">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo wordClassName="text-[1.45rem] sm:text-[1.75rem]" />
          </Link>

          {/* Genre-scoped search, as the reference splits its search field */}
          <form
            onSubmit={search}
            role="search"
            className="hidden flex-1 items-center rounded-pill border border-line bg-cream pl-2 xl:flex"
          >
            <label htmlFor="header-genre" className="sr-only">
              Limit search to a genre
            </label>
            <select
              id="header-genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
              className="min-h-[44px] cursor-pointer rounded-pill bg-transparent px-3 font-display text-[13px] font-semibold uppercase tracking-wide2 text-slate outline-none"
            >
              <option value="All">All genres</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span aria-hidden="true" className="h-5 w-px bg-line" />
            <label htmlFor="header-search" className="sr-only">
              Search the catalogue
            </label>
            <input
              id="header-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title or author…"
              className="min-h-[44px] w-full bg-transparent px-4 text-sm text-slate placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="m-1 flex h-10 w-11 shrink-0 items-center justify-center rounded-pill bg-clay text-paper transition-colors hover:bg-slate"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 font-display text-[15px] font-semibold transition-colors ${
                    active ? "text-clay" : "text-slate hover:text-clay"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-clay"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:ml-0">
            <Link
              href="/shop"
              aria-label="Search the catalogue"
              className="flex h-11 w-11 items-center justify-center text-slate transition-colors hover:text-clay xl:hidden"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-2.5 text-slate transition-colors hover:text-clay"
              aria-label={`Basket, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            >
              <span className="relative flex h-11 w-11 items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 5h2.2l2 11.2h11l2-8.2H7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
                  <circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" />
                </svg>
                <span className="absolute right-0 top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-clay px-1 font-display text-[11px] font-bold text-paper">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center text-slate lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`block h-0.5 w-[22px] rounded-full bg-current transition-all duration-200 ${
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

        {/* Mobile drawer */}
        {menuOpen && (
          <nav className="border-t border-line bg-cream lg:hidden">
            <div className="wrap flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-[52px] items-center border-b border-line font-display text-[15px] font-semibold text-slate last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
