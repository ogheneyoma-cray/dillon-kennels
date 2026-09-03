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
  name: "Toyeti Digi",
  legalName: "Toyeti Digi Ltd",
  wordmark: "Toyeti Digi",
  tagline: "Skills you can start using today",
  description:
    "Toyeti Digi is a digital marketplace for practical, self-paced online courses — business, design, marketing, data and productivity skills, priced up front in USD or NGN.",
  email: "supportteam@toyeti.com",
  phone: "07035919624",
  phoneHref: "+2347035919624",
  address: {
    line1: "8, Itun Egbe Street",
    line2: "Oke-Ira, Ajah",
    line3: "Lagos State, Nigeria",
  },
  addressOneLine: "8, Itun Egbe Street, Oke-Ira, Ajah, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
