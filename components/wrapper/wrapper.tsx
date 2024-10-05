import "./wrapper.css";

type Props = {
  size: "small" | "medium" | "large" | "huge";

  children: React.ReactNode;
};

export function Wrapper({ size = "medium", children }: Props) {
  return <div className={`wrapper wrapper--${size}`}>{children}</div>;
}
