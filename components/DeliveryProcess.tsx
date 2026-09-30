"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReduced } from "@/lib/useGsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type StageIcon =
  | "audit"
  | "design"
  | "manufacture"
  | "test"
  | "dispatch"
  | "support";

export interface DeliveryStage {
  title: string;
  desc: string;
  /** Short mono line under the copy — lead time, standard, or method. */
  meta: string;
  icon: StageIcon;
}

export interface DeliveryProcessProps {
  eyebrow?: string;
  titleLines: string[];
  intro: string;
  stages: DeliveryStage[];
  /** Paperwork / items that travel with the consignment. */
  deliverables?: string[];
  deliverablesTitle?: string;
  /** Three short figures shown beside the checklist. */
  assurances?: { v: string; k: string }[];
  note?: string;
  /** `wash` sits on the grey band, `plain` on white. */
  tone?: "plain" | "wash";
}

const ICONS: Record<StageIcon, React.ReactNode> = {
  audit: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.2 16.2L21 21" />
      <path d="M8 11h6M11 8v6" strokeWidth="1.6" />
    </>
  ),
  design: (
    <>
      <path d="M4 3h10l6 6v12H4z" />
      <path d="M14 3v6h6" strokeWidth="1.6" />
      <path d="M8 13h8M8 17h5" strokeWidth="1.6" />
    </>
  ),
  manufacture: (
    <>
      <path d="M3 21h18" />
      <path d="M3 21V10l5 3.5V10l5 3.5V10l5 3.5V21" />
      <path d="M8 17h2M13 17h2" strokeWidth="1.6" />
      <path d="M18 7V3" strokeWidth="1.6" />
    </>
  ),
  test: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9.5V3" />
      <path d="M7.6 14h8.8" strokeWidth="1.6" />
    </>
  ),
  dispatch: (
    <>
      <path d="M2 7.5L12 3l10 4.5v9L12 21 2 16.5v-9z" />
      <path d="M2 7.5L12 12l10-4.5M12 12v9" strokeWidth="1.6" />
      <path d="M7 5.2l10 4.5" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
    </>
  ),
  support: (
    <>
      <path d="M12 21s7-4.2 7-9.8V5.5L12 3 5 5.5v5.7C5 16.8 12 21 12 21z" />
      <path d="M9 12l2.2 2.2L15.5 10" strokeWidth="1.8" />
    </>
  ),
};

export default function DeliveryProcess({
  eyebrow = "Delivery",
  titleLines,
  intro,
  stages,
  deliverables = [],
  deliverablesTitle = "Travels With Every Consignment",
  assurances = [],
  note,
  tone = "plain",
}: DeliveryProcessProps) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = prefersReduced();
    const el = root.current;
    if (!el) return;

    if (reduced) {
      const fill = el.querySelector<HTMLElement>(".dlv-fill");
      if (fill) fill.style.transform = "scaleX(1)";
      setActive(stages.length - 1);
      return;
    }

    const ctx = gsap.context(() => {
      // The rail fill is scrubbed by scroll; nodes light up as it passes them.
      gsap.fromTo(
        ".dlv-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".dlv-rail",
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.6,
            onUpdate: (self) =>
              setActive(Math.min(stages.length - 1, Math.floor(self.progress * stages.length))),
          },
        }
      );

      gsap.from(".dlv-step", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ".dlv-rail", start: "top 82%" },
      });
    }, el);

    return () => ctx.revert();
  }, [stages.length]);

  return (
    <section className={`dlv-sec${tone === "wash" ? " wash" : ""}`} ref={root} id="delivery">
      <div className="wrap">
        <div className="dlv-head">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="display dlv-title">
              {titleLines.map((l, i) => (
                <span className="ln" key={i}>
                  {l}
                </span>
              ))}
            </h2>
          </div>
          <p className="dlv-intro">{intro}</p>
        </div>

        <div className="dlv-rail" style={{ ["--dlv-n" as string]: stages.length }}>
          <div className="dlv-line" aria-hidden="true">
            <span className="dlv-fill" />
          </div>

          <ol className="dlv-steps">
            {stages.map((s, i) => (
              <li className={`dlv-step${i <= active ? " on" : ""}`} key={s.title}>
                <div className="dlv-node">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[s.icon]}
                  </svg>
                  <span className="dlv-no">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="dlv-meta">{s.meta}</span>
              </li>
            ))}
          </ol>
        </div>

        {(deliverables.length > 0 || assurances.length > 0) && (
          <div className="dlv-panel reveal">
            {deliverables.length > 0 && (
              <div className="dlv-docs">
                <div className="dlv-docs-k">{deliverablesTitle}</div>
                <ul>
                  {deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                {note && <p className="dlv-note">{note}</p>}
              </div>
            )}

            <div className="dlv-side">
              {assurances.length > 0 && (
                <div className="dlv-assure">
                  {assurances.map((a) => (
                    <div className="dlv-as" key={a.k}>
                      <div className="v">{a.v}</div>
                      <div className="k">{a.k}</div>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/contact-us" className="btn btn-solid dlv-cta">
                Request a Delivery Schedule <span className="arw">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
