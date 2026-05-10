import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-lg">
            <span className="gradient-text">Dharanya</span>
            <span className="gradient-text">Sridharan</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
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
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-0.5"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
