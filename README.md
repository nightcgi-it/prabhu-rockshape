# Prabhu Rockshape Machinery Ltd. — Website

Next.js 14 (App Router) + TypeScript + Tailwind + GSAP + ScrollTrigger + Lenis.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
```

## Routes
- `/`                                Home (15 sections)
- `/about-us`                        About Us (9 sections + hero + CTA)
- `/products`                        Products overview (pinned horizontal scroll on desktop)
- `/products/wear-resistant-plates`  ROCKSHAPE CCO wear plates (grades table)
- `/products/high-alumina-ceramics`  High alumina ceramics (key-feature cards)
- `/products/fabrication`            Industrial & structural fabrication (animated 300 MT stat)
- `/applications`                    Interactive industry explorer (10 industries, click to switch)
- `/infrastructure`                  Facility stats + in-house testing equipment + capability links
- `/projects`                        Solar turnkey project (scope steps, benefits, process flow)
- `/contact-us`                      Validated enquiry form + info + map + quick categories
- `/api/enquiry`  (POST)             Server endpoint for form submission — backend integration point

NOTE: ceramics slug is `/products/high-alumina-ceramics` (per detail-page brief).
Overview + home links were updated to match.

## Founded-year (IMPORTANT — needs client confirmation)
Source docs contain BOTH 1993 and 1994. This is NOT auto-resolved.
Everything is driven from ONE place: `lib/site.ts`.
- `foundedYear`            -> currently "1993"
- `foundedYearUnconfirmed` -> `true` shows the amber CONFIRM flags site-wide
Set the confirmed year once, flip the flag to `false`, and every page updates.

## Structure
- `app/layout.tsx`        Fonts, Lenis provider, shared Navbar + Footer
- `app/globals.css`       All design-system styles (brand tokens as CSS vars)
- `components/SmoothScroll.tsx`  Lenis <-> GSAP ScrollTrigger sync (respects reduced-motion)
- `lib/useGsap.ts`        Scoped animation hook + counters (auto-cleans on route change)
- `lib/site.ts`           Single source of truth: name, year, nav, founder, etc.

## Contact form & secrets
The enquiry form POSTs to `app/api/enquiry/route.ts` (server-side). NO SMTP creds
or API keys live in the frontend — add them as server-only env vars in that route
(process.env.*) and drop in your transport (Nodemailer/SendGrid/Resend/CRM webhook).
The route already does server-side validation and returns { ok, errors }.

The map uses an address-based Google Maps embed (`?q=<address>&output=embed`) so no
coordinates are hardcoded or fabricated. Swap for the Embed API + key if you want a
pinned marker.

## Notes
- All animations respect `prefers-reduced-motion`.
- Product detail routes (`/products/[slug]`) and `/applications` are linked but not yet built.
- Replace Unsplash placeholder URLs in each page's `IMG` map with supplied gallery images.
- Founder photo + signature are flagged placeholders — awaiting approved assets.
