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
  title: "Ancarta Technologies | IT Consulting & Custom Software Development",
  description: "Experts in IT Consulting & Custom Software Development – Smart Solutions for a Digital World. We deliver innovative software solutions for startups, SMEs, and enterprise clients.",
  keywords: ["IT Consulting", "Custom Software Development", "Web Development", "Mobile Apps", "Cloud Solutions", "Software Maintenance"],
  authors: [{ name: "Ancarta Technologies Pvt. Ltd." }],
  openGraph: {
    title: "Ancarta Technologies | IT Consulting & Custom Software Development",
    description: "Smart Solutions for a Digital World - Expert IT consulting and custom software development services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ancarta Technologies | IT Consulting & Custom Software Development",
    description: "Smart Solutions for a Digital World - Expert IT consulting and custom software development services",
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
