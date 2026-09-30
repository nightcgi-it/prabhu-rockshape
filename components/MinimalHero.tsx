"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export interface MinimalHeroStat {
  val?: string | number;
  lbl: string;
  count?: number;
  suffix?: string;
}

export interface MinimalHeroCTA {
  label: string;
  href: string;
  primary?: boolean;
}

export interface MinimalHeroProps {
  /** Small mono label above the title. */
  label?: string;
  /** Breadcrumb trail; the last item is rendered as plain text. */
  crumb?: { label: string; href?: string }[];
  /** Either plain lines (wrapped for the line-reveal) or ready-made markup. */
  titleLines?: string[];
  heading?: ReactNode;
  accentLineIndex?: number;
  description: string;
  /** Trimmed to three — the hero stays a summary, not a dashboard. */
  stats?: MinimalHeroStat[];
  ctas?: MinimalHeroCTA[];
  image: string;
  imageAlt: string;
  /** Mono caption pinned under the image frame. */
  imageCaption?: string;
}

/**
 * The quiet counterpart to the home page hero: no full-bleed backdrop, no HUD
 * overlay. Inner pages open with a short line of type, one image and at most
 * three figures, then hand over to the page content.
 */
export default function MinimalHero({
  label,
  crumb,
  titleLines,
  heading,
  accentLineIndex = -1,
  description,
  stats = [],
  ctas = [],
  image,
  imageAlt,
  imageCaption,
}: MinimalHeroProps) {
  const shown = stats.slice(0, 3);

  return (
    <section className="mhero">
      <div className="mhero-grid-bg" aria-hidden="true" />
      <div className="wrap mhero-inner">
        <div className="mhero-copy">
          {crumb && crumb.length > 0 && (
            <nav className="mhero-crumb" aria-label="Breadcrumb">
              {crumb.map((c, i) => (
                <span key={i}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumb.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </nav>
          )}

          {label && <div className="mhero-label">{label}</div>}

          <h1 className="hero-title-full mhero-title">
            {heading ??
              titleLines?.map((line, i) => (
                <span className="ln" key={i}>
                  <span className={i === accentLineIndex ? "accent" : ""}>{line}</span>
                </span>
              ))}
          </h1>

          <p className="hero-desc-full mhero-desc">{description}</p>

          {shown.length > 0 && (
            <div className="mhero-stats">
              {shown.map((s, i) => (
                <div className="telemetry-item mhero-stat" key={i}>
                  {s.count !== undefined ? (
                    <div className="val num" data-count={s.count} data-suffix={s.suffix || ""}>
                      0
                    </div>
                  ) : (
                    <div className="val">{s.val}</div>
                  )}
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          )}

          {ctas.length > 0 && (
            <div className="mhero-ctas">
              {ctas.map((c, i) => (
                <Link key={i} href={c.href} className={c.primary ? "btn-hero-solid" : "btn-hero-ghost"}>
                  {c.label} <span className="arw">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <figure className="mhero-media">
          <div className="mhero-frame">
            <Image
              id="heroBackdrop"
              src={image}
              alt={imageAlt}
              fill
              priority
              quality={90}
              sizes="(max-width: 1000px) 100vw, 46vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          {imageCaption && <figcaption className="mhero-cap">{imageCaption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
