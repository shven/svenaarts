import "./title.scss";

import type { ReactNode } from "react";

type TextProps = {
  center?: boolean;
  children: ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "small" | "medium" | "large";
};

export const Title = ({ level: Component, size, children }: TextProps) => {
  return <Component className={`title title--${size}`}>{children}</Component>;
};
