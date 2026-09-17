export type Category =
  | "Performance"
  | "Security"
  | "Cloud"
  | "Networking"
  | "Hardware";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Performance",
  "Security",
  "Cloud",
  "Networking",
  "Hardware",
];

interface Seed {
  name: string;
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
    name: "Website Speed Optimization",
    price: 25,
    rating: 5,
    category: "Performance",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description:
      "We audit and tune your website's load speed — image compression, caching rules, code minification and hosting checks — with a before-and-after speed report delivered within 3 business days.",
  },
  {
    name: "IT Security Health Check",
    price: 34,
    rating: 5,
    category: "Security",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description:
      "A scan of your devices and accounts for weak passwords, outdated software, and exposed ports, followed by a plain-language report ranking risks and exactly how to fix each one.",
  },
  {
    name: "Cloud Storage Setup",
    price: 22,
    rating: 4,
    category: "Cloud",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    description:
      "We set up secure, automated cloud storage and backup for your files with folder structure, access permissions and sync configured across your devices — done remotely in one session.",
  },
  {
    name: "Wi-Fi & Network Setup",
    price: 30,
    rating: 4,
    category: "Networking",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    description:
      "Router configuration, Wi-Fi coverage optimization and a separate guest network, set up on-site or remotely, with all your devices tested and connected before we sign off.",
  },
  {
    name: "Computer Repair & Diagnostics",
    price: 38,
    rating: 5,
    category: "Hardware",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    description:
      "A full diagnostic of a slow or misbehaving computer — hardware checks, malware removal, startup cleanup and software updates — with a clear report of what was fixed.",
  },
];

export const products: Product[] = seeds.map((seed, i) => ({
  ...seed,
  id: i + 1,
  slug: seed.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  inStock: seed.inStock !== false,
}));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.popular);
}
