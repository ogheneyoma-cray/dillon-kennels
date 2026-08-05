/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the header, footer
 * or on the home page — it appears only on the contact page and within the
 * legal pages, where it is required.
 */
export const site = {
  name: "Mydriad",
  wordmark: "mydriad",
  tagline: "Tailoring for men, cut clean and priced plainly",
  description:
    "Mydriad is a menswear house working in one register — suits, blazers, dinner jackets and waistcoats, built to a single standard and sold at one honest price.",
  email: "cs@mydriad.com",
  // Placeholder until the full subscriber number is confirmed.
  phone: "234",
  phoneHref: "tel:234",
  address: {
    line1: "13 Engineer Greg Obioha Street",
    line2: "Off Community Road, Ago Palace Way",
    line3: "Okota, Oshodi-Isolo Local Government Area",
    line4: "Lagos State",
  },
  addressOneLine:
    "13 Engineer Greg Obioha Street, Off Community Road, Ago Palace Way, Okota, Oshodi-Isolo Local Government Area, Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
