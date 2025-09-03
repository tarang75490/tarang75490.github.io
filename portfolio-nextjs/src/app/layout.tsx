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
  keywords: ["Tarang Khetan", "Senior Backend Engineer", "AI Learning", "IIIT Jabalpur", "Fintech", "Payment Systems", "Scalable Systems", "Java", "Spring Boot", "AI Tools", "Backend Developer", "Financial Technology"],
  authors: [{ name: "Tarang Khetan", url: "https://tarang75490.github.io" }],
  creator: "Tarang Khetan",
  publisher: "Tarang Khetan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this from Google Search Console
  },
  alternates: {
    canonical: 'https://tarang75490.github.io',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarang75490.github.io",
    title: "Tarang Khetan - Senior Backend Engineer | AI Learner",
    description: "Building systems that process 700+ crores monthly • AI learning journey • IIIT Jabalpur",
    siteName: "Tarang Khetan Portfolio",
    images: [
      {
        url: "https://tarang75490.github.io/og-image.jpg", // You can add this later
        width: 1200,
        height: 630,
        alt: "Tarang Khetan - Senior Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarang Khetan - Senior Backend Engineer | AI Learner",
    description: "Building scalable financial systems • AI learning enthusiast • IIIT Jabalpur",
    creator: "@tarangkhetan", // Add your Twitter handle if you have one
    images: ["https://tarang75490.github.io/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tarang Khetan",
    "jobTitle": "Senior Backend Engineer",
    "description": "Senior Backend Engineer from IIIT Jabalpur specializing in payment systems and AI integration. Building scalable financial infrastructure processing 700+ crores monthly.",
    "url": "https://tarang75490.github.io",
    "sameAs": [
      "https://www.linkedin.com/in/tarang-khetan-05356b179/",
      "https://github.com/tarang75490"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Indian Institute of Information Technology Jabalpur",
      "alternateName": "IIIT Jabalpur"
    },
    "knowsAbout": [
      "Backend Engineering",
      "Payment Systems",
      "Financial Technology",
      "Java",
      "Spring Boot",
      "Artificial Intelligence",
      "Scalable Systems",
      "Microservices",
      "Database Design",
      "System Architecture"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Backend Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "India"
      },
      "skills": [
        "Java",
        "Spring Boot",
        "Payment Gateway Integration",
        "Microservices Architecture",
        "Database Management",
        "AI Integration",
        "System Scalability"
      ]
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "Payouts-SVC: Distributed Financial System",
        "description": "Architected distributed, scalable, multi-tenant service handling 600-700 RPM with 99% success rate for disbursing funds, facilitating 700+ crores monthly disbursements."
      },
      {
        "@type": "CreativeWork", 
        "name": "AI-Enhanced Customer Experience Platform",
        "description": "Award-winning solution that secured 1st place in slice hackathon by applying AI to customer experience with intelligent chatbot and customer insights."
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
