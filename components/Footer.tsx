import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <Logo variant="dark" />
          <nav className="foot-nav">
            {nav.map((i) => (
              <Link key={i.href} href={i.href}>
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="foot-bot">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>TÜV NORD ISO 9001:2015 · SOLAPUR, MAHARASHTRA</span>
        </div>
      </div>
    </footer>
  );
}
