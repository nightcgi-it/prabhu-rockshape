import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Alumina Ceramic Tiles & Ceramic Lined Equipment",
  description:
    "90%+ and 92%+ High Alumina Ceramic wear tiles, hex mats, and custom lined pipes engineered for 9 Mohs mineral hardness in extreme slurry and chemical erosion environments.",
  keywords: [
    "High Alumina Ceramics",
    "Alumina Ceramic Tiles",
    "Ceramic Lined Pipes",
    "Ceramic Hex Mats",
    "Slurry Erosion Liners",
    "Cyclone Ceramic Liners",
  ],
  alternates: {
    canonical: "/products/high-alumina-ceramics/",
  },
  openGraph: {
    title: "High Alumina Ceramics | Prabhu Rockshape Machinery Ltd.",
    description:
      "Diamond-grade 9 Mohs alumina ceramic wear protection for pipelines, hydrocyclones, chutes, and material handling systems.",
    url: "https://prabhurockshape.com/products/high-alumina-ceramics/",
    images: [
      {
        url: "/images/high-alumina-ceramics.jpg",
        width: 1200,
        height: 630,
        alt: "High Alumina Ceramic Liners and Tiles",
      },
    ],
  },
};

export default function HighAluminaCeramicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
