import type { Metadata } from "next";

import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Participant Rights",
  description: "Read about participant rights, choice, dignity, privacy, advocacy and feedback when receiving Livora Care supports.",
  path: "/participant-rights",
});

export default function ParticipantRightsPage() {
  return <LegalContent slug="participant-rights" content={legalPageContent["participant-rights"]} />;
}
