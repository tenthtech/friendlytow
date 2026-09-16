import { Phone } from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "./CallButton";

export const MobileStickyCTA = () => {
  return (
    <div
      data-testid="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-secondary p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
    >
      <CallButton
        testId="mobile-sticky-call-btn"
        className="neo-btn-primary w-full text-base py-3.5 items-center gap-2"
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
        Call Now · {BUSINESS.phone}
      </CallButton>
    </div>
  );
};
