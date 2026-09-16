import { Star, Quote } from "lucide-react";
import { BUSINESS, TESTIMONIALS } from "../lib/business";
import { TestimonialCard } from "../components/TestimonialCard";
import { EmergencyBanner } from "../components/EmergencyBanner";

export default function Reviews() {
  return (
    <div data-testid="reviews-page">
      <section className="bg-white border-b-2 border-secondary py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Customer Reviews
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
            Rated{" "}
            <span className="bg-primary px-2 border-2 border-secondary inline-block -rotate-1">
              {BUSINESS.rating} / 5
            </span>
          </h1>
          <div className="inline-flex items-center gap-2 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-base md:text-lg">
            Based on {BUSINESS.reviewCount} verified reviews from drivers across
            Melbourne's north.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />

      {/* FEATURED QUOTE */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 text-primary" strokeWidth={2.5} />
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            "Quick, professional and took great care of my car. Easily the best
            towing service in Melbourne's north."
          </p>
          <div className="inline-flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-white/60 text-sm mt-3">
            — Verified Google Review · Jacana
          </p>
        </div>
      </section>
    </div>
  );
}
