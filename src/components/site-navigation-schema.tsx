import { navItems } from "@/lib/site-content";
import { siteName, siteUrl } from "@/lib/seo";

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: `${siteUrl}/`,
  hasPart: navItems.map((item) => ({
    "@type": "SiteNavigationElement",
    name: item.label,
    url: item.href === "/" ? `${siteUrl}/` : `${siteUrl}${item.href}/`,
  })),
};

export function SiteNavigationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(navigationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
