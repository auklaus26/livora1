import type { Metadata } from "next";

import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Learn how Livora Care collects, uses and protects personal information submitted through its website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalContent slug="privacy" content={legalPageContent.privacy} />;
}
