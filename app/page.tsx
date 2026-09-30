"use client";

import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateCounters } from "@/lib/useGsap";
import { site } from "@/lib/site";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import { BLOG_POSTS } from "@/lib/blog";

const IMG = {
  hero: "/images/hero-facility.jpg",
  heroVertical: "/images/hero-vertical.jpg",
  cco: "/images/cco-wear-plates.jpg",
  ceramic: "/images/high-alumina-ceramics.jpg",
  fab: "/images/industrial-fabrication.jpg",
  wear: "/images/wear-protection-app.jpg",
  liner: "/images/high-alumina-ceramics.jpg",
  lab: "/images/testing-laboratory.jpg",
  solar: "/images/solar-industrial.jpg",
};

const sectorsData = [
  {
    no: "01",
    name: "Mining & Quarrying",
    cat: "Severe Abrasion",
    img: "/images/sector-mining.jpg",
    tags: ["Crushers", "Screens", "Conveyors", "Haul Liners"],
    href: "/applications",
  },
  {
    no: "02",
    name: "Cement & Clinker",
    cat: "High Impact & Heat",
    img: "/images/sector-cement.jpg",
    tags: ["Rotary Kilns", "Preheaters", "Clinker Coolers", "V-Separators"],
    href: "/applications",
  },
  {
    no: "03",
    name: "Power Generation",
    cat: "Erosion Control",
    img: "/images/sector-power.jpg",
    tags: ["Coal Handling", "Ash Handling", "Boilers", "Fan Blades"],
    href: "/applications",
  },
  {
    no: "04",
    name: "Steel & Metallurgy",
    cat: "Extreme Thermal",
    img: "/images/sector-steel.jpg",
    tags: ["Sinter Plants", "Blast Furnaces", "Ladle Liners", "Chutes"],
    href: "/applications",
  },
  {
    no: "05",
    name: "Mineral Processing",
    cat: "Slurry & Wear",
    img: "/images/sector-mineral.jpg",
    tags: ["Transfer Chutes", "Hydrocyclones", "Silos", "Piping"],
    href: "/applications",
  },
  {
    no: "06",
    name: "Heavy Fabrication",
    cat: "300 MT / Month",
    img: "/images/sector-fabrication.jpg",
    tags: ["SKS Separators", "Gantries", "Ducting", "Support Frames"],
    href: "/products/fabrication",
  },
  {
    no: "07",
    name: "Solar & Clean Energy",
    cat: "Turnkey BOS",
    img: "/images/sector-solar.jpg",
    tags: ["Mounting Structures", "Turnkey EPC", "Plant BOS"],
    href: "/projects",
  },
  {
    no: "08",
    name: "Defence & Heavy Infra",
    cat: "Certified Quality",
    img: "/images/sector-defence.jpg",
    tags: ["Ballistic Armor", "Precision Testing", "Custom Assemblies"],
    href: "/applications",
  },
];

const products = [
  { no: "01 / CCO Plates", title: "Chromium Carbide Overlay Wear Resistant Plates", img: IMG.cco, alt: "Wear resistant plates", href: "/products/wear-resistant-plates", copy: "Our expertise lies in designing and manufacturing Chromium Carbide Overlay (CCO) Wear Plates, engineered to withstand extreme wear environments.", specs: ["55–65 HRC Hardness", "Open Arc Welding", "Up to 700°C"] },
  { no: "02 / Ceramics", title: "High Alumina Ceramic Products", img: IMG.ceramic, alt: "Ceramic products", href: "/products/high-alumina-ceramics", copy: "In addition to wear plates, we are among India's leading manufacturers of High Alumina Ceramic Products, developed to combat severe abrasion and high-velocity erosion.", specs: ["90%+ Alumina", "9 Mohs Hardness", "1000°C Capability"] },
  { no: "03 / Fabrication", title: "Industrial & Structural Fabrication", img: IMG.fab, alt: "Structural fabrication", href: "/products/fabrication", copy: "Prabhu Rockshape Machinery Ltd. provides specialized industrial and structural fabrication solutions for the cement, steel, power, mining, and infrastructure sectors.", specs: ["300 MT/Month Capacity", "SKS Separators", "Heavy Gantries"] },
];

