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
        url: "/logo_crop.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_crop.png",
        media: "(prefers-color-scheme: dark)",
      },
      // {
      //   url: "/logo_2-removebg-preview.png",
      //   type: "image/svg+xml",
      // },
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
      <body className={`${inter.className} antialiased pt-20 lg:pt-24`}>
        
        {/* Header / Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Fixed Bottom CTA */}
        <CallToActionBanner />

        <Analytics />
      </body>
    </html>
  );
}
