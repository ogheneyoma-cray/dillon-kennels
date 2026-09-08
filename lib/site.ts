/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo, the
 * header, the footer or on the home page — it appears only on the contact
 * page and within the legal pages, where it is required. Social links are
 * intentionally absent sitewide.
 */
export const site = {
  name: "Myevolt",
  wordmark: "Myevolt",
  tagline: "Software and web builds, shipped on a fixed price",
  description:
    "Myevolt is a software and web development studio — marketing sites, storefronts, dashboards and internal tools, scoped and priced up front, built by a small senior team and delivered as source-ready packages.",
  email: "help@myevolt.com",
  phone: "234",
  address: {
    line1: "1 Sadiatu Street",
    line2: "Dopemu",
    line3: "Agege L.G.A.",
    line4: "Lagos State",
  },
  addressOneLine: "1 Sadiatu Street, Dopemu, Agege L.G.A., Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
