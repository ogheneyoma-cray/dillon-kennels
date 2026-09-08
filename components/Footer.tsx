import Link from "next/link";
import Logo from "@/components/Logo";
import { MastercardMark, VisaMark } from "@/components/PaymentIcons";
import { categories } from "@/data/products";
import { addressLines, site } from "@/lib/site";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refunds-policy", label: "Refunds & Returns" },
];

const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Use" },
];

/**
 * Five-column footer matching the Bookworm reference's structure — brand
 * and address, Explore, Customer Service, Policy, Categories — followed by
 * a bottom bar with copyright and card marks. No social links and no
 * street address anywhere but this column and the contact/legal pages.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Logo tone="cream" wordClassName="text-xl" />
          <address className="mt-4 max-w-[220px] space-y-1 text-sm not-italic leading-relaxed text-cream/70">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <p className="mt-3 text-sm">
            <a href={`mailto:${site.email}`} className="text-cream/70 hover:text-cream">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Customer Service</p>
          <ul className="mt-4 space-y-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Policy</p>
          <ul className="mt-4 space-y-2">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Categories</p>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cream/40">We Accept</span>
            <MastercardMark />
            <VisaMark />
          </div>
        </div>
      </div>
    </footer>
  );
}
