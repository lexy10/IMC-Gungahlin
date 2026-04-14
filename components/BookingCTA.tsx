import { CalendarCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

export default function BookingCTA() {
  return (
    <a
      href={CLINIC_INFO.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment via HotDoc"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
    >
      <CalendarCheck size={18} aria-hidden="true" />
      Book Now
    </a>
  );
}
