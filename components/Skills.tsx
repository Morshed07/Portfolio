"use client";
import { Server, Layers, Database, Wrench, LucideIcon } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: Server,
    skills: ["Python", "Django", "DRF", "Microservices", "RESTful API", "JWT/OAuth2"],
  },
  {
    category: "Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Data & Ops",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "CI/CD"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "PyTest", "FFmpeg", "HLS Streaming", "RevenueCat", "WebSockets"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="inline-block w-8 h-0.5 bg-accent" />
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            Technical Skills
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <div
                key={i}
                className="bg-dark-card border border-dark-border rounded-sm p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-sm bg-dark border border-dark-border flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-200">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-muted bg-dark border border-dark-border px-2.5 py-1 rounded-sm group-hover:border-accent/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
