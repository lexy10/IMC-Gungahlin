import { CLINIC_INFO } from "@/lib/data/clinic";

const HOTDOC_TITLE =
  "Book medical appointments with doctors at Infinity Medical Centre Gungahlin in Gungahlin ACT 2912, through HotDoc";

type BookingButtonProps = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
>;

/**
 * Booking link for every "Book Appointment" call to action.
 *
 * HotDoc's widget script (loaded once in the root layout) binds to
 * data-hotdoc-widget="lightbox" and opens the booking flow in an overlay.
 * If the script is blocked or fails, the href still opens HotDoc in a new tab,
 * so patients can always reach the booking page.
 */
export default function BookingButton({
  children,
  title = HOTDOC_TITLE,
  ...props
}: BookingButtonProps) {
  return (
    <a
      href={CLINIC_INFO.bookingWidgetUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      data-hotdoc-widget="lightbox"
      {...props}
    >
      {children}
    </a>
  );
}
