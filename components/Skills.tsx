"use client";
import { useEffect, useRef, useState } from "react";
import {
  Server, Globe, Database, Container,
  GitBranch, TestTube, Layers, Zap,
  LucideIcon
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  proficiency: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Python",       icon: Zap,       proficiency: 90, color: "#3b82f6" },
  { name: "Django",       icon: Server,    proficiency: 88, color: "#22c55e" },
  { name: "DRF",          icon: Globe,     proficiency: 85, color: "#f97316" },
  { name: "PostgreSQL",   icon: Database,  proficiency: 80, color: "#a855f7" },
  { name: "Redis",        icon: Zap,       proficiency: 75, color: "#ef4444" },
  { name: "Docker",       icon: Container, proficiency: 72, color: "#06b6d4" },
  { name: "React",        icon: Layers,    proficiency: 65, color: "#38bdf8" },
  { name: "Next.js",      icon: GitBranch, proficiency: 60, color: "#e2e8f0" },
  { name: "Celery",       icon: Zap,       proficiency: 78, color: "#facc15" },
  { name: "Git",          icon: GitBranch, proficiency: 85, color: "#fb923c" },
  { name: "PyTest",       icon: TestTube,  proficiency: 70, color: "#34d399" },
  { name: "Tailwind CSS", icon: Layers,    proficiency: 68, color: "#7dd3fc" },
];

function SkillCard({ skill, animate }: { skill: Skill; animate: boolean }) {
  const Icon = skill.icon;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1000;
    const step = Math.ceil(skill.proficiency / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= skill.proficiency) {
        setCount(skill.proficiency);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [animate, skill.proficiency]);

  return (
    <div className="bg-dark-card border border-dark-border rounded-sm p-5 hover:border-white/10 transition-all duration-300 group">
      {/* Icon + name */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
        >
          <Icon className="w-4 h-4" style={{ color: skill.color }} strokeWidth={1.5} />
        </div>
        <span className="font-display font-semibold text-white text-sm tracking-wide">
          {skill.name}
        </span>
      </div>

      {/* Proficiency label */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-muted">Proficiency</span>
        <span className="text-xs font-mono font-semibold tabular-nums" style={{ color: skill.color }}>
          {count}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-dark-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.proficiency}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            transitionDelay: "0.1s",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted font-body text-sm max-w-md mx-auto">
            Technologies and tools I work with to build scalable backend systems
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}