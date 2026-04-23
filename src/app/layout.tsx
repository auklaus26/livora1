import type { Metadata } from "next";
import "./globals.css";

import { PageBackground } from "@/components/page-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://livoracare.com.au"),
  title: {
    default: "Livora Care | Supported Independent Living & NDIS Disability Support Melbourne",
    template: "%s | Livora Care",
  },
  description:
    "Registered NDIS provider delivering Supported Independent Living and person-centred disability supports across Melbourne.",
  openGraph: {
    title: "Livora Care",
    description:
      "Supported Independent Living and person-centred NDIS disability supports across Melbourne.",
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
        <PageBackground />
        <div className="relative isolate z-10">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
