"use client";

import Link from "next/link";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { DetailHero, DetailCTA } from "@/components/DetailShared";
import DeliveryProcess, { DeliveryStage } from "@/components/DeliveryProcess";

const HERO_IMG = "/images/plates-hero.jpg";

const features = [
  { k: "Microstructure", h: "Dendritic Carbide Matrix", body: ["Dendritic strength of primary & secondary carbides suspended in a tough wear-resistant matrix."] },
  { k: "Welding Process", h: "Open Arc Welding", body: ["Open Arc Welding using PLC control system for consistent, repeatable overlay quality."] },
  { k: "Properties", h: "Chromium Carbide & Hardness", body: ["Forms a good chromium carbide matrix.", "Achieves high hardness as required."] },
  { k: "Performance", h: "High-Temperature Impact", body: ["Withstands prolonged impact loading at 700°C temperature."] },
  { k: "Benefits", h: "Lower Cost of Ownership", body: ["Cost-effective due to reduced maintenance & plant downtime."] },
  { k: "Benefits", h: "Higher Output", body: ["Increases productivity and efficiency."] },
];

// Grades table — OCR-obvious spelling/formatting corrected; technical meaning preserved.
const grades = [
  { name: "RC-GP", feat: "High abrasive resistance combined with moderate applications.", app: "Mixer blades, chutes, bunkers, etc.", chem: "Cr, C, Mn, B, V", hard: "55–58" },
  { name: "RC-57", feat: "Severe abrasion, moderate impact resistance.", app: "Crusher hammers, mandrills, bucket lift & teeth, liners, etc.", chem: "Cr, C, Mn, B, V, W", hard: "57–60" },
  { name: "RC-62", feat: "Severe to extreme wear resistance and moderate impact.", app: "Cement kiln wear parts, shovel teeth, etc.", chem: "Cr, C, Mn, Nb, B, V, W", hard: "60–63" },
  { name: "RC-65", feat: "Extreme abrasion and resistant particle erosion. Temperature up to 700°C.", app: "Sinter breaker, sinter pans, diaphragm plates, fan blades.", chem: "Cr, C, Mn, Nb, W, Mo", hard: "65 & above" },
  { name: "RC-58 SPL", feat: "Resists high-velocity erosion and fine particle abrasion.", app: "Clinker grinding, coal feeding fan & liner plates, etc.", chem: "Cr, Mn, V, B, W", hard: "60–65" },
  { name: "RC-W", feat: "Extreme high abrasion.", app: "—", chem: "Cr, C, W, Mo, V", hard: "60–65" },
];

const apps = ["Mining", "Cement", "Power", "Steel", "Chemical"];

// Order-to-site journey for a hardfaced plate order.
const deliveryStages: DeliveryStage[] = [
  { icon: "audit", title: "Wear Audit & Sample Study", meta: "Response in 24–48 hrs", desc: "Our engineers map the wear pattern, impact angle and operating temperature on your equipment before any grade is proposed." },
  { icon: "design", title: "Grade Selection & Drawing", meta: "Approval in 3–5 days", desc: "Base plate and overlay thickness are fixed against the duty, then cutting drawings are issued for your approval." },
  { icon: "manufacture", title: "PLC Open Arc Overlay", meta: "1350 / 1400 × 3000 mm", desc: "Plates are hardfaced on automated open arc lines with controlled dilution, then CNC profiled, rolled or bent to shape." },
  { icon: "test", title: "Hardness & Abrasion Testing", meta: "ASTM G65 · Rockwell", desc: "Every production heat is verified in-house for hardness, dry sand abrasion loss and carbide microstructure." },
  { icon: "dispatch", title: "Marking, Packing & Dispatch", meta: "Pan-India · Export ready", desc: "Plates are batch-marked, edge-protected and stacked on steel pallets for road movement or container stuffing." },
  { icon: "support", title: "Site Fit-Up & Wear Review", meta: "Post-installation", desc: "We support installation sequencing and return for a wear review, so the next set is specified on measured field data." },
];

const deliveryDocs = [
  "Material Test Certificate",
  "Rockwell Hardness Report",
  "Dimensional & Thickness Report",
  "ASTM G65 Abrasion Data",
  "Heat & Batch Traceability",
  "Packing List & Dispatch Docs",
];


