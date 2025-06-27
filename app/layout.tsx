import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer, Menu } from "./sections";

import "./globals.css";

const EB_GaramondFont = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SevenHudsonCapital",
  description:
    "Optimize your financial strategy with 7HC’s award-winning investment research and innovative solutions. Discover powerful tools designed to support smarter investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${EB_GaramondFont.className}  antialiased`}>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-PFJGKKVZCJ" />
    </html>
  );
}
