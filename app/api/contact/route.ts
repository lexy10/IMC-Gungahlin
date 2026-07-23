import { NextResponse } from "next/server";
import { validateContactForm, generateContactPayload } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/types";

// Patients must never be told their enquiry was received when it was not, so
// every failure path below returns an error rather than a silent success.
const DELIVERY_FAILURE_MESSAGE =
  "We couldn't send your message just now. Please call the clinic instead.";

export async function POST(request: Request) {
  try {
    let body: ContactFormData & { company?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    // Honeypot: real patients never see or fill this field.
    if (typeof body.company === "string" && body.company.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // Validate required fields exist and are strings
    if (
      typeof body.name !== "string" ||
      typeof body.phone !== "string" ||
      typeof body.email !== "string" ||
      typeof body.message !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "All fields must be provided as strings." },
        { status: 400 }
      );
    }

    const errors = validateContactForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const payload = generateContactPayload(body);
    const result = await sendContactEmail(payload);

    if (result.status === "not-configured") {
      console.error(
        `[Contact API] Mailer not configured — missing ${result.missing.join(", ")}. Enquiry not delivered.`
      );
      return NextResponse.json(
        { success: false, error: DELIVERY_FAILURE_MESSAGE },
        { status: 503 }
      );
    }

    if (result.status === "failed") {
      console.error("[Contact API] Delivery failed:", result.detail);
      return NextResponse.json(
        { success: false, error: DELIVERY_FAILURE_MESSAGE },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
