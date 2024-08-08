import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const inter = Red_Hat_Text({
  weight: ["700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Launch countdown timer",
  description: "A simple countdown timer to launch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
