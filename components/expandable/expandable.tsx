import type { ReactNode } from "react";

import "./expandable.scss";

type Props = {
  id: string | number;
  labelWhenOpened: string;
  labelWhenClosed: string;
  children: ReactNode;
  className?: string;
};
export async function Expandable({ id, labelWhenOpened, labelWhenClosed, children }: Props) {
  return (
    <div className="expandable">
      <details className="expandable__details">
        <summary className="expandable__summary" aria-details={`expandable-${id}`}>
          <span className="expandable__label-opened">{labelWhenOpened}</span>
          <span className="expandable__label-closed">{labelWhenClosed}</span>
        </summary>
      </details>
      <div role="definition" id={`expandable-${id}`} className="expandable__definition">
        <div>{children}</div>
      </div>
    </div>
  );
}
