import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Applications — Mining, Cement, Power, Steel & Defence",
  description:
    "Application-engineered wear protection systems and fabrication solutions deployed across 10 critical sectors: Mining, Cement, Power, Steel, Chemical, Defence, and Infrastructure.",
  alternates: {
    canonical: "/applications/",
  },
  openGraph: {
    title: "Applications | Prabhu Rockshape Machinery Ltd.",
    description:
      "Engineered wear materials for crushers, kilns, coal handling, blast furnaces, and dynamic cyclones.",
    url: "https://prabhurockshape.com/applications/",
    images: [
      {
        url: "/images/applications-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Heavy Industrial Applications and Solutions",
      },
    ],
  },
};

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
