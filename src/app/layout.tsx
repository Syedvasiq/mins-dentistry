import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minsdentistry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MINS Dentistry | Dental Clinic & Implant Center — Shimoga & Bangalore",
    template: "%s | MINS Dentistry",
  },
  description:
    "MINS Dentistry is a leading dental clinic and implant center in Shimoga (Shivamogga) and Bangalore (JP Nagar). Specialist in dental implants, cosmetic dentistry, gum care, orthodontics, and full mouth rehabilitation. Book your appointment today.",
  keywords: [
    // Shimoga
    "dentist in Shimoga", "dental clinic Shimoga", "dental implants Shimoga",
    "best dentist Shivamogga", "cosmetic dentistry Shimoga", "gum treatment Shimoga",
    "orthodontist Shimoga", "teeth whitening Shimoga", "root canal Shimoga",
    "dental crowns Shimoga", "dental veneers Shimoga", "smile makeover Shimoga",
    // Bangalore
    "dentist in Bangalore", "dental clinic Bangalore", "dental implants Bangalore",
    "best dentist JP Nagar Bangalore", "cosmetic dentistry Bangalore",
    "gum treatment Bangalore", "orthodontist Bangalore", "teeth whitening Bangalore",
    "root canal Bangalore", "dental crowns Bangalore", "dental veneers Bangalore",
    "smile makeover Bangalore", "implant dentist JP Nagar", "periodontist Bangalore",
    "dental clinic JP Nagar 9th phase",
    // General
    "MINS Dentistry", "dental implant center", "periodontist", "implantologist",
    "laser dentistry", "full mouth rehabilitation", "digital smile design",
  ],
  authors: [{ name: "MINS Dentistry" }],
  creator: "MINS Dentistry",
  publisher: "MINS Dentistry",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MINS Dentistry",
    title: "MINS Dentistry | Dental Clinic & Implant Center — Shimoga & Bangalore",
    description:
      "Leading dental clinic and implant center in Shimoga and Bangalore. Specialist care in implants, cosmetic dentistry, gum care, orthodontics, and full mouth rehabilitation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MINS Dentistry — Shimoga & Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MINS Dentistry | Dental Clinic & Implant Center — Shimoga & Bangalore",
    description: "Specialist dental care in Shimoga and Bangalore — implants, cosmetic dentistry, gum care, orthodontics.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${siteUrl}/#shimoga`,
      name: "MINS Dentistry — Shimoga",
      url: siteUrl,
      telephone: "+919008883963",
      email: "care@minsdentistry.com",
      image: `${siteUrl}/dr-sabiha.png`,
      description: "MINS Dentistry is a specialist dental clinic and implant center in Shimoga offering dental implants, cosmetic dentistry, gum care, orthodontics, and full mouth rehabilitation.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Cross Rd, near Wisdom School, opp. Mymuna Masjid, Wadi E, Huda",
        addressLocality: "Shivamogga",
        addressRegion: "Karnataka",
        postalCode: "577203",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 13.9299, longitude: 75.5681 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "20:00" },
      ],
      priceRange: "₹₹",
      sameAs: ["https://www.instagram.com/minsdentistry", "https://www.facebook.com/minsdentistry"],
    },
    {
      "@type": "Dentist",
      "@id": `${siteUrl}/#bangalore`,
      name: "MINS Dentistry — Bangalore",
      url: siteUrl,
      telephone: "+919008883963",
      email: "care@minsdentistry.com",
      image: `${siteUrl}/dr-sabiha.png`,
      description: "MINS Dentistry branch in JP Nagar, Bangalore offering dental implants, cosmetic dentistry, gum care, orthodontics, and full mouth rehabilitation.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vishwakarma Architect #714, opposite to Eid Gah, Avalahalli Road, JP Nagar 9th Phase",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560078",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.8456, longitude: 77.5772 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "20:00" },
      ],
      priceRange: "₹₹",
      sameAs: ["https://www.instagram.com/minsdentistry", "https://www.facebook.com/minsdentistry"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
