import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://prabhurockshape.com"),
  title: {
    default: `${site.name} — Wear Protection & Engineered Solutions`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Trusted manufacturer of advanced wear protection systems: CCO wear plates, high alumina ceramics, and industrial fabrication for mining, cement, steel, power, and infrastructure.",
  keywords: [
    "Chromium Carbide Overlay",
    "CCO wear plates",
    "wear resistant plates",
    "high alumina ceramics",
    "industrial fabrication",
    "cement plant fabrication",
    "mining wear solutions",
    "sinter breaker",
    "Solapur MIDC",
    "Prabhu Rockshape",
  ],
  authors: [{ name: site.name, url: "https://prabhurockshape.com" }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prabhurockshape.com/",
    siteName: site.name,
    title: `${site.name} — Wear Protection & Engineered Solutions`,
    description:
      "Trusted manufacturer of advanced wear protection systems: CCO wear plates, high alumina ceramics, and industrial fabrication for mining, cement, steel, power, and infrastructure.",
    images: [
      {
        url: "/images/hero-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhu Rockshape Solapur Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Wear Protection & Engineered Solutions`,
    description:
      "Advanced wear protection systems, CCO wear plates, ceramics, and heavy fabrication solutions.",
    images: ["/images/hero-facility.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/images/rockshape-logo.png",
  },
};

export const viewport = {
  themeColor: "#0A2233",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Corporation"],
      "@id": "https://prabhurockshape.com/#organization",
      name: site.name,
      legalName: site.legalName,
      url: "https://prabhurockshape.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prabhurockshape.com/images/rockshape-logo.png",
      },
      image: "https://prabhurockshape.com/images/hero-facility.jpg",
      description:
        "Manufacturer of advanced wear protection systems: CCO wear plates, high alumina ceramics, and industrial fabrication in Solapur, Maharashtra, India.",
      foundingDate: site.foundedYear,
      founder: {
        "@type": "Person",
        name: site.founder,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: "Solapur",
        addressRegion: "Maharashtra",
        postalCode: "413255",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+91-${site.phones[0]}`,
          contactType: "sales",
          email: site.emails[0],
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: site.certification,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://prabhurockshape.com/#website",
      url: "https://prabhurockshape.com",
      name: site.name,
      publisher: {
        "@id": "https://prabhurockshape.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SmoothScroll>
          <ScrollUI />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
