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
  title: "Tarang Khetan - Senior Backend Engineer | AI Learner & Enthusiast",
  description: "Senior Backend Engineer from IIIT Jabalpur building scalable financial systems processing 700+ crores monthly. Actively learning and applying AI in daily development workflows. Open to Senior Backend and AI Engineering roles.",
  keywords: ["Senior Backend Engineer", "AI Learning", "IIIT Jabalpur", "Fintech", "Scalable Systems", "Java", "Spring Boot", "AI Tools"],
  authors: [{ name: "Tarang Khetan" }],
  creator: "Tarang Khetan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarang75490.github.io",
    title: "Tarang Khetan - Senior Backend Engineer | AI Learner",
    description: "Building systems that process 700+ crores monthly • AI learning journey • IIIT Jabalpur",
    siteName: "Tarang Khetan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarang Khetan - Senior Backend Engineer | AI Learner",
    description: "Building scalable financial systems • AI learning enthusiast • IIIT Jabalpur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
