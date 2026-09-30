"use client";

import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import PageHero from "@/components/PageHero";
import DeliveryProcess, { DeliveryStage } from "@/components/DeliveryProcess";

const HERO_IMG = "/images/projects-hero.jpg";
const SOLAR_IMG = "/images/solar-industrial.jpg";

// Turnkey solar scope, staged the way the project is actually delivered.
const deliveryStages: DeliveryStage[] = [
  { icon: "design", title: "Engineering of Solar Structure", meta: "Structural design", desc: "Roof or ground structure is designed around your span, load and wind zone, then detailed for fabrication." },
  { icon: "dispatch", title: "Supply of Panels & BOS", meta: "Panels · Batteries · BOS", desc: "Solar panels, batteries, mounting hardware and the full balance of system are procured and delivered to site." },
  { icon: "manufacture", title: "Installation & Commissioning", meta: "Turnkey execution", desc: "Structures are erected, modules mounted, cabling and protection installed, and the plant is commissioned end to end." },
  { icon: "test", title: "Testing & Quality Assurance", meta: "Performance verified", desc: "Generation, insulation and protection systems are tested and documented before handover." },
  { icon: "support", title: "Maintenance & Support", meta: "Lifecycle support", desc: "Scheduled maintenance, cleaning cycles and technical support keep output at the level the plant was sized for." },
];

const deliveryDocs = [
  "Structural Design & Layout Drawings",
  "Panel & BOS Datasheets",
  "Commissioning Test Reports",
  "Single Line Diagram (SLD)",
  "Warranty Documentation",
  "Maintenance Schedule",
];

const benefits = [
  "Reduced energy costs and carbon footprint.",
  "Reliable and efficient energy generation.",
  "Expert support and maintenance services.",
];

export default function ProjectsPage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={HERO_IMG}
        imageAlt="Turnkey industrial solar and engineering project execution"
        badges={[
          { text: "Turnkey Project Delivery", highlight: true },
          { text: "Solar EPC & BOS" },
          { text: "Lifecycle Commissioning" },
        ]}
        titleLines={[
          "Industrial Projects",
          "From Design To Execution",
        ]}
        accentLineIndex={1}
        description="Prabhu Rockshape Machinery Ltd. delivers comprehensive turnkey engineering and solar installations—including custom mounting structures, panels, batteries, balance of system (BOS), and precision quality assurance."
        telemetry={[
          { val: "Turnkey", lbl: "Engineering & EPC" },
          { val: "Complete BOS", lbl: "Modules & Structures" },
          { val: "Commissioning", lbl: "Testing & Handover" },
          { val: "Full Support", lbl: "Lifecycle Maintenance" },
        ]}
        ctas={[
          { label: "Explore Turnkey Scope", href: "#delivery", primary: true },
          { label: "Consult Project Team", href: "/contact-us" },
        ]}
      />

      {/* SOLAR PROJECT */}
      <section className="pad wrap">
        <div className="sec-head reveal" style={{ maxWidth: 900 }}>
          <div className="eyebrow">Turnkey Solar</div>
          <h2 className="display"><span className="ln">Supply, Installation,</span><span className="ln">and Commissioning</span><span className="ln">of Solar Project</span></h2>
          <div className="proj-sub reveal">Including Panel, Batteries and Structure of Solar Panel</div>
        </div>
        <div className="proj-intro">
          <div className="im img-reveal reveal" style={{ background: "var(--steel)" }}>
            <Image src={SOLAR_IMG} alt="Solar panel installation" width={1200} height={800} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="reveal">
            <p>Prabhu Rockshape Machinery Ltd offers a comprehensive turnkey solution for solar structure and solar panel installation, catering to the growing demand for renewable energy.</p>
            <p>We provide high-quality products and services, ensuring maximum energy output and customer satisfaction.</p>
          </div>
        </div>
      </section>

      <DeliveryProcess
        tone="wash"
        eyebrow="Delivery"
        titleLines={["Scope of Work"]}
        intro="A turnkey solar project is handed over as one accountable scope: we engineer the structure, supply the panels and balance of system, install and commission the plant, prove its output, and stay on for maintenance."
        stages={deliveryStages}
        deliverables={deliveryDocs}
        deliverablesTitle="Handed Over at Commissioning"
        assurances={[
          { v: "Turnkey", k: "Single point of responsibility" },
          { v: "Complete BOS", k: "Panels, batteries, structure" },
          { v: "Lifecycle", k: "Maintenance & support" },
        ]}
        note="Project programmes are built around your shutdown window, roof access and sanctioned load."
      />

      {/* BENEFITS */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Value Delivered</div>
          <h2 className="display"><span className="ln">Project Benefits</span></h2>
        </div>
        <div className="benefits">
          {benefits.map((b, i) => (
            <div className="benefit reveal" key={i}><span className="bic" /><p>{b}</p></div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal"><span className="ln">Let&apos;s Build the</span><span className="ln">Next Project</span></h2>
          <div className="reveal"><Link href="/contact-us" className="btn btn-white">Talk to Our Engineers <span className="arw">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
