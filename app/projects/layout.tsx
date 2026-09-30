import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnkey Solar Projects & Industrial Execution",
  description:
    "End-to-end solar project delivery: structural design, high-grade fabrication, panel & BOS procurement, erection, commissioning, and long-term maintenance support.",
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    title: "Solar Projects | Prabhu Rockshape Machinery Ltd.",
    description:
      "Engineered solar structures and turnkey commissioning for heavy industrial and commercial sites.",
    url: "https://prabhurockshape.com/projects/",
    images: [
      {
        url: "/images/projects-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turnkey Solar Engineering Projects",
      },
    ],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
