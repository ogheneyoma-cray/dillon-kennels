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
  name: "Ticad Iboo",
  wordmark: "Ticad Iboo",
  tagline: "Home goods & electronics, priced straight",
  description:
    "Ticad Iboo is an online store for home goods and everyday electronics — kitchen essentials, small appliances, lighting, audio and smart gadgets, priced up front in USD or NGN.",
  email: "contact@ticadiboo.com",
  phone: "09027251243",
  phoneHref: "+2349027251243",
  address: {
    line1: "11B, Yusuf Close",
    line2: "New Olorunfemi Estate, Akesan",
    line3: "Igando",
    line4: "Lagos State, Nigeria",
  },
  addressOneLine:
    "11B, Yusuf Close, New Olorunfemi Estate, Akesan, Igando, Lagos State, Nigeria",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
