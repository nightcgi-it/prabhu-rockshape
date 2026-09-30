export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage: string;
  featured?: boolean;
  tags: string[];
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      table?: {
        headers: string[];
        rows: string[][];
        caption?: string;
      };
      callout?: {
        type: "note" | "important" | "tip";
        title: string;
        text: string;
      };
    }[];
    takeaways: string[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "combating-high-stress-abrasive-wear-cco-vs-hardfacing",
    title: "Combating High-Stress Abrasive Wear: A Metallurgical Analysis of Chromium Carbide Overlays (CCO) vs. Conventional Hardfacing",
    excerpt:
      "In severe mineral processing, clinker transport, and thermal power coal-handling environments, choosing the correct wear protection material determines plant availability and total lifecycle cost. Here is what 30+ years of metallographic data reveals.",
    category: "Wear Metallurgy & Materials Science",
    date: "September 15, 2026",
    readTime: "7 min read",
    featured: true,
    author: {
      name: "Metallurgical Engineering Directorate",
      role: "Prabhu Rockshape Machinery Ltd. Technical Division",
    },
    coverImage: "/images/blog-cco-metallurgy.jpg",
    tags: [
      "Chromium Carbide Overlay",
      "ASTM G65 Abrasion",
      "Wear Metallurgy",
      "Clinker Chutes",
      "Cement & Mining",
    ],
    content: {
      lead:
        "High-velocity particle erosion and severe Gouging/Three-Body Abrasion represent the single largest cause of unscheduled downtime in cement plants, sinter plants, and open-cast coal handling systems. While conventional quenched-and-tempered (Q&T) alloy steels offer basic impact absorption, their wear resistance collapses rapidly when operating temperatures exceed 250°C or when abrasive quartz particles exceed 7 Mohs hardness. This technical paper reviews why engineered Chromium Carbide Overlays (CCO) deliver 6x to 12x service life extensions.",
      sections: [
        {
          heading: "1. The Microstructural Advantage: Primary M7C3 Carbides",
          body: [
            "The fundamental performance difference between conventional wear plates and Chromium Carbide Overlays lies at the crystalline microstructure level. Conventional 400–500 HBW plates rely on a martensitic iron matrix with dissolved carbon, which yields a bulk hardness of 45–50 HRC.",
            "In contrast, Prabhu Rockshape CCO wear plates are produced via automated Open Arc Welding with specialized high-chromium flux-cored wires. As the molten pool solidifies, hexagonal primary chromium carbides (M7C3 stoichiometry, where M = Cr, Fe) nucleate and grow perpendicular to the fusion boundary.",
            "These primary M7C3 carbides possess a microhardness of 1500–1800 HV (equivalent to ~68–72 HRC), which is significantly harder than abrasive silica quartz (1000–1200 HV). The carbides are tightly locked within an austenitic-eutectic matrix that absorbs dynamic impacts without catastrophic spalling.",
          ],
          callout: {
            type: "important",
            title: "Metallurgical Principle",
            text: "Primary carbides must constitute at least 40% to 50% of the cross-sectional overlay volume to ensure continuous abrasion resistance. If the dilution from the mild steel base plate is too high, hypoeutectic microstructures form, drastically degrading wear performance.",
          },
        },
        {
          heading: "2. ASTM G65 Dry Sand Rubber Wheel Abrasion Testing",
          body: [
            "In standardized quality audits at Prabhu Rockshape's Solapur metallurgical laboratory, wear specimens undergo ASTM G65 Procedure A testing (200 rev/min, 130 N force, 4309 m sliding distance against rounded AFS 50/70 silica test sand).",
            "The volume loss (calculated in mm³) provides an accurate laboratory benchmark for how materials behave under severe three-body abrasion in conveyor transfer points, crusher discharge chutes, and cyclone bodies.",
          ],
          table: {
            caption: "Table 1: Standardized ASTM G65 Volume Loss Comparison",
            headers: ["Material Grade", "Nominal Hardness", "ASTM G65 Vol. Loss (mm³)", "Relative Wear Life Factor"],
            rows: [
              ["Mild Steel (IS 2062 Gr B)", "120 HBW (~0 HRC)", "195.4 mm³", "1.0x (Baseline)"],
              ["Quenched & Tempered (400 HBW)", "40–42 HRC", "84.2 mm³", "2.3x"],
              ["Quenched & Tempered (500 HBW)", "48–52 HRC", "61.8 mm³", "3.2x"],
              ["Prabhu Rockshape RC-GP (Single Overlay)", "55–58 HRC", "22.4 mm³", "8.7x"],
              ["Prabhu Rockshape RC-62 (Complex Carbide)", "60–63 HRC", "15.1 mm³", "12.9x"],
              ["Prabhu Rockshape RC-65 (High-Temp Mo/Nb)", "65+ HRC (up to 700°C)", "11.8 mm³", "16.5x"],
            ],
          },
        },
        {
          heading: "3. Thermal Stability & High-Temperature Sinter Breakers",
          body: [
            "One common pitfall in clinker cooler and sinter breaker design is specifying tempered alloy steel for zones reaching 400°C to 650°C. Standard martensitic wear steels undergo thermal tempering and structural softening within hours of exposure to radiant clinker heat, losing over 60% of their initial hardness.",
            "Prabhu Rockshape RC-62 and RC-65 grades incorporate micro-alloying additions of Niobium (Nb), Vanadium (V), and Molybdenum (Mo). These elements form secondary refractory carbides that remain stable up to 700°C, ensuring that hardness and structural integrity persist under severe continuous thermal cycling.",
          ],
          callout: {
            type: "tip",
            title: "Thermal Specification Guideline",
            text: "For operating temperatures between 350°C and 700°C, specify RC-65 complex carbide plates with austenitic stainless or high-yield alloy backing plates to balance thermal expansion coefficients.",
          },
        },
        {
          heading: "4. Lifecycle Economics: Capital Cost vs. Operating Downtime",
          body: [
            "While the initial material purchase price of CCO wear plates is approximately 2.2x to 2.8x higher than 400 HBW steel, direct maintenance records demonstrate that CCO wear plates generate complete payback within the first planned maintenance turnaround.",
            "Eliminating three chute changeouts per fiscal year avoids not only replacement plate and welding labor costs, but also prevents multi-hour cement mill shutdowns where production losses exceed thousands of dollars per hour.",
          ],
        },
        {
          heading: "5. Installation & Fastening Best Practices",
          body: [
            "Because CCO wear plates feature an ultra-hard overlay fused to a ductile structural backing plate (IS 2062), they can be fabricated into complex geometries, rolled into cylindrical pipes, or cut via high-definition plasma CNC.",
            "Fastening methods include countersunk weld-in plugs, rear-welded threaded studs, or perimeter welding through the mild steel base. This allows rapid on-site replacement without damaging parent chute structures.",
          ],
        },
      ],
      takeaways: [
        "Primary M7C3 chromium carbides (1500–1800 HV) provide true metallurgical resistance to abrasive quartz and clinker particles.",
        "ASTM G65 testing demonstrates that Prabhu Rockshape RC-62 delivers up to 12.9x the abrasion life of standard mild steel.",
        "Unlike quenched and tempered alloy steels, complex CCO grades alloyed with Nb, V, and Mo retain hardness at temperatures up to 700°C.",
        "Direct Total Cost of Ownership (TCO) analyses show full capital recovery in heavy cement and mining plants within 4 to 6 months.",
        "Every batch of Prabhu Rockshape wear plate is backed by TÜV Nord ISO 9001:2015 traceability and in-house laboratory test certificates.",
      ],
    },
  },
  {
    slug: "high-alumina-ceramics-vs-metallic-liners-slurry-systems",
    title: "High-Alumina Ceramics (92% Al₂O₃) vs Metallic Liners in Extreme Slurry & Erosion Systems",
    excerpt:
      "A technical evaluation of why 9 Mohs crystalline alumina ceramic hex mats and curved pipe tiles eliminate turbulence-induced erosion in hydrocyclones and coal dust piping.",
    category: "Ceramics Engineering",
    date: "September 08, 2026",
    readTime: "6 min read",
    featured: false,
    author: {
      name: "Ceramics R&D Team",
      role: "Prabhu Rockshape Machinery Ltd.",
    },
    coverImage: "/images/high-alumina-ceramics.jpg",
    tags: ["High Alumina Ceramics", "Slurry Erosion", "Hydrocyclones", "Pipe Liners"],
    content: {
      lead:
        "High-velocity fine particulate slurry systems pose a unique degradation mechanism: micro-cutting and cavitation erosion. In applications where particulate impingement angles are below 30 degrees, 92%+ High Alumina Ceramic tiles outperform even hardfaced metallic liners by orders of magnitude.",
      sections: [
        {
          heading: "1. 9 Mohs Mineral Hardness and Chemical Inertness",
          body: [
            "With an alpha-phase corundum crystalline structure and a Mohs hardness of 9 (diamond is 10), High Alumina Ceramics are impervious to aggressive acid and alkali slurries while providing negligible surface friction.",
            "The low friction coefficient minimizes boundary layer turbulence in slurry piping and cyclone separator cones, reducing pressure drop across the circuit.",
          ],
        },
        {
          heading: "2. Modular Hex-Mats vs Engineered Curved Tiles",
          body: [
            "Prabhu Rockshape manufactures both flexible hexagonal mosaic mats bonded to fiberglass mesh for rapid lining of compound curvatures, and custom-engineered curved radial tiles for large-diameter slurry pipelines.",
          ],
        },
      ],
      takeaways: [
        "9 Mohs hardness prevents fine particle micro-grooving in slurry pipelines.",
        "Chemically inert to acidic leaching and alkali transport in mineral processing.",
        "Smooth surface texture reduces pumping head losses and material hang-up.",
      ],
    },
  },
  {
    slug: "designing-heavy-cyclone-separators-for-cement-clinker-efficiency",
    title: "Optimizing Heavy Cyclone Separators & SKS Dynamic Classifiers for Cement Plants",
    excerpt:
      "Engineering insights on structural rigidity, aerodynamic vane profiles, and wear protection integration in 300 MT/month fabrication systems.",
    category: "Heavy Industrial Fabrication",
    date: "August 28, 2026",
    readTime: "5 min read",
    featured: false,
    author: {
      name: "Structural Fabrication Division",
      role: "Prabhu Rockshape Machinery Ltd.",
    },
    coverImage: "/images/fabrication-hero.jpg",
    tags: ["SKS Separators", "Cyclone Fabrication", "Heavy Ducting", "Cement Equipment"],
    content: {
      lead:
        "Dynamic air separators and high-efficiency preheater cyclones operate under high dust loading and thermal cyclicity. Designing these vessels requires seamless integration of structural steel fabrication with pre-installed wear barriers.",
      sections: [
        {
          heading: "1. Precision Dynamic Balancing of Separator Rotors",
          body: [
            "Operating at tip speeds exceeding 35 m/s, SKS dynamic separator cage rotors require ISO 1940 Grade G2.5 dynamic balancing to eliminate high-frequency harmonics that lead to bearing degradation.",
          ],
        },
        {
          heading: "2. Dual-Barrier Wear Integration",
          body: [
            "Vulnerable guide vanes and housing scroll bodies are engineered with factory-integrated CCO wear plates and weldable ceramic blocks prior to site dispatch, drastically cutting field erection timelines.",
          ],
        },
      ],
      takeaways: [
        "Dynamic balancing to ISO 1940 Grade G2.5 guarantees vibration-free operation.",
        "Factory-installed wear liners ensure weld integrity compared to field retrofits.",
        "Fabrication capacity of 300 MT/month supports fast-track cement plant expansions.",
      ],
    },
  },
];
