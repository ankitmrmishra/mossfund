import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mossfund — Fund the code that runs the world",
    template: "%s | Mossfund"
  },
  description: "Community-owned OSS funding DAO on Solana. Stakers use quadratic voting to allocate real-time streaming payments to open-source repos.",
  keywords: [
    "open source funding",
    "OSS",
    "DAO",
    "Solana",
    "blockchain",
    "quadratic voting",
    "streaming payments",
    "developer funding",
    "open source",
    "cryptocurrency",
    "web3"
  ],
  authors: [{ name: "Mossfund" }],
  creator: "Mossfund",
  publisher: "Mossfund",
  metadataBase: new URL('https://mossfund.io'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mossfund.io",
    title: "Mossfund — Fund the code that runs the world",
    description: "Community-owned OSS funding DAO on Solana. Stakers use quadratic voting to allocate real-time streaming payments to open-source repos.",
    siteName: "Mossfund",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mossfund - Open Source Funding DAO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossfund — Fund the code that runs the world",
    description: "Community-owned OSS funding DAO on Solana. Stakers use quadratic voting to allocate real-time streaming payments to open-source repos.",
    images: ["/og-image.png"],
    creator: "@mossfund"
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="canonical" href="https://mossfund.io" />
      </head>
      <body className="min-h-full antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
