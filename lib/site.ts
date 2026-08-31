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
  name: "Hogposh",
  legalName: "Hogposh Ltd",
  wordmark: "Hogposh",
  tagline: "Clean cosmetics, honestly formulated",
  description:
    "Hogposh is an online cosmetics store stocking clean, thoughtfully formulated skincare and beauty essentials — cleansers, serums, moisturizers and sun care — priced up front in USD or NGN.",
  email: "contact@hogposh.com",
  phone: "09014317672",
  phoneHref: "+2349014317672",
  address: {
    line1: "56, Mountain Top Estate, Lugbe Phase 1",
    line2: "Trademore Area",
    line3: "Abuja, FCT, Nigeria",
  },
  addressOneLine: "56, Mountain Top Estate, Lugbe Phase 1, Trademore Area, Abuja, FCT, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
