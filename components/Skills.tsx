"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  image: string;
  proficiency: number;
  color: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    image: "/icons8-python.png",
    proficiency: 90,
    color: "#3776AB",
  },
  {
    name: "Django",
    image: "/icons8-django-24.png",
    proficiency: 88,
    color: "#22c55e",
  },
  {
    name: "Celery",
    image: "/icons8-celery-48.png",
    proficiency: 78,
    color: "#84cc16",
  },
  {
    name: "PostgreSQL",
    image: "/icons8-postgresql-48.png",
    proficiency: 85,
    color: "#336791",
  },
  {
    name: "Redis",
    image: "/icons8-redis-48.png",
    proficiency: 80,
    color: "#DC382D",
  },
  {
    name: "Docker",
    image: "/icons8-docker-48.png",
    proficiency: 82,
    color: "#2496ED",
  },
  {
    name: "React",
    image: "/icons8-react-native-48.png",
    proficiency: 75,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    image: "/icons8-nextjs-64.png",
    proficiency: 72,
    color: "#FFFFFF",
  },
  {
    name: "Git",
    image: "/icons8-git-48.png",
    proficiency: 90,
    color: "#F05032",
  },
  {
    name: "Tailwind CSS",
    image: "/icons8-tailwindcss-48.png",
    proficiency: 78,
    color: "#06B6D4",
  },
];

function SkillCard({
  skill,
  animate,
}: {
  skill: Skill;
  animate: boolean;
}) {
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
    <div className="group bg-dark-card border border-dark-border hover:border-white/10 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1">
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${skill.color}15`,
            border: `1px solid ${skill.color}30`,
          }}
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm">
            {skill.name}
          </h3>
          <p className="text-xs text-muted">
            Professional Experience
          </p>
        </div>
      </div>

      {/* Percentage */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-muted font-mono">
          Proficiency
        </span>

        <span
          className="text-xs font-bold font-mono"
          style={{ color: skill.color }}
        >
          {count}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-dark-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.proficiency}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent text-sm font-medium mb-3">
            MY TECH STACK
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Backend-focused software engineer experienced in building
            scalable APIs, microservices, background task systems,
            cloud deployments, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}