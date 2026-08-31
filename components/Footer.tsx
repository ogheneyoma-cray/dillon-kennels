import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const VALUES = ["Cruelty-Free", "Dermatologist Tested", "Clean Formulas"];

const LINK_GROUPS = [
  {
    heading: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/cart", label: "Cart" },
      { href: "/checkout", label: "Checkout" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/cosmetics-guide", label: "Cosmetics Guide" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { href: "/shipping-policy", label: "Shipping Policy" },
      { href: "/refunds-policy", label: "Refunds Policy" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand">
      {/* Values strip */}
      <div className="border-b border-line">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
          {VALUES.map((value) => (
            <span key={value} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-sage">
                <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {value}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div className="max-w-sm">
          <Logo wordClassName="text-xl" />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-clay">
                {group.heading}
              </p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-ink">
              {site.phone}
            </a>
            <span>{addressLines.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
