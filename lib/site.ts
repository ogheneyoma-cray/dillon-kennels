/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo or on
 * the home page — it appears only on the contact, about and legal pages,
 * where it is required. No social links appear anywhere on the site.
 */
export const site = {
  name: "Cyber Travellers",
  legalName: "Cyber Travellers Ltd",
  wordmark: "Cyber Travellers",
  tagline: "IT services, cleared for takeoff",
  description:
    "Cyber Travellers is an online store for practical IT services — cybersecurity, cloud, support, web development and data recovery — priced up front in USD or NGN.",
  email: "hello@cybertravellers.com",
  phone: "09041740877",
  phoneHref: "+2349041740877",
  address: {
    line1: "23b Prince Kazeem Eletu Way",
    line2: "Osapa London",
    line3: "Lekki, Lagos, Nigeria",
  },
  addressOneLine: "23b Prince Kazeem Eletu Way, Osapa London, Lekki, Lagos, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
