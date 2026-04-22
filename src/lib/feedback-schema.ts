import { z } from "zod";

export const contactMethods = ["Email", "Phone"] as const;

export const relationshipOptions = [
  "Participant",
  "Family member or carer",
  "Advocate or representative",
  "Support coordinator",
  "Healthcare professional",
  "Community partner",
  "Other",
] as const;

export const feedbackSchema = z
  .object({
    feedback: z
      .string()
      .trim()
      .min(20, "Please provide more detail about your feedback.")
      .max(2000, "Keep your feedback under 2000 characters."),
    outcome: z
      .string()
      .trim()
      .min(10, "Please tell us what outcome you are seeking.")
      .max(1000, "Keep the requested outcome under 1000 characters."),
    name: z.string().trim(),
    phone: z.string().trim(),
    email: z.string().trim(),
    preferredContactMethod: z.enum(contactMethods).optional(),
    relationship: z.enum(relationshipOptions, {
      error: "Please select your relationship to Livora Care.",
    }),
    consentToContact: z.boolean(),
    isAnonymous: z.boolean(),
  })
  .superRefine((values, context) => {
    if (values.isAnonymous) {
      return;
    }

    if (values.name.length < 2) {
      context.addIssue({
        code: "custom",
        path: ["name"],
        message: "Please enter your name.",
      });
    }

    if (!values.preferredContactMethod) {
      context.addIssue({
        code: "custom",
        path: ["preferredContactMethod"],
        message: "Please select a preferred contact method.",
      });
    }

    if (!values.consentToContact) {
      context.addIssue({
        code: "custom",
        path: ["consentToContact"],
        message: "Please confirm that we may contact you about this feedback.",
      });
    }

    if (values.preferredContactMethod === "Email" && !z.email().safeParse(values.email).success) {
      context.addIssue({
        code: "custom",
        path: ["email"],
        message: "Enter a valid email address.",
      });
    }

    if (values.preferredContactMethod === "Phone" && values.phone.length < 8) {
      context.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Enter a valid phone number.",
      });
    }
  });

export type FeedbackFormData = z.infer<typeof feedbackSchema>;
