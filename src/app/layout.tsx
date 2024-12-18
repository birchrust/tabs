import "~/styles/globals.css";

import React from "react";
import localFont from "next/font/local";

import { type Metadata } from "next";

const jostFont = localFont({
  src: "../../public/Jost-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tabs component",
  description: "Tabs component test",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={jostFont.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
