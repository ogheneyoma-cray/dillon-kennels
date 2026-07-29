import Link from "next/link";
import Logo from "@/components/Logo";
import NewsletterForm from "@/components/NewsletterForm";

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
    <footer className="bg-plum text-ivory">
      <div className="border-b border-ivory/10">
        <div className="container-page flex flex-col items-center gap-5 py-14 text-center">
          <p className="eyebrow text-gold">Stay In The Loop</p>
          <h2 className="font-display text-3xl sm:text-4xl">Join the Nudgenic list</h2>
          <p className="max-w-md text-sm text-ivory/70">
            New arrivals, restocks, and first access to sales — straight to your inbox, no spam.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo wordmarkClassName="text-ivory" markClassName="text-gold" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Nudgenic designs women's clothing, footwear, and accessories for
            everyday confidence — considered pieces, honest pricing, made to
            be worn often.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Help</p>
          <ul className="mt-4 space-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6 text-gold">Legal</p>
          <ul className="mt-4 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Get in Touch</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-ivory/80">
            <p>
              Ile Alaso, Imale Falatori Area, Oyo Town, Oyo West Local
              Government Area, Oyo State
            </p>
            <p>
              <a href="mailto:csteam@nudgeinc.com" className="hover:text-ivory">
                csteam@nudgeinc.com
              </a>
            </p>
            <p>
              <a href="tel:+2347089761129" className="hover:text-ivory">
                +234 708 976 1129
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="container-page text-center text-xs text-ivory/50">
          © {year} Nudgenic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
