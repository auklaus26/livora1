"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { referralSchema, type ReferralFormData } from "@/lib/referral-schema";
import { referralServices, siteConfig } from "@/lib/site-content";

export function ReferralForm() {
  const [serverState, setServerState] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: "",
      organisation: "",
      email: "",
      phone: "",
      participantName: "",
      participantDob: "",
      address: "",
      services: [],
      riskInformation: "",
      notes: "",
    },
  });

  async function onSubmit(values: ReferralFormData) {
    setServerState({ type: "idle" });

    const body = [
      `Referrer: ${values.referrerName}`,
      `Organisation: ${values.organisation}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      `Participant: ${values.participantName}`,
      `Date of birth: ${values.participantDob}`,
      `Address: ${values.address}`,
      `Services: ${values.services.join(", ")}`,
      "",
      "Risk and safety information:",
      values.riskInformation,
      "",
      "Additional notes:",
      values.notes || "None provided",
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Referral for ${values.participantName}`)}&body=${encodeURIComponent(body)}`;

    setServerState({
      type: "success",
      message: "GitHub Pages cannot process server-side form submissions, so this referral opens in your email client for sending to Livora Care.",
    });

    if (typeof window !== "undefined") {
      globalThis.open(mailtoUrl, "_self");
    }

    reset();
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)} noValidate>
      <section className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
        <h2 className="font-headline text-2xl font-bold">Referrer details</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Field label="Full name" error={errors.referrerName?.message}>
            <input {...register("referrerName")} className={inputClassName} />
          </Field>
          <Field label="Organisation" error={errors.organisation?.message}>
            <input {...register("organisation")} className={inputClassName} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email")} className={inputClassName} />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input type="tel" {...register("phone")} className={inputClassName} />
          </Field>
        </div>
      </section>

      <section className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
        <h2 className="font-headline text-2xl font-bold">Participant information</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Field label="Participant name" error={errors.participantName?.message}>
            <input {...register("participantName")} className={inputClassName} />
          </Field>
          <Field label="Date of birth" error={errors.participantDob?.message}>
            <input type="date" {...register("participantDob")} className={inputClassName} />
          </Field>
          <Field label="Address" error={errors.address?.message} className="md:col-span-2">
            <input {...register("address")} className={inputClassName} />
          </Field>
        </div>
      </section>

      <section className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
        <h2 className="font-headline text-2xl font-bold">Services requested</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {referralServices.map((service) => (
            <label
              key={service}
              className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-container)] px-4 py-4 text-sm font-medium text-[var(--color-on-background)]"
            >
              <input type="checkbox" value={service} {...register("services")} className="h-4 w-4 accent-[var(--color-primary)]" />
              {service}
            </label>
          ))}
        </div>
        {errors.services ? <p className={errorClassName}>{errors.services.message}</p> : null}
      </section>

      <section className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
        <div className="grid gap-5">
          <Field label="Risk and safety information" error={errors.riskInformation?.message}>
            <textarea {...register("riskInformation")} rows={5} className={inputClassName} />
          </Field>
          <Field label="Additional notes" error={errors.notes?.message}>
            <textarea {...register("notes")} rows={4} className={inputClassName} />
          </Field>
        </div>
      </section>

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
          {isSubmitting ? "Preparing..." : "Send referral by email"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">{label}</span>
      {children}
      {error ? <p className={errorClassName}>{error}</p> : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-transparent bg-[var(--color-surface-container-highest)] px-4 py-3 text-sm text-[var(--color-on-background)] shadow-none outline-none focus:border-[rgba(0,96,103,0.28)] focus:bg-white";

const errorClassName = "mt-2 text-sm font-medium text-red-700";
