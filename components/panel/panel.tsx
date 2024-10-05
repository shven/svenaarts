import "./panel.css";

type Props = {
  children: React.ReactNode;
};

export function Panel({ children }: Props) {
  return <div className={`panel`}>{children}</div>;
}
