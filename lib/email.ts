// Email delivery for contact enquiries — uses the Resend HTTP API directly
// so no extra runtime dependency is required.

import type { ContactFormData } from "@/lib/types";
import { CLINIC_INFO } from "@/lib/data/clinic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type SendResult =
  | { status: "sent" }
  | { status: "not-configured"; missing: string[] }
  | { status: "failed"; detail: string };

interface EmailConfig {
  apiKey: string;
  from: string;
  to: string;
}

/**
 * Reads mail settings from the environment.
 * Returns the missing variable names when the mailer is not fully configured.
 */
function readConfig(): EmailConfig | { missing: string[] } {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  const missing = [
    !apiKey && "RESEND_API_KEY",
    !from && "CONTACT_FROM_EMAIL",
    !to && "CONTACT_TO_EMAIL",
  ].filter((v): v is string => Boolean(v));

  if (missing.length > 0) return { missing };

  return { apiKey: apiKey!, from: from!, to: to! };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(data: ContactFormData): string {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
  ];

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#171717">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:600">${label}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
      <p style="margin-top:24px;color:#737373;font-size:12px">
        Sent from the ${escapeHtml(CLINIC_INFO.name)} website contact form.
      </p>
    </div>
  `;
}

function buildText(data: ContactFormData): string {
  return [
    "New website enquiry",
    "",
    `Name:  ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

/**
 * Sends a contact enquiry to the clinic inbox.
 * Never throws — the caller decides what to tell the patient.
 */
export async function sendContactEmail(
  data: ContactFormData
): Promise<SendResult> {
  const config = readConfig();

  if ("missing" in config) {
    return { status: "not-configured", missing: config.missing };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: data.email,
        subject: `Website enquiry from ${data.name}`,
        html: buildHtml(data),
        text: buildText(data),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return {
        status: "failed",
        detail: `Resend responded ${response.status}: ${detail.slice(0, 300)}`,
      };
    }

    return { status: "sent" };
  } catch (error) {
    return {
      status: "failed",
      detail: error instanceof Error ? error.message : String(error),
    };
  }
}
