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
  name: "Shams Light",
  legalName: "Shams Light IT Services",
  wordmark: "Shams Light",
  tagline: "IT services that keep your business running",
  description:
    "Shams Light is an online store for practical IT services — website builds, cybersecurity checks, cloud migration, helpdesk support and data backup — priced up front in USD or NGN.",
  email: "supportteam@shamslight.com",
  phone: "09111579098",
  phoneHref: "+2349111579098",
  address: {
    line1: "27, Asipa",
    line2: "Odo-Ona Elewe",
    line3: "Oluyole L.G.A, Oyo State, Nigeria",
  },
  addressOneLine: "27, Asipa, Odo-Ona Elewe, Oluyole L.G.A, Oyo State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
