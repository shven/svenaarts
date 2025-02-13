import "./layout.css";

import type { Viewport } from "next/types";

import { ScrollToggle } from "@/components/scrollToggle/ScrollToggle";

export const viewport: Viewport = {
  themeColor: "#f5f5f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToggle />
      </body>
    </html>
  );
}
