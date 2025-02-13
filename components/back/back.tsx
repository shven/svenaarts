import "./back.scss";

import Link from "next/link";

export function Back() {
  return (
    <Link href="/#top" className="back">
      Back
    </Link>
  );
}
