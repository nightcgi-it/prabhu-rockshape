// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SITE-WIDE VALUES
// ---------------------------------------------------------------------------
// TODO — CLIENT CONFIRMATION REQUIRED:
// The source documents contain BOTH 1993 and 1994 as the establishment year.
//   • About page narrative + founder message  -> 1993 (founded by Mr. S. P. Chitte)
//   • Home hero copy                           -> 1994
// Do NOT auto-resolve. Once the client confirms, set ONE value below and the
// whole site updates. `foundedYearUnconfirmed` drives the visible amber flags;
// set it to false to hide them after confirmation.
// ---------------------------------------------------------------------------

export const site = {
  name: "Prabhu Rockshape Machinery Ltd.",
  shortName: "Prabhu Rockshape",
  foundedYear: "1994",
  foundedYearUnconfirmed: false,
  founder: "Mr. S. P. Chitte",
  location: "Solapur, Maharashtra, India",
  certification: "TÜV Nord ISO 9001:2015",
  yearsExcellence: "30+",
  legalName: "Prabhu Rockshape Machinery Limited",
  address: {
    line1: "A-187/188, MIDC, Chincholi,",
    line2: "Solapur,",
    line3: "Maharashtra - 413 255",
    full: "A-187/188, MIDC, Chincholi, Solapur, Maharashtra 413255",
  },
  emails: ["marketing@prabhurockshape.com", "spchitte@prabhurockshape.com"],
  phones: ["7350002505", "7350002503", "7350002516"],
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/projects", label: "Projects" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];
