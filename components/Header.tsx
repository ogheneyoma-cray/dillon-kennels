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
  { href: "/about", label: "Our Story" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact" },
];

/**
 * Three-tier header, following the reference exactly: a thin grey utility bar
 * carrying the currency picker and support number, a white band with the logo
 * centred between search and the cart, and a dark menu bar beneath holding the
 * centred navigation.
 */
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
    <header className="relative z-50">
      {/* Tier 1 — utility bar */}
      <div className="border-b border-line bg-mist">
        <div className="wrap flex h-10 items-center justify-between gap-4">
          <p className="hidden font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted sm:block">
            Free delivery on orders over $60
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-graphite transition-colors hover:text-rose"
            >
              Support: {site.phone}
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-line-firm" />
            <CurrencySwitch />
          </div>
        </div>
      </div>

      {/* Tier 2 — search / logo / cart */}
      <div className="bg-paper">
        <div className="wrap grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-6">
          <form
            onSubmit={search}
            role="search"
            className="hidden max-w-xs items-center border border-line lg:flex"
          >
            <label htmlFor="header-search" className="sr-only">
              Search the shop
            </label>
            <input
              id="header-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search shoes…"
              className="min-h-[42px] w-full bg-transparent px-4 text-sm text-ink placeholder:text-faint focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-[42px] w-11 shrink-0 items-center justify-center bg-rose text-paper transition-colors hover:bg-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {/* Mobile: menu button takes the left cell */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`block h-0.5 w-[22px] bg-current transition-all duration-200 ${
                    menuOpen && index === 0 ? "translate-y-[7px] rotate-45" : ""
                  } ${menuOpen && index === 1 ? "opacity-0" : ""} ${
                    menuOpen && index === 2 ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              ))}
            </span>
          </button>

          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="justify-self-center"
          >
            <Logo wordClassName="text-[1.35rem] sm:text-[1.7rem]" />
          </Link>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/shop"
              aria-label="Search the shop"
              className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-rose lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            <Link
              href="/cart"
              className="group flex items-center gap-3 text-ink transition-colors hover:text-rose"
            >
              <span className="relative flex h-11 w-11 items-center justify-center">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7h16l-1.3 13.2H5.3L4 7Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.6 9.6V6.2a3.4 3.4 0 0 1 6.8 0v3.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute right-0 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-rose px-1 font-display text-[10px] font-bold text-paper">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              </span>
              <span className="hidden font-display text-[11px] font-semibold uppercase tracking-wide2 xl:inline">
                My Bag
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 3 — dark menu bar */}
      <div className="sticky top-0 z-40 hidden bg-ink lg:block">
        <nav className="wrap flex items-center justify-center gap-10">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-4 font-display text-[12px] font-semibold uppercase tracking-wide2 transition-colors ${
                  active ? "text-rose" : "text-paper hover:text-rose"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-rose"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="border-t border-line bg-ink lg:hidden">
          <div className="wrap flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[52px] items-center border-b border-paper/10 font-display text-[12px] font-semibold uppercase tracking-wide2 text-paper last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
