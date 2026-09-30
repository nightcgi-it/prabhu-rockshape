import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chromium Carbide Overlay (CCO) Wear Resistant Plates",
  description:
    "High-hardness ROCKSHAPE Chromium Carbide Overlay (CCO) wear resistant plates engineered for severe abrasion, erosion, and impact in mining, cement, power, and steel industries.",
  keywords: [
    "Chromium Carbide Overlay",
    "CCO wear plates",
    "ROCKSHAPE wear plates",
    "hardfaced plates",
    "abrasion resistant steel",
    "ASTM G65 wear test",
    "cement plant wear liners",
  ],
  alternates: {
    canonical: "/products/wear-resistant-plates/",
  },
  openGraph: {
    title: "CCO Wear Resistant Plates | Prabhu Rockshape Machinery Ltd.",
    description:
      "Engineered Chromium Carbide Overlays delivering up to 12.9x extended service life over mild steel under extreme abrasive conditions.",
    url: "https://prabhurockshape.com/products/wear-resistant-plates/",
    images: [
      {
        url: "/images/cco-wear-plates.jpg",
        width: 1200,
        height: 630,
        alt: "ROCKSHAPE Chromium Carbide Overlay Wear Plates",
      },
    ],
  },
};

export default function WearPlatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