export default function WearPlatesPage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      <DetailHero
        imgId="wpHero"
        eyebrow="01 / Wear Protection"
        meta="55–65 HRC · Open Arc PLC Hardfacing"
        heading={
          <>
            <span className="ln"><span>Chromium Carbide Overlay</span></span>
            <span className="ln"><span className="shimmer-cyan">Wear Resistant Plates</span></span>
          </>
        }
        sub="ROCKSHAPE Chromium Carbide Overlay (CCO) Wear Plates are engineered with high dendritic carbide matrix hardness (55–65 HRC) to eliminate unscheduled shutdowns and minimize severe gouging abrasion."
        image={HERO_IMG}
        imageAlt="ROCKSHAPE chromium carbide overlay wear resistant plates"
        telemetry={[
          { val: "55–65 HRC", lbl: "Overlay Hardness" },
          { count: 700, suffix: "°C", lbl: "Thermal Loading" },
          { count: 6, suffix: " Grades", lbl: "Alloy Formulations" },
          { val: "Open Arc", lbl: "PLC Process Control" },
        ]}
      />

      {/* Intro */}
      <section className="pad wrap" id="overview">
        <div className="det-intro">
          <div className="sec-head reveal">
            <div className="eyebrow">Overview</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)" }}><span className="ln">Engineered to Combat</span><span className="ln">Wear and Tear</span></h2>
          </div>
          <div className="lead reveal">
            <p>Wear and tear is a common problem in Power, Cement, Sugar, Mining, and Mineral Processing industries.</p>
            <p>Continuous research and development have led to various wear resistance methods. We have developed ROCKSHAPE Wear Resistant Plates to combat wear and tear problems, reducing plant shutdowns, frequent repairs, and maintenance costs, ultimately minimizing heavy losses.</p>
            <p>Indigenously developed ROCKSHAPE Wear Resistant Plates are manufactured with a combination of alloy wires and metals, blended simultaneously.</p>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Technical Advantages</div>
          <h2 className="display"><span className="ln">Special Features</span></h2>
        </div>
        <div className="feat-blocks">
          {features.map((f, i) => (
            <div className="fblock reveal" key={i}>
              <div className="fk">{f.k}</div>
              <h4>{f.h}</h4>
              {f.body.map((b, j) => <p key={j}>{b}</p>)}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Dimensions</div>
          <h2 className="display"><span className="ln">Technical Specifications</span></h2>
        </div>
        <div className="spec-split reveal">
          <div className="spec-side">
            <div className="sk">Standard Available Size</div>
            <div className="sv">1350mm / 1400mm<br />× 3000mm</div>
            <p className="spec-note">Also we can easily customize the size and thickness as per requirement.</p>
          </div>
          <div className="spec-side">
            <div className="sk">Thickness Range</div>
            <div style={{ marginTop: 18 }}>
              <div className="thk-row"><span className="a">Base Plate 6mm – 16mm</span><span className="b">Overlay 4mm – 6mm</span></div>
              <div className="thk-row"><span className="a">Base Plate 16mm – 40mm</span><span className="b">Overlay 4mm – 9mm</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grades table */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Material Grades</div>
          <h2 className="display"><span className="ln">ROCKSHAPE Grades</span></h2>
        </div>
        <div className="gtable-wrap reveal">
          <table className="grades-tbl">
            <thead>
              <tr><th>Grade</th><th>Features</th><th>Applications</th><th>Alloy Chemistry</th><th>Hardness (RC)</th></tr>
            </thead>
            <tbody>
              {grades.map((g) => (
                <tr key={g.name}>
                  <td><span className="g-name">{g.name}</span></td>
                  <td>{g.feat}</td>
                  <td className="g-app">{g.app}</td>
                  <td><span className="g-chem">{g.chem}</span></td>
                  <td><span className="g-hard">{g.hard}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Where It's Used</div>
          <h2 className="display"><span className="ln">Applications</span></h2>
        </div>
        <div className="applist">
          {apps.map((a, i) => (
            <div className="appcell reveal" key={a}><span className="an">{String(i + 1).padStart(2, "0")}</span><h4>{a}</h4></div>
          ))}
        </div>
      </section>

      <DeliveryProcess
        tone="wash"
        titleLines={["From Enquiry to", "Plate on the Chute"]}
        intro="A wear plate order is not a catalogue pick. Every consignment moves through the same six controlled stages — so what reaches your plant is specified on your wear data, verified against it, and documented end to end."
        stages={deliveryStages}
        deliverables={deliveryDocs}
        assurances={[
          { v: "24–48 hr", k: "Technical enquiry response" },
          { v: "55–65 HRC", k: "Verified before dispatch" },
          { v: "ISO 9001", k: "TÜV Nord certified system" },
        ]}
        note="Dispatch schedules are confirmed against plate size, overlay thickness and order quantity at the time of confirmation."
      />

      <DetailCTA heading={"Need a wear-resistant solution\nengineered for your application?"} />
    </div>
  );
}
