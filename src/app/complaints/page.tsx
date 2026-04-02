import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";

export default function ComplaintsPage() {
  return <LegalContent slug="complaints" content={legalPageContent.complaints} />;
}
