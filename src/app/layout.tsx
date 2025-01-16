import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mansory app",
  description:
    "rendering images in a responsive and optimized mansory component",
};

interface Props {
  children: ReactNode;
  photoModal: ReactNode;
}

export default function RootLayout({ children, photoModal }: Props) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://images.pexels.com"></link>
      <body>
        <StyledComponentsRegistry>
          {children}
          <div id="modal-root" />
          {photoModal}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
