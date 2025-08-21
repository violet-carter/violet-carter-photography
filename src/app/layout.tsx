import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Violet Carter Photography | New York Wedding Photographer | Documentary & Film Style",
    template: "%s | Violet Carter Photography"
  },
  description: "Award-winning New York wedding photographer specializing in documentary, film-inspired photography. Capturing timeless, authentic moments for couples in NYC, Long Island, Hamptons & destination weddings.",
  keywords: [
    "New York wedding photographer",
    "NYC wedding photographer", 
    "documentary wedding photographer",
    "film wedding photographer",
    "Long Island wedding photographer",
    "Hamptons wedding photographer",
    "destination wedding photographer",
    "east coast wedding photographer",
    "Brooklyn wedding photographer",
    "Manhattan wedding photographer",
    "best New York City photographer",
    "film inspired wedding photography",
    "documentary style wedding photos",
    "natural wedding photography NYC",
    "timeless wedding photography",
    "authentic wedding photographer"
  ],
  authors: [{ name: "Violet Carter" }],
  creator: "Violet Carter",
  publisher: "Violet Carter Photography",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://about.violetcarterphotography.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Violet Carter Photography | New York Wedding Photographer",
    description: "Documentary wedding photographer in New York capturing authentic, timeless moments with a film-inspired approach. Serving NYC, Long Island, Hamptons & destination weddings.",
    url: "https://about.violetcarterphotography.com",
    siteName: "Violet Carter Photography",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Violet Carter Photography - New York Wedding Photographer"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Violet Carter Photography | New York Wedding Photographer",
    description: "Documentary wedding photographer capturing authentic moments in NYC & beyond",
    creator: "@violetcarterphotography",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://violetcarterphotography.com/#business",
        "name": "Violet Carter Photography",
        "description": "Professional wedding photographer in New York specializing in documentary, film-inspired photography",
        "url": "https://violetcarterphotography.com",
        "telephone": "+1-555-0123", // Replace with actual phone
        "email": "hello@violetcarterphotography.com", // Replace with actual email
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.7128",
          "longitude": "-74.0060"
        },
        "openingHours": "Mo-Su 09:00-18:00",
        "priceRange": "$$$",
        "image": "https://violetcarterphotography.com/og-image.jpg",
        "sameAs": [
          "https://www.instagram.com/violetcarterphotography",
          "https://www.facebook.com/violetcarterphotography"
        ],
        "serviceArea": [
          {
            "@type": "Place",
            "name": "New York City"
          },
          {
            "@type": "Place", 
            "name": "Long Island"
          },
          {
            "@type": "Place",
            "name": "The Hamptons"
          },
          {
            "@type": "Place",
            "name": "Brooklyn"
          },
          {
            "@type": "Place",
            "name": "Manhattan"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://violetcarterphotography.com/#photographer",
        "name": "Violet Carter",
        "jobTitle": "Wedding Photographer",
        "description": "Professional wedding photographer specializing in documentary and film-inspired photography",
        "url": "https://violetcarterphotography.com/about",
        "image": "https://violetcarterphotography.com/violet-carter-headshot.jpg",
        "worksFor": {
          "@id": "https://violetcarterphotography.com/#business"
        },
        "sameAs": [
          "https://www.instagram.com/violetcarterphotography"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://violetcarterphotography.com/#wedding-photography",
        "name": "Wedding Photography",
        "description": "Documentary-style wedding photography with film-inspired aesthetics",
        "provider": {
          "@id": "https://violetcarterphotography.com/#business"
        },
        "areaServed": [
          "New York City",
          "Long Island", 
          "The Hamptons",
          "Brooklyn",
          "Manhattan",
          "Destination Weddings"
        ],
        "serviceType": [
          "Wedding Photography",
          "Engagement Photography", 
          "Documentary Photography",
          "Film Photography"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://violetcarterphotography.com/#website",
        "url": "https://violetcarterphotography.com",
        "name": "Violet Carter Photography",
        "description": "New York wedding photographer specializing in documentary, film-inspired photography",
        "publisher": {
          "@id": "https://violetcarterphotography.com/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://violetcarterphotography.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Analytics />
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Violet Carter Photography" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#d97706" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="Violet Carter Photography Blog" href="/feed.xml" />
        
        {/* Structured Data */}
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
