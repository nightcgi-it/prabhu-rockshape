"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";

import Logo from "@/components/Logo";

const isActive = (href: string, pathname: string) =>
  href === pathname || (href !== "/" && !href.includes("#") && pathname.startsWith(href.split("#")[0]));

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawer = useRef<HTMLDivElement>(null);

  // Close the drawer on navigation — Next keeps the layout mounted across routes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    drawer.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => document.body.classList.remove("nav-open"), []);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-in">
          <Logo />
          <nav className="nav-links">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href, pathname) ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <Link href="/contact-us" className="btn btn-solid">
              Talk to Engineers <span className="arw">→</span>
            </Link>
          </div>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bl" />
          </button>
        </div>
      </header>

      <div
        className={`nav-scrim${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        ref={drawer}
        className={`mobile-drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="md-label">Navigation</div>
        <nav>
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href, pathname) ? "active" : undefined}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
              <span className="mn">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
        <div className="md-foot">
          <Link href="/contact-us" className="btn btn-solid" tabIndex={open ? 0 : -1}>
            Talk to Engineers <span className="arw">→</span>
          </Link>
          <div className="md-contact">
            <a href={`tel:${site.phones[0]}`}>{site.phones[0]}</a>
            <br />
            <a href={`mailto:${site.emails[0]}`}>{site.emails[0]}</a>
          </div>
        </div>
      </div>
    </>
  );
}
