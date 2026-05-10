import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";

const PROJECTS = [
  {
    title: "AI-Powered BMI Wellness Web App",
    description:
      "Full-stack wellness platform that calculates BMI and provides health category insights based on user input.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Dharanyasri/BMI.git",
    gradient: "from-sky-400/30 to-cyan-400/20",
  },
  {
    title: "Employee Salary Prediction",
    description:
      "Machine learning-based web application that predicts employee salaries using key features.",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Dharanyasri/Edunet.git",
    gradient: "from-fuchsia-400/30 to-purple-400/20",
  },
  {
    title: "Virtual Herbal Garden (AYUSH)",
    description:
      "Interactive platform showcasing medicinal plants with rich visuals and smooth UI.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Dharanyasri/Herbal_Garden.git",
    gradient: "from-emerald-400/30 to-teal-400/20",
  },
  {
    title: "Voice Translator Web App",
    description:
      "Real-time voice translation application for seamless cross-language communication.",
    stack: ["Python", "SpeechRecognition", "Google Translate API", "Streamlit"],
    github: "https://github.com/Dharanyasri/voice_translator-.git",
    gradient: "from-indigo-400/30 to-blue-400/20",
  },
  {
    title: "Password Strength Checker",
    description:
      "GUI-based application that evaluates password strength using rule-based validation.",
    stack: ["Python", "PyQt5", "Regex"],
    github: "https://github.com/Dharanyasri/password_strength.git",
    gradient: "from-rose-400/30 to-pink-400/20",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="reveal group relative gradient-border rounded-2xl p-6 flex flex-col hover:-translate-y-2 transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Hover Gradient */}
            <div
              className={`absolute inset-0 rounded-2xl bg-linear-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
            />

            <div className="relative flex-1">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-lg text-foreground">{p.title}</h3>

                {/* 🔗 Links */}
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <Github className="text-muted-foreground hover:text-primary transition" size={18} />
                    </a>
                  )}


                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}