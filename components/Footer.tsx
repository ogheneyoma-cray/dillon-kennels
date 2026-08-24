import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop", label: "All Ebooks" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const HELP_LINKS = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Digital Delivery" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-cloud text-ink">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo wordClassName="text-xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">
            {site.description}
          </p>
        </div>

        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/75 transition-colors hover:text-sky-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Help</p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/75 transition-colors hover:text-sky-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6">Legal</p>
          <ul className="mt-4 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/75 transition-colors hover:text-sky-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get in Touch</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-ink/75">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-sky-dark">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <p className="container-page text-center text-xs text-ink/45">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