const approachSteps = [
  {
    no: "01",
    title: "Application-Based Engineering",
    desc: "Every operating environment is unique. Our engineering team conducts comprehensive on-site audits, analyzing wear mechanisms, impact trajectories, friction coefficients, and operating temperatures to specify optimal metallurgical formulations.",
    tags: ["On-Site Wear Audit", "Finite Element Modeling", "Failure Analysis"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <circle cx="24" cy="7" r="3.5" />
        <path d="M24 10.5v3" />
        <path d="M22 14L10 41" />
        <path d="M26 14L38 41" />
        <path d="M14.5 30h19" />
        <line x1="24" y1="28" x2="24" y2="32" strokeWidth="1.8" />
        <line x1="19" y1="28.5" x2="19" y2="31.5" strokeWidth="1.8" />
        <line x1="29" y1="28.5" x2="29" y2="31.5" strokeWidth="1.8" />
        <path d="M15 37a13 13 0 0 1 18 0" strokeDasharray="2.5 3" strokeWidth="1.8" />
        <circle cx="10" cy="41" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Advanced Wear Protection",
    desc: "We manufacture Chromium Carbide Overlay (CCO) wear plates with hardness exceeding 55–65 HRC and 90%+ high-purity alumina ceramics designed to withstand extreme impact, severe gouging abrasion, and operating temperatures up to 1000°C.",
    tags: ["CCO Overlay (55–65 HRC)", "90%+ Alumina", "Multi-Pass Arc"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <path d="M24 4L8 10v14c0 11.5 6.8 22.3 16 26 9.2-3.7 16-14.5 16-26V10L24 4z" />
        <path d="M24 11L14 15v9c0 7.8 4.3 15.2 10 18 5.7-2.8 10-10.2 10-18v-9L24 11z" strokeDasharray="3 2" strokeWidth="1.8" />
        <polygon points="24,19 31,26 24,33 17,26" fill="currentColor" fillOpacity="0.16" />
        <line x1="24" y1="19" x2="24" y2="33" strokeWidth="1.8" />
        <line x1="17" y1="26" x2="31" y2="26" strokeWidth="1.8" />
        <circle cx="24" cy="4" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Customized Solutions",
    desc: "We don't provide one-size-fits-all fixes. From customized chute liners, pipe bends, and cyclone cones to modular bolt-in wear packages, our components are CAD-designed to seamlessly fit into your existing plant infrastructure.",
    tags: ["Bespoke CAD/CAM", "Modular Drop-In", "Interchangeable Liners"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <rect x="6" y="8" width="36" height="7" rx="1.5" />
        <path d="M10 15v18l5-3V15" />
        <path d="M30 15v18l-5-3V15" />
        <line x1="16" y1="8" x2="16" y2="12" strokeWidth="1.5" />
        <line x1="20" y1="8" x2="20" y2="13" strokeWidth="1.8" />
        <line x1="24" y1="8" x2="24" y2="12" strokeWidth="1.5" />
        <line x1="28" y1="8" x2="28" y2="13" strokeWidth="1.8" />
        <line x1="32" y1="8" x2="32" y2="12" strokeWidth="1.5" />
        <line x1="36" y1="8" x2="36" y2="13" strokeWidth="1.8" />
        <path d="M15 26h10v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V26z" fill="currentColor" fillOpacity="0.15" />
        <circle cx="20" cy="33" r="2.2" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "Modern Manufacturing Infrastructure",
    desc: "Our Solapur facility spans 13,587 sq.m. of integrated production space equipped with multi-head automated hardfacing machines, CNC plasma and oxy-fuel cutting systems, and a heavy structural fabrication capacity of 300 MT per month.",
    tags: ["300 MT/Mo Capacity", "CNC Plasma Profiling", "Automated Hardfacing"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <path d="M4 14l10-8 10 8 10-8 10 8v26H4V14z" />
        <line x1="4" y1="21" x2="44" y2="21" strokeDasharray="3 2" strokeWidth="1.8" />
        <rect x="18" y="18" width="12" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
        <line x1="24" y1="24" x2="24" y2="30" strokeWidth="2" />
        <path d="M20 30h8l-2 5h-4l-2-5z" fill="currentColor" fillOpacity="0.25" />
        <path d="M21 38l3 4 3-4" strokeWidth="2" />
        <circle cx="24" cy="42" r="1.5" fill="currentColor" />
        <line x1="8" y1="40" x2="40" y2="40" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    no: "05",
    title: "In-House Testing Facilities",
    desc: "Quality is backed by rigorous empirical science. Our dedicated metallurgical laboratory features ASTM G65 dry sand rubber wheel abrasion testing, optical microstructure analyzers, and Universal Testing Machines to verify every production heat.",
    tags: ["ASTM G65 Abrasion", "Rockwell Hardness", "Optical Microstructure"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <line x1="16" y1="7" x2="22" y2="13" strokeWidth="2.8" />
        <rect x="19" y="10" width="7" height="13" rx="1.5" transform="rotate(-45 22.5 16.5)" fill="currentColor" fillOpacity="0.12" />
        <path d="M26 23l4 4" strokeWidth="3" />
        <line x1="28" y1="27" x2="30" y2="29" strokeDasharray="1.5 1.5" strokeWidth="1.5" />
        <path d="M14 18c-5 3-7 9-7 15 0 5 3 7 7 7h18" />
        <rect x="22" y="30" width="18" height="3.5" rx="1" fill="currentColor" fillOpacity="0.25" />
        <circle cx="11" cy="33" r="3.5" />
        <circle cx="11" cy="33" r="1.2" fill="currentColor" />
        <rect x="9" y="40" width="30" height="4" rx="1.5" />
      </svg>
    ),
  },
  {
    no: "06",
    title: "Continuous Innovation",
    desc: "Partnering closely with major cement, steel, and mining operators, we continually develop proprietary wear chemistries, advanced composite vulcanization, and optimized geometry that double equipment service life and reduce unscheduled shutdowns.",
    tags: ["Flux Metallurgy", "Ceramic-Rubber Bonding", "Zero-Downtime Design"],
    icon: (
      <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="approach-svg-icon">
        <circle cx="24" cy="24" r="6" fill="currentColor" fillOpacity="0.22" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(35 24 24)" />
        <ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(-35 24 24)" />
        <circle cx="40" cy="13" r="2.5" fill="currentColor" />
        <circle cx="8" cy="35" r="2.5" fill="currentColor" />
        <circle cx="40" cy="35" r="2" fill="currentColor" />
        <circle cx="8" cy="13" r="2" fill="currentColor" />
        <line x1="24" y1="12" x2="24" y2="15" strokeWidth="1.8" />
        <line x1="24" y1="33" x2="24" y2="36" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const counters = [
  { n: 30, s: "+", l: "Years of Industry Excellence" },
  { n: 300, s: " MT", l: "Fabrication Capacity / Month" },
  { n: 90, s: "%+", l: "Minimum Alumina Content" },
  { n: 9, s: " Mohs", l: "Approximate Ceramic Hardness" },
  { n: 1000, s: "°C", l: "Ceramic Temperature Capability" },
];

const fabrication = ["SKS Separators","V-Separators","Cyclones","Ducting Systems","Industrial Piping","Hoppers","Chutes","Bins","Silos","Support Structures","Galleries","Platforms","Stairways","Handrails","Purlins","Trusses","Gantries","Conveyor Structures","Equipment Support Frames","Customized Heavy Assemblies"];
const industries = ["Mining","Cement","Power","Steel","Chemical","Defence","Oil & Gas","Construction","Infrastructure","Mineral Processing"];
const scale = [{ v: "13,587 Sq.M.", k: "Area of Plot" },{ v: "10,000 Sq.M.", k: "Permissible Built-up Area" },{ v: "6,004 Sq.M.", k: "Factory Built-up Area" }];
const testingFacilities = [
  {
    id: "TEST_SYS // 01",
    name: "Hardness Testing Machine",
    standard: "ASTM E18 · Rockwell C / Brinell",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "TEST_SYS // 02",
    name: "Dry Abrasion Testing Machine",
    standard: "ASTM G65 · Rubber Wheel Rig",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
      </svg>
    ),
  },
  {
    id: "TEST_SYS // 03",
    name: "Universal Testing Machine",
    standard: "1000 kN · Tensile & Bend Testing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: "TEST_SYS // 04",
    name: "Impact Testing Machine",
    standard: "Charpy V-Notch · Dynamic Toughness",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
  },
  {
    id: "TEST_SYS // 05",
    name: "Metallurgical Microscope",
    standard: "1000X Optical · Grain Boundary NDT",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h12" />
        <path d="M10 22h4" />
        <path d="m14 2-1 4H11L10 2" />
        <path d="M8.5 6h7l4 12H4.5Z" />
      </svg>
    ),
  },
  {
    id: "TEST_SYS // 06",
    name: "Image Analyzer",
    standard: "Microstructure Digital Morphology",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    if (reduced) {
      gsap.set(".hero-title-full .ln span", { yPercent: 0 });
      gsap.set("#heroBackdrop", { scale: 1 });
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("#heroBackdrop", { scale: 1.15 }, { scale: 1.02, duration: 1.8, ease: "power3.out" })
        .from(".hero-hud-pill", { opacity: 0, y: -20, duration: 0.6, stagger: 0.12 }, "-=1.3")
        .from(".hero-title-full .ln span", { yPercent: 110, duration: 0.95, stagger: 0.14 }, "-=0.9")
        .from(".hero-desc-full", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
        .from(".telemetry-item", { opacity: 0, y: 20, duration: 0.55, stagger: 0.09 }, "-=0.4")
        .from(".btn-hero-solid, .btn-hero-ghost", { opacity: 0, y: 18, duration: 0.5, stagger: 0.1 }, "-=0.3");

      // Approach cards staggered scroll reveal
      gsap.utils.toArray<HTMLElement>(".approach-card").forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            delay: (idx % 3) * 0.1,
          }
        );
      });
    }
    animateCounters(scope.current || document);
  });

  return (
    <div ref={scope}>
      {/* HERO FULL BACKGROUND */}
      <section className="hero-full">
        <div className="hero-full-bg">
          <Image
            id="heroBackdrop"
            src={IMG.hero}
            alt="Prabhu Rockshape Advanced Manufacturing Facility"
            fill
            priority
            quality={95}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "right 35%" }}
          />
        </div>
        <div className="hero-full-overlay" />

        <div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-content-full">
            <div className="hero-badge-strip">
              <div className="hero-hud-pill highlight">
                <span className="live-indicator" />
                <span>Solapur Works · Active</span>
              </div>
              <div className="hero-hud-pill">
                <span>TÜV Nord ISO 9001:2015</span>
              </div>
              <div className="hero-hud-pill">
                <span>Est. {site.foundedYear} · Wear Protection Systems</span>
              </div>
            </div>

            <h1 className="hero-title-full">
              <span className="ln"><span>We Shape</span></span>
              <span className="ln"><span>What Moves</span></span>
              <span className="ln"><span className="shimmer-cyan">The Nation</span></span>
            </h1>

            <p className="hero-desc-full">
              Prabhu Rockshape Machinery Ltd. engineers mission-critical wear protection systems, Chromium Carbide Overlay (CCO) plates, and high-alumina ceramic liners for heavy industries battling severe abrasion, high-velocity erosion, and extreme operational thermal loads.
            </p>

            <div className="hero-telemetry-row">
              <div className="telemetry-item">
                <div className="val num" data-count={30} data-suffix="+">0</div>
                <div className="lbl">Years of Industry Excellence</div>
              </div>
              <div className="telemetry-item">
                <div className="val num" data-count={300} data-suffix=" MT">0</div>
                <div className="lbl">Monthly Heavy Fabrication</div>
              </div>
              <div className="telemetry-item">
                <div className="val">55–65 HRC</div>
                <div className="lbl">Hardness Overlay Plates</div>
              </div>
              <div className="telemetry-item">
                <div className="val num" data-count={90} data-suffix="%+">0</div>
                <div className="lbl">Alumina Ceramic Purity</div>
              </div>
            </div>

            <div className="hero-cta-row">
              <Link href="#products" className="btn-hero-solid">
                Explore Our Products <span className="arw">→</span>
              </Link>
              <Link href="/contact-us" className="btn-hero-ghost">
                Talk to Our Engineers <span className="arw">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="s2 pad">
        <div className="wrap s2-grid">
          <div className="sec-head reveal">
            <div className="eyebrow">Engineering Excellence</div>
            <h2 className="display"><span className="ln">Engineered for Performance.</span><span className="ln">Built for Industry.</span></h2>
          </div>
          <p className="reveal">With over 30 years of industry excellence, we help OEMs, Cement Plants, Steel Plants, Mining &amp; Mineral Processing Units, Power Plants, and Engineering Industries enhance equipment reliability, reduce maintenance costs, and extend operational life.</p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="pad wrap" id="products">
        <div className="sec-head reveal">
          <div className="eyebrow">What We Do</div>
          <h2 className="display"><span className="ln">Advanced Wear Protection</span><span className="ln">&amp; Engineered Solutions</span></h2>
        </div>
        <div className="cards3">
          {products.map((p) => (
            <Link key={p.no} className="pcard reveal" href={p.href}>
              <div className="im img-reveal"><Image src={p.img} alt={p.alt} width={800} height={550} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              <div className="bd">
                <div className="no">{p.no}</div>
                <h3>{p.title}</h3>
                <div className="card-spec-bar">
                  {p.specs.map((s) => (
                    <span className="card-spec-pill" key={s}>{s}</span>
                  ))}
                </div>
                <p>{p.copy}</p>
                <span className="lm">Learn More <span className="arw">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="approach-sec" id="approach">
        <div className="wrap">
          <div className="approach-header reveal">
            <div className="eyebrow">Our Approach</div>
            <h2 className="display">
              <span className="ln">Protecting Equipment.</span>
              <span className="ln">Enhancing Performance.</span>
              <span className="ln">Delivering Reliability.</span>
            </h2>
            <p>
              Our experienced team of engineers and metallurgists evaluates every application individually to map wear patterns, kinetic impact, and thermal stresses—providing tailored techno-commercial solutions that maximize equipment uptime while drastically reducing maintenance overhead.
            </p>
          </div>

          <div className="approach-grid">
            {approachSteps.map((step) => (
              <div className="approach-card" key={step.no}>
                <div className="card-laser-line" />
                <div>
                  <div className="approach-top">
                    <div className="approach-step-pill">
                      <span className="step-live-dot" />
                      <span className="approach-num">STAGE // {step.no}</span>
                    </div>
                    <div className="approach-icon-wrap">
                      <div className="icon-glow-backdrop" />
                      {step.icon}
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="approach-tags">
                  {step.tags.map((t) => (
                    <span className="approach-tag-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="s5 pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">By the Numbers</div>
            <h2 className="display"><span className="ln">Built Around</span><span className="ln">Industrial Performance</span></h2>
          </div>
          <div className="counters">
            {counters.map((c) => (
              <div className="ct" key={c.l}>
                <div className="num" data-count={c.n} data-suffix={c.s}>0</div>
                <div className="lb">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="split">
        <div className="im img-reveal parallax-img reveal rev-first"><Image src={IMG.wear} alt="Wear resistant plate" width={1000} height={700} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        <div className="tx">
          <div className="eyebrow reveal">Wear Protection</div>
          <h2 className="display sec-head reveal" style={{ fontSize: "clamp(30px,4vw,52px)", marginTop: 20 }}><span className="ln">Engineered to</span><span className="ln">Withstand Extreme Wear</span></h2>
          <p className="reveal">Wear and Tear: A Common Problem in Power, Cement, Sugar, Mining, and Mineral Processing Industries.</p>
          <p className="reveal">Continuous research and development have led to various wear resistance methods. We have developed ROCKSHAPE Wear Resistant Plates to combat wear and tear problems, reducing plant shutdowns, frequent repairs, and maintenance costs, ultimately minimizing heavy losses.</p>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="split dk">
        <div className="tx">
          <div className="eyebrow reveal" style={{ color: "#7fc0ea" }}>High Alumina Ceramics</div>
          <h2 className="display sec-head reveal" style={{ fontSize: "clamp(30px,4vw,52px)", marginTop: 20 }}><span className="ln">High Alumina.</span><span className="ln">High Performance.</span><span className="ln">Long Service Life.</span></h2>
          <p className="reveal">Prabhu Rockshape Machinery Ltd. manufactures high alumina ceramic liners with a minimum alumina content of 90%, designed to provide reliable protection against abrasion, erosion, and moderate impact in demanding industrial environments.</p>
          <div className="techrow reveal">
            <div className="tchip"><div className="v">90%+</div><div className="k">Alumina</div></div>
            <div className="tchip"><div className="v">9</div><div className="k">Mohs Hardness</div></div>
            <div className="tchip"><div className="v">1000°C</div><div className="k">Max Temp</div></div>
            <div className="tchip"><div className="v">4–50mm</div><div className="k">Thickness</div></div>
          </div>
        </div>
        <div className="im img-reveal parallax-img reveal"><Image src={IMG.liner} alt="Ceramic liners" width={1000} height={700} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
      </section>

      {/* SECTION 8 */}
      <section className="pad wrap" id="fabrication">
        <div className="sec-head reveal">
          <div className="eyebrow">Fabrication</div>
          <h2 className="display"><span className="ln">Precision Fabrication</span><span className="ln">for Demanding Industries</span></h2>
        </div>
        <ul className="fablist reveal">{fabrication.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="fabbig reveal"><div className="v">Up to 300 MT</div><div className="k">Per Month Capacity</div></div>
      </section>

      {/* SECTION 9: SECTORS SERVED */}
      <section className="sectors-full-grey-sec" id="industries">
        <div className="wrap">
          <div className="sec-head sec-head-grey reveal">
            <div className="eyebrow" style={{ color: "#0C5186" }}>Sectors Served</div>
            <h2 className="display"><span className="ln">Engineering Solutions</span><span className="ln">Across Core Industries</span></h2>
            <p>
              Proven wear protection systems, specialized ceramic liners, and precision structural fabrications engineered to combat severe operating conditions across India&apos;s primary industrial sectors.
            </p>
          </div>
          <div className="sector-grid">
            {sectorsData.map((sec) => (
              <Link className="sector-card img-reveal reveal" href={sec.href} key={sec.no}>
                <div className="sector-bg">
                  <Image src={sec.img} alt={sec.name} fill sizes="(max-width:640px) 100vw, (max-width:1200px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="sector-overlay" />
                <div className="sector-top">
                  <span className="sector-no">{sec.no} // SECTOR</span>
                  <span className="sector-pill">{sec.cat}</span>
                </div>
                <div className="sector-content">
                  <h3 className="sector-title">{sec.name}</h3>
                  <div className="sector-tags">
                    {sec.tags.map((t) => (
                      <span className="sector-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="sector-cta">Explore Solutions <span className="arw">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: INFRASTRUCTURE */}
      <section className="infra-sec" id="infrastructure">
        <div className="infra-grid-bg" />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="sec-head reveal">
            <div className="eyebrow">Infrastructure</div>
            <h2 className="display"><span className="ln">Built for Industrial Scale</span></h2>
            <p style={{ color: "var(--ink2)", fontSize: 17, lineHeight: 1.7, marginTop: 16, maxWidth: 700 }}>
              Integrated heavy engineering complex equipped with heavy overhead gantry cranes, precision automated cladding stations, and specialized metallurgical testing labs.
            </p>
          </div>

          <div className="infra-metrics-grid">
            <div className="infra-card reveal">
              <div className="infra-card-draw-line draw-line-h" />
              <div className="infra-card-top">
                <span className="infra-tag">// SITE_PARAM_01</span>
                <span className="infra-plus">+</span>
              </div>
              <div className="infra-num-wrap">
                <span className="infra-num" data-count="13587">0</span>
                <span className="infra-unit">Sq.M.</span>
              </div>
              <div className="infra-label">Area of Plot</div>
            </div>

            <div className="infra-card reveal">
              <div className="infra-card-draw-line draw-line-h" />
              <div className="infra-card-top">
                <span className="infra-tag">// SITE_PARAM_02</span>
                <span className="infra-plus">+</span>
              </div>
              <div className="infra-num-wrap">
                <span className="infra-num" data-count="10000">0</span>
                <span className="infra-unit">Sq.M.</span>
              </div>
              <div className="infra-label">Permissible Built-up Area</div>
            </div>

            <div className="infra-card reveal">
              <div className="infra-card-draw-line draw-line-h" />
              <div className="infra-card-top">
                <span className="infra-tag">// SITE_PARAM_03</span>
                <span className="infra-plus">+</span>
              </div>
              <div className="infra-num-wrap">
                <span className="infra-num" data-count="6004">0</span>
                <span className="infra-unit">Sq.M.</span>
              </div>
              <div className="infra-label">Factory Built-up Area</div>
            </div>
          </div>

          <div style={{ marginTop: 44 }} className="reveal">
            <Link href="/infrastructure" className="btn btn-solid">
              Explore Infrastructure <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: QUALITY CONTROL */}
      <section className="lab-sec" id="quality">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Quality Control</div>
            <h2 className="display">
              <span className="ln">In-House Testing</span>
              <span className="ln">for Confident Performance</span>
            </h2>
            <p style={{ color: "var(--ink2)", fontSize: 17, lineHeight: 1.7, marginTop: 16, maxWidth: 720 }}>
              Every heat and production batch is empirically certified at our Solapur metallurgical laboratory to meet rigorous international wear and toughness standards.
            </p>
          </div>

          <div className="lab-test-grid">
            {testingFacilities.map((machine) => (
              <div className="lab-card reveal" key={machine.name}>
                <div className="lab-laser-line" />
                <div className="lab-icon-box">
                  {machine.icon}
                </div>
                <div className="lab-meta">
                  <div className="lab-sys-id">{machine.id}</div>
                  <h4>{machine.name}</h4>
                  <div className="lab-standard">{machine.standard}</div>
                </div>
                <div className="lab-status-dot" title="Calibrated & Active" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44 }} className="reveal">
            <Link href="/infrastructure" className="btn btn-ghost">
              View Testing Facilities <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12 */}
      <section className="s12 pad-sm">
        <div className="wrap">
          <h2 className="display reveal"><span className="ln">Committed to</span><span className="ln">Quality &amp; Reliability</span></h2>
          <p className="reveal">We are proudly certified under TÜV Nord ISO 9001:2015, reflecting our dedication to quality, reliability, and customer satisfaction.</p>
          <div className="cert-badge reveal"><b>TÜV NORD</b> ISO 9001:2015 CERTIFIED</div>
        </div>
      </section>

      {/* SECTION 13 — TRUSTED CLIENTS AUTO LOOP SLIDER */}
      <section className="pad wrap" id="clients" style={{ borderTop: "1px solid var(--line2)" }}>
        <div className="sec-head reveal" style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Trusted By Industry Leaders</div>
          <h2 className="display"><span className="ln">Powering India&apos;s Core Industries</span></h2>
          <p style={{ color: "var(--ink2)", fontSize: 16, marginTop: 14 }}>
            Delivering mission-critical wear plates, high alumina ceramic liners, and heavy industrial fabrication to India&apos;s premier infrastructure and energy leaders.
          </p>
        </div>
        <div className="reveal">
          <ClientLogoSlider />
        </div>
      </section>

      {/* SECTION 14 — TECHNICAL INSIGHTS & ENGINEERING BLOG */}
      <section className="pad wrap" id="insights" style={{ borderTop: "1px solid var(--line2)", background: "var(--wash)" }}>
        <div className="sec-head reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div className="eyebrow">Engineering Knowledge Base</div>
            <h2 className="display"><span className="ln">Technical Insights</span><span className="ln">&amp; Metallurgy Papers</span></h2>
            <p style={{ color: "var(--ink2)", fontSize: 16, marginTop: 12, maxWidth: 640 }}>
              Practical wear analyses, ASTM test benchmarks, and failure mitigation strategies from our Solapur metallurgical division.
            </p>
          </div>
          <div>
            <Link href="/blog" className="btn btn-ghost">
              View All Articles <span className="arw">→</span>
            </Link>
          </div>
        </div>

        <div className="home-blog-grid" style={{ marginTop: 44 }}>
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article className="blog-card reveal" key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card-img-wrap">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="blog-cat-tag">{post.category}</span>
              </Link>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="blog-sep">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-foot">
                  <div className="blog-author-meta">
                    <span className="author-name">{post.author.name}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="read-more-link">
                    Read Article <span className="arw">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 15 */}
      <section className="finalcta pad" id="contact">
        <div className="wrap fc-grid">
          <div>
            <h2 className="display reveal"><span className="ln">Have a Wear,</span><span className="ln">Fabrication or</span><span className="ln">Engineering Challenge?</span></h2>
            <p className="reveal" style={{ color: "rgba(255,255,255,.82)", fontSize: 17, lineHeight: 1.7, marginTop: 24 }}>Talk to our team about your industrial requirements and discover a solution engineered around your application.</p>
          </div>
          <div className="fc-btns reveal">
            <Link href="/contact-us" className="btn btn-white">Talk to Our Engineers <span className="arw">→</span></Link>
            <Link href="/contact-us" className="btn btn-outline-white">Contact Us <span className="arw">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
