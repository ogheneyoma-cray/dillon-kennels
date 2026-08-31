/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo or on
 * the home page — it appears only on the contact page and within the legal
 * pages, where it is required. No social links appear anywhere on the site.
 */
export const site = {
  name: "Floralisem",
  legalName: "Floralisem Ltd",
  wordmark: "Floralisem",
  tagline: "Womenswear with a point of view",
  description:
    "Floralisem is an online fashion store stocking women's dresses, tops, knitwear, outerwear, denim and accessories — priced up front in USD or NGN.",
  email: "support@floralisem.com",
  phone: "09047194857",
  phoneHref: "+2349047194857",
  address: {
    line1: "5, Echendu Layout, off J-State Junction",
    line2: "Woji, Obio/Akpor L.G.A",
    line3: "Port Harcourt, Rivers State",
  },
  addressOneLine:
    "5, Echendu Layout, off J-State Junction, Woji, Obio/Akpor L.G.A, Port Harcourt, Rivers State",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
