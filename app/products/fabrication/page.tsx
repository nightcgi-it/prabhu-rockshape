"use client";

import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { DetailHero, DetailCTA } from "@/components/DetailShared";
import DeliveryProcess, { DeliveryStage } from "@/components/DeliveryProcess";

const HERO_IMG = "/images/fabrication-hero.jpg";

const capabilities = [
  { k: "Process Equipment", items: ["SKS Separators", "V-Separators", "Cyclones"] },
  { k: "Material Handling", items: ["Hoppers", "Chutes", "Bins", "Silos", "Conveyor Structures"] },
  { k: "Ducting & Piping", items: ["Ducting Systems", "Industrial Piping"] },
  { k: "Structural", items: ["Support Structures", "Galleries", "Platforms", "Stairways", "Handrails", "Purlins", "Trusses", "Gantries"] },
  { k: "Custom Fabrication", items: ["Equipment Support Frames", "Customized Heavy Fabricated Assemblies"] },
];

const GALLERY = [
  { img: "/images/industrial-fabrication.jpg", cap: "Heavy Structural Cyclone Assembly", big: true },
  { img: "/images/fab-gallery-1.jpg", cap: "Large Diameter Air Ducting" },
  { img: "/images/fab-gallery-2.jpg", cap: "Heavy Gantry Crane Structural Girder" },
  { img: "/images/fab-gallery-3.jpg", cap: "SKS Dynamic Separator Assembly" },
  { img: "/images/fab-gallery-4.jpg", cap: "Precision Submerged Arc Welding" },
];

const industries = ["Cement", "Steel", "Power", "Mining", "Infrastructure"];

// Order-to-site journey for a heavy fabrication package.
const deliveryStages: DeliveryStage[] = [
  { icon: "audit", title: "Scope Review & Site Survey", meta: "Response in 24–48 hrs", desc: "We review your tender drawings, confirm interfaces with existing structures and survey access and lifting constraints at site." },
  { icon: "design", title: "Detailing & GA Approval", meta: "Client-approved GAs", desc: "General arrangement and shop drawings are detailed, nested for material yield and released only against your written approval." },
  { icon: "manufacture", title: "Cutting, Fit-Up & Welding", meta: "Up to 300 MT / month", desc: "CNC plasma and oxy-fuel profiling feeds fit-up and welding in covered bays, with jigs holding tolerance on repeat assemblies." },
  { icon: "test", title: "Inspection & Trial Assembly", meta: "Dimensional · DFT · NDT", desc: "Welds, dimensions and paint thickness are inspected stage-wise; large assemblies are trial-assembled before they are broken down." },
  { icon: "dispatch", title: "Protection, Marking & Dispatch", meta: "ODC handling", desc: "Assemblies are blasted, painted to the specified DFT, match-marked and loaded — including over-dimensional consignments." },
  { icon: "support", title: "Erection Support at Site", meta: "Erection drawings", desc: "Match-marking drawings, bolt schedules and erection sequence are handed over, with supervision available through installation." },
];

const deliveryDocs = [
  "Approved GA & Shop Drawings",
  "Weld Procedure & Welder Qualification",
  "Dimensional Inspection Report",
  "Surface Preparation & DFT Report",
  "Match-Marking & Erection Schedule",
  "Packing List & Dispatch Docs",
];


