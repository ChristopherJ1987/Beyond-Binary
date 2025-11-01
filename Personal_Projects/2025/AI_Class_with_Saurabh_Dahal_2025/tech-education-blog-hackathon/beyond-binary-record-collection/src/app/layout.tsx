import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyond Binary - Record Collection",
  description: "A curated collection of discoveries, insights, and hidden gems across technology, AI, and life. Like browsing through vinyl records, each post is a unique find waiting to be explored.",
  keywords: ["blog", "technology", "AI", "machine learning", "Oracle certification", "development", "Q CLI"],
  authors: [{ name: "Christopher" }],
  creator: "Christopher",
  publisher: "Beyond Binary",
  openGraph: {
    title: "Beyond Binary - Record Collection",
    description: "A curated collection of discoveries, insights, and hidden gems across technology, AI, and life.",
    type: "website",
    locale: "en_US",
    siteName: "Beyond Binary - Record Collection",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Binary - Record Collection",
    description: "A curated collection of discoveries, insights, and hidden gems across technology, AI, and life.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
