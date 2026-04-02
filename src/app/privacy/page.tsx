import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";

export default function PrivacyPage() {
  return <LegalContent slug="privacy" content={legalPageContent.privacy} />;
}
