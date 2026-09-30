"use client";

import Link from "next/link";
import { ReactNode } from "react";
import MinimalHero from "@/components/MinimalHero";

export function DetailHero({
  eyebrow,
  heading,
  sub,
  meta,
  image,
  imageAlt,
  telemetry = [],
}: {
  eyebrow: string;
  heading: ReactNode;
  sub: string;
  meta: string;
  image: string;
  imageAlt: string;
  /** Kept for call-site compatibility; the minimal hero owns its own image id. */
  imgId?: string;
  telemetry?: { val?: string | number; lbl: string; count?: number; suffix?: string }[];
}) {
  const cleanCategory = eyebrow.split("/").pop()?.trim() || eyebrow;

  return (
    <MinimalHero
      crumb={[
        { label: "Products", href: "/products" },
        { label: cleanCategory },
      ]}
      heading={heading}
      description={sub}
      stats={telemetry}
      ctas={[
        { label: "Request Technical Quote", href: "/contact-us", primary: true },
        { label: "Explore Specifications", href: "#overview" },
      ]}
      image={image}
      imageAlt={imageAlt}
      imageCaption={meta}
    />
  );
}

export function DetailCTA({ heading, dark = false }: { heading: string; dark?: boolean }) {
  return (
    <section className={`finalcta pad${dark ? "" : " steel"}`}>
      <div className="wrap fc-grid">
        <h2 className="display reveal">
          {heading.split("\n").map((l, i) => (
            <span className="ln" key={i}>
              {l}
            </span>
          ))}
        </h2>
        <div className="reveal">
          <Link href="/contact-us" className="btn btn-solid">
            Talk to Our Engineers <span className="arw">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
