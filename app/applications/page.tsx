"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { usePageAnimations, prefersReduced, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import PageHero from "@/components/PageHero";

const HERO_IMG = "/images/applications-hero.jpg";

type Cat = { k: string; items: string[] };
type Industry = { no: string; name: string; cats: Cat[] };

// Strictly from the supplied document — nothing added.
const industries: Industry[] = [
  { no: "01", name: "Mining", cats: [
    { k: "Wear Resistant Plates", items: ["Crushers", "Screens", "Conveyors"] },
    { k: "High Alumina Ceramic", items: ["Pipes", "Bends", "Cyclones", "Wear Plates"] },
    { k: "Through Hardened Plates", items: ["Wear Plates", "Liners", "Crusher Parts"] },
    { k: "High Manganese", items: ["Crusher Jaws", "Cones", "Wear Parts"] },
  ]},
  { no: "02", name: "Cement", cats: [
    { k: "Wear Resistant Plates", items: ["Kilns", "Burners", "Grinding Units"] },
    { k: "High Alumina Ceramic", items: ["Kilns", "Burners", "Grinding Units"] },
    { k: "Through Hardened Plates", items: ["Kilns", "Burners", "Grinding Units"] },
    { k: "High Manganese", items: ["Kilns", "Grinding-related wear applications"] },
  ]},
  { no: "03", name: "Power", cats: [
    { k: "Wear Resistant Plates", items: ["Coal Handling", "Ash Handling", "Boilers"] },
    { k: "High Alumina Ceramic", items: ["Coal Handling", "Ash Handling", "Boilers"] },
  ]},
  { no: "04", name: "Steel", cats: [
    { k: "Wear Resistant Plates", items: ["Blast Furnaces", "Converters", "Rolling Mills"] },
    { k: "High Alumina Ceramic", items: ["Blast Furnaces", "Rolling Mills"] },
    { k: "Through Hardened Plates", items: ["Rolling Mills", "Wear Parts"] },
    { k: "High Manganese", items: ["Rolling Mills", "Wear Parts"] },
  ]},
  { no: "05", name: "Chemical", cats: [
    { k: "Wear Resistant Plates", items: ["Reactors", "Tanks", "Pipelines"] },
    { k: "High Alumina Ceramic", items: ["Reactors", "Tanks", "Pipelines"] },
  ]},
  { no: "06", name: "Defence", cats: [
    { k: "High Alumina Ceramic", items: ["Armour and protection systems"] },
    { k: "Through Hardened Plates", items: ["Armour plates and protection systems"] },
    { k: "High Manganese", items: ["Armour plates and protection systems"] },
  ]},
  { no: "07", name: "Oil & Gas", cats: [
    { k: "High Alumina Ceramic", items: ["Valves", "Pumps", "Pipelines"] },
    { k: "Heavy & Critical Fabrication", items: ["Process piping", "Valves", "Fittings"] },
  ]},
  { no: "08", name: "Construction", cats: [
    { k: "Through Hardened Plates", items: ["Earthmoving equipment", "Wear parts"] },
  ]},
  { no: "09", name: "Earthmoving", cats: [
    { k: "High Manganese", items: ["Buckets", "Blades", "Wear parts"] },
  ]},
  { no: "10", name: "Infrastructure", cats: [
    { k: "Heavy & Critical Fabrication", items: ["Structural components", "Ducting", "Process equipment", "Support structures"] },
  ]},
];

export default function ApplicationsPage() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);

    // Stagger the industry rows into view
    gsap.from(".exp-row", {
      opacity: 0, x: -20, duration: 0.5, stagger: 0.06, ease: "power3.out",
      scrollTrigger: { trigger: ".explorer", start: "top 78%" },
    });
  });

  // Animate the detail panel whenever the active industry changes.
  useEffect(() => {
    if (prefersReduced() || !panelRef.current) return;
    const cats = panelRef.current.querySelectorAll(".exp-cat");
    gsap.fromTo(panelRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    gsap.fromTo(cats, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power3.out", delay: 0.05 });
  }, [active]);

  const cur = industries[active];

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={HERO_IMG}
        imageAlt="Demanding industrial field applications"
        badges={[
          { text: "10 Heavy Industries", highlight: true },
          { text: "4 Solution Families" },
          { text: "Tailored Plant Packages" },
        ]}
        titleLines={[
          "Engineered For",
          "Real Industrial Conditions",
        ]}
        accentLineIndex={1}
        description="Prabhu Rockshape Machinery Ltd. engineers mission-critical wear protection, advanced high-alumina ceramics, and heavy structural fabrication tailored to combat severe gouging abrasion, extreme impact, and aggressive thermal cycles."
        telemetry={[
          { count: 10, suffix: " Core", lbl: "Industrial Sectors" },
          { val: "55–65 HRC", lbl: "Hardfacing Overlay" },
          { count: 90, suffix: "%+", lbl: "Alumina Ceramic Purity" },
          { count: 1000, suffix: "°C", lbl: "Max Thermal Capability" },
        ]}
        ctas={[
          { label: "Explore Applications Below", href: "#explorer", primary: true },
          { label: "Consult an Engineer", href: "/contact-us" },
        ]}
      />

      {/* EXPLORER */}
      <section className="pad wrap" id="explorer">
        <div className="sec-head reveal">
          <div className="eyebrow">Interactive Explorer</div>
          <h2 className="display"><span className="ln">Range of Applications</span></h2>
          <p className="reveal mono" style={{ fontSize: 12, color: "var(--ink2)", marginTop: 18, letterSpacing: ".04em" }}>Select an industry to view the products and equipment we protect.</p>
        </div>

        <div className="explorer">
          <div className="exp-list" role="tablist" aria-label="Industries">
            {industries.map((ind, i) => (
              <button
                key={ind.no}
                className={`exp-row${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                <span className="exn">{ind.no}</span>
                <span className="exname">{ind.name}</span>
                <span className="exarrow">→</span>
              </button>
            ))}
          </div>

          <div className="exp-detail">
            <div className="exp-panel" ref={panelRef} role="tabpanel">
              <div className="exp-panel-head">
                <span className="pnum">{cur.no}</span>
                <h3>{cur.name}</h3>
              </div>
              <div className="exp-cats">
                {cur.cats.map((c) => (
                  <div className="exp-cat" key={c.k}>
                    <span className="catk">{c.k}</span>
                    <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta steel pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal"><span className="ln">Don&apos;t See Your Exact</span><span className="ln">Application Listed?</span></h2>
          <div className="reveal"><Link href="/contact-us" className="btn btn-solid">Tell Us About Your Application <span className="arw">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
