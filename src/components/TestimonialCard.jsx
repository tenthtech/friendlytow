import { Star, Quote } from "lucide-react";

export const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <div
      data-testid={`testimonial-${index}`}
      style={{ animationDelay: `${index * 80}ms` }}
      className="neo-card flex flex-col fade-up"
    >
      <Quote className="w-8 h-8 text-primary mb-3" strokeWidth={2.5} />
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm md:text-base leading-relaxed text-secondary mb-5">
        "{testimonial.text}"
      </p>
      <div className="mt-auto pt-4 border-t-2 border-dashed border-border">
        <div className="font-bold text-sm">{testimonial.name}</div>
        <div className="text-xs text-muted-foreground">
          {testimonial.location}
        </div>
      </div>
    </div>
  );
};
