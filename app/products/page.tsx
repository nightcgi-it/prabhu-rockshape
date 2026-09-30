"use client";

import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

const IMG = {
  hero: "/images/products-hero.jpg",
  wear: "/images/cco-wear-plates.jpg",
  ceramic: "/images/high-alumina-ceramics.jpg",
  fab: "/images/industrial-fabrication.jpg",
};

const mainProducts = [
  {
    tag: "01 / WEAR PLATES", no: "Product 01", flip: false, img: IMG.wear, alt: "Chromium carbide overlay wear resistant plates",
    title: <>Chromium Carbide Overlay<br />Wear Resistant Plates</>,
    copy: "ROCKSHAPE Wear Resistant Plates are developed to combat wear and tear problems, reducing plant shutdowns, frequent repairs, and maintenance costs.",
    apps: ["Power", "Cement", "Sugar", "Mining", "Mineral Processing"], appLabel: "Applications",
    ctaLabel: "Explore Wear Resistant Plates", href: "/products/wear-resistant-plates", specs: null,
  },
  {
    tag: "02 / CERAMICS", no: "Product 02", flip: true, img: IMG.ceramic, alt: "High alumina ceramic tiles and lined equipment",
    title: <>High Alumina Ceramic Tiles<br />&amp; Ceramic Lined Equipment</>,
    copy: "High alumina ceramic liners provide reliable protection against abrasion, erosion, and moderate impact in demanding industrial environments.",
    apps: null, appLabel: "",
    ctaLabel: "Explore Ceramic Products", href: "/products/high-alumina-ceramics",
    specs: [{ v: "90%+", k: "Min. Alumina" }, { v: "9", k: "Mohs Hardness" }, { v: "1000°C", k: "Up To" }, { v: "4–50mm", k: "Thickness" }],
  },
  {
    tag: "03 / FABRICATION", no: "Product 03", flip: false, img: IMG.fab, alt: "Industrial and structural fabrication",
    title: <>Industrial &amp; Structural<br />Fabrication</>,
    copy: "Prabhu Rockshape Machinery Ltd. provides specialized industrial and structural fabrication solutions for the cement, steel, power, mining, and infrastructure sectors.",
    apps: ["Cement", "Steel", "Power", "Mining", "Infrastructure"], appLabel: "Sectors Served",
    ctaLabel: "Explore Fabrication", href: "/products/fabrication", specs: null,
  },
];

