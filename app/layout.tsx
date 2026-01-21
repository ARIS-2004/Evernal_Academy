import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CallToActionBanner from "@/components/call-to-action-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evernal Academy - Early Childhood Education",
  description:
    "Quality early education for your child. Expert educators, nurturing environment, and holistic development programs.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased pb-20 sm:pb-24`}>
        
        {/* Header / Navbar */}
        {/* <Navbar /> */}

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Fixed Bottom CTA */}
        {/* <CallToActionBanner /> */}

        <Analytics />
      </body>
    </html>
  );
}
