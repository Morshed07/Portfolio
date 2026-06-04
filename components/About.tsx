"use client";
import { Server, Link2, Database } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    desc: "Scalable Django/DRF APIs with clean architecture and 99.9% uptime.",
  },
  {
    icon: Link2,
    title: "Microservices & APIs",
    desc: "RESTful API design, JWT/OAuth2 auth, and microservice architecture.",
  },
  {
    icon: Database,
    title: "Data & Ops",
    desc: "PostgreSQL, Redis, Celery, Docker, CI/CD pipelines, and Nginx.",
  },
];

const stats = [
  { value: "99.9%", label: "API Uptime", sub: "production average" },
  { value: "500+", label: "Paying Users", sub: "subscription lifecycle managed" },
  { value: "35%", label: "Load Time Cut", sub: "via HLS streaming" },
  { value: "10k+", label: "Monthly Operations", sub: "status checks & uploads" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Services list */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-accent" />
              <span className="text-accent font-mono text-sm tracking-widest uppercase">
                What I do
              </span>
            </div>

            <div className="space-y-0">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-6 border-b border-dark-border group cursor-default"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-200">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1">
                        {s.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed font-body">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: About text + stats */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              About <span className="text-accent">me</span>
            </h2>

            <p className="text-muted font-body leading-relaxed mb-4">
              I&apos;m a backend developer based in Mirpur, Dhaka, with a B.Sc. in
              Computer Science from Daffodil International University. I started my
              journey building Django REST backends and fell in love with the craft
              of making APIs that are both powerful and elegant.
            </p>
            <p className="text-muted font-body leading-relaxed mb-10">
              Currently at <span className="text-white">Join Venture AI</span>, I architect
              AI-driven systems, manage subscription lifecycles, and optimize video
              delivery pipelines. I believe great backend engineering is invisible —
              it just works, at scale, reliably.
            </p>

            {/* Stats — horizontal metric rows */}
            <div className="border border-dark-border rounded-sm overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-4 group hover:bg-accent/5 transition-colors duration-200 ${
                    i !== stats.length - 1 ? "border-b border-dark-border" : ""
                  }`}
                >
                  <div>
                    <p className="text-white font-body text-sm font-medium">{stat.label}</p>
                    <p className="text-muted font-mono text-xs mt-0.5">{stat.sub}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-dark-border group-hover:w-16 group-hover:bg-accent/40 transition-all duration-300" />
                    <span className="font-display font-bold text-2xl text-accent tabular-nums">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
