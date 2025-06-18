import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Laurynas Kairys – Creative Software Engineer",
  description:
    "Portfolio of Laurynas Kairys – software engineer and digital creator experimenting with unique user experiences using React, Next.js, Web3, and Framer Motion.",
  keywords:
    "Laurynas Kairys, Software Engineer, Creative Developer, React, Next.js, Web3, Framer Motion, Portfolio, Three.js, UI UX, Frontend Developer",
  authors: [{ name: "Laurynas Kairys", url: "https://laurynaskairys.dev" }],
  openGraph: {
    title: "Laurynas Kairys – Creative Software Engineer",
    description:
      "Experimenting with code, motion, and design to craft meaningful and immersive web experiences.",
    url: "https://laurynaskairys.dev",
    siteName: "Laurynas Kairys Portfolio",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Laurynas Kairys Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurynas Kairys – Creative Software Engineer",
    description:
      "Building with creativity, tech, and purpose. Explore the work of Laurynas Kairys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
