"use client";

import { useState } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
  ContactApiResponse,
} from "@/lib/types";
import { validateContactForm, generateContactPayload } from "@/lib/validation";
import { CLINIC_INFO } from "@/lib/data/clinic";

type SubmissionState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmissionState("loading");
    setServerError("");

    try {
      const payload = generateContactPayload(formData);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: ContactApiResponse = await res.json();

      if (res.ok && data.success) {
        setSubmissionState("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmissionState("error");
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmissionState("error");
      setServerError(
        "Unable to send your message. Please try again or call us directly."
      );
    }
  }

  if (submissionState === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Thank you for your message!
        </p>
        <p className="mt-2 text-sm text-green-700">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Error banner */}
      {submissionState === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">{serverError}</p>
          <p className="mt-2 text-sm text-red-700">
            You can also reach us by phone at{" "}
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="font-semibold underline"
            >
              {CLINIC_INFO.phone}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSubmissionState("idle")}
            className="mt-3 rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-neutral-700"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.name
              ? "border-red-400 focus:ring-red-400"
              : "border-neutral-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-neutral-700"
        >
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.phone
              ? "border-red-400 focus:ring-red-400"
              : "border-neutral-300"
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-neutral-700"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.email
              ? "border-red-400 focus:ring-red-400"
              : "border-neutral-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-neutral-700"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.message
              ? "border-red-400 focus:ring-red-400"
              : "border-neutral-300"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submissionState === "loading"}
        className="inline-flex items-center rounded-md bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {submissionState === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
