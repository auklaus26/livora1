"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  contactMethods,
  feedbackSchema,
  relationshipOptions,
  type FeedbackFormData,
} from "@/lib/feedback-schema";
import { siteConfig } from "@/lib/site-content";

export function FeedbackForm() {
  const [serverState, setServerState] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [isAnonymous, setIsAnonymous] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedback: "",
      outcome: "",
      name: "",
      email: "",
      phone: "",
      preferredContactMethod: "Email",
      relationship: "Participant",
      consentToContact: false,
      isAnonymous: false,
    },
  });

  const anonymousField = register("isAnonymous", {
    onChange: (event) => {
      setIsAnonymous(event.target.checked);
    },
  });

  async function onSubmit(values: FeedbackFormData) {
    setServerState({ type: "idle" });

    const body = [
      "A new feedback submission has been prepared from the complaints page.",
      "",
      `Anonymous submission: ${values.isAnonymous ? "Yes" : "No"}`,
      `Relationship to Livora Care: ${values.relationship}`,
      `Preferred contact method: ${values.isAnonymous ? "Not provided" : values.preferredContactMethod}`,
      `Name: ${values.isAnonymous ? "Not provided" : values.name || "Not provided"}`,
      `Email: ${values.isAnonymous ? "Not provided" : values.email || "Not provided"}`,
      `Phone: ${values.isAnonymous ? "Not provided" : values.phone || "Not provided"}`,
      "",
      "Feedback details:",
      values.feedback,
      "",
      "Outcome sought:",
      values.outcome,
    ].join("\n");

    const subjectName = values.isAnonymous ? "Anonymous sender" : values.name || "Website visitor";
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Feedback from ${subjectName}`)}&body=${encodeURIComponent(body)}`;

    setServerState({
      type: "success",
      message: "This opens your email client so the feedback can be sent directly to Livora Care.",
    });

    if (typeof window !== "undefined") {
      globalThis.open(mailtoUrl, "_self");
    }

    reset();
    setIsAnonymous(false);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
        <Field label="What would you like to tell us?" error={errors.feedback?.message} required>
          <textarea
            {...register("feedback")}
            rows={6}
            className={inputClassName}
            placeholder="Share your experience, concern, compliment, or suggestion."
          />
        </Field>

        <div className="rounded-[28px] bg-[var(--color-surface-container)] px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
            Privacy choice
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-on-surface-variant)]">
            You can send feedback with your contact details or keep it anonymous. If anonymous is selected, we will not
            include phone or email in the prepared message.
          </p>
          <label className="mt-5 flex items-start gap-3 text-sm leading-7 text-[var(--color-on-surface-variant)]">
            <input type="checkbox" {...anonymousField} className="mt-1 h-4 w-4 accent-[var(--color-primary)]" />
            Keep this feedback anonymous
          </label>
        </div>
      </div>

      <Field label="What outcome would feel helpful?" error={errors.outcome?.message} required>
        <textarea
          {...register("outcome")}
          rows={4}
          className={inputClassName}
          placeholder="Tell us what response, follow-up, or change you are hoping for."
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            className={inputClassName}
            autoComplete="name"
            disabled={isAnonymous}
            placeholder=""
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            className={inputClassName}
            autoComplete="tel"
            disabled={isAnonymous}
            placeholder=""
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className={inputClassName}
            autoComplete="email"
            disabled={isAnonymous}
            placeholder=""
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="How should we contact you?" error={errors.preferredContactMethod?.message} required={!isAnonymous}>
          <select {...register("preferredContactMethod")} className={inputClassName} disabled={isAnonymous}>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Your connection to Livora Care" error={errors.relationship?.message} required>
          <select {...register("relationship")} className={inputClassName}>
            {relationshipOptions.map((relationship) => (
              <option key={relationship} value={relationship}>
                {relationship}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-3 rounded-[28px] bg-[var(--color-surface-container)] px-5 py-5">
        <p className="text-sm font-semibold text-[var(--color-on-background)]">Contact permission</p>
        <label className="flex items-start gap-3 text-sm leading-7 text-[var(--color-on-surface-variant)]">
          <input
            type="checkbox"
            {...register("consentToContact")}
            disabled={isAnonymous}
            className="mt-1 h-4 w-4 accent-[var(--color-primary)]"
          />
          Livora Care may contact me about this submission
        </label>
        {errors.consentToContact ? <p className={errorClassName}>{errors.consentToContact.message}</p> : null}
      </div>

      <p className="text-sm leading-7 text-[var(--color-on-surface-variant)]">
        If you keep the submission anonymous, contact fields stay optional and will not be included in the generated email.
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div aria-live="polite">
          {serverState.type !== "idle" ? (
            <p className={serverState.type === "success" ? "text-sm font-medium text-[var(--color-primary)]" : errorClassName}>
              {serverState.message}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Preparing..." : "Submit Feedback"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">
        {label}
        {required ? <span className="ml-1 text-[var(--color-primary)]">*</span> : null}
      </span>
      {children}
      {error ? <p className={errorClassName}>{error}</p> : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-transparent bg-[var(--color-surface-container-highest)] px-4 py-3 text-sm text-[var(--color-on-background)] shadow-none outline-none focus:border-[rgba(0,96,103,0.28)] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60";

const errorClassName = "mt-2 text-sm font-medium text-red-700";