export default function FabricationPage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);

    if (!reduced) {
      // Giant 300 MT stat reveal
      gsap.from("#mtBig", {
        scale: 0.7, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: ".statband", start: "top 75%" },
      });
      gsap.from(".statband .pre, .statband .post", {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: ".statband", start: "top 75%" },
      });
    }
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      <DetailHero
        imgId="fbHero"
        eyebrow="03 / Fabrication"
        meta="Up To 300 MT / Month · Heavy Industrial Fabrication"
        heading={
          <>
            <span className="ln"><span>Industrial &amp;</span></span>
            <span className="ln"><span className="shimmer-cyan">Structural Fabrication</span></span>
          </>
        }
        sub="Prabhu Rockshape Machinery Ltd. provides specialized heavy industrial and structural fabrication solutions with a certified monthly throughput of 300 MT for cement, steel, power, and infrastructure."
        image={HERO_IMG}
        imageAlt="Industrial and structural fabrication"
        telemetry={[
          { count: 300, suffix: " MT", lbl: "Monthly Fabrication Capacity" },
          { count: 13587, suffix: " Sq.M.", lbl: "Integrated Facility Area" },
          { val: "CNC Plasma", lbl: "Precision Profiling" },
          { count: 10, suffix: " Core", lbl: "Heavy Industrial Sectors" },
        ]}
      />

      {/* Intro */}
      <section className="pad wrap" id="overview">
        <div className="det-intro">
          <div className="sec-head reveal">
            <div className="eyebrow">Overview</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)" }}><span className="ln">Engineered for</span><span className="ln">Structural Integrity</span></h2>
          </div>
          <div className="lead reveal">
            <p>Prabhu Rockshape Machinery Ltd. provides specialized industrial and structural fabrication solutions for the cement, steel, power, mining, and infrastructure sectors.</p>
            <p>Our expertise encompasses the design and manufacture of SKS Separators, V-Separators, cyclones, ducting systems, industrial piping, hoppers, chutes, bins, silos, support structures, galleries, platforms, stairways, handrails, purlins, trusses, gantries, conveyor structures, equipment support frames, and customized heavy fabricated assemblies.</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Scope of Work</div>
          <h2 className="display"><span className="ln">Our Fabrication Capabilities</span></h2>
        </div>
        <div className="cap-grid">
          {capabilities.map((c) => (
            <div className="capcol reveal" key={c.k}>
              <span className="ck">{c.k}</span>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* Giant stat */}
      <section className="statband pad">
        <div className="wrap statband-in">
          <div className="giant reveal">
            <span className="pre">Up To</span>
            <span className="big" id="mtBig">300 MT</span>
            <span className="post">Per Month</span>
          </div>
          <p className="reveal">With a fabrication capacity of up to 300 MT per month and the capability to handle large-scale and complex structures, we deliver precision-engineered solutions that meet stringent quality, safety, and performance standards while ensuring timely project execution.</p>
        </div>
      </section>

      {/* Industries */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Sectors Served</div>
          <h2 className="display"><span className="ln">Built for Demanding</span><span className="ln">Industrial Applications</span></h2>
        </div>
        <div className="applist">
          {industries.map((a, i) => (
            <div className="appcell reveal" key={a}><span className="an">{String(i + 1).padStart(2, "0")}</span><h4>{a}</h4></div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Gallery</div>
          <h2 className="display"><span className="ln">From Shop Floor</span><span className="ln">to Site</span></h2>
        </div>
        <div className="det-gal">
          {GALLERY.map((g, i) => (
            <div className={`gcell img-reveal reveal${g.big ? " big" : ""}`} key={i}>
              <Image src={g.img} alt={g.cap} fill sizes="(max-width:820px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <span className="cap">{g.cap}</span>
            </div>
          ))}
        </div>
      </section>

      <DeliveryProcess
        titleLines={["From Approved Drawing", "to Erected Structure"]}
        intro="Heavy fabrication is judged at the interface — whether the assembly lands, aligns and bolts up on the first attempt. These six stages are how we hold that tolerance from the drawing board to your site."
        stages={deliveryStages}
        deliverables={deliveryDocs}
        assurances={[
          { v: "300 MT", k: "Monthly fabrication capacity" },
          { v: "6,004 Sq.M.", k: "Covered fabrication bays" },
          { v: "ISO 9001", k: "TÜV Nord certified system" },
        ]}
        note="Programmes are built around your shutdown window; over-dimensional consignments are planned with route survey and permits ahead of dispatch."
      />

      <DetailCTA heading={"Have a custom\nfabrication requirement?"} />
    </div>
  );
}
