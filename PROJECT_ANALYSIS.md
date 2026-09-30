# Prabhu Rockshape Machinery Ltd. — Comprehensive Project Analysis & Technical Documentation

---

## 1. Executive Summary & Company Profile

**Prabhu Rockshape Machinery Ltd.** is an Indian engineering manufacturer and solutions provider specializing in **advanced wear protection systems**, **heavy structural fabrication**, and **high-alumina ceramic liners**.

* **Headquarters / Manufacturing Facility**: A-187/188, MIDC, Chincholi, Solapur, Maharashtra – 413 255, India.
* **Founder & Managing Director**: Mr. S. P. Chitte.
* **Establishment**: 1993 / 1994 (over 30 years of industrial excellence).
* **Quality Certification**: TÜV Nord ISO 9001:2015 certified.
* **Target Verticals**: Mining, Cement, Power, Steel, Chemical, Defence, Oil & Gas, Infrastructure, and Mineral Processing.
* **Core Clients**: Shree Cement, JSW Steels Ltd, JSW Cements Ltd, NTPC Ltd, Dalmia Cement, SAIL, Vizag Steel Plant, NALCO, Thermax, KHD HWI, Kalyani Steels, West Bengal Power, Telangana Power, Hindustan Zinc Ltd.

---

## 2. Technology Stack & Architecture

The application is built on modern React / Next.js standards, optimized for performance, SEO, and visual presentation:

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 14.2.5 (App Router) | Server-side rendering, static page generation, optimized routing |
| **Language** | TypeScript 5.5.4 | End-to-end type safety, strict typing for components and props |
| **Styling** | TailwindCSS 3.4.7 + Custom CSS | Design tokens, utility classes, custom brutalist-industrial theme |
| **Animation Engine** | GSAP 3.12.5 + ScrollTrigger | Timeline orchestration, scroll-driven animations, counters |
| **Smooth Scroll** | Lenis 1.1.6 | Inertial smooth scrolling linked seamlessly with GSAP ScrollTrigger |
| **Typography** | Google Fonts | `Barlow Semi Condensed` (Headings), `Archivo` (Body), `IBM Plex Mono` (Labels/Code) |
| **Backend Integration** | Next.js API Routes (`/api/enquiry`) | Server-side form validation, ready for SMTP/CRM webhook integration |

---

## 3. Product Lines & Engineering Capabilities

### 3.1 Chromium Carbide Overlay (CCO) Wear Resistant Plates
Engineered for severe abrasion and impact environments:
* **Microstructure**: Dendritic carbide matrix of primary and secondary carbides suspended in a tough wear-resistant alloy matrix.
* **Welding Process**: Fully automated Open Arc Welding controlled by PLC systems for uniform overlay geometry and low dilution.
* **Temperature Resistance**: Sustained operational integrity up to 700°C.
* **Standard Grades**:
  * **RC-GP**: Hardness 55–58 HRC (Cr, C, Mn, B, V) — high abrasive resistance for mixer blades, chutes, bunkers.
  * **RC-57**: Hardness 57–60 HRC (Cr, C, Mn, B, V, W) — severe abrasion and moderate impact for crusher hammers and bucket teeth.
  * **RC-62**: Hardness 60–63 HRC (Cr, C, Mn, Nb, B, V, W) — severe to extreme wear for cement kiln parts.
  * **RC-65**: Hardness 65+ HRC (Cr, C, Mn, Nb, W, Mo) — extreme abrasion and hot particle erosion up to 700°C.
  * **RC-58 SPL**: Hardness 60–65 HRC — high-velocity erosion and fine particle abrasion for clinker grinding and fan blades.
  * **RC-W**: Hardness 60–65 HRC — extreme high abrasion environments.

### 3.2 High Alumina Ceramic Products & Liners
* **Purity**: Minimum 90%+ Alumina ($Al_2O_3$) content.
* **Hardness**: ~9 Mohs (diamond equivalent is 10 Mohs).
* **Thermal Resistance**: Continuous capability up to 1000°C.
* **Thickness Range**: 4 mm to 50 mm standard and engineered profiles.
* **Product Forms**: Plain tiles, weldable tiles with steel cup inserts, hexagonal matting, pipe sleeves, and engineered cyclone liners.

### 3.3 Heavy Industrial & Structural Fabrication
* **Capacity**: Up to **300 MT per month** fabrication volume.
* **Core Offerings**:
  * *Process Equipment*: SKS Separators, V-Separators, High-Efficiency Cyclones.
  * *Material Handling*: Heavy-duty Hoppers, Chutes, Bins, Silos, Conveyor Galleries.
  * *Ducting & Piping*: Large-diameter industrial gas ducting and slurry piping.
  * *Structural Steelwork*: Gantries, Trusses, Equipment Support Frames, Platforms, Stairways.

### 3.4 Manufacturing Infrastructure & Quality Control
* **Physical Footprint**:
  * Total Plot Area: **13,587 Sq.M.**
  * Permissible Built-up: **10,000 Sq.M.**
  * Factory Built-up Area: **6,004 Sq.M.**
* **In-House Testing Equipment**:
  1. Optical Metallurgical Microscope & Image Analyzer
  2. Universal Testing Machine (UTM)
  3. Rockwell & Vickers Hardness Testing Machines
  4. Dry Sand Rubber Wheel Abrasion Testing Machine (ASTM G65)
  5. Charpy / Izod Impact Testing Rig

---

## 4. Site Architecture & Route Map

