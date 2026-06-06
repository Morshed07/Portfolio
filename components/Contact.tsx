"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json(); 

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "inayeem729@gmail.com",
      href: "mailto:inayeem729@gmail.com",
    },
    {
      icon: Phone,
      label: "+880 1643-118070",
      href: "tel:+8801643118070",
    },
    {
      icon: MapPin,
      label: "Mirpur, Dhaka, Bangladesh",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-accent" />
              <span className="text-accent font-mono text-sm tracking-widest uppercase">
                Contact
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Have a project?
              <br />
              <span className="text-accent">Let&apos;s talk!</span>
            </h2>

            <p className="text-muted text-base leading-relaxed mb-8 max-w-sm">
              Whether you need a backend system, API integration, or scalable
              architecture — I&apos;m open to opportunities.
            </p>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, href }, i) =>
                href ? (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-3 text-muted hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </span>
                    <span className="font-mono text-sm">{label}</span>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-3 text-muted">
                    <span className="w-9 h-9 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </span>
                    <span className="font-mono text-sm">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            {submitted ? (
              <div className="bg-dark-card border border-accent/30 rounded-sm p-10 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted text-sm">
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {error && (
                  <p className="text-red-400 text-sm font-mono">{error}</p>
                )}

                {/* Name + Email */}
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-muted uppercase mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-dark-border focus:border-accent outline-none py-3 text-white"
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label className="block text-xs text-muted uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-dark-border focus:border-accent outline-none py-3 text-white resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white font-semibold py-4 rounded-sm disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}