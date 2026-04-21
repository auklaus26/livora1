import { z } from "zod";

const phonePattern = /^[+()\d\s-]{8,20}$/;

export const consultationSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .min(8, "Enter a contact phone number.")
    .regex(phonePattern, "Enter a valid phone number."),
  preferredTime: z.string().min(1, "Choose a preferred consultation time."),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
