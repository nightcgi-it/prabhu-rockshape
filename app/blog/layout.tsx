import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Insights & Metallurgical Engineering Papers",
  description:
    "In-depth technical papers on Chromium Carbide Overlays (CCO), ASTM G65 abrasion testing, 9 Mohs ceramics, and heavy separator dynamics from Prabhu Rockshape engineers.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Technical Insights | Prabhu Rockshape Machinery Ltd.",
    description:
      "Metallurgical analyses, wear life evaluations, and engineering design guides for cement, mining, and power professionals.",
    url: "https://prabhurockshape.com/blog/",
    images: [
      {
        url: "/images/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Technical Blog and Whitepapers",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
