import Image from "next/image";

export type BadgeKey = "medicare" | "bulk-billing" | "skin-cancer";

const BADGES: Record<BadgeKey, { src: string; alt: string }> = {
  medicare: {
    src: "/images/badge-medicare.png",
    alt: "Medicare",
  },
  "bulk-billing": {
    src: "/images/badge-bulk-billing.png",
    alt: "Medicare Bulk Billing Practice",
  },
  "skin-cancer": {
    src: "/images/badge-skin-cancer.png",
    alt: "Accredited Skin Cancer Doctor — Skin Cancer College Australasia",
  },
};

interface AccreditationBadgesProps {
  /** Which badges to show. Defaults to all three. */
  badges?: BadgeKey[];
  /** Extra classes for the wrapping flex container. */
  className?: string;
  /** Classes for each badge card. */
  cardClassName?: string;
  /** Classes for each image. */
  imageClassName?: string;
}

export default function AccreditationBadges({
  badges = ["medicare", "bulk-billing", "skin-cancer"],
  className = "",
  cardClassName = "rounded-md bg-white p-3 shadow-sm ring-1 ring-neutral-200",
  imageClassName = "h-16 w-auto object-contain",
}: AccreditationBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 ${className}`}
    >
      {badges.map((key) => {
        const badge = BADGES[key];
        return (
          <div key={key} className={cardClassName}>
            <Image
              src={badge.src}
              alt={badge.alt}
              width={140}
              height={80}
              className={imageClassName}
            />
          </div>
        );
      })}
    </div>
  );
}
