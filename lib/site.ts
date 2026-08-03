/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place (header, footer, contact, legal pages, metadata) reads from
 * here so there is exactly one line to change per detail.
 */
export const site = {
  name: "Anikoda",
  wordmark: "anikoda",
  tagline: "Clothes built for the way children actually play",
  description:
    "Anikoda makes everyday clothing and shoes for children — tees, dresses, shorts, outerwear and footwear, cut in Ilorin to survive real play.",
  email: "support@anikoda.com",
  // Placeholder until the full subscriber number is confirmed.
  phone: "234",
  phoneHref: "tel:234",
  address: {
    line1: "83, Line C, Lasinmi",
    line2: "Gaa-Saka Area",
    line3: "Ilorin South Local Government Area",
    line4: "Ilorin, Kwara State",
  },
  addressOneLine:
    "83, Line C, Lasinmi, Gaa-Saka Area, Ilorin South Local Government Area, Ilorin, Kwara State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