export default function ProductsPage() {
  const scope = usePageAnimations(({ gsap, ScrollTrigger, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);

    if (!reduced) {
      // Product image scrub parallax
      gsap.utils.toArray<HTMLElement>(".prod .im img").forEach((img) => {
        gsap.fromTo(img, { yPercent: -4 }, {
          yPercent: 4, ease: "none",
          scrollTrigger: { trigger: img.closest(".prod"), start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // HORIZONTAL SCROLL (desktop only)
      const mq = window.matchMedia("(min-width:961px)");
      if (mq.matches) {
        const track = scope.current?.querySelector<HTMLElement>("#htrack");
        const section = scope.current?.querySelector<HTMLElement>("#addl");
        if (track && section) {
          const scrollLen = () => track.scrollWidth - window.innerWidth + 64;
          gsap.to(track, {
            x: () => -scrollLen(), ease: "none",
            scrollTrigger: {
              trigger: section, start: "top top",
              end: () => "+=" + scrollLen(),
              pin: true, scrub: 1, invalidateOnRefresh: true,
            },
          });
        }
      }
    }
  });

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={IMG.hero}
        imageAlt="Engineered wear protection products"
        badges={[
          { text: "Core Product Lines", highlight: true },
          { text: "Engineered Metallurgy" },
          { text: "Custom Plant Packages" },
        ]}
        titleLines={[
          "Engineered Products",
          "For Extreme Wear",
          "And Structural Demands",
        ]}
        accentLineIndex={2}
        description="Prabhu Rockshape Machinery Ltd. designs and manufactures high-performance wear-resistant products, Chromium Carbide Overlay (CCO) plates, high-alumina ceramics, and heavy structural fabrications engineered to minimize plant downtime."
        telemetry={[
          { val: "55–65 HRC", lbl: "CCO Hardfacing Overlay" },
          { count: 90, suffix: "%+", lbl: "Alumina Ceramic Purity" },
          { count: 300, suffix: " MT", lbl: "Monthly Heavy Fabrication" },
          { count: 1000, suffix: "°C", lbl: "Thermal Capability" },
        ]}
        ctas={[
          { label: "Explore Product Range", href: "#products-range", primary: true },
          { label: "Request Technical Specs", href: "/contact-us" },
        ]}
      />

      {/* RANGE HEADER */}
      <section className="pad-sm" id="products-range">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 820 }}>
            <div className="eyebrow">Product Range</div>
            <h2 className="display"><span className="ln">Our Product Range</span></h2>
          </div>
        </div>
      </section>

      {/* MAIN PRODUCTS */}
      {mainProducts.map((p, i) => (
        <article className={`prod${p.flip ? " flip" : ""}`} key={p.no} style={i === mainProducts.length - 1 ? { borderBottom: "1px solid var(--line)" } : undefined}>
          <div className="im img-reveal"><span className="tag">{p.tag}</span><Image src={p.img} alt={p.alt} width={1200} height={800} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div className="tx reveal">
            <div className="no">{p.no}</div>
            <h3>{p.title}</h3>
            <p>{p.copy}</p>
            {p.specs && (
              <div className="specrow">{p.specs.map((s) => <div className="sp" key={s.k}><div className="v">{s.v}</div><div className="k">{s.k}</div></div>)}</div>
            )}
            {p.apps && (
              <div className="applbl"><div className="lb">{p.appLabel}</div><div className="chips">{p.apps.map((a) => <span key={a}>{a}</span>)}</div></div>
            )}
            <div className="cta"><Link href={p.href} className="btn btn-solid">{p.ctaLabel} <span className="arw">→</span></Link></div>
          </div>
        </article>
      ))}

      {/* ADDITIONAL MATERIALS — horizontal scroll */}
      <section className="addl" id="addl">
        <div className="wrap addl-head">
          <div className="sec-head reveal">
            <div className="eyebrow" style={{ color: "#7fc0ea" }}>Material Portfolio</div>
            <h2 className="display"><span className="ln">Additional Material Solutions</span></h2>
          </div>
        </div>
        <div className="scroll-hint reveal">SCROLL TO EXPLORE</div>
        <div className="hscroll-viewport">
          <div className="htrack" id="htrack">
            <div className="mcard">
              <div className="no">Material A</div>
              <h3>Through Hardened Plates</h3>
              <div className="sub">ROCKSHAPE — Hardened Wear Plate Range</div>
              <div className="grades">{["400", "450", "500", "600"].map((g) => <div className="g" key={g}><div className="gv">{g}</div><div className="gk">BHN</div></div>)}</div>
              <div className="applbl"><div className="lb">Applications</div><div className="chips">{["Mining", "Quarrying", "Construction", "Cement", "Steel", "Defence"].map((a) => <span key={a}>{a}</span>)}</div></div>
            </div>
            <div className="mcard">
              <div className="no">Material B</div>
              <h3>High Manganese Steels</h3>
              <div className="sub">Work-Hardening Impact Grades</div>
              <div className="grades">{["Mn13", "Mn14", "Mn16"].map((g) => <div className="g" key={g}><div className="gv">{g}</div><div className="gk">Grade</div></div>)}</div>
              <div className="applbl"><div className="lb">Applications</div><div className="chips">{["Mining", "Quarrying", "Cement", "Steel", "Earthmoving", "Defence"].map((a) => <span key={a}>{a}</span>)}</div></div>
            </div>
            <div className="mcard" style={{ justifyContent: "center", alignItems: "flex-start", background: "transparent", borderStyle: "dashed" }}>
              <div className="no">Need Guidance?</div>
              <h3 style={{ fontSize: 28 }}>Not Sure Which<br />Grade Fits?</h3>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: 15, lineHeight: 1.7, margin: "8px 0 28px", maxWidth: 360 }}>Our engineers match material grade to your wear pattern, impact profile and operating temperature.</p>
              <Link href="/contact-us" className="btn btn-white">Talk to Our Engineers <span className="arw">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS BAND */}
      <section className="appsband pad">
        <div className="wrap appsband-in">
          <div className="reveal">
            <div className="eyebrow" style={{ color: "#7fc0ea" }}>Application-Based Engineering</div>
            <h2 className="display" style={{ marginTop: 22 }}><span className="ln">Designed Around</span><span className="ln">Real Industrial Applications</span></h2>
            <p>Every product is selected and engineered against the specific wear patterns, operating conditions and service requirements of your application — not sold from a catalogue.</p>
          </div>
          <div className="reveal"><Link href="/applications" className="btn btn-white">View Applications <span className="arw">→</span></Link></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta steel pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal"><span className="ln">Looking for the Right</span><span className="ln">Wear Protection Solution?</span></h2>
          <div className="reveal"><Link href="/contact-us" className="btn btn-solid">Talk to Our Engineers <span className="arw">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
