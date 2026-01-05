import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// <CHANGE> Updated metadata for CodeZen 2
// <CHANGE> Strong SEO-optimized metadata for CodeZen 2.0
export const metadata: Metadata = {
  title: {
    default: "CodeZen 2.0 – Stranger Things Edition | National Hackathon 2026",
    template: "%s | CodeZen 2.0 Hackathon",
  },

  description:
    "CodeZen 2.0 – Stranger Things Edition is a national-level hackathon & coding fest 2026. Participate in dark-themed coding challenges, hackathons, workshops, and win exciting prizes. Open for students & developers across India.",

  keywords: [
    "CodeZen 2.0",
    "CodeZen Hackathon",
    "Stranger Things Hackathon",
    "National Hackathon 2026",
    "Coding Competition India",
    "College Hackathon Delhi",
    "GTB4CEC Hackathon",
    "Code Geeks Society",
    "Dark Theme Hackathon",
    "Programming Contest for Students",
    "Tech Fest 2026",
    "Hackathon for Developers",
  ],

  authors: [{ name: "Code Geeks Society, GTB4CEC" }],
  creator: "Code Geeks Society",
  publisher: "CodeZen",

  category: "Technology",

  metadataBase: new URL("https://codezen-2-0.vercel.app"), // 🔴 CHANGE TO REAL DOMAIN

  openGraph: {
    title: "CodeZen 2.0 – Stranger Things Edition",
    description:
      "Enter the Upside Down of Code. CodeZen 2.0 is a national hackathon with dark-themed challenges, workshops, and prizes.",
    url: "https://codezen-2-0.vercel.app/",
    siteName: "CodeZen 2.0",
    images: [
      {
        url: "/icon-dark-16x16.png", // 🔴 Add this image (1200x630)
        width: 1200,
        height: 630,
        alt: "CodeZen 2.0 Stranger Things Edition Hackathon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeZen 2.0 – Stranger Things Edition",
    description:
      "A dark-themed national hackathon inspired by Stranger Things. Code. Compete. Conquer.",
    images: ["/icon-dark-32x32.png"],
    creator: "@codezen", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon-dark-32x32.png",
      },
      {
        url: "/icon-dark-16x16.png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <CHANGE> Added dark mode class
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
