import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Truck } from "lucide-react";
import { BUSINESS } from "../lib/business";
import { CallButton } from "./CallButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 border-b-2 border-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            data-testid="nav-logo"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary border-2 border-secondary flex items-center justify-center neo-shadow group-hover:rotate-[-4deg] transition-transform">
              <Truck className="w-5 h-5 text-secondary" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-black text-base md:text-lg tracking-tight">
                {BUSINESS.name}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Jacana · 24/7
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-secondary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-secondary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <CallButton
            testId="nav-call-btn"
            className="hidden md:inline-flex neo-btn-primary !py-2 !px-4 text-sm items-center gap-2"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            {BUSINESS.phone}
          </CallButton>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-secondary bg-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div
            data-testid="mobile-menu"
            className="md:hidden pb-4 border-t-2 border-secondary -mx-4 px-4"
          >
            <nav className="flex flex-col py-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-2 font-semibold border-b border-border ${
                      isActive ? "text-secondary" : "text-muted-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <CallButton
                testId="mobile-call-btn"
                className="mt-3 neo-btn-primary items-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </CallButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
