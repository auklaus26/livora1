import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";

export default function TermsPage() {
  return <LegalContent slug="terms" content={legalPageContent.terms} />;
}
