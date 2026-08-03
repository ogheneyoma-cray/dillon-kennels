"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CurrencySelect from "@/components/CurrencySelect";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Women%27s+Sleepwear", label: "Women" },
  { href: "/shop?category=Men%27s+Sleepwear", label: "Men" },
  { href: "/contact", label: "Contact" },
];

function BagIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 8h12l-.9 11.1a1.8 1.8 0 0 1-1.8 1.65H8.7a1.8 1.8 0 0 1-1.8-1.65L6 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 10V6.9a2.8 2.8 0 0 1 5.6 0V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  // Close the drawer whenever navigation lands on a new route.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-midnight text-linen">
        <div className="shell flex h-10 items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="text-linen/75 transition-colors hover:text-linen"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden text-linen/75 transition-colors hover:text-linen sm:inline"
            >
              {site.email}
            </a>
            <Link
              href="/contact"
              className="hidden underline underline-offset-4 transition-colors hover:text-moon lg:inline"
            >
              Visit the studio
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden text-linen/60 md:inline">
              Free Lagos delivery over ₦75,000
            </span>
            <CurrencySelect tone="dark" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-midnight/10 bg-pearl/95 backdrop-blur">
        <div className="shell flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo
              markClassName="h-[26px] w-[26px] text-orchid"
              wordClassName="text-[1.45rem] text-midnight"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href.split("?")[0];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors ${
                    active ? "text-orchid" : "text-midnight hover:text-orchid"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              aria-label={`Bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
              className="relative flex h-11 w-11 items-center justify-center text-midnight transition-colors hover:text-orchid"
            >
              <BagIcon />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-orchid px-1 text-[10px] font-bold text-linen">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] w-[22px] bg-midnight transition-transform duration-200 ${
                    menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-[22px] bg-midnight transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-[22px] bg-midnight transition-transform duration-200 ${
                    menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-b border-midnight/10 bg-linen lg:hidden">
          <div className="shell flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex min-h-[48px] items-center border-b border-midnight/5 text-sm font-medium text-midnight last:border-b-0"
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
