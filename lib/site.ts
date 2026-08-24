/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo or on
 * the home page — it appears only on the contact page and within the legal
 * pages, where it is required.
 */
export const site = {
  name: "Nedupe Limited",
  wordmark: "Nedupe",
  tagline: "Ebooks worth staying up for",
  description:
    "Nedupe Limited is a digital bookstore — practical, well-edited ebooks across business, self-development, technology, health and fiction, delivered instantly as EPUB, PDF and MOBI.",
  email: "care@nedupe.com",
  phone: "234",
  address: {
    line1: "Flat 2, Plot 612",
    line2: "Kubwa Extension Layout, Gbazango",
    line3: "Kubwa, Abuja Municipal Area Council (AMAC)",
    line4: "Federal Capital Territory (FCT)",
  },
  addressOneLine:
    "Flat 2, Plot 612, Kubwa Extension Layout, Gbazango, Kubwa, Abuja Municipal Area Council (AMAC), Federal Capital Territory (FCT)",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
