import Link from "next/link";
import Logo from "@/components/Logo";
import { MastercardMark, VisaMark } from "@/components/PaymentIcons";
import { site } from "@/lib/site";

const SHOP_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const HELP_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Digital Delivery" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

/**
 * A near-black footer, no social links and no street address — location is
 * surfaced only on the contact and legal pages. The only payment marks
 * shown are Mastercard and Visa, matching the checkout page's card form.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="cream" wordClassName="text-xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <p className="eyebrow-on-dark">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow-on-dark">Help</p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow-on-dark mt-6">Legal</p>
          <ul className="mt-4 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow-on-dark">Get in Touch</p>
          <p className="mt-4 text-sm text-white/70">
            <a href={`mailto:${site.email}`} className="hover:text-teal">
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40">We Accept</p>
          <div className="mt-3 flex items-center gap-2">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-white/40">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
