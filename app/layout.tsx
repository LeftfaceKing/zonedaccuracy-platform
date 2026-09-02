import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZonedAccuracy | Developer Cloud Platform",
  description:
    "Cloud infrastructure engineered with precision. Deploy, automate, secure, observe, and scale with ZonedAccuracy.",
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