import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tech = Share_Tech({
  variable: "--tech",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CADET ARTISTRY HUB",
  description: "Artists, Creators, Innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${tech.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
