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
  name: "Potofoil",
  legalName: "Potofoil Ltd",
  wordmark: "Potofoil",
  tagline: "Menswear, done properly",
  description:
    "Potofoil is an online store stocking men's fashion essentials — shirts, t-shirts, jackets, sweaters and footwear — priced up front in USD or NGN.",
  email: "support@potofoil.com",
  phone: "08029397190",
  phoneHref: "+2348029397190",
  address: {
    line1: "6, Wurie Street",
    line2: "Port Harcourt",
    line3: "Rivers State, Nigeria",
  },
  addressOneLine: "6, Wurie Street, Port Harcourt, Rivers State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
