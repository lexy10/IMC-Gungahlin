import { CalendarCheck } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export default function BookingCTA() {
  return (
    <BookingButton
      aria-label="Book an appointment via HotDoc"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2">
      <CalendarCheck size={18} aria-hidden="true" />
      Book Now
    </BookingButton>
  );
}
