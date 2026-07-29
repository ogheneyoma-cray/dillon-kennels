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
    <footer className="border-t border-bone/10 bg-graphite text-bone">
      <div className="border-b border-bone/10">
        <div className="container-page flex flex-col items-center gap-5 py-14 text-center">
          <p className="eyebrow">Join The List</p>
          <h2 className="section-heading">Get 10% Off Your First Order</h2>
          <p className="max-w-md text-sm text-bone/70">
            New drops, restocks, and exclusive access — straight to your
            inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/70">
            Vergemind builds menswear for the edge — tees, outerwear, denim,
            and footwear made for the city, priced for daily rotation.
          </p>
        </div>

        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bone/80 transition-colors hover:text-acid"
                >
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
                <Link
                  href={link.href}
                  className="text-sm text-bone/80 transition-colors hover:text-acid"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6">Legal</p>
          <ul className="mt-4 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bone/80 transition-colors hover:text-acid"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get in Touch</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-bone/80">
            <p>
              114, Irewolede Area, Ilorin West Local Government Area, Ilorin,
              Kwara State
            </p>
            <p>
              <a href="mailto:info@vergemind.com" className="hover:text-acid">
                info@vergemind.com
              </a>
            </p>
            <p>
              <a href="tel:+2348083617874" className="hover:text-acid">
                +234 808 361 7874
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-bone/10 py-6">
        <p className="container-page text-center text-xs text-bone/50">
          © {year} Vergemind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
