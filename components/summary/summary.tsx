import "./style.scss";

import type { ReactNode } from "react";

type Props = {
  id: string | number;
  label: string;
  children: ReactNode;
  className?: string;
};
export async function Summary({ id, label, children }: Props) {
  return (
    <div className="summary">
      <details className="summary__details">
        <summary className="summary__summary" aria-details={`summary-${id}`}>
          {label}
        </summary>
      </details>
      <div role="definition" id={`summary-${id}`} className="summary__definition">
        <div>{children}</div>
      </div>
    </div>
  );
}
