import { Phone, Clock, MapPin, ShieldCheck, HeartHandshake, DollarSign, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../lib/business";
import { EmergencyBanner } from "../components/EmergencyBanner";
import { CallButton } from "../components/CallButton";

const VALUES = [
  {
    icon: Clock,
    title: "Fast Response",
    text: `Most jobs reached in ${BUSINESS.responseTime}. Late nights and emergencies are our specialty.`,
  },
  {
    icon: DollarSign,
    title: "Affordable & Honest",
    text: "Transparent quotes upfront. No surprise fees, no upselling, no nonsense.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused",
    text: "Friendly drivers who treat you and your vehicle with care, every single call.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Fully covered, trained operators using the right equipment for every job.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="bg-white border-b-2 border-secondary py-14 md:py-20 grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            About Friendly Towing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none max-w-4xl">
            Your local
            <span className="bg-primary px-2 border-2 border-secondary inline-block ml-2 -rotate-1">
              Jacana
            </span>{" "}
            tow truck — friendly, fast, fair.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-secondary">
            <p>
              <strong className="text-secondary">Friendly Towing</strong> was
              built on a simple idea: when your day takes a turn — a flat
              battery, a fender bender, keys locked inside, a 4WD bogged in the
              mud — you should be helped by someone who actually cares.
            </p>
            <p>
              Based in Jacana and serving the surrounding suburbs of Broadmeadows,
              Glenroy, Tullamarine, Coburg and beyond, we operate 24 hours a
              day, 7 days a week. Public holidays included. Late nights are our
              specialty.
            </p>
            <p>
              We've earned a{" "}
              <strong>
                {BUSINESS.rating} star rating from {BUSINESS.reviewCount}+ reviews
              </strong>{" "}
              by sticking to three things: arrive quickly, charge fairly, and
              treat every vehicle like it's our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <CallButton
                testId="about-call-btn"
                className="neo-btn-primary items-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </CallButton>
              <Link to="/contact" className="neo-btn-secondary">
                Get in Touch
                <Zap className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-primary border-2 border-secondary"></div>
              <img
                src="https://images.unsplash.com/photo-1774951048719-e56bc56f7142?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Roadside mechanic helping a driver"
                className="relative w-full h-[420px] object-cover border-2 border-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-white border-y-2 border-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
              Why drivers choose us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Four reasons we're <span className="bg-primary px-2 border-2 border-secondary inline-block -rotate-1">your tow</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                data-testid={`about-value-${i}`}
                style={{ animationDelay: `${i * 80}ms` }}
                className="neo-card fade-up"
              >
                <div className="w-12 h-12 bg-primary border-2 border-secondary flex items-center justify-center mb-4 neo-shadow">
                  <Icon className="w-6 h-6 text-secondary" strokeWidth={2.25} />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />

      {/* SERVICE AREA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" strokeWidth={2.25} />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Serving Jacana & Melbourne's North
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {BUSINESS.serviceArea}. Outside the area? Call us — we'll let you
            know if we can help and quote a fair rate either way.
          </p>
        </div>
      </section>
    </div>
  );
}
