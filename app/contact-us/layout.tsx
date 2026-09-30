import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering Team & Quotation Requests",
  description:
    "Connect with Prabhu Rockshape's technical team in Solapur, Maharashtra. Request quotations for CCO wear plates, alumina ceramic liners, and industrial fabrication projects.",
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    title: "Contact Us | Prabhu Rockshape Machinery Ltd.",
    description:
      "Direct technical consultation and quotes for wear protection systems and heavy fabrication solutions.",
    url: "https://prabhurockshape.com/contact-us/",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Contact and Engineering Support",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
