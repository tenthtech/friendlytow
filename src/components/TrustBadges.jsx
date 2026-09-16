import { Star, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import { BUSINESS } from "../lib/business";

const items = [
  {
    icon: Star,
    label: `${BUSINESS.rating} Rating`,
    sub: `${BUSINESS.reviewCount} reviews`,
    iconClass: "fill-primary text-primary",
  },
  {
    icon: Clock,
    label: "Open 24/7",
    sub: "Every day",
  },
  {
    icon: ShieldCheck,
    label: "Licensed & Insured",
    sub: "Fully covered",
  },
  {
    icon: ThumbsUp,
    label: "Affordable Rates",
    sub: "No surprises",
  },
];

export const TrustBadges = () => {
  return (
    <div
      data-testid="trust-badges"
      className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
    >
      {items.map(({ icon: Icon, label, sub, iconClass }, i) => (
        <div
          key={label}
          data-testid={`trust-badge-${i}`}
          className="bg-white border-2 border-secondary px-3 py-3 md:px-4 md:py-4 flex items-center gap-3 neo-shadow"
        >
          <Icon
            className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 ${iconClass || "text-secondary"}`}
            strokeWidth={2.25}
          />
          <div className="leading-tight min-w-0">
            <div className="font-bold text-xs md:text-sm truncate">{label}</div>
            <div className="text-[10px] md:text-xs text-muted-foreground truncate">
              {sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
