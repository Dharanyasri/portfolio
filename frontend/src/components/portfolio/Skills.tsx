import { Code2, Globe, Layers, Database, Wrench, Brain } from "lucide-react";
import { Section } from "./Section";

const GROUPS = [
  { icon: Code2, title: "Programming", items: ["Python", "C"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Layers, title: "Frameworks", items: ["React.js", "Node.js", "Express.js"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "VS Code", "Google Colab"] },
  { icon: Brain, title: "Core", items: ["DSA", "UI/UX Design"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My tech toolkit">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GROUPS.map((g, i) => (
          <div
            key={g.title}
            className="reveal gradient-border rounded-2xl p-6 group hover:-translate-y-1 transition-all"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                <g.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-muted/40 text-foreground/90"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
