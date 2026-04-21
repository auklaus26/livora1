"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { consultationSchema, type ConsultationFormData } from "@/lib/consultation-schema";
import { siteConfig } from "@/lib/site-content";

export function ConsultationForm() {
  const [serverState, setServerState] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredTime: "",
    },
  });

  async function onSubmit(values: ConsultationFormData) {
    setServerState({ type: "idle" });

    const selectedDate = new Date(values.preferredTime);
    const formattedTime = Number.isNaN(selectedDate.getTime())
      ? values.preferredTime
      : new Intl.DateTimeFormat("en-AU", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "Australia/Melbourne",
        }).format(selectedDate);

    const body = [
      "A new free consultation request has been submitted.",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Preferred consultation time: ${formattedTime} (Melbourne time)`,
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Free consultation request from ${values.name}`)}&body=${encodeURIComponent(body)}`;

    setServerState({
      type: "success",
      message: "This request opens in your email client so it can be sent directly to Livora Care.",
    });

    if (typeof window !== "undefined") {
      globalThis.open(mailtoUrl, "_self");
    }

    reset();
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} className={inputClassName} autoComplete="name" />
        </Field>
        <Field label="Email address" error={errors.email?.message}>
          <input type="email" {...register("email")} className={inputClassName} autoComplete="email" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone number" error={errors.phone?.message}>
          <input type="tel" {...register("phone")} className={inputClassName} autoComplete="tel" />
        </Field>
        <Field label="Preferred time" error={errors.preferredTime?.message}>
          <input
            type="datetime-local"
            {...register("preferredTime")}
            className={inputClassName}
            min={getMinimumDateTime()}
          />
        </Field>
      </div>

      <p className="text-sm leading-7 text-[var(--color-on-surface-variant)]">
        Choose a preferred call time and we will prepare an email addressed to the Livora Care owner.
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
          {isSubmitting ? "Preparing..." : "Book Free Consultation"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-[var(--color-on-surface-variant)]">{label}</span>
      {children}
      {error ? <p className={errorClassName}>{error}</p> : null}
    </label>
  );
}

function getMinimumDateTime() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

const inputClassName =
  "w-full rounded-2xl border border-transparent bg-[var(--color-surface-container-highest)] px-4 py-3 text-sm text-[var(--color-on-background)] shadow-none outline-none focus:border-[rgba(0,96,103,0.28)] focus:bg-white";

const errorClassName = "mt-2 text-sm font-medium text-red-700";
