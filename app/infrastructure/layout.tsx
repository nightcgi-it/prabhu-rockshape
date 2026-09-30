import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & In-House Testing Lab",
  description:
    "13,587 Sq. M. manufacturing facility in MIDC Chincholi, Solapur. Complete in-house testing laboratory with dry abrasion, UTM, hardness, and metallurgical microscope inspection.",
  alternates: {
    canonical: "/infrastructure/",
  },
  openGraph: {
    title: "Infrastructure | Prabhu Rockshape Machinery Ltd.",
    description:
      "Advanced manufacturing plant and certified testing laboratory ensuring strict quality control from raw plate to finished wear assembly.",
    url: "https://prabhurockshape.com/infrastructure/",
    images: [
      {
        url: "/images/infra-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Manufacturing Infrastructure",
      },
    ],
  },
};

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
