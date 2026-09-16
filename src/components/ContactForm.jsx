import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { BUSINESS, SERVICES } from "../lib/business";
import { CallButton } from "./CallButton";

export const ContactForm = ({ variant = "default" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in your name, phone and message.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = new URLSearchParams({
        "form-name": "contact",
        ...form,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      toast.success("Message sent! We'll be in touch shortly.");
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong. Please call us directly on " + BUSINESS.phone
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      data-testid={`contact-form-wrapper-${variant}`}
      className="neo-card"
    >
      <div className="flex items-center gap-3 mb-3">
        <Mail className="w-6 h-6 text-primary" strokeWidth={2.25} />
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          Send us a message
        </h2>
      </div>

      <div
        data-testid="whatsapp-link-note"
        className="flex items-start gap-2 bg-[#25D366]/10 border-2 border-[#25D366] p-3 mb-6"
      >
        <MessageCircle
          className="w-4 h-4 text-[#1DA851] flex-shrink-0 mt-0.5 fill-current"
          strokeWidth={0}
        />
        <p className="text-xs md:text-sm font-semibold text-secondary leading-snug">
          Your enquiry will be sent directly to our team. For urgent help, use the call or WhatsApp option.
        </p>
      </div>

      {submitted ? (
        <div
          data-testid={`contact-form-success-${variant}`}
          className="text-center py-10"
        >
          <div className="w-16 h-16 bg-primary border-2 border-secondary flex items-center justify-center mx-auto mb-4">
            <CheckCircle2
              className="w-8 h-8 text-secondary"
              strokeWidth={2.5}
            />
          </div>
          <h3 className="text-2xl font-black mb-2">Message received!</h3>
          <p className="text-muted-foreground mb-6">
            We'll get back to you as soon as possible. For urgent help, reach
            out directly.
          </p>
          <CallButton
            className="neo-btn-primary"
            testId={`contact-success-call-${variant}`}
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            Contact Us Now
          </CallButton>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-testid={`contact-form-${variant}`}
          onSubmit={onSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                Your Name *
              </label>
              <input
                data-testid={`contact-input-name-${variant}`}
                name="name"
                value={form.name}
                onChange={update("name")}
                required
                type="text"
                className="w-full px-4 py-3 bg-white border-2 border-secondary font-medium focus:outline-none focus:bg-primary/10"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                Phone *
              </label>
              <input
                data-testid={`contact-input-phone-${variant}`}
                name="phone"
                value={form.phone}
                onChange={update("phone")}
                required
                type="tel"
                className="w-full px-4 py-3 bg-white border-2 border-secondary font-medium focus:outline-none focus:bg-primary/10"
                placeholder="0400 000 000"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold mb-2">
              Email (optional)
            </label>
            <input
              data-testid={`contact-input-email-${variant}`}
              name="email"
              value={form.email}
              onChange={update("email")}
              type="email"
              className="w-full px-4 py-3 bg-white border-2 border-secondary font-medium focus:outline-none focus:bg-primary/10"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold mb-2">
              Service Needed
            </label>
            <select
              data-testid={`contact-input-service-${variant}`}
              name="service"
              value={form.service}
              onChange={update("service")}
              className="w-full px-4 py-3 bg-white border-2 border-secondary font-medium focus:outline-none focus:bg-primary/10"
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Other / General enquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold mb-2">
              Message *
            </label>
            <textarea
              data-testid={`contact-input-message-${variant}`}
              name="message"
              value={form.message}
              onChange={update("message")}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border-2 border-secondary font-medium focus:outline-none focus:bg-primary/10 resize-none"
              placeholder="Tell us where you are and what's happened..."
            />
          </div>

          <button
            data-testid={`contact-submit-btn-${variant}`}
            type="submit"
            disabled={submitting}
            className="neo-btn-primary w-full text-base !py-4 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" strokeWidth={2.5} />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center pt-2">
            For emergencies, reach out directly via{" "}
            <CallButton
              as="span"
              className="font-bold text-secondary hover:text-primary cursor-pointer underline"
              testId={`contact-form-inline-call-${variant}`}
            >
              {BUSINESS.phone}
            </CallButton>
            .
          </p>
        </form>
      )}
    </div>
  );
};
