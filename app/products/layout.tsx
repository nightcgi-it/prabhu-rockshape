import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Wear Products & Fabrication Solutions",
  description:
    "Explore Prabhu Rockshape's comprehensive range of Chromium Carbide Overlay (CCO) wear plates, high alumina ceramic tiles, and critical industrial fabrication.",
  alternates: {
    canonical: "/products/",
  },
  openGraph: {
    title: "Products | Prabhu Rockshape Machinery Ltd.",
    description:
      "Advanced wear resistant plates, high alumina ceramic liners, and heavy industrial fabrication for cement, steel, power, and mining.",
    url: "https://prabhurockshape.com/products/",
    images: [
      {
        url: "/images/products-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Industrial Products Portfolio",
      },
    ],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
