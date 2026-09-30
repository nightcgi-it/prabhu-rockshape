"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two small, always-on affordances: a reading-progress rule under the navbar
 * and a back-to-top control that appears once the page is worth scrolling back.
 * Both are driven from one rAF-throttled scroll listener.
 */
export default function ScrollUI() {
  const bar = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      setShowTop(y > window.innerHeight * 0.9);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
      <button
        type="button"
        className={`to-top${showTop ? " show" : ""}`}
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 13V3" />
          <path d="M3 8l5-5 5 5" />
        </svg>
      </button>
    </>
  );
}
