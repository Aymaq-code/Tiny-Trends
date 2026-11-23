import Link from "next/link";
import { navLinks, partners } from "@/src/libs/content";
import "../../styles/components/ui/footerRight.css";

export default function FooterRight() {
  return (
    <div className="footerRight">
      {/* SITE MAP*/}
      <ul className="siteMap">
        <li>
          <h3>Sitemap</h3>
        </li>
        {navLinks.map((nav) => (
          <li key={nav.label}>
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>

      {/* PARTNERS*/}
      <ul className="partners">
        <li>
          <h3>Partners</h3>
        </li>

        {partners.map((par) => (
          <li key={par.label}>
            <span>{par.label}</span>
          </li>
        ))}
      </ul>

      {/* ADDRESS*/}
      <ul className="address">
        <li>
          <h3>Address</h3>
        </li>
        <li className="address_1">
          <p>Kabul Afghanistan</p>
          <p>Shari Naw | Ansari</p>
        </li>
        <li className="address_2">
          <p>Mazari Sharif | Afghanistan</p>
          <p>Abas Market | Rawza</p>
        </li>
        <li className="contacts">
          <p>
            <span>Phone number:</span> <span>+93708760475</span>
          </p>
          <p>
            <span>WhatsApp:</span> <span>+93708760475</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
