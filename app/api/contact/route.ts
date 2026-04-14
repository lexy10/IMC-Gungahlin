import { NextResponse } from "next/server";
import { validateContactForm, generateContactPayload } from "@/lib/validation";
import type { ContactFormData } from "@/lib/types";

export async function POST(request: Request) {
  try {
    let body: ContactFormData;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request body." },
        { status: 400 }
      );
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

    // Placeholder: log the enquiry (replace with email service integration)
    console.log("[Contact Enquiry]", payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
