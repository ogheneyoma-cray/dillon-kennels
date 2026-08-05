import type { Metadata } from "next";
import { Montserrat, Open_Sans, Norican } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/lib/site";

// Three families, exactly as the reference sets them: Montserrat for headings
// and every uppercase control, Open Sans for running copy, and Norican for the
// script line that sits above each section title.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const norican = Norican({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-norican",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${norican.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper antialiased">
        <CurrencyProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
