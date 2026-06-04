"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Mail, label: "inayeem729@gmail.com", href: "mailto:inayeem729@gmail.com" },
    { icon: Phone, label: "+880 1643-118070", href: "tel:+8801643118070" },
    { icon: MapPin, label: "Mirpur, Dhaka, Bangladesh", href: null },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-accent" />
              <span className="text-accent font-mono text-sm tracking-widest uppercase">Contacts</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Have a project?<br />
              <span className="text-accent">Let&apos;s talk!</span>
            </h2>

            <p className="text-muted font-body text-base leading-relaxed mb-8 max-w-sm">
              Whether you need a robust backend, API integration, or want to scale
              your infrastructure — I&apos;m open to discussing how I can help.
            </p>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, href }, i) =>
                href ? (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-3 text-muted hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-9 h-9 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-sm">{label}</span>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-3 text-muted">
                    <span className="w-9 h-9 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-sm">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-dark-card border border-accent/30 rounded-sm p-10 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-dark-border focus:border-accent outline-none py-3 text-white placeholder-muted/50 font-body text-sm transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-dark-border focus:border-accent outline-none py-3 text-white placeholder-muted/50 font-body text-sm transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-display font-semibold py-4 rounded-sm transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-accent/20 tracking-wide"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
