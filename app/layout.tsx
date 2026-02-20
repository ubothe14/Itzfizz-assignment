import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scroll Hero GSAP | ItzFizz Assignment",
  description:
    "Premium scroll-driven hero animation built with Next.js, Tailwind CSS, and GSAP ScrollTrigger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-hero-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}

