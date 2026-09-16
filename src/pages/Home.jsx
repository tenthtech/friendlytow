import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { BUSINESS, SERVICES, TESTIMONIALS } from "../lib/business";
import { TrustBadges } from "../components/TrustBadges";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { EmergencyBanner } from "../components/EmergencyBanner";
import { CallButton } from "../components/CallButton";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <div data-testid="home-page" className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary border-2 border-secondary text-xs font-bold uppercase tracking-wider mb-6 neo-shadow">
                <Zap className="w-3.5 h-3.5" strokeWidth={3} />
                Available 24/7 — Right Now
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] mb-5">
                24/7 Fast & <br />
                <span className="bg-primary px-2 inline-block border-2 border-secondary -rotate-1">
                  Reliable Towing
                </span>{" "}
                <br className="hidden sm:block" />
                in Jacana
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                Affordable, professional towing services — we'll get you back on
                the road quickly. Local Jacana operator, arriving in{" "}
                <span className="font-bold text-secondary">
                  {BUSINESS.responseTime}
                </span>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <CallButton
                  testId="hero-call-btn"
                  className="neo-btn-primary text-base md:text-lg !py-4 !px-6 items-center gap-2"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  Call {BUSINESS.phone}
                </CallButton>
                <Link
                  to="/contact"
                  data-testid="hero-help-btn"
                  className="neo-btn-secondary text-base md:text-lg !py-4 !px-6"
                >
                  Get Help Fast
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>
              </div>

              <TrustBadges />
            </div>

            <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-primary border-2 border-secondary"></div>
                <img
                  src="https://images.unsplash.com/photo-1764200458388-65c4b0c19a95?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                  alt="Tow truck transporting a car"
                  className="relative w-full h-[360px] md:h-[480px] object-cover border-2 border-secondary"
                  loading="eager"
                />
                <div className="absolute -bottom-5 -right-5 bg-secondary text-secondary-foreground p-4 border-2 border-primary neo-shadow-yellow max-w-[220px]">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="font-black text-2xl">{BUSINESS.rating}</div>
                  <div className="text-xs text-white/70">
                    From {BUSINESS.reviewCount} happy customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section data-testid="services-section" className="py-16 md:py-24 bg-white border-t-2 border-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                What we do
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Five services. <br />
                <span className="bg-primary px-2 border-2 border-secondary inline-block -rotate-1">
                  One quick call.
                </span>
              </h2>
            </div>
            <Link
              to="/services"
              data-testid="view-all-services"
              className="self-start neo-btn-secondary !py-3"
            >
              View all services
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US strip */}
      <section className="py-12 md:py-16 bg-primary border-y-2 border-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Clock, label: "20-30 min", sub: "Average arrival" },
            { icon: ShieldCheck, label: "100%", sub: "Licensed & insured" },
            { icon: Star, label: `${BUSINESS.rating}/5`, sub: `${BUSINESS.reviewCount} reviews` },
            { icon: MapPin, label: "Local", sub: "Jacana operator" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="w-7 h-7 mb-2 text-secondary" strokeWidth={2.25} />
              <div className="text-2xl md:text-3xl font-black tracking-tight">{label}</div>
              <div className="text-xs md:text-sm font-semibold text-secondary/70">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <EmergencyBanner />

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              What customers say
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Trusted by {BUSINESS.reviewCount}+ drivers
            </h2>
            <div className="inline-flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="font-bold ml-2">{BUSINESS.rating} / 5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              data-testid="view-all-reviews"
              className="neo-btn-secondary"
            >
              Read all reviews
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        data-testid="home-contact-section"
        className="py-16 md:py-24 bg-white border-t-2 border-secondary"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                Send a message
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
                Not urgent? <br />
                <span className="bg-primary px-2 border-2 border-secondary inline-block -rotate-1">
                  Drop us a line.
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Booking ahead, asking for a quote, or just have a question?
                Send us a message and we'll get back to you fast.
              </p>
              <div className="neo-card bg-secondary text-secondary-foreground">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                  Emergency?
                </p>
                <p className="text-sm text-white/80 mb-4">
                  Skip the form — reach us directly, day or night.
                </p>
                <CallButton
                  testId="home-contact-call-btn"
                  className="neo-btn-primary items-center gap-2"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  {BUSINESS.phone}
                </CallButton>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm variant="home" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Need a tow <span className="text-primary">right now?</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            One call and a friendly driver is on the way. Late nights, public
            holidays, anywhere in Melbourne's north — we're here.
          </p>
          <CallButton
            testId="final-cta-call-btn"
            className="neo-btn-primary text-lg !py-4 !px-8 items-center gap-2"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call {BUSINESS.phone}
          </CallButton>
        </div>
      </section>
    </div>
  );
}
