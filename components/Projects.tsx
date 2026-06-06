"use client";

import { ShoppingCart } from "lucide-react";

interface Project {
  name: string;
  subtitle: string;
  tags: string[];
  description: string;
  liveUrl?: string;
  highlight: string;
  isCode?: boolean;
  codeSnippet?: string;
}

const projects: Project[] = [
  {
    name: "ChronoVerify",
    subtitle: "AI Watch Authentication",
    tags: ["Django", "Redis", "Celery", "RevenueCat"],
    description:
      "Architected an AI-driven watch verification tool maintaining stability under 500+ concurrent users with 99.9% API uptime. Decoupled AI analysis from the request cycle for instant responses.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.chronoverify.app&pcampaignid=web_share",
    highlight: "10,000+ monthly checks",
    isCode: true,
    codeSnippet: `# Celery task — async AI inference
@app.task(bind=True, max_retries=3)
def verify_watch(self, image_id: str):
    img = fetch_image(image_id)
    result = ai_model.predict(img)
    cache.set(f"result:{image_id}", result)
    return result`,
  },
  {
    name: "DramaTube",
    subtitle: "Video Streaming Platform",
    tags: ["Django", "Redis", "FFmpeg", "HLS", "Celery"],
    description:
      "Implemented HLS-based adaptive streaming for fast video starts and quality adjustments based on connection speed. Built a background system handling 300+ daily video processing tasks.",
    liveUrl: "#",
    highlight: "35% faster load times",
    isCode: true,
    codeSnippet: `# HLS adaptive streaming pipeline
@shared_task
def process_video(video_id: str):
    video = Video.objects.get(pk=video_id)

    ffmpeg.input(video.raw_path)\
          .output(
              f"{video.id}/stream.m3u8",
              format="hls",
              hls_time=4
          )\
          .run(overwrite_output=True)

    video.status = "ready"
    video.save()`,
  },
  {
    name: "Reactides",
    subtitle: "Healthcare E-commerce",
    tags: ["Django", "WebSockets", "PostgreSQL", "Signals"],
    description:
      "Built the full cart system using session-based storage with payment integration. Hooked into Django signals to automatically trigger order notifications on status changes.",
    liveUrl: "https://reactides.com",
    highlight: "Real-time order updates",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              Work
            </span>
            <span className="w-8 h-px bg-accent" />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Featured Projects
          </h2>

          <div className="w-1 h-8 bg-accent mx-auto mt-4" />
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, i) => {
            const card = (
              <div
                className={`grid md:grid-cols-2 gap-10 items-center group ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Left */}
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted border border-dark-border px-3 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {project.name}
                  </h3>

                  <p className="text-accent font-mono text-sm mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-white text-sm font-medium">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-accent font-mono text-sm">
                    <span>Explore Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-accent/40 group-hover:-translate-y-1">
                    {project.isCode && project.codeSnippet ? (
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-3 h-3 rounded-full bg-red-500/70" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                          <span className="w-3 h-3 rounded-full bg-green-500/70" />
                          <span className="text-xs text-muted font-mono ml-2">
                            {project.name.toLowerCase()}.py
                          </span>
                        </div>

                        <pre className="font-mono text-xs text-green-400/80 leading-relaxed overflow-x-auto">
                          <code>{project.codeSnippet}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="h-56 flex items-center justify-center relative overflow-hidden bg-dark">
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255,69,0,0.08), transparent 70%)",
                          }}
                        />

                        <div className="relative z-10 flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-lg bg-dark-card border border-accent/20 flex items-center justify-center">
                            <ShoppingCart
                              className="w-7 h-7 text-accent"
                              strokeWidth={1.5}
                            />
                          </div>

                          <div className="text-center">
                            <p className="font-semibold text-white">
                              {project.name}
                            </p>

                            <p className="text-muted text-xs font-mono mt-1">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

            return project.liveUrl ? (
              <a
                key={project.name}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={project.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}