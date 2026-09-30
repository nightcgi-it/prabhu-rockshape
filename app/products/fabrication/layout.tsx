import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Structural Fabrication (300 MT/Month Capacity)",
  description:
    "Heavy industrial steel fabrication, dynamic separators, cyclones, and ducts for cement, steel, power, and mining plants. 300 MT/month capacity with ISO 9001:2015 quality assurance.",
  keywords: [
    "Industrial Fabrication",
    "Structural Fabrication Solapur",
    "Dynamic Air Separators",
    "Cement Plant Cyclone Fabrication",
    "Heavy Steel Ducting",
    "300 MT Fabrication Capacity",
  ],
  alternates: {
    canonical: "/products/fabrication/",
  },
  openGraph: {
    title: "Industrial & Structural Fabrication | Prabhu Rockshape Machinery Ltd.",
    description:
      "Precision heavy fabrication with pre-integrated wear barriers for rapid site installation across cement and power plants.",
    url: "https://prabhurockshape.com/products/fabrication/",
    images: [
      {
        url: "/images/fabrication-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Heavy Industrial Fabrication Facility and Components",
      },
    ],
  },
};

export default function FabricationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
