import { Phone, Zap } from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "./CallButton";

export const EmergencyBanner = () => {
  return (
    <section
      data-testid="emergency-banner"
      className="relative overflow-hidden bg-secondary text-secondary-foreground border-y-2 border-primary"
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1763377278900-0ce8242c5005?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-secondary/70" aria-hidden="true" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary border-2 border-white flex items-center justify-center pulse-ring rounded-full">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-secondary" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
              Emergency Towing Hotline
            </p>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-2">
              Stranded? We're on the way in {BUSINESS.responseTime}.
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Day or night, holidays or weekends — call us now and a friendly
              tow truck is dispatched immediately.
            </p>
          </div>
          <CallButton
            testId="emergency-banner-call-btn"
            className="neo-btn-primary text-base md:text-lg !py-4 !px-6 whitespace-nowrap items-center gap-2"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            {BUSINESS.phone}
          </CallButton>
        </div>
      </div>
    </section>
  );
};
