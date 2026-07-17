import Image from "next/image";
import Link from "next/link";

import { Shell } from "@/components/shell";
import { footerLinks, quickContact, siteConfig } from "@/lib/site-content";
import aboriginalFlag from "../../public/aboriginalflag.jpg";
import gccLogo from "../../public/GCC_logo.jpg";
import torresStraitIslanderFlag from "../../public/torresstraightislanderflag.jpg";
import weHeartNdisLogo from "../../public/WeheartNDIS-logo-long.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[rgba(189,201,202,0.4)] bg-[rgba(240,238,231,0.7)]">
      <Shell className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-headline text-2xl font-extrabold tracking-tight text-[var(--color-on-background)]">
            Livora Care
          </p>
          <p className="max-w-md text-sm leading-6 text-[var(--color-on-surface-variant)]">
            Registered NDIS provider delivering Supported Independent Living, daily personal care, household supports,
            and community participation across {siteConfig.suburb}.
          </p>
          <div className="pt-2">
            <p className="mb-3 text-sm font-semibold tracking-tight text-[var(--color-on-background)]">
              Stay connected
            </p>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Livora Care on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#166FE5]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
          </div>
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
      <Shell className="flex flex-wrap items-center justify-center gap-4 pb-8">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={aboriginalFlag}
              alt="Australian Aboriginal Flag"
              className="h-6 w-auto rounded-sm"
            />
            <Image
              src={torresStraitIslanderFlag}
              alt="Torres Strait Islander Flag"
              className="h-6 w-auto rounded-sm"
            />
          </div>
          <p className="text-xs leading-6 text-[var(--color-on-surface-variant)]">
            Livora Care acknowledges the Traditional Custodians of the lands on which we provide supports, including the Wurundjeri Woi-wurrung people of the Kulin Nation, and pays respect to Elders past, present and emerging. We are committed to delivering respectful, inclusive and participant-centred supports that honour culture, dignity, choice and connection to community.
          </p>
        </div>
      </Shell>
      <Shell className="flex flex-wrap items-center justify-center gap-4 pb-8">
        <Image
          src={gccLogo}
          alt="GCC NDIS Certified logo"
          className="h-16 w-auto rounded-md object-contain"
        />
        <Image
          src={weHeartNdisLogo}
          alt="We Heart NDIS Registered Provider logo"
          className="h-16 w-auto rounded-md object-contain"
        />
      </Shell>
      <Shell className="border-t border-[rgba(189,201,202,0.4)] py-5 text-xs text-center uppercase tracking-[0.18em] text-[var(--color-on-surface-variant)]">
        &copy; 2026 Livora Care. Registered NDIS Provider. Serving {siteConfig.suburb}.
      </Shell>
    </footer>
  );
}
