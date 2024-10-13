import "./back.css";

import Link from "next/link";

export function Back() {
  return (
    <Link href="/#home" className="back">
      Back
    </Link>
  );
}
