import { z } from "zod";

import { referralServices } from "@/lib/site-content";

export const referralSchema = z.object({
  referrerName: z.string().min(2, "Enter the referrer's full name."),
  organisation: z.string().min(2, "Enter the organisation name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(8, "Enter a contact phone number."),
  participantName: z.string().min(2, "Enter the participant's full name."),
  participantDob: z.string().min(1, "Enter the participant's date of birth."),
  address: z.string().min(5, "Enter the participant's address."),
  services: z.array(z.enum(referralServices)).min(1, "Select at least one service."),
  riskInformation: z.string().min(10, "Add enough detail for safe triage."),
  notes: z.string().max(1200, "Keep additional notes under 1200 characters.").optional(),
});

export type ReferralFormData = z.infer<typeof referralSchema>;
