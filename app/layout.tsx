import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zonedaccuracy.com"),

  title: {
    default: "ZonedAccuracy | Cloud Engineering Platform",
    template: "%s | ZonedAccuracy",
  },

  description:
    "Cloud infrastructure engineered with precision. Explore ZonedAccuracy cloud architecture, Kubernetes, DevOps automation, security, observability, SRE, and AI-assisted infrastructure projects.",

  keywords: [
    "ZonedAccuracy",
    "Cloud Engineering",
    "Cloud Infrastructure",
    "Cloud Architecture",
    "Kubernetes",
    "DevOps",
    "Site Reliability Engineering",
    "SRE",
    "Cloud Security",
    "Infrastructure Automation",
    "Terraform",
    "Google Cloud",
    "AWS",
    "Azure",
    "Observability",
    "AI Cloud Infrastructure",
  ],

  authors: [
    {
      name: "ZonedAccuracy",
      url: "https://zonedaccuracy.com",
    },
  ],

  creator: "ZonedAccuracy",
  publisher: "ZonedAccuracy",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zonedaccuracy.com",
    siteName: "ZonedAccuracy",
    title: "ZonedAccuracy | Cloud Engineering Platform",
    description:
      "Cloud infrastructure engineered with precision. Explore cloud architecture, Kubernetes, DevOps, security, observability, SRE, and AI-assisted infrastructure projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZonedAccuracy Cloud Engineering Platform",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}