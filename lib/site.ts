export const site = {
  name: "Feteframe",
  legalName: "Feteframe",
  wordmark: "Feteframe",
  tagline: "Household goods, well made",
  description:
    "Feteframe is an online store for household items — kitchenware, storage, bedding, decor and cleaning essentials, priced fairly in USD or NGN.",
  email: "support@feteframe.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "3A, Engineer Uwaya Close",
    line2: "Ramuepirikom, Obio/Akpor LGA",
    line3: "Port Harcourt, Rivers State",
  },
  addressOneLine:
    "3A, Engineer Uwaya Close, Ramuepirikom, Obio/Akpor LGA, Port Harcourt, Rivers State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
