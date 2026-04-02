import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";

export default function ParticipantRightsPage() {
  return <LegalContent slug="participant-rights" content={legalPageContent["participant-rights"]} />;
}
