"use client";

import { usePathname } from "next/navigation";
import MinimalHero from "@/components/MinimalHero";
import { nav } from "@/lib/site";

export interface HeroBadge {
  text: string;
  highlight?: boolean;
}

export interface HeroTelemetry {
  val?: string | number;
  lbl: string;
  count?: number;
  suffix?: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  primary?: boolean;
}

export interface PageHeroProps {
  image: string;
  imageAlt: string;
  badges: HeroBadge[];
  titleLines: string[];
  accentLineIndex?: number;
  description: string;
  telemetry?: HeroTelemetry[];
  ctas?: HeroCTA[];
  crumb?: { label: string; href?: string }[];
}

const titleize = (segment: string) =>
  segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/**
 * Inner-page hero. The home page keeps the cinematic full-bleed treatment;
 * every other page opens with the minimal layout, so the badge strip and the
 * four-up telemetry row supplied by pages are deliberately reduced here.
 */
export default function PageHero({
  image,
  imageAlt,
  badges,
  titleLines,
  accentLineIndex = -1,
  description,
  telemetry = [],
  ctas = [],
  crumb,
}: PageHeroProps) {
  const pathname = usePathname();
  const trail =
    crumb ??
    [
      { label: "Home", href: "/" },
      {
        label:
          nav.find((n) => n.href === pathname)?.label ??
          titleize(pathname.split("/").filter(Boolean).pop() || "Home"),
      },
    ];

  return (
    <MinimalHero
      label={badges[0]?.text}
      crumb={trail}
      titleLines={titleLines}
      accentLineIndex={accentLineIndex}
      description={description}
      stats={telemetry}
      ctas={ctas}
      image={image}
      imageAlt={imageAlt}
      imageCaption={badges[1]?.text}
    />
  );
}
