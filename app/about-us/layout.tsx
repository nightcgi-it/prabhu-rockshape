import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Three Decades of Engineering Excellence",
  description:
    "Established in Solapur, Maharashtra, Prabhu Rockshape Machinery Ltd. delivers TÜV Nord ISO 9001:2015 certified wear protection systems and heavy industrial fabrication.",
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title: "About Us | Prabhu Rockshape Machinery Ltd.",
    description:
      "Three decades of engineering leadership in wear resistant overlays, ceramics, and structural fabrication.",
    url: "https://prabhurockshape.com/about-us/",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Manufacturing Facility and Team",
      },
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
