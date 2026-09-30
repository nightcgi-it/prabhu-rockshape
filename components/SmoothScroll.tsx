"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Clears the fixed navbar when an in-page anchor is targeted. */
const ANCHOR_OFFSET = -96;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // no smooth scroll when reduced motion is requested

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Native `scroll-behavior: smooth` fights Lenis; hand anchors to Lenis instead.
    document.documentElement.classList.add("lenis");

    // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync.
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: ANCHOR_OFFSET });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onAnchorClick);

    // Refresh once fonts/images settle so pinned triggers measure correctly.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      document.documentElement.classList.remove("lenis");
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return <>{children}</>;
}
