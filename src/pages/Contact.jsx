import { Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "../components/CallButton";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="bg-white border-b-2 border-secondary py-14 md:py-20 grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4 max-w-3xl">
            Stranded?{" "}
            <span className="bg-primary px-2 border-2 border-secondary inline-block -rotate-1">
              Call now.
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            For emergencies, the fastest way is to reach out directly. For
            quotes or non-urgent enquiries, drop us a message below.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: contact methods */}
          <div className="lg:col-span-5 space-y-5">
            <CallButton
              testId="contact-phone-card"
              className="neo-card flex items-start gap-4 hover:translate-x-[-2px] hover:translate-y-[-2px] w-full text-left"
            >
              <div className="w-12 h-12 bg-primary border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Call us — fastest
                </div>
                <div className="text-2xl md:text-3xl font-black tracking-tight">
                  {BUSINESS.phone}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Tap to choose · Available 24/7
                </div>
              </div>
            </CallButton>

            <div
              data-testid="contact-address-card"
              className="neo-card flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Address
                </div>
                <div className="font-bold">{BUSINESS.address}</div>
                <a
                  href={BUSINESS.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground mt-1 inline-block hover:text-primary"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div
              data-testid="contact-hours-card"
              className="neo-card flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-secondary border-2 border-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">
                  Hours
                </div>
                <div className="font-bold">Open 24 hours · Every day</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Public holidays included
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7">
            <ContactForm variant="contact-page" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section data-testid="contact-map-section" className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-secondary neo-shadow-lg overflow-hidden bg-white">
            <iframe
              title="Friendly Towing Location"
              src={BUSINESS.mapEmbedSrc}
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
