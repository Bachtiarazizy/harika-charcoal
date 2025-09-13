import { Sora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Next.js 15 improvement
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Next.js 15 improvement
});

// ✅ BEST PRACTICE: Use metadataBase for absolute URLs
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://charcoal.harikanusantara.com"),
  title: {
    default: "Harika Charcoal - Premium Indonesian Charcoal Supplier",
    template: "%s | Harika Charcoal",
  },
  description: "Leading Indonesian charcoal supplier offering premium quality coconut shell charcoal, hardwood charcoal & briquettes. Sustainable sourcing, export quality, worldwide shipping.",

  // ✅ BEST PRACTICE: Use keywords array (Next.js 15 supports this)
  keywords: ["Indonesian charcoal supplier", "premium Indonesian charcoal export", "Indonesian coconut shell charcoal", "Indonesian hardwood charcoal", "Indonesian charcoal exporter"],

  authors: [{ name: "Harika Charcoal", url: "https://charcoal.harikanusantara.com" }],
  creator: "Harika Charcoal",
  publisher: "Harika Charcoal",

  // ✅ BEST PRACTICE: Improved Open Graph configuration
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harika Charcoal",
    title: "Harika Charcoal - Premium Indonesian Charcoal Supplier",
    description: "Leading Indonesian charcoal supplier offering premium quality coconut shell charcoal, hardwood charcoal & briquettes.",
    url: "/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harika Charcoal - Premium Indonesian Charcoal",
        type: "image/png",
      },
    ],
  },

  // ✅ BEST PRACTICE: Enhanced Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@harikacharcoal",
    creator: "@harikacharcoal",
    title: "Harika Charcoal - Premium Indonesian Charcoal Supplier",
    description: "Leading Indonesian charcoal supplier offering premium quality charcoal products.",
    images: {
      url: "/images/twitter-image.jpg",
      alt: "Harika Charcoal Products",
    },
  },

  // ✅ BEST PRACTICE: Comprehensive robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ BEST PRACTICE: Verification meta tags
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    bing: process.env.BING_VERIFICATION,
  },

  // ✅ NEW: Next.js 15 supports category
  category: "Manufacturing",

  // ✅ BEST PRACTICE: Alternative languages (if applicable)
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "id-ID": "/id",
    },
  },
};

// ✅ BEST PRACTICE: Separate viewport export (Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // ✅ NEW: Next.js 15 enhanced theme color support
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WC4MXKPT');
            `,
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest.json" />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Harika Charcoal" />

        {/* Canonical URL will be set per page */}
        <link rel="canonical" href="https://charcoal.harikanusantara.com" />
      </head>

      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {/* ✅ BEST PRACTICE: GTM with strategy="afterInteractive" */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
