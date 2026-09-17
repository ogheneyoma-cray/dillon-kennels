export const site = {
  name: "Evintat",
  legalName: "Evintat",
  wordmark: "Evintat",
  tagline: "Womenswear",
  description:
    "Evintat is an online destination for women's clothing and fashion pieces — dresses, tops, bottoms, outerwear and accessories, priced fairly in USD or NGN.",
  email: "support@evintat.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "Flat 5, Plot 2971 Cadastral Zone F",
    line2: "Bwari Area Council",
    line3: "Federal Capital Territory, Nigeria",
  },
  addressOneLine:
    "Flat 5, Plot 2971 Cadastral Zone F, Bwari Area Council, Federal Capital Territory",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
