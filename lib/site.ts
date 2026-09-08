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
  name: "Acegga",
  legalName: "Acegga Ltd",
  wordmark: "Acegga",
  tagline: "Discover your next book",
  description:
    "Acegga is a bookstore stocking fiction, romance, mystery, business and children's titles — around fifteen books, priced up front in USD or NGN.",
  email: "contact@acegga.com",
  phone: "234",
  phoneHref: "+234",
  address: {
    line1: "No. 3 Durumi New Extension",
    line2: "Gonin Gora",
    line3: "Chikun Local Government Area, Kaduna State",
  },
  addressOneLine: "No. 3 Durumi New Extension, Gonin Gora, Chikun Local Government Area, Kaduna State",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
