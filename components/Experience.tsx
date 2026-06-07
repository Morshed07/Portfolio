"use client";

const experiences = [
  {
    role: "Junior Backend Developer",
    company: "Join Venture AI",
    period: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Architected core backend for an AI-driven watch verification tool, stable under 500+ concurrent users.",
      "Developed image processing pipeline maintaining 99.9% production API uptime.",
      "Offloaded heavy AI inference to Celery workers for significantly faster user experience.",
      "Configured RevenueCat to manage full subscription lifecycle for 500+ paying users.",
      "Reworked video delivery to adaptive HLS streaming, cutting initial load times by 35%.",
    ],
  },
  {
    role: "Junior Backend Developer",
    company: "DevXhub",
    period: "Sep 2024 – May 2025",
    current: false,
    bullets: [
      "Built and maintained Django REST backends for 3 distinct client products.",
      "Collaborated with frontend teams to define clean API contracts, accelerating feature delivery.",
      "Hardened security across 50+ endpoints using role-based permissions and strict token validation.",
      "Optimized slow database queries via targeted indexing, reducing average response times.",
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
