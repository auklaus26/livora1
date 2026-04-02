import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://livoracare.com.au"),
  title: {
    default: "Livora Care | NDIS Disability Supports Melbourne",
    template: "%s | Livora Care",
  },
  description:
    "Registered NDIS provider delivering Supported Independent Living, in-home support, community access, and collaborative referral pathways across Melbourne.",
  openGraph: {
    title: "Livora Care",
    description:
      "Person-centred disability supports, Supported Independent Living, and referral pathways across Melbourne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-on-background)] antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
