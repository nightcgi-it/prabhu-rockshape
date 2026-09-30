"use client";

import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { DetailHero, DetailCTA } from "@/components/DetailShared";
import DeliveryProcess, { DeliveryStage } from "@/components/DeliveryProcess";

const HERO_IMG = "/images/ceramics-hero.jpg";
const GALLERY = [
  { img: "/images/high-alumina-ceramics.jpg", cap: "High Alumina Ceramic Hex Tiles", big: true },
  { img: "/images/ceramic-gallery-1.jpg", cap: "Ceramic Lined Cyclone & Elbows" },
  { img: "/images/ceramic-gallery-2.jpg", cap: "Pre-Engineered Ceramic Wear Tiles" },
  { img: "/images/ceramic-gallery-3.jpg", cap: "Weldable Tiles with Steel Plugs" },
  { img: "/images/ceramic-gallery-4.jpg", cap: "Ceramic Lined Material Chute" },
];

// Key features — mix of stat cards and descriptive cards.
const keyFeatures = [
  { v: "90%+", k: "Alumina Content", d: "High-purity alumina content." },
  { v: "4–50mm", k: "Thickness Range", d: "Standard and custom thickness options." },
  { v: "~9 Mohs", k: "Hardness", d: "Approximate hardness for extreme abrasion." },
  { v: "1000°C", k: "Temperature", d: "Temperature capability up to 1000°C." },
  { v: null, k: "Wear Resistance", d: "Excellent resistance to abrasion and erosive wear.", wide: true },
  { v: null, k: "Service Life", d: "Long service life in high-wear applications." },
  { v: null, k: "Configurations", d: "Standard and custom-engineered configurations." },
];

const equipment = ["Chutes", "Hoppers", "Cyclones", "Pipelines", "Bends", "Bulk Material Handling"];
const industries = ["Cement", "Steel", "Mining", "Power Generation", "Process Industries"];

// Order-to-site journey for a ceramic lining package.
const deliveryStages: DeliveryStage[] = [
  { icon: "audit", title: "Erosion Survey & Tile Mapping", meta: "Response in 24–48 hrs", desc: "We measure where the flow actually strikes — impingement angle, particle size and velocity — and map the tile zones from it." },
  { icon: "design", title: "Liner Layout & Tile Format", meta: "4–50 mm formats", desc: "Plain, weldable-cup or hex-mat formats are laid out over your chute, cyclone or bend profile at the thickness the duty needs." },
  { icon: "manufacture", title: "Pressing, Firing & Bonding", meta: "90%+ Al₂O₃ body", desc: "High-purity alumina bodies are pressed and high-temperature fired, then pre-bonded to backing plates or steel sections where specified." },
  { icon: "test", title: "Hardness, Density & Fit Check", meta: "≈9 Mohs verified", desc: "Batches are checked for alumina content, bulk density and hardness; pre-lined assemblies are dry-fitted before they leave the floor." },
  { icon: "dispatch", title: "Cushioned Crating & Dispatch", meta: "Sea-worthy crating", desc: "Tiles travel in cushioned, moisture-protected crates; lined assemblies are braced and wrapped so no edge takes a transit load." },
  { icon: "support", title: "Bonding & Installation Guidance", meta: "On-site support", desc: "Adhesive specification, surface preparation and tile sequencing are handed over with the consignment, with site support on request." },
];

const deliveryDocs = [
  "Alumina Content Certificate",
  "Hardness & Bulk Density Report",
  "Approved Tile Layout Drawing",
  "Adhesive & Bonding Specification",
  "Installation Sequence Guide",
  "Packing List & Dispatch Docs",
];


