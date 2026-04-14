import type { ContactFormData, ContactFormErrors } from "@/lib/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Australian phone: optional +61 or 0 prefix, 9-10 digits, allows spaces/dashes/parens
const PHONE_REGEX = /^(?:\+?61|0)\s?(?:\(?\d\)?\s?){1}\d(?:[\s-]?\d){6,9}$/;

/**
 * Validates contact form data and returns per-field error messages.
 * Returns an empty object when all fields are valid.
 */
export function validateContactForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Please enter a valid Australian phone number.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

/**
 * Returns a sanitized copy of the contact form data ready for API submission.
 */
export function generateContactPayload(
  data: ContactFormData
): ContactFormData {
  return {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    message: data.message.trim(),
  };
}
