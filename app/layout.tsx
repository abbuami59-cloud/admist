import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { AdBlockDetector } from "@/components/AdBlockDetector";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap" 
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://admission.talukdaracademy.com.bd";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  other: {
    "google-adsense-account": "ca-pub-7608093638667157",
  },
  title: {
    default: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সকল ভর্তি তথ্য 2025-2026 | Admission Hub",
    template: "%s | Admission Hub",
  },
  description: "বাংলাদেশ সকল পাবলিক বিশ্ববিদ্যালয়, মেডিকেল, ডেন্টাল, বুয়েট, ঢাকা বিশ্ববিদ্যালয়, জাবি, রাবি, চবি, ৭ কলেজ, বিইউপি, নার্সিং ও গুচ্ছ ভর্তি পরীক্ষার সময়সূচী, সার্কুলার, আসন সংখ্যা, আবেদন লিংক ও ভর্তি ক্যালেন্ডার ২০২৫-২০২৬।",
  applicationName: "Admission Hub Tracker",
  authors: [{ name: "Admission Hub Academic Research Team", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "Admission Calendar Bangladesh",
    "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার 2025-2026",
    "ভর্তি পরীক্ষার সময়সূচী 2026",
    "varsity admission calendar",
    "all university admission circular 2025-2026",
    "DU Admission Circular 2026",
    "BUET Admission Date 2026",
    "Medical MBBS BDS Admission Circular",
    "GST Cluster Admission Calendar",
    "Agri Cluster Admission Date",
    "JU Admission Circular Unit A B C D",
    "RU Admission Routine 2026",
    "CU Admission Circular",
    "BUP Admission Guide",
    "BUTEX Admission Date",
    "DU 7 College Admission",
    "Nursing BSc Diploma Admission Circular",
    "National University NU Honours Admission",
    "Admission GPA Calculator",
    "Admission Photo Signature Resizer",
    "বিশ্ববিদ্যালয় ভর্তি যোগ্যতা ও মানবণ্টন",
    "Admit card download date",
    "Admission test result 2026"
  ],
  creator: "Admission Hub",
  publisher: "Admission Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "bn-BD": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Admission Hub - বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার",
    title: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সকল বিশ্ববিদ্যালয়ের ভর্তি তথ্য 2025-2026 | Admission Hub",
    description: "বুয়েট, মেডিকেল, ঢাবি, জাবি, রাবি, চবি, গুচ্ছ সহ সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, লাইভ কাউন্টডাউন, আসন সংখ্যা ও পূর্ণাঙ্গ ভর্তি নির্দেশিকা।",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Admission Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বিশ্ববিদ্যালয় ভর্তি ক্যালেন্ডার ও সময়সূচী 2025-2026 | Admission Hub",
    description: "সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, লাইভ কাউন্টডাউন ও ভর্তি নির্দেশিকা।",
    images: ["/icon.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Schema.org JSON-LD
  const rootJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Admission Hub Bangladesh",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/icon.png`,
          "width": 512,
          "height": 512
        },
        "description": "বাংলাদেশের বিশ্ববিদ্যালয় ভর্তি পরীক্ষার সময়সূচী, সার্কুলার, ক্যালেন্ডার ও ভর্তি তথ্য প্ল্যাটফর্ম",
        "sameAs": [
          "https://facebook.com",
          "https://twitter.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Admission Hub",
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "inLanguage": "bn-BD"
      }
    ]
  };

  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* Google AdSense Site Verification Meta Tag - TEMPORARILY DISABLED */}
        {/* <meta name="google-adsense-account" content="ca-pub-7608093638667157" /> */}
        {/* Google AdSense Auto Ads & Syndication Script - TEMPORARILY DISABLED */}
        {/* <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7608093638667157"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
        {/* Global Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} text-zinc-900 dark:text-zinc-50 antialiased selection:bg-primary-500 selection:text-white`}>
        <AdBlockDetector />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
