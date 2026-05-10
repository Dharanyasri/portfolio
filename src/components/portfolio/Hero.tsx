import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import resume from "@/assets/Dharanya_resume.pdf"; 

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/50 via-background/80 to-background" />

      {/* Floating orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl animate-glow-pulse"
           style={{ background: "oklch(0.78 0.16 210 / 0.3)" }} />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl animate-glow-pulse delay-1000"
           style={{ background: "oklch(0.72 0.2 295 / 0.3)" }} />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs text-muted-foreground animate-[fade-up_0.6s_ease-out]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-[fade-up_0.8s_ease-out_0.1s_both]">
          Hi, I'm <span className="gradient-text">Dharanya</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium animate-[fade-up_0.8s_ease-out_0.2s_both]">
          Aspiring Full Stack Developer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-[fade-up_0.8s_ease-out_0.3s_both]">
          B.Tech IT student passionate about building real-world products in Full Stack and AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-[fade-up_0.8s_ease-out_0.4s_both]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            View My Work <ArrowRight size={16} />
          </a>
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold border border-border bg-card/60 backdrop-blur-sm text-foreground transition-colors hover:bg-card"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5 animate-[fade-up_0.8s_ease-out_0.5s_both]">
          {[
            { href: "https://github.com/Dharanyasri", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/dharanya-s-7b41222b7", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:dharanyasri3@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
