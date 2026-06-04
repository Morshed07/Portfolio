import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Mail } from "lucide-react";

const Github = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
);
Github.displayName = "Github";

const Linkedin = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<"svg">>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
);
Linkedin.displayName = "Linkedin";

const socials = [
  { icon: Mail, href: "mailto:inayeem729@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/Morshed", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/Morshed-Nayeem", label: "LinkedIn" },
];


export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg">
          Morshed Nayeem<span className="text-accent">.</span>
        </p>
        <p className="text-muted text-sm font-body">
          Designed & Built by Abdullah Al Morshed Nayeem
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-9 h-9 bg-dark-card border border-dark-border rounded-sm flex items-center justify-center text-muted hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
