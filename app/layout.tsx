import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "California CDL Exam Sprint Guide | CDL Permit Test Study Guide",
    template: "%s | California CDL Exam Sprint Guide",
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "California CDL Exam Sprint Guide | CDL Permit Test Study Guide",
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "California CDL Exam Sprint Guide",
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        {isProd && gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
