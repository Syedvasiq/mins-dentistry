import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minsdentistry.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mins Dentistry | Quality Dental Care",
    template: "%s | Mins Dentistry",
  },
  description:
    "Mins Dentistry offers comprehensive dental care including general, cosmetic, and emergency dentistry. Book your appointment today.",
  keywords: ["dentist", "dental care", "cosmetic dentistry", "emergency dentist", "Mins Dentistry"],
  authors: [{ name: "Mins Dentistry" }],
  creator: "Mins Dentistry",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Mins Dentistry",
    title: "Mins Dentistry | Quality Dental Care",
    description:
      "Mins Dentistry offers comprehensive dental care including general, cosmetic, and emergency dentistry.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mins Dentistry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mins Dentistry | Quality Dental Care",
    description: "Comprehensive dental care — general, cosmetic, and emergency dentistry.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
