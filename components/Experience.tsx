"use client";

const experiences = [
  {
    role: "Backend Developer",
    company: "Join Venture AI",
    period: "Jul 2026 – Present",
    current: true,
    bullets: [
      "Promoted to Backend Developer in July 2026 to lead system architecture and core API infrastructure.",
      "Architected core backend for an AI watch verification platform, maintaining 99.9% API uptime under 500+ concurrent users.",
      "Engineered asynchronous task processing with Celery worker pools to offload heavy AI inference workflows.",
      "Managed end-to-end subscription lifecycles and payment webhooks via RevenueCat for 500+ active paying subscribers.",
      "Implemented adaptive HLS video streaming pipelines, cutting initial playback load times by 35%.",
    ],
  },
  {
    role: "Junior Backend Developer",
    company: "Join Venture AI",
    period: "Jul 2025 – Jun 2026",
    current: false,
    bullets: [
      "Developed core RESTful services and relational database schemas using Django REST Framework.",
      "Integrated Redis caching strategies and background worker pipelines for asynchronous job handling.",
      "Collaborated with cross-functional engineering teams to define clean, typed API contracts.",
    ],
  },
  {
    role: "Junior Backend Developer",
    company: "DevXhub",
    period: "Jun 2024 – May 2025",
    current: false,
    bullets: [
      "Engineered and maintained Django REST backends for 3 production client software products.",
      "Hardened platform security across 50+ endpoints using strict role-based access control (RBAC) and JWT validation.",
      "Optimized relational database queries via targeted indexing, substantially reducing average API response times.",
      "Collaborated with frontend developers to accelerate feature delivery across multi-tenant applications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative" aria-label="Work experience of Morshed Nayeem">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="inline-block w-8 h-0.5 bg-accent" />
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            Experience
          </span>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-dark-border md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-accent border-accent"
                        : "bg-dark border-dark-border"
                    }`}
                  />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16" : "[direction:ltr] md:pl-16"}`}>
                  <div className="bg-dark-card border border-dark-border rounded-sm p-6 hover:border-accent/30 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-mono text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs font-mono px-2.5 py-1 rounded-sm ${
                            exp.current
                              ? "bg-accent/10 text-accent border border-accent/20"
                              : "bg-dark border border-dark-border text-muted"
                          }`}
                        >
                          {exp.current ? "Current" : exp.period}
                        </span>
                        {exp.current && (
                          <p className="text-xs text-muted mt-1">{exp.period}</p>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted font-body">
                          <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty column for alternating */}
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
