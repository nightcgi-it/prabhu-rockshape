"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Shared easing so every surface decelerates the same way. */
export const EASE = "power3.out";
const EASE_SOFT = "expo.out";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const has = (sel: string, root: ParentNode = document) => !!root.querySelector(sel);

/**
 * Scopes all page animations to a root element and cleans them up on unmount
 * (essential in Next.js so pinned triggers don't leak across route changes).
 * Pass a callback that builds animations against the scoped gsap context.
 */
export function usePageAnimations(build?: (ctx: {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  reduced: boolean;
}) => void) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReduced();
    const ctx = gsap.context(() => {
      if (build) {
        build({ gsap, ScrollTrigger, reduced });
      }

      // Smooth reveals for elements with .reveal
      if (reduced) {
        gsap.set(".reveal", { opacity: 1, y: 0 });
        gsap.set(".img-reveal", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
        gsap.set(".stagger-in > *", { opacity: 1, y: 0 });
        return;
      }

      // Standard text/card reveal with soft cubic ease
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: EASE_SOFT,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      // Children of a .stagger-in container cascade in as a group.
      gsap.utils.toArray<HTMLElement>(".stagger-in").forEach((group) => {
        const kids = Array.from(group.children) as HTMLElement[];
        if (!kids.length) return;
        gsap.fromTo(
          kids,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: EASE,
            stagger: 0.07,
            scrollTrigger: { trigger: group, start: "top 86%" },
          }
        );
      });

      // Cinematic clip-path unmask for images with .img-reveal
      gsap.utils.toArray<HTMLElement>(".img-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
        const innerImg = el.querySelector("img");
        if (innerImg) {
          gsap.fromTo(
            innerImg,
            { scale: 1.14 },
            {
              scale: 1,
              duration: 1.5,
              ease: EASE,
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        }
      });

      // Smooth subtle scrub parallax on images with .parallax-img
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, scope);

    // Late-loading imagery changes section heights; re-measure once settled.
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 600);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scope;
}

/** Animate count-up numbers with a `data-count` / `data-suffix` / `data-prefix`. */
export function animateCounters(root: HTMLElement | Document = document) {
  root.querySelectorAll<HTMLElement>(".num, .infra-num").forEach((el) => {
    const end = Number(el.dataset.count || 0);
    const suf = el.dataset.suffix || "";
    const pre = el.dataset.prefix || "";
    const isFast = el.classList.contains("infra-num");
    const duration = isFast ? 1.4 : 1.8;

    if (prefersReduced()) {
      el.textContent = `${pre}${end.toLocaleString()}${suf}`;
      return;
    }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${pre}${Math.round(obj.v).toLocaleString()}${suf}`;
          },
        }),
    });
  });

  // Animate horizontal and vertical line draws on scroll
  if (!prefersReduced()) {
    root.querySelectorAll<HTMLElement>(".draw-line-h").forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power2.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }
}

/**
 * Hero entrance. Handles both treatments: the home page's full-bleed
 * `.hero-full` and the minimal inner-page `.mhero`. Only selectors that are
 * actually on the page get tweened, so neither hero logs missing targets.
 */
export function animateHeroTimeline(
  gsapInstance: typeof import("gsap").gsap,
  reduced: boolean
) {
  const minimal = typeof document !== "undefined" && has(".mhero");

  if (reduced) {
    gsapInstance.set(".hero-title-full .ln span", { yPercent: 0, opacity: 1 });
    gsapInstance.set("#heroBackdrop", { scale: 1 });
    gsapInstance.set(".mhero-frame", { clipPath: "none" });
    return;
  }

  const tl = gsapInstance.timeline({ defaults: { ease: EASE } });

  if (minimal) {
    tl.from(".mhero-crumb, .mhero-label", { opacity: 0, y: -12, duration: 0.55, stagger: 0.08 })
      .fromTo(
        ".mhero-title .ln span",
        { yPercent: 108 },
        { yPercent: 0, duration: 0.9, stagger: 0.1, ease: EASE_SOFT },
        "-=0.25"
      )
      .fromTo(
        ".mhero-frame",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.1, ease: "power4.out" },
        "-=0.85"
      )
      .fromTo("#heroBackdrop", { scale: 1.16 }, { scale: 1, duration: 1.6, ease: EASE }, "<")
      .from(".mhero-desc", { opacity: 0, y: 18, duration: 0.6 }, "-=0.95")
      .from(".mhero-stats", { opacity: 0, y: 16, duration: 0.5 }, "-=0.45")
      .from(".mhero-stat", { opacity: 0, y: 14, duration: 0.45, stagger: 0.08 }, "-=0.35")
      .from(".mhero-ctas > *", { opacity: 0, y: 14, duration: 0.45, stagger: 0.09 }, "-=0.3")
      .from(".mhero-cap", { opacity: 0, duration: 0.4 }, "-=0.3");
    return tl;
  }

  tl.fromTo("#heroBackdrop", { scale: 1.15 }, { scale: 1.02, duration: 1.8, ease: EASE })
    .from(".hero-hud-pill", { opacity: 0, y: -20, duration: 0.6, stagger: 0.12 }, "-=1.3")
    .from(".hero-title-full .ln span", { yPercent: 110, duration: 0.95, stagger: 0.14 }, "-=0.9")
    .from(".hero-desc-full", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
    .from(".telemetry-item", { opacity: 0, y: 20, duration: 0.55, stagger: 0.09 }, "-=0.4")
    .from(".btn-hero-solid, .btn-hero-ghost", { opacity: 0, y: 18, duration: 0.5, stagger: 0.1 }, "-=0.3");
  return tl;
}
