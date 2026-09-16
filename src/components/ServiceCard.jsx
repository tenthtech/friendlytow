import {
  Truck,
  KeyRound,
  PackageCheck,
  Car,
  LifeBuoy,
  ArrowUpRight,
  Phone,
  Check,
} from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "./CallButton";

const ICONS = { Truck, KeyRound, PackageCheck, Car, LifeBuoy };

export const ServiceCard = ({ service, index = 0, expanded = false }) => {
  const Icon = ICONS[service.icon] || Truck;

  return (
    <div
      data-testid={`service-card-${service.slug}`}
      style={{ animationDelay: `${index * 80}ms` }}
      className="neo-card flex flex-col fade-up"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 bg-primary border-2 border-secondary flex items-center justify-center neo-shadow">
          <Icon className="w-7 h-7 text-secondary" strokeWidth={2.25} />
        </div>
        <div className="w-9 h-9 border-2 border-secondary flex items-center justify-center bg-white">
          <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {expanded ? service.description : service.short}
      </p>

      {expanded && (
        <ul className="space-y-2 mb-6 mt-2">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm">
              <span className="w-5 h-5 bg-primary border border-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
              </span>
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 border-t-2 border-dashed border-border">
        <CallButton
          testId={`service-call-${service.slug}`}
          className="inline-flex items-center gap-2 font-bold text-sm hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Call {BUSINESS.phone}
        </CallButton>
      </div>
    </div>
  );
};
