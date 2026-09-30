import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`brand-logo-wrap ${variant} ${className}`} aria-label="Rock Shape Machinery Ltd">
      {variant === "light" ? (
        <div className="logo-img-box">
          <Image
            src="/images/rockshape-logo.png"
            alt="Rock Shape Logo"
            width={160}
            height={50}
            priority
            style={{ width: "auto", height: "38px", objectFit: "contain" }}
          />
        </div>
      ) : (
        /* Dark variant for Footer: High-contrast authentic SVG matching the official mark */
        <div className="logo-dark-box">
          <svg
            viewBox="0 0 161 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "40px", width: "auto" }}
          >
            {/* Top-left square in bright cyan */}
            <rect x="3" y="10" width="26" height="26" stroke="#29A9E0" strokeWidth="3" fill="none" />
            {/* Bottom-right interlocking square in crisp white */}
            <rect x="16" y="23" width="26" height="26" stroke="#FFFFFF" strokeWidth="3" fill="none" />
            {/* Break line mask effect */}
            <line x1="17.5" y1="21" x2="17.5" y2="24.5" stroke="#0A2233" strokeWidth="4" />
            <line x1="27.5" y1="21" x2="27.5" y2="24.5" stroke="#0A2233" strokeWidth="4" />

            {/* Wordmark ROCK in crisp white */}
            <text
              x="54"
              y="28"
              fontFamily="'Barlow Semi Condensed', sans-serif"
              fontWeight="800"
              fontSize="28"
              letterSpacing="0.04em"
              fill="#FFFFFF"
            >
              ROCK
            </text>
            {/* Wordmark SHAPE in bright cyan */}
            <text
              x="54"
              y="48"
              fontFamily="'Barlow Semi Condensed', sans-serif"
              fontWeight="600"
              fontSize="22"
              letterSpacing="0.14em"
              fill="#29A9E0"
            >
              SHAPE
            </text>
          </svg>
        </div>
      )}
    </Link>
  );
}
