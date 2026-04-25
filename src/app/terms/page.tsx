import type { Metadata } from "next";

import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Review the terms and conditions for using the Livora Care website.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalContent slug="terms" content={legalPageContent.terms} />;
}
