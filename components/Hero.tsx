"use client";
import Image from "next/image";

const skills = ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Docker", "React", "Next.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#FF4500 1px, transparent 1px), linear-gradient(90deg, #FF4500 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Text */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-0.5 bg-accent" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              Available for hire
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
            Hello
            <span className="text-accent">.</span>
            <br />
            I&apos;m{" "}
            <span className="text-gradient">Morshed</span>
          </h1>

          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white/80 mb-6">
            Backend Developer
          </h2>

          <p className="text-muted font-body text-base leading-relaxed max-w-md mb-8">
            I build scalable, high-performance backend systems with Django & Python. 
            Passionate about clean API design, microservices, and shipping products 
            that users actually love.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-sm transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-accent/20"
            >
              Let's Work Together?
            </a>
            <button
              type="button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Morshed_Nayeem_s_CV.pdf";
                link.download = "Morshed_Nayeem_s_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center gap-2 border border-dark-border hover:border-white/30 text-white font-medium px-6 py-3 rounded-sm transition-all duration-200 cursor-pointer"
            >
              My resume
            </button>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs font-mono text-muted border border-dark-border px-3 py-1 rounded-sm hover:border-accent/50 hover:text-white transition-colors duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative bracket shapes */}
          <div className="absolute top-0 left-8 text-accent/30 font-mono text-6xl select-none">&lt;</div>
          <div className="absolute bottom-0 right-8 text-accent/30 font-mono text-6xl select-none">&gt;</div>

          {/* Circle ring */}
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full border border-accent/20"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 70%, rgba(255,69,0,0.4) 100%)",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* Orange arc */}
            <div
              className="absolute inset-3 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(255,69,0,0.15), transparent 60%)",
              }}
            />

            {/* Photo container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-accent/30 glow-accent">
              <Image
                src="/profile.png"
                alt="Abdullah Al Morshed Nayeem"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Status indicator — bottom left */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-4 py-2 shadow-lg shadow-black/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-mono text-white/70 whitespace-nowrap">Open to work</span>
            </div>

            {/* Stack tag — top right */}
            <div className="absolute -top-3 -right-6 bg-dark border border-accent/25 rounded-sm px-3 py-1.5 shadow-lg shadow-black/40">
              <p className="text-xs font-mono text-accent tracking-widest">Django · DRF · Python</p>
            </div>
          </div>

          <style jsx>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
