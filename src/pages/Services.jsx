import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "../lib/business";
import { ServiceCard } from "../components/ServiceCard";
import { EmergencyBanner } from "../components/EmergencyBanner";
import { CallButton } from "../components/CallButton";

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="bg-white border-b-2 border-secondary py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Our Services
          </p>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-8 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Everything you need to get
              <span className="bg-primary px-2 border-2 border-secondary inline-block ml-2 -rotate-1">
                back on the road
              </span>
            </h1>
            <p className="lg:col-span-4 text-base md:text-lg text-muted-foreground">
              Five core services covering every roadside scenario — from a flat
              battery to a fully bogged 4WD. Local, fast, affordable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} expanded />
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />

      {/* DETAILED SERVICE SECTIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              data-testid={`service-detail-${s.slug}`}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                  Service · 0{i + 1}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 bg-background border-2 border-secondary px-3 py-2"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-semibold">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CallButton
                    testId={`service-detail-call-${s.slug}`}
                    className="neo-btn-primary items-center gap-2"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    Call {BUSINESS.phone}
                  </CallButton>
                  <Link to="/contact" className="neo-btn-secondary">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-primary border-2 border-secondary"></div>
                  <div className="relative bg-secondary border-2 border-secondary p-10 text-center text-secondary-foreground">
                    <div className="text-6xl md:text-7xl font-black text-primary mb-2">
                      0{i + 1}
                    </div>
                    <div className="text-lg font-bold">{s.title}</div>
                    <div className="text-sm text-white/60 mt-1">
                      {BUSINESS.responseTime} response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
