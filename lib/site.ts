export const site = {
  name: "Spruce Savers",
  legalName: "Spruce Savers",
  wordmark: "Spruce Savers",
  tagline: "IT support, simplified",
  description:
    "Spruce Savers offers on-demand IT services — support plans, network & security, cloud setup, installation and maintenance — priced fairly in USD or NGN.",
  email: "info@sprucesavers.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "5 Adekunle Fajuyi Road",
    line2: "Near Ojoo Primary School, Ojoo",
    line3: "Akinyele LGA, Oyo, Ibadan",
  },
  addressOneLine:
    "5 Adekunle Fajuyi Road, Near Ojoo Primary School, Ojoo, Akinyele LGA, Oyo, Ibadan",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
