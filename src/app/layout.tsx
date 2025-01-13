import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";

export const metadata: Metadata = {
  title: "Mansory app",
  description:
    "rendering images in a responsive and optimized mansory component",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
