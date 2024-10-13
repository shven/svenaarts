import "./panel.css";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  id: string;
  dark?: boolean;
  sticky?: boolean;
};

export function Panel({ children, id, dark, sticky }: Props) {
  return (
    <div id={id} className={clsx(`panel`, dark && `panel--dark`, sticky && `panel--sticky`)}>
      {children}
    </div>
  );
}
