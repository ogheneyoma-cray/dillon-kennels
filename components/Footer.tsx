import Link from "next/link";

const SHOP_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const HELP_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Dillon Kennels</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Fashion rooted in West African heritage, tailored for everyday
            life. Handcrafted clothing, footwear, and accessories out of
            Lagos, Nigeria.
          </p>
        </div>

        <div>
          <p className="eyebrow text-clay">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-clay">Help</p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6 text-clay">Legal</p>
          <ul className="mt-4 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-clay">Get in Touch</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>
              8 Olotu House, Opposite Baale House, Abule Tirninmiljeun Odeda,
              Ajeromi-Ifelodun, Lagos State
            </p>
            <p>
              <a
                href="mailto:supportteam@dillonkennels.com"
                className="hover:text-cream"
              >
                supportteam@dillonkennels.com
              </a>
            </p>
            <p>
              <a href="tel:+2347011246613" className="hover:text-cream">
                +234 701 124 6613
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="container-page text-center text-xs text-cream/50">
          © {year} Dillon Kennels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
