import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Truck, Star } from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "./CallButton";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-secondary text-secondary-foreground border-t-4 border-primary mt-16 md:mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary border-2 border-white flex items-center justify-center">
                <Truck className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              </div>
              <div className="font-black text-lg tracking-tight">
                {BUSINESS.name}
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              24/7 fast & friendly towing and roadside assistance based in
              Jacana, serving Melbourne's northern suburbs.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
              <span className="ml-2 text-sm font-semibold">
                {BUSINESS.rating} · {BUSINESS.reviewCount} reviews
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/services" className="hover:text-primary">Car Towing</Link></li>
              <li><Link to="/services" className="hover:text-primary">Car Lockout</Link></li>
              <li><Link to="/services" className="hover:text-primary">Local Haulage</Link></li>
              <li><Link to="/services" className="hover:text-primary">Special Vehicle</Link></li>
              <li><Link to="/services" className="hover:text-primary">Bogged Recovery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <CallButton
                  testId="footer-phone"
                  className="hover:text-primary text-left"
                >
                  {BUSINESS.phone}
                </CallButton>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Towing Jacana · Emergency Towing · Roadside Assistance Melbourne North
          </p>
        </div>
      </div>
    </footer>
  );
};