| Route | Page Name | Primary Features & Animation Triggers |
|---|---|---|
| `/` | **Home Page** | 15 comprehensive sections, hero line reveal, count-up stats, interactive feature grid, client logo marquee, photo gallery. |
| `/about-us` | **About Us** | Corporate narrative, journey timeline, leadership quote with founder portrait, ISO certification, quality policy. |
| `/products` | **Products Overview** | Showcase of all 3 divisions with dual-direction parallax imagery and specs. |
| `/products/wear-resistant-plates` | **CCO Plates Detail** | Technical grade comparison table, metallurgical specs, microstructural breakdown. |
| `/products/high-alumina-ceramics` | **Ceramics Detail** | Key feature matrix, thermal & hardness ratings, configuration guide. |
| `/products/fabrication` | **Fabrication Detail** | 300 MT monthly capacity counter, equipment breakdown, structural assembly gallery. |
| `/applications` | **Industry Explorer** | Interactive tab switcher across 10 core industrial sectors with dynamic application tables. |
| `/infrastructure` | **Facility & Testing** | Land scale breakdown, plant equipment gallery, testing laboratory equipment cards. |
| `/projects` | **Solar & Turnkey Projects** | Solar turnkey installation breakdown, technical benefits, lifecycle process stages. |
| `/contact-us` | **Contact & Enquiry** | Validated Next.js enquiry form, interactive categories, address embed, direct lines. |
| `/api/enquiry` | **API Route** | Server-side validation endpoint for enquiry submissions with structured error handling. |

---

## 5. Design System & Animation Engine

### 5.1 Visual Style
* **Aesthetic**: Modern High-End Industrial Precision.
* **Palette**:
  * Primary Accent: Industrial Cobalt Blue (`#1D7EC2`)
  * Deep Secondary: Dark Blue Navy (`#0C5186`)
  * Backgrounds: Pure White (`#FFFFFF`), Soft Industrial Wash (`#F3F6F9`), Steel Dark (`#11222E`)
  * Text Ink: Deep Ink Navy (`#0A2233`), Muted Slate (`#3A4C58`)
  * Borders & Accents: Crisp Technical Lines (`#D9E2E9`, `#E9EFF3`)
* **Typography**:
  * Display: `Barlow Semi Condensed` (900/800 bold, uppercase, tight tracking)
  * Body: `Archivo` (500/600, optimal legibility)
  * Mono/Technical: `IBM Plex Mono` (specs, eyebrow badges, metrics)

### 5.2 Creative Animation Suite
1. **Kinetic Text Line Unmasking**:
   - Headings use nested `.ln > span` containers.
   - GSAP translates spans from `yPercent: 110%` to `0%` with staggered delays and smooth bezier deceleration (`power3.out`).
2. **Cinematic Image Mask Reveals**:
   - Images smoothly clip-reveal using dynamic CSS clip-paths (`polygon` unmasking) and scale settles.
3. **Scroll-Driven Parallax Drift**:
   - ScrollTrigger scrubs images with subtle negative-to-positive vertical travel, adding rich spatial depth without layout shift.
4. **Interactive 3D Hover & Sheen**:
   - Product cards and gallery tiles elevate on hover with subtle border glow, image scale, and arrow drift.
5. **Infinite Kinetic Marquee**:
   - Smooth continuous sliding tape for clients and industrial tags with pause-on-hover capability.
6. **Animated Numerical Counters**:
   - Metric numerals count up from `0` to target values when scrolled into viewport using GSAP counter animation.
7. **Accessibility (Reduced Motion)**:
   - Full support for `prefers-reduced-motion: reduce`. When detected, all transform animations instantaneously resolve to their final static positions.

---

## 6. Image Asset Strategy

Previous implementations relied on external placeholder links (Unsplash) and grey placeholder wireframes. The visual experience is now upgraded with bespoke, high-resolution industrial photography stored locally in `/public/images/`:

1. `hero-facility.png` — Heavy engineering plant floor with overhead gantry cranes, clean epoxy flooring, and industrial blue ambient lighting.
2. `cco-wear-plates.png` — Close-up of chromium carbide overlay wear plate exhibiting distinctive oscillating weld bead geometry and metallurgy.
3. `high-alumina-ceramics.png` — High purity 90%+ white alumina hexagonal wear tiles and ceramic-lined industrial equipment.
4. `industrial-fabrication.png` — Heavy structural fabrication bay with large cyclone separators, ducting, and precision welding.
5. `testing-laboratory.png` — State-of-the-art material testing lab equipped with hardness testing machines and metallurgical microscopes.
6. `founder-portrait.png` — Distinguished executive portrait of the Founder & Managing Director in corporate leadership setting.
7. `solar-industrial.png` — Turnkey industrial rooftop solar power array installed on factory shed roofs.
8. `ceramic-cyclone.png` — Industrial cyclone separator lined with high alumina ceramic tiles for abrasion resistance.

---

## 7. Recommended Production Roadmap

1. **Client Confirmation on Establishment Year**:
   - Confirm whether **1993** or **1994** should be standardized site-wide in `lib/site.ts`. Toggle `foundedYearUnconfirmed: false` once approved.
2. **Form Email / CRM Integration**:
   - In `app/api/enquiry/route.ts`, connect Nodemailer, SendGrid, or Resend to forward enquiry submissions to `marketing@prabhurockshape.com`.
3. **Google Maps Production Embed**:
   - Upgrade the embed in `/contact-us` with a dedicated Google Maps API Key to pin exact factory gate coordinates in MIDC Chincholi.
4. **SEO & OpenGraph Meta**:
   - Add OpenGraph preview images (`og:image`) and Twitter card tags pointing to the facility image in `app/layout.tsx`.
