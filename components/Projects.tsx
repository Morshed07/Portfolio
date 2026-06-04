"use client";

interface Project {
  name: string;
  subtitle: string;
  tags: string[];
  description: string;
  githubUrl?: string;
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
    githubUrl: "#",
    liveUrl: "#",
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
    githubUrl: "#",
    liveUrl: "#",
    highlight: "35% faster load times",
    isCode: true,
    codeSnippet: `# HLS adaptive streaming pipeline
@shared_task
def process_video(video_id: str):
    video = Video.objects.get(pk=video_id)
    ffmpeg.input(video.raw_path)\\
          .output(f"{video.id}/stream.m3u8",
                  format='hls', hls_time=4)\\
          .run(overwrite_output=True)
    video.status = 'ready'
    video.save()`,
  },
  {
    name: "Reactides",
    subtitle: "Healthcare E-commerce",
    tags: ["Django", "WebSockets", "PostgreSQL", "Signals"],
    description:
      "Built the full cart system using session-based storage with Zelle payment integration. Hooked into Django signals to automatically trigger order notifications on status changes.",
    githubUrl: "#",
    liveUrl: "#",
    highlight: "Real-time order updates",
    isCode: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* BG accent */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-0.5 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              Work
            </span>
            <span className="inline-block w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Projects
          </h2>
          <div className="w-1 h-8 bg-accent mx-auto mt-4" />
        </div>

        {/* Project cards */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted border border-dark-border px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-accent font-mono text-sm mb-4">
                  {project.subtitle}
                </p>
                <p className="text-muted font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full" />
                  <span className="text-white text-sm font-medium">
                    {project.highlight}
                  </span>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View Github
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1 text-sm text-muted hover:text-white transition-colors duration-200 underline underline-offset-4"
                    >
                      View project ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Visual side */}
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <div className="bg-dark-card border border-dark-border rounded-sm overflow-hidden hover:border-accent/30 transition-colors duration-300">
                  {project.isCode && project.codeSnippet ? (
                    <div className="p-6">
                      {/* Terminal bar */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span className="text-xs text-muted font-mono ml-2">
                          {project.name.toLowerCase().replace(" ", "_")}.py
                        </span>
                      </div>
                      <pre className="font-mono text-xs text-green-400/80 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  ) : (
                    <div className="h-52 flex items-center justify-center bg-gradient-to-br from-dark-card to-dark relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `radial-gradient(circle at 50% 50%, #FF4500, transparent 70%)`,
                        }}
                      />
                      <div className="text-center z-10">
                        <div className="text-5xl mb-3">🏥</div>
                        <p className="font-display font-semibold text-white text-lg">
                          {project.name}
                        </p>
                        <p className="text-muted text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
