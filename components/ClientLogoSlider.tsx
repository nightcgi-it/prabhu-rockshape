"use client";

import React from "react";

interface ClientLogo {
  name: string;
  sub: string;
  svg: React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  {
    name: "JSW",
    sub: "Steel & Cements",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <path d="M12 10H28V30C28 35 24 38 18 38H12V32H18C20 32 21 31 21 29V16H12V10Z" fill="#D71921" />
        <path d="M34 10H50V16H40V21H48V27H40V32H50V38H34V10Z" fill="#1D428A" />
        <path d="M54 10H61L67 28L73 10H80L71 38H63L54 10Z" fill="#D71921" />
        <text x="86" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="17" fill="#0A2233">JSW</text>
        <text x="86" y="35" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">STEEL &amp; CEMENT</text>
      </svg>
    ),
  },
  {
    name: "Shree Cement",
    sub: "Lead Partner",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <polygon points="15,36 28,12 41,36" fill="#E31E24" />
        <polygon points="21,36 28,22 35,36" fill="#FFF" />
        <circle cx="28" cy="30" r="3" fill="#FDB913" />
        <text x="48" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="15" fill="#0A2233">SHREE CEMENT</text>
        <text x="48" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">LIMITED</text>
      </svg>
    ),
  },
  {
    name: "NTPC Ltd.",
    sub: "Power Giant",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <circle cx="24" cy="24" r="16" stroke="#0C5186" strokeWidth="3" fill="none" />
        <path d="M16 24C16 19.5 19.5 16 24 16C28.5 16 32 19.5 32 24" stroke="#1D7EC2" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="4" fill="#0C5186" />
        <text x="48" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="18" fill="#0A2233">NTPC</text>
        <text x="48" y="35" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">POWER LTD.</text>
      </svg>
    ),
  },
  {
    name: "SAIL",
    sub: "Steel Authority",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <polygon points="26,10 38,24 26,38 14,24" fill="#005B94" />
        <polygon points="26,16 33,24 26,32 19,24" fill="#FFF" />
        <circle cx="26" cy="24" r="2.5" fill="#D71921" />
        <text x="48" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="18" fill="#0A2233">SAIL</text>
        <text x="48" y="35" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">STEEL AUTHORITY</text>
      </svg>
    ),
  },
  {
    name: "Dalmia Cement",
    sub: "Bharat",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <path d="M12 28L24 14L36 28L28 28L24 21L20 28H12Z" fill="#1D7EC2" />
        <path d="M20 34L24 29L28 34H20Z" fill="#0C5186" />
        <text x="44" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="15" fill="#0A2233">DALMIA</text>
        <text x="44" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">CEMENT BHARAT</text>
      </svg>
    ),
  },
  {
    name: "The Ramco Cements",
    sub: "Industrial Grade",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <rect x="14" y="12" width="22" height="24" rx="2" fill="#BE1E2D" />
        <path d="M18 17H32V21H18V17Z" fill="#FFF" />
        <path d="M22 25H28V31H22V25Z" fill="#FFF" />
        <text x="44" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="15" fill="#0A2233">RAMCO</text>
        <text x="44" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">CEMENTS LTD</text>
      </svg>
    ),
  },
  {
    name: "Hindustan Zinc",
    sub: "Vedanta Group",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <polygon points="24,10 36,18 36,32 24,40 12,32 12,18" stroke="#1D7EC2" strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="25" r="4" fill="#0C5186" />
        <text x="44" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="14" fill="#0A2233">HINDUSTAN</text>
        <text x="44" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">ZINC · VEDANTA</text>
      </svg>
    ),
  },
  {
    name: "NALCO",
    sub: "National Aluminium",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <circle cx="24" cy="24" r="14" fill="#1D7EC2" />
        <path d="M18 28L24 16L30 28H18Z" fill="#FFF" />
        <text x="46" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="17" fill="#0A2233">NALCO</text>
        <text x="46" y="35" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">ALUMINIUM CO.</text>
      </svg>
    ),
  },
  {
    name: "Vizag Steel",
    sub: "RINL",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <circle cx="24" cy="24" r="14" stroke="#D71921" strokeWidth="2.5" fill="none" />
        <path d="M17 24H31M24 17V31" stroke="#0C5186" strokeWidth="2.5" />
        <text x="46" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="15" fill="#0A2233">VIZAG STEEL</text>
        <text x="46" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">RINL INDIA</text>
      </svg>
    ),
  },
  {
    name: "Thermax",
    sub: "Energy & Env.",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <rect x="14" y="15" width="22" height="18" fill="#E31E24" rx="2" />
        <path d="M25 10L28 15H22L25 10Z" fill="#E31E24" />
        <text x="21" y="28" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="13" fill="#FFF">T</text>
        <text x="44" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="16" fill="#0A2233">THERMAX</text>
        <text x="44" y="35" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">SYSTEMS LTD.</text>
      </svg>
    ),
  },
  {
    name: "KHD HWI",
    sub: "Humboldt Wedag",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <polygon points="14,14 34,14 24,34" fill="#0C5186" />
        <text x="19" y="24" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="10" fill="#FFF">KHD</text>
        <text x="44" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="15" fill="#0A2233">KHD HWI</text>
        <text x="44" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">HUMBOLDT WEDAG</text>
      </svg>
    ),
  },
  {
    name: "Kalyani Steels",
    sub: "Forging Leader",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-svg">
        <circle cx="24" cy="24" r="14" stroke="#BE1E2D" strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="7" fill="#BE1E2D" />
        <text x="46" y="23" fontFamily="'Barlow Semi Condensed', sans-serif" fontWeight="800" fontSize="14" fill="#0A2233">KALYANI</text>
        <text x="46" y="34" fontFamily="'IBM Plex Mono', monospace" fontWeight="600" fontSize="8" fill="#6B7C8C" letterSpacing="0.1em">STEELS LIMITED</text>
      </svg>
    ),
  },
];

export default function ClientLogoSlider() {
  // Duplicate for seamless 100% infinite CSS marquee
  const doubleList = [...clientLogos, ...clientLogos];

  return (
    <div className="logo-slider-wrapper">
      <div className="logo-slider-track">
        {doubleList.map((client, idx) => (
          <div className="client-logo-card" key={idx}>
            <div className="logo-graphic">{client.svg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
