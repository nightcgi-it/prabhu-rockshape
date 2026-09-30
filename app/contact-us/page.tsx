"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateHeroTimeline, animateCounters } from "@/lib/useGsap";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";

const HERO_IMG = "/images/contact-hero.jpg";

const quickCats = [
  "Wear Resistant Plates",
  "High Alumina Ceramics",
  "Industrial & Structural Fabrication",
  "Through Hardened Plates",
  "High Manganese Steels",
  "Solar Projects",
  "Other Industrial Requirements",
];

const industriesList = ["Mining", "Cement", "Power", "Steel", "Chemical", "Defence", "Oil & Gas", "Construction", "Infrastructure", "Other"];

const whyItems = [
  "Advanced wear protection systems",
  "High-performance wear-resistant products",
  "Critical fabrications",
  "Customized engineering solutions",
  "Application-specific technical evaluation",
  "Modern manufacturing infrastructure",
  "In-house testing facilities",
];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string) => /^[+()\d][\d\s()-]{6,}$/.test(v);

type Form = { fullName: string; company: string; email: string; phone: string; industry: string; product: string; message: string };
const empty: Form = { fullName: "", company: "", email: "", phone: "", industry: "", product: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "bad">("idle");

  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
    animateCounters(scope.current || document);
  });

  const set = (k: keyof Form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!isEmail(form.email)) e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    else if (!isPhone(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setStatus("idle");
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("ok");
        setForm(empty);
      } else {
        if (data.errors) setErrors(data.errors);
        setStatus("bad");
      }
    } catch {
      setStatus("bad");
    }
  };

  const pickCategory = (c: string) => {
    set("product", c);
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={HERO_IMG}
        imageAlt="Contact Prabhu Rockshape engineering headquarters"
        badges={[
          { text: "Solapur Works · Active", highlight: true },
          { text: "Direct Engineering Consultation" },
          { text: "TÜV Nord ISO 9001:2015" },
        ]}
        titleLines={[
          "Let's Engineer",
          "Your Next Industrial Solution",
        ]}
        accentLineIndex={1}
        description="Connect directly with Prabhu Rockshape Machinery Ltd. engineering and metallurgy specialists. We analyze your plant operating wear patterns, impact trajectories, and structural drawings to provide optimized techno-commercial proposals."
        telemetry={[
          { val: "24h Response", lbl: "Technical Advisory" },
          { count: 30, suffix: "+", lbl: "Years of Industry Trust" },
          { count: 100, suffix: "%", lbl: "Customized Engineering" },
          { val: "Solapur Works", lbl: "Plant & QA Laboratory" },
        ]}
        ctas={[
          { label: "Submit Technical Enquiry Below", href: "#enquiry-form", primary: true },
          { label: `Call: +91 ${site.phones[0]}`, href: `tel:+91${site.phones[0]}` },
        ]}
      />

      {/* INFO + FORM */}
      <section className="pad wrap">
        <div className="contact-grid" id="enquiry-form">
          {/* LEFT — company info */}
          <div className="contact-info">
            <div className="company">Company Information</div>
            <h3>{site.legalName}</h3>
            <div className="ci-block">
              <div className="cik">Address</div>
              <address>{site.address.line1}<br />{site.address.line2}<br />{site.address.line3}</address>
            </div>
            <div className="ci-block">
              <div className="cik">Email</div>
              {site.emails.map((e) => <a key={e} href={`mailto:${e}`}>{e}</a>)}
            </div>
            <div className="ci-block">
              <div className="cik">Mobile</div>
              {site.phones.map((p) => <a key={p} href={`tel:+91${p}`}>{p}</a>)}
            </div>
          </div>

          {/* RIGHT — enquiry form */}
          <div className="contact-form">
            <div className="eyebrow" style={{ marginBottom: 28 }}>Enquiry Form</div>

            {status === "ok" && (
              <div className="form-status ok" role="status">✓ Thank you — your enquiry has been sent. Our team will be in touch shortly.</div>
            )}
            {status === "bad" && (
              <div className="form-status bad" role="alert">Something went wrong sending your enquiry. Please try again, or email us directly.</div>
            )}

            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className={`field${errors.fullName ? " err" : ""}`}>
                  <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                  <input id="fullName" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" />
                  {errors.fullName && <span className="msg">{errors.fullName}</span>}
                </div>
                <div className="field">
                  <label htmlFor="company">Company Name</label>
                  <input id="company" value={form.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" />
                </div>
              </div>

              <div className="form-row">
                <div className={`field${errors.email ? " err" : ""}`}>
                  <label htmlFor="email">Email <span className="req">*</span></label>
                  <input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
                  {errors.email && <span className="msg">{errors.email}</span>}
                </div>
                <div className={`field${errors.phone ? " err" : ""}`}>
                  <label htmlFor="phone">Phone <span className="req">*</span></label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
                  {errors.phone && <span className="msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" value={form.industry} onChange={(e) => set("industry", e.target.value)}>
                    <option value="">Select industry</option>
                    {industriesList.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="product">Product / Requirement</label>
                  <select id="product" value={form.product} onChange={(e) => set("product", e.target.value)}>
                    <option value="">Select requirement</option>
                    {quickCats.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className={`field${errors.message ? " err" : ""}`}>
                <label htmlFor="message">Message <span className="req">*</span></label>
                <textarea id="message" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your application, operating conditions and requirements…" />
                {errors.message && <span className="msg">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-submit" disabled={status === "loading"}>
                {status === "loading" ? <><span className="spinner" /> Sending…</> : <>Send Enquiry <span>→</span></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORIES */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)", borderBottom: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Quick Enquiry</div>
          <h2 className="display"><span className="ln">Tell Us About</span><span className="ln">Your Requirement</span></h2>
        </div>
        <div className="qcats">
          {quickCats.map((c, i) => (
            <button className="qcat" key={c} onClick={() => pickCategory(c)}>
              <span className="qn">{String(i + 1).padStart(2, "0")}</span>
              <h4>{c}</h4>
            </button>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="pad wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Find Us</div>
          <h2 className="display"><span className="ln">Our Location</span></h2>
        </div>
        <div className="map-wrap reveal">
          {/* Address-based embed — Google resolves the query, no hardcoded/fabricated coordinates. */}
          <iframe
            title="Prabhu Rockshape Machinery Ltd. location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`}
          />
          {/* Address stays legible even where the embed is blocked. */}
          <div className="map-card">
            <div className="mk">Works & Head Office</div>
            <address>
              {site.address.line1}
              <br />
              {site.address.line2} {site.address.line3}
            </address>
            <a
              className="btn btn-solid"
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.full)}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Get Directions <span className="arw">→</span>
            </a>
          </div>
        </div>
        <p className="reveal mono" style={{ fontSize: 12, color: "var(--ink2)", marginTop: 16, letterSpacing: ".04em" }}>
          {site.address.line1} {site.address.line2} {site.address.line3}
        </p>
      </section>

      {/* WHY ROCKSHAPE */}
      <section className="pad wrap" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Positioning</div>
          <h2 className="display"><span className="ln">Why Talk to Rockshape?</span></h2>
        </div>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div className="why reveal" key={w}><span className="wn">{String(i + 1).padStart(2, "0")}</span><p>{w}</p></div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta pad">
        <div className="wrap">
          <h2 className="display reveal" style={{ color: "#fff" }}><span className="ln">Ready When You Are</span></h2>
          <div className="cc-grid">
            <div className="cc"><div className="cck">Call</div><a href={`tel:+91${site.phones[0]}`}>{site.phones[0]}</a></div>
            <div className="cc"><div className="cck">Email</div><a href={`mailto:${site.emails[0]}`}>{site.emails[0]}</a></div>
          </div>
        </div>
      </section>
    </div>
  );
}
