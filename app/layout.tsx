import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e40af",
};

export const metadata: Metadata = {
  title: {
    default: "Ancarta Technologies | IT Consulting & Custom Software Development",
    template: "%s | Ancarta Technologies"
  },
  description: "Experts in IT Consulting & Custom Software Development – Smart Solutions for a Digital World. We deliver innovative software solutions for startups, SMEs, and enterprise clients.",
  keywords: ["IT Consulting", "Custom Software Development", "Web Development", "Mobile Apps", "Cloud Solutions", "Software Maintenance", "Digital Transformation", "Ancarta Technologies"],
  authors: [{ name: "Ancarta Technologies Pvt. Ltd." }],
  creator: "Ancarta Technologies Pvt. Ltd.",
  publisher: "Ancarta Technologies Pvt. Ltd.",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://ancarta.tech'),
  openGraph: {
    title: "Ancarta Technologies | IT Consulting & Custom Software Development",
    description: "Smart Solutions for a Digital World - Expert IT consulting and custom software development services for startups, SMEs, and enterprises.",
    type: "website",
    locale: "en_US",
    url: "https://ancarta.tech",
    siteName: "Ancarta Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ancarta Technologies - Smart Solutions for a Digital World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancarta Technologies | IT Consulting & Custom Software Development",
    description: "Smart Solutions for a Digital World - Expert IT consulting and custom software development services",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
