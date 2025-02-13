import "./style.css";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className={`navigation`}>
      <Link href="/#about" className="navigation__link">
        About
      </Link>
      <Link href="/#contact" className="navigation__link">
        Contact
      </Link>
    </nav>
  );
}