export default function CeramicsPage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);

    if (!reduced) {
      // Key-feature cards stagger in
      gsap.from(".kf", {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".kf-grid", start: "top 82%" },
      });
    }
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      <DetailHero
        imgId="ceHero"
        eyebrow="02 / Ceramic Protection"
        meta="90%+ Min. Alumina · 9 Mohs Hardness · Up To 1000°C"
        heading={
          <>
            <span className="ln"><span>High Alumina</span></span>
            <span className="ln"><span className="shimmer-cyan">Ceramic Products</span></span>
          </>
        }
        sub="Prabhu Rockshape Machinery Ltd. manufactures high-purity alumina ceramic liners with 90%+ Al2O3, engineered to combat severe gouging abrasion, fine particle erosion, and continuous temperatures up to 1000°C."
        image={HERO_IMG}
        imageAlt="High alumina ceramic liners and lined equipment"
        telemetry={[
          { count: 90, suffix: "%+", lbl: "Min. Alumina Purity" },
          { val: "9 Mohs", lbl: "Diamond Hardness" },
          { count: 1000, suffix: "°C", lbl: "Thermal Capability" },
          { val: "4–50 mm", lbl: "Thickness Formats" },
        ]}
      />

      {/* Liners intro */}
      <section className="pad wrap" id="overview">
        <div className="det-intro">
          <div className="sec-head reveal">
            <div className="eyebrow">Overview</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)" }}><span className="ln">High Alumina</span><span className="ln">Ceramic Liners</span></h2>
          </div>
          <div className="lead reveal">
            <p>Prabhu Rockshape Machinery Ltd. manufactures high alumina ceramic liners with a minimum alumina content of 90%, designed to provide reliable protection against abrasion, erosion, and moderate impact in demanding industrial environments.</p>
            <p>These liners offer significantly longer service life compared to conventional wear-resistant materials, helping improve equipment reliability and reduce operating costs.</p>
          </div>
        </div>
      </section>

      {/* Demanding environments split */}
      <section className="split dk">
        <div className="tx">
          <div className="eyebrow reveal" style={{ color: "#7fc0ea" }}>Application Range</div>
          <h2 className="display sec-head reveal" style={{ fontSize: "clamp(28px,3.6vw,48px)", marginTop: 20 }}><span className="ln">Built for Demanding</span><span className="ln">Industrial Environments</span></h2>
          <p className="reveal">Widely used in chutes, hoppers, cyclones, pipelines, bends, and bulk material handling systems, high alumina ceramic liners form a durable wear barrier that minimizes surface degradation and extends equipment lifespan.</p>
          <p className="reveal">With a hardness of approximately 9 Mohs and the ability to withstand temperatures up to 1000°C, they are well suited for applications in cement, steel, mining, power generation, and other process industries.</p>
        </div>
        <div className="im img-reveal parallax-img reveal"><Image src="/images/wear-protection-app.jpg" alt="Ceramic lined industrial equipment" width={1000} height={700} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
      </section>

      {/* Key Features */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Specifications</div>
          <h2 className="display"><span className="ln">Key Features</span></h2>
        </div>
        <div className="kf-grid">
          {keyFeatures.map((f, i) => (
            <div className={`kf${f.wide ? " wide" : ""}`} key={i}>
              <div className="kfk">{f.k}</div>
              {f.v && <div className="kfv">{f.v}</div>}
              <div className="kfd">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Where It's Used</div>
          <h2 className="display"><span className="ln">Applications</span></h2>
        </div>
        <div className="applist">
          {equipment.map((a, i) => (
            <div className="appcell reveal" key={a}><span className="an">{String(i + 1).padStart(2, "0")}</span><h4>{a}</h4></div>
          ))}
        </div>
        <div style={{ marginTop: 40 }} className="reveal">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Industries Served</div>
          <div className="chips" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {industries.map((i) => <span key={i} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 13, border: "1px solid var(--line)", padding: "10px 15px", color: "var(--ink)" }}>{i}</span>)}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Gallery</div>
          <h2 className="display"><span className="ln">Ceramic Solutions Engineered</span><span className="ln">Around Your Application</span></h2>
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
        tone="wash"
        titleLines={["From Erosion Survey", "to Lined Equipment"]}
        intro="Ceramic protection only performs if the tile format, thickness and bonding match the flow that is wearing the equipment out. These six stages are how a lining package gets specified, verified and delivered."
        stages={deliveryStages}
        deliverables={deliveryDocs}
        assurances={[
          { v: "90%+", k: "Alumina purity certified" },
          { v: "1000°C", k: "Thermal capability" },
          { v: "4–50 mm", k: "Thickness formats" },
        ]}
        note="Lead times are confirmed against tile format, total lined area and whether equipment is lined in our works or at your site."
      />

      <DetailCTA heading={"Explore how our ceramic solutions\ncan protect your equipment."} />
    </div>
  );
}
