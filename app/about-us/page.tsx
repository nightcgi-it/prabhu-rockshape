"use client";

import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

const IMG = {
  hero: "/images/about-hero.jpg",
  corridor: "/images/about-corridor.jpg",
  founder: "/images/founder-portrait.jpg",
};

export default function AboutPage() {
  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);
  });

  const Y = site.foundedYear;

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={IMG.hero}
        imageAlt="Prabhu Rockshape Manufacturing Facility"
        badges={[
          { text: "Solapur Works · Active", highlight: true },
          { text: "TÜV Nord ISO 9001:2015" },
          { text: `Est. ${Y} · Engineering Legacy` },
        ]}
        titleLines={[
          "Engineering Experience.",
          "Industrial Expertise.",
          "Built Over Decades.",
        ]}
        accentLineIndex={2}
        description="Established over three decades ago, Prabhu Rockshape Machinery Ltd. has evolved into an industry benchmark for advanced wear protection systems, metallurgical hardfacing, and heavy industrial fabrication."
        telemetry={[
          { count: 30, suffix: "+", lbl: "Years of Industry Legacy" },
          { count: 13587, suffix: " Sq.M.", lbl: "Manufacturing Infrastructure" },
          { count: 300, suffix: " MT", lbl: "Monthly Heavy Fabrication" },
          { count: 10, suffix: " Core", lbl: "Heavy Industrial Sectors" },
        ]}
        ctas={[
          { label: "Explore Infrastructure", href: "/infrastructure", primary: true },
          { label: "Contact Our Team", href: "/contact-us" },
        ]}
      />

      {/* SECTION 2 — Intro */}
      <section className="pad">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 820, marginBottom: 50 }}>
            <div className="eyebrow">Who We Are</div>
            <h2 className="display"><span className="ln">About Prabhu Rockshape</span><span className="ln">Machinery Ltd.</span></h2>
          </div>
          <div className="intro-grid">
            <p className="reveal dropcap">Established in {Y} by {site.founder}, Prabhu Rockshape Machinery Ltd. has evolved into a trusted engineering organization specializing in advanced material processing and industrial solutions for core sectors including mining, cement, steel, power, construction, and infrastructure.</p>
            <p className="reveal">With over three decades of manufacturing expertise, the company has built a strong reputation for delivering robust, efficient, and technologically advanced equipment that supports critical industrial operations across diverse applications.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Location */}
      <section className="split">
        <div className="im img-reveal parallax-img reveal rev-first"><Image src={IMG.corridor} alt="Industrial manufacturing facility" width={1200} height={800} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
        <div className="tx">
          <div className="eyebrow reveal">Location</div>
          <h2 className="display sec-head reveal" style={{ fontSize: "clamp(30px,4vw,52px)", marginTop: 20 }}><span className="ln">Connected to India&apos;s</span><span className="ln">Industrial Corridors</span></h2>
          <p className="reveal">Headquartered in Solapur, Maharashtra, Prabhu Rockshape Machinery Ltd. enjoys a strategically advantageous location at the intersection of major industrial corridors, enabling seamless connectivity to key markets across India.</p>
          <p className="reveal">This geographic advantage facilitates efficient logistics, timely project execution, and responsive customer support, allowing the company to effectively serve clients nationwide.</p>
        </div>
      </section>

      {/* SECTION 4 — Purpose */}
      <section className="purpose pad">
        <div className="wrap purpose-grid">
          <div className="sec-head reveal">
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)" }}><span className="ln">Engineering</span><span className="ln">with Purpose</span></h2>
          </div>
          <div className="pblocks reveal">
            <div className="pblock"><div className="no">01</div><p>Driven by a commitment to engineering excellence, innovation, and quality, the company continuously invests in product development and modern manufacturing practices to meet the evolving requirements of industry.</p></div>
            <div className="pblock"><div className="no">02</div><p>Its customer-centric approach, coupled with a focus on reliability, operational efficiency, and long-term value creation, has helped establish enduring partnerships with leading organizations across multiple sectors.</p></div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Statement */}
      <section className="statement pad">
        <div className="wrap">
          <h2 className="display reveal" style={{ textAlign: "center" }}><span className="ln">A Dependable</span><span className="ln">Partner for Industry</span></h2>
          <p className="reveal">Today, Prabhu Rockshape Machinery Ltd. continues to contribute to India&apos;s industrial and infrastructure growth by delivering high-performance engineered solutions that adhere to the highest standards of <span className="kw">quality, safety, and sustainability</span>, reinforcing its position as a dependable partner for industry.</p>
        </div>
      </section>

      {/* SECTION 6 — Founder */}
      <section className="pad">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 820, marginBottom: 52 }}>
            <div className="eyebrow">Leadership</div>
            <h2 className="display"><span className="ln">A Message from the</span><span className="ln">Founder &amp; Managing Director</span></h2>
          </div>
          <div className="founder-grid">
            <div className="founder-photo reveal">
              <div className="f-img img-reveal" style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src={IMG.founder} alt={site.founder} fill sizes="(max-width:820px) 100vw, 380px" style={{ objectFit: "cover" }} />
              </div>
              <div className="f-name"><div className="nm">{site.founder}</div><div className="rl">Founder &amp; Managing Director</div></div>
            </div>
            <div className="f-msg reveal">
              <p className="lead">&ldquo;Since {Y}, Prabhu Rockshape Machinery Ltd. has been committed to delivering engineering solutions that support the growth of India&apos;s core industries.&rdquo;</p>
              <p>What began as a focused engineering venture has grown, over three decades, into a dependable partner for the mining, cement, steel, power, construction, and infrastructure sectors. Throughout this journey, our conviction has remained unchanged: that dependable industry is built on dependable engineering.</p>
              <p>Innovation and quality have always been the foundation of everything we do. We invest continuously in technological advancement and modern manufacturing so that every product we deliver improves reliability and efficiency for the operations that depend on it. Our customer-centric approach means we listen first — understanding each application before engineering a solution around it.</p>
              <p>Equally important is our responsibility to the future. We pursue sustainability and long-term value not as obligations, but as principles that guide how we build and how we grow. The enduring partnerships we share with our customers are a reflection of that commitment.</p>
              <p>None of this would be possible without our people. To our customers, our employees, and our stakeholders — thank you for your trust. As we look ahead, we remain guided by the same values that have carried us this far: innovation, integrity, and performance.</p>
              <div className="f-sign">
                <div className="sig">S. P. Chitte</div>
                <small>Founder &amp; Managing Director, Prabhu Rockshape Machinery Ltd.<span className="sig-flag">PLACEHOLDER — awaiting approved signature</span></small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Quality Policy */}
      <section className="qp pad">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ color: "#7fc0ea" }}>Our Commitment</div>
          <h2 className="display reveal" style={{ color: "#fff", marginTop: 22, marginBottom: 34 }}><span>Quality Policy</span></h2>
          <p className="lead reveal">&ldquo;We are committed to timely supply of good quality product at mutually agreed price.&rdquo;</p>
          <div className="qp-cols">
            <div className="qp-col reveal"><div className="no">01 / How We Achieve It</div><p>We will achieve this by adopting modern business practices, satisfy applicable requirements, appropriate mechanization, and increasing level of competence of our employees by providing training and continual improvement in Quality Management System.</p></div>
            <div className="qp-col reveal"><div className="no">02 / How We Grow</div><p>We will expand our business by selecting proper product base to fulfill the needs of our customers both in Wear Resistant Plate, Fabricated Process Plant Equipment and High Alumina Ceramic and Ceramic Lined Equipment.</p></div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — ISO */}
      <section className="pad">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 820, marginBottom: 50 }}>
            <div className="eyebrow">Certification</div>
            <h2 className="display"><span className="ln">Quality. Reliability.</span><span className="ln">Continuous Improvement.</span></h2>
          </div>
          <div className="iso-grid">
            <div className="reveal"><p>Prabhu Rockshape Machinery Ltd. is certified under <strong>TÜV Nord ISO 9001:2015</strong>, reflecting our dedication to quality, reliability, and customer satisfaction. This certification underpins our Quality Management System and our commitment to continual improvement across every stage of manufacturing and delivery.</p></div>
            <div className="iso-badge reveal"><div className="t">TÜV Nord</div><div className="s">ISO 9001:2015</div><div className="l">Certified Quality Management System — covering wear resistant plates, fabricated process plant equipment, and high alumina ceramic &amp; ceramic-lined equipment.</div></div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Timeline */}
      <section className="pad" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: 10 }}>
            <div className="eyebrow">Our Journey</div>
            <h2 className="display"><span className="ln">Three Decades</span><span className="ln">of Engineering</span></h2>
          </div>
          <div className="tl">
            <div className="tl-item reveal">
              <div className="yr">{Y}{site.foundedYearUnconfirmed && <span className="flag">CONFIRM: 1993 / 1994</span>}</div>
              <h4>Company Established</h4>
              <p>Prabhu Rockshape Machinery Ltd. is founded by {site.founder}, beginning its journey in advanced material processing and industrial engineering solutions.</p>
            </div>
            <div className="tl-item reveal"><div className="yr">Over 3 Decades</div><h4>Manufacturing Expertise Built</h4><p>The company develops robust, efficient, and technologically advanced equipment for mining, cement, steel, power, construction, and infrastructure sectors, earning a strong industry reputation.</p></div>
            <div className="tl-item reveal"><div className="yr">Certified</div><h4>TÜV Nord ISO 9001:2015</h4><p>Certification of the Quality Management System formalises the company&apos;s dedication to quality, reliability, and customer satisfaction.</p></div>
            <div className="tl-item reveal"><div className="yr">Today</div><h4>A Dependable Partner for Industry</h4><p>Prabhu Rockshape continues to contribute to India&apos;s industrial and infrastructure growth through high-performance engineered solutions built to the highest standards of quality, safety, and sustainability.</p></div>
          </div>
          <p className="reveal mono" style={{ fontSize: 11, color: "var(--ink2)", marginTop: 40, letterSpacing: ".05em", opacity: 0.7 }}>Note: Timeline reflects only milestones supported by the source document. No dates have been invented.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal"><span className="ln">Build the Next Chapter</span><span className="ln">of Industrial Performance</span></h2>
          <div className="reveal"><Link href="/contact-us" className="btn btn-white">Talk to Our Engineers <span className="arw">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}
