import Link from "next/link";

import { Shell } from "@/components/shell";
import { footerLinks, quickContact, siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[rgba(189,201,202,0.4)] bg-[rgba(240,238,231,0.7)]">
      <Shell className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-headline text-2xl font-extrabold tracking-tight text-[var(--color-on-background)]">
            Livora Care
          </p>
          <p className="max-w-md text-sm leading-6 text-[var(--color-on-surface-variant)]">
            Registered NDIS provider delivering Supported Independent Living, in-home support, and responsive referral
            pathways across {siteConfig.suburb}.
          </p>
        </div>
        <div>
          <p className="mb-4 font-headline text-lg font-bold">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--color-on-surface-variant)]">
            {footerLinks.pages.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-headline text-lg font-bold">Policies</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--color-on-surface-variant)]">
            {footerLinks.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
                {item.label}
              </Link>
            ))}
            {quickContact.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </Shell>
      <Shell className="border-t border-[rgba(189,201,202,0.4)] py-5 text-xs uppercase tracking-[0.18em] text-[var(--color-on-surface-variant)]">
        &copy; 2026 Livora Care. Registered NDIS Provider. Serving {siteConfig.suburb}.
      </Shell>
    </footer>
  );
}
