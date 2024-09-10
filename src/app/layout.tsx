import type { Metadata, Viewport } from "next";

import RayFont from "@dorna-alireza/fonts/ray";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Dorna & Alireza",
  description: "Wedding Ceremony",
  openGraph: {
    title: "Dorna & Alireza",
    description: "Wedding Ceremony",
    url: "https://dorna-alireza.ir/",
    siteName: "Dorna & Alireza",
    images: [
      {
        url: "/images/hero.png",
        width: 382,
        height: 450,
        alt: "Dorna & Alireza",
      },
    ],
    locale: "fa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={RayFont.className}>{children}</body>
    </html>
  );
}
