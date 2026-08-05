import type { Metadata } from "next";

// The cart page itself is a client component and cannot export metadata.
export const metadata: Metadata = {
  title: "Your bag",
  description: "Review the pairs in your Crewsita bag before checking out.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
