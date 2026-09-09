export type Category =
  | "Website & App Development"
  | "Cybersecurity"
  | "Cloud & Infrastructure"
  | "IT Support & Helpdesk"
  | "Data & Backup Solutions";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  instructor: string;
  rating: number; // out of 5
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Website & App Development",
  "Cybersecurity",
  "Cloud & Infrastructure",
  "IT Support & Helpdesk",
  "Data & Backup Solutions",
];

interface Seed {
  name: string;
  instructor: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  image: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  {
    name: "Business Starter Website Build",
    instructor: "Delivered by the Shams Light Web Team",
    price: 39,
    rating: 5,
    category: "Website & App Development",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    description:
      "A complete five-page business website — home, about, services, gallery and contact — built responsive, fast-loading and ready to launch on your own domain. Includes one round of revisions and a handover call to walk you through updating content yourself.",
  },
  {
    name: "Cybersecurity Health Check",
    instructor: "Delivered by the Shams Light Security Team",
    price: 35,
    rating: 5,
    category: "Cybersecurity",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description:
      "A full audit of your business's exposure to common threats — weak passwords, outdated software, unsecured Wi-Fi and phishing risk — with a plain-language report and a prioritized fix list you can act on immediately.",
  },
  {
    name: "Cloud Migration & Setup",
    instructor: "Delivered by the Shams Light Cloud Team",
    price: 30,
    rating: 4,
    category: "Cloud & Infrastructure",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    description:
      "Move your files, email and shared drives from local machines onto secure cloud storage, configured with proper access permissions and folder structure so your team can collaborate from anywhere without losing anything.",
  },
  {
    name: "IT Helpdesk Support — Monthly",
    instructor: "Delivered by the Shams Light Support Desk",
    price: 22,
    rating: 4,
    category: "IT Support & Helpdesk",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    description:
      "A month of remote IT support for your small team — software troubleshooting, printer and network issues, and general how-do-I-do-this questions, answered within one business day by a dedicated technician.",
  },
  {
    name: "Data Backup & Recovery Setup",
    instructor: "Delivered by the Shams Light Data Team",
    price: 28,
    rating: 5,
    category: "Data & Backup Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    description:
      "Automated, encrypted backups configured for your critical business files, with a tested recovery process so a lost laptop or a failed drive never means lost work again.",
  },
];

export const products: Product[] = seeds.map((seed, index) => {
  const slug = seed.name
    .toLowerCase()
    .replace(/[()']/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    id: index + 1,
    slug,
    name: seed.name,
    instructor: seed.instructor,
    price: seed.price,
    rating: seed.rating,
    description: seed.description,
    image: seed.image,
    category: seed.category,
    inStock: seed.inStock ?? true,
    popular: seed.popular,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular).slice(0, 6);
}
