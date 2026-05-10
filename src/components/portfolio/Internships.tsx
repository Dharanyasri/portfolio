import { Briefcase } from "lucide-react";
import { Section } from "./Section";

export function Internships() {
  const items = [
    {
      role: "Web Design Intern",
      company: "Ematrix",
      summary:
        "Worked on designing and implementing responsive web interfaces, improving UI/UX consistency and applying modern frontend practices.",
    },
    {
      role: "AIML Intern",
      company: "Edunet Foundation, AICTE, IBM SkillsBuild",
      summary:
        "Completed a 6-week internship in Artificial Intelligence and Machine Learning with Edunet Foundation in collaboration with AICTE and IBM SkillsBuild.",
    },
    {
      role: "Cyber Security Intern",
      company: "LearnFlu, AICTE",
      summary:
        "Successfully completed a Cyber Security Program with LearnFlu, gaining practical experience through project-based learning.",
    },
  ];

  return (
    <Section id="internships" eyebrow="Experience" title="Internships">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-primary via-accent to-transparent" />
        <div className="space-y-6">
          {items.map((it, i) => (
            <div
              key={it.role}
              className="reveal relative pl-14"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <Briefcase size={16} />
              </div>
              <div className="gradient-border rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-lg">{it.role}</h3>
                  <span className="text-sm text-primary font-medium">{it.company}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
