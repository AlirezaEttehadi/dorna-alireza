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
  title: "درنا و علیرضا",
  description: "حضور شما در این بزم نشانه پاک‌ترین محبت‌هاست",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RayFont.className}>{children}</body>
    </html>
  );
}
