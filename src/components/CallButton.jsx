import { useState } from "react";
import { Phone, MessageCircle, X, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { BUSINESS } from "../lib/business";

/**
 * Renders as any button. On click opens a popup offering
 * WhatsApp or Phone Call.
 */
export const CallButton = ({
  children,
  className = "",
  testId,
  ariaLabel = "Call options",
  as = "button",
}) => {
  const [open, setOpen] = useState(false);
  const Trigger = as;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trigger
          data-testid={testId}
          type={as === "button" ? "button" : undefined}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </Trigger>
      </DialogTrigger>
      <DialogContent
        data-testid="call-dialog"
        className="bg-white border-2 border-secondary !rounded-none p-0 max-w-md neo-shadow-lg [&>button]:hidden"
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary border-2 border-secondary text-[10px] font-bold uppercase tracking-widest mb-3">
                <Zap className="w-3 h-3" strokeWidth={3} />
                Available now
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                How would you like to reach us?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                We usually reply within a couple of minutes.
              </p>
            </div>
            <button
              data-testid="call-dialog-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="w-9 h-9 border-2 border-secondary bg-white flex items-center justify-center flex-shrink-0 hover:bg-background"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="call-dialog-whatsapp"
              onClick={() => setOpen(false)}
              className="group w-full flex items-center gap-4 p-4 bg-[#25D366] text-white border-2 border-secondary neo-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-12 h-12 bg-white text-[#25D366] border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" strokeWidth={0} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Message on WhatsApp
                </div>
                <div className="text-lg font-black">Start a chat</div>
              </div>
              <span className="text-2xl font-black group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href={BUSINESS.phoneLink}
              data-testid="call-dialog-phone"
              onClick={() => setOpen(false)}
              className="group w-full flex items-center gap-4 p-4 bg-primary text-secondary border-2 border-secondary neo-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-12 h-12 bg-secondary text-primary border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs uppercase tracking-widest font-bold opacity-70">
                  Call directly
                </div>
                <div className="text-lg font-black">{BUSINESS.phone}</div>
              </div>
              <span className="text-2xl font-black group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-5">
            24/7 · Emergency and non-urgent enquiries welcome
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
