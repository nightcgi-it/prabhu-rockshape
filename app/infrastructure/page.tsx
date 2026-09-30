"use client";

import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateCounters, animateHeroTimeline } from "@/lib/useGsap";
import PageHero from "@/components/PageHero";

const IMG = {
  hero: "/images/infra-hero.jpg",
  facility: "/images/infra-facility.jpg",
  wear: "/images/cco-wear-plates.jpg",
  ceramic: "/images/high-alumina-ceramics.jpg",
  fab: "/images/industrial-fabrication.jpg",
  lab: "/images/testing-laboratory.jpg",
};

// Facility stats — numeric ones animate; the compound one is shown as static text.
const facility = [
  { count: 13587, suffix: " Sq. M.", label: "Area of Plot" },
  { count: 10000, suffix: " Sq. M.", label: "Permissible Built-up Area" },
  { count: 6004, suffix: " Sq. M.", label: "Factory Built-up Area" },
  { static: "60 + 150 Sq. M.", label: "Office & Covered Stores Area" },
];

// Testing equipment — quantity shown exactly as supplied; no invented qty for #10.
const equipment = [
  { no: "01", name: "Vernier Caliper", qty: "1 No." },
  { no: "02", name: "DFT Meter", qty: "1 No." },
  { no: "03", name: "Depth Gauge", qty: "1 No." },
  { no: "04", name: "Hardness Testing Machine", qty: "1 No." },
  { no: "05", name: "Dry Abrasion Testing Machine", qty: "1 No." },
  { no: "06", name: "Universal Testing Machine", qty: "1 No." },
  { no: "07", name: "Impact Testing Machine", qty: "1 No." },
  { no: "08", name: "Metallurgical Microscope", qty: "1 No." },
  { no: "09", name: "Image Analyzer", qty: "1 No." },
  { no: "10", name: "Chemical Analysis by Weight", qty: "" },
];

const mfg = [
  { no: "01", name: "Wear Resistant Plates", img: IMG.wear, href: "/products/wear-resistant-plates" },
  { no: "02", name: "Ceramic Products", img: IMG.ceramic, href: "/products/high-alumina-ceramics" },
  { no: "03", name: "Fabrication", img: IMG.fab, href: "/products/fabrication" },
];

const gallery = [
  { img: IMG.facility, cap: "Heavy Engineering Factory Floor", big: true },
  { img: IMG.fab, cap: "Structural Fabrication Bay" },
  { img: IMG.wear, cap: "CCO Wear Plate Hardfacing Line" },
  { img: IMG.ceramic, cap: "High Alumina Ceramic Assembly" },
  { img: IMG.lab, cap: "Quality & Testing Laboratory" },
];

export default function InfrastructurePage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);

    if (!reduced) {
      gsap.from(".teq", {
        opacity: 0, y: 30, duration: 0.5, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".teq-grid", start: "top 82%" },
      });
    }
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={IMG.hero}
        imageAlt="Prabhu Rockshape manufacturing infrastructure"
        badges={[
          { text: "Solapur Works · Active", highlight: true },
          { text: "13,587 Sq.M. Plot" },
          { text: "TÜV Nord ISO 9001:2015" },
        ]}
        titleLines={[
          "Manufacturing Scale",
          "And Precision Infrastructure",
        ]}
        accentLineIndex={1}
        description="Backed by 13,587 Sq.M. of modern manufacturing infrastructure, robotic hardfacing lines, CNC profiling, and an in-house ASTM metallurgical testing laboratory, we deliver mission-critical equipment to international standards."
        telemetry={[
          { count: 13587, suffix: " Sq.M.", lbl: "Total Plot Area" },
          { count: 10000, suffix: " Sq.M.", lbl: "Permissible Built-Up" },
          { count: 6004, suffix: " Sq.M.", lbl: "Factory Built-Up Area" },
          { count: 300, suffix: " MT", lbl: "Monthly Fabrication" },
        ]}
        ctas={[
          { label: "Explore Facility Below", href: "#facility", primary: true },
          { label: "Consult an Engineer", href: "/contact-us" },
        ]}
      />

      {/* OUR FACILITY */}
      <section className="pad wrap" id="facility">
        <div className="sec-head reveal">
          <div className="eyebrow">Scale</div>
          <h2 className="display"><span className="ln">Our Facility</span></h2>
        </div>
        <div className="facility">
          <div className="fac-stats">
            {facility.map((f, i) => (
              <div className="fac-stat" key={i}>
                {"count" in f ? (
                  <div className="fv"><span className="num" data-count={f.count} data-suffix={f.suffix}>0</span></div>
                ) : (
                  <div className="fv">{f.static}</div>
                )}
                <div className="fk">{f.label}</div>
              </div>
            ))}
          </div>
          <div className="fac-img img-reveal reveal"><Image src={IMG.facility} alt="Manufacturing facility" width={1000} height={700} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        </div>
      </section>

      {/* IN-HOUSE TESTING */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Quality Control</div>
          <h2 className="display"><span className="ln">In-House Testing Facility</span></h2>
          <p className="reveal" style={{ color: "var(--ink2)", fontSize: 17, lineHeight: 1.7, marginTop: 22, maxWidth: 640 }}>
            A dedicated in-house measuring and testing area supports our commitment to consistent, verifiable product quality across every stage of manufacturing.
          </p>
        </div>
        <div className="teq-grid">
          {equipment.map((e) => (
            <div className="teq" key={e.no}>
              <span className="teqn">{e.no}</span>
              <h4>{e.name}</h4>
              {e.qty && <span className="teqq">{e.qty}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* TESTING FOR PERFORMANCE — split */}
      <section className="split dk">
        <div className="im img-reveal parallax-img reveal rev-first"><Image src={IMG.lab} alt="In-house testing equipment" width={1000} height={700} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        <div className="tx">
          <div className="eyebrow reveal" style={{ color: "#7fc0ea" }}>Verified Performance</div>
          <h2 className="display sec-head reveal" style={{ fontSize: "clamp(28px,3.6vw,48px)", marginTop: 20 }}><span className="ln">Testing for Performance</span><span className="ln">and Quality</span></h2>
          <p className="reveal">Every product family is validated against measurable standards — from hardness, abrasion and impact testing to metallurgical and chemical analysis — so performance is proven before it reaches your plant.</p>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITY */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">What We Build</div>
          <h2 className="display"><span className="ln">Manufacturing Capability</span></h2>
        </div>
        <div className="mfg-grid">
          {mfg.map((m) => (
            <Link className="mfg reveal" href={m.href} key={m.no}>
              <div className="im img-reveal"><Image src={m.img} alt={m.name} width={800} height={550} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              <div className="bd">
                <div className="no">{m.no}</div>
                <h4>{m.name}</h4>
                <span className="lm">Explore <span className="arw">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Gallery</div>
          <h2 className="display"><span className="ln">Inside the Facility</span></h2>
        </div>
        <div className="det-gal">
          {gallery.map((g, i) => (
            <div className={`gcell img-reveal reveal${g.big ? " big" : ""}`} key={i}>
              <Image src={g.img} alt={g.cap} fill sizes="(max-width:820px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <span className="cap">{g.cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal"><span className="ln">See What Our Infrastructure</span><span className="ln">Can Deliver</span></h2>
          <div className="reveal"><Link href="/products" className="btn btn-white">Explore Our Engineering Solutions <span className="arw">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
