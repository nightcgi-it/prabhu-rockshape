import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested page or industrial resource could not be found on Prabhu Rockshape Machinery Ltd.",
};

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center py-24 px-6 bg-[#0A2233] text-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          HTTP 404 — Resource Relocated or Missing
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Page Not Found
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
          The specification sheet, product page, or technical document you were looking for does not exist or has been moved.
        </p>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#F68B1F] text-slate-950 font-semibold hover:bg-amber-400 transition-colors duration-200"
          >
            Return to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white transition-colors duration-200"
          >
            Explore Products
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white transition-colors duration-200"
          >
            Contact Engineering Team
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-8 border-t border-slate-800 text-left">
          <div className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-4 text-center">
            Key Industrial Product Sections
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-center sm:text-left">
            <Link
              href="/products/wear-resistant-plates"
              className="p-3 rounded bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-colors text-slate-300 hover:text-white block"
            >
              <div className="font-semibold text-amber-400 text-xs mb-1">Product 01</div>
              CCO Wear Plates &rarr;
            </Link>
            <Link
              href="/products/high-alumina-ceramics"
              className="p-3 rounded bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-colors text-slate-300 hover:text-white block"
            >
              <div className="font-semibold text-amber-400 text-xs mb-1">Product 02</div>
              High Alumina Ceramics &rarr;
            </Link>
            <Link
              href="/products/fabrication"
              className="p-3 rounded bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-colors text-slate-300 hover:text-white block"
            >
              <div className="font-semibold text-amber-400 text-xs mb-1">Product 03</div>
              Heavy Fabrication &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
