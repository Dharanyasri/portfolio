import { Trophy, Rocket, Award } from "lucide-react";
import { Section } from "./Section";

const ITEMS = [
  {
    icon: Award,
    title: "Special Achievement Award 2026",
    text: "Received Certificate of Appreciation from Dhirajlal Gandhi College of Technology for outstanding academic performance in the academic year 2025–2026.",
  },
  {
    icon: Trophy,
    title: "HackIndia 2025 — Round 2 Qualifier",
    text: "Qualified among the top 1000+ ideas in a nationwide hackathon.",
  },
  {
    icon: Rocket,
    title: "National Space Day 2025 — ISRO",
    text: "Participated at SDSC SHAR during India's National Space Day celebrations.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones I'm proud of">
      <div className="grid md:grid-cols-2 gap-5">
        {ITEMS.map((a, i) => (
          <div
            key={a.title}
            className="reveal gradient-border rounded-2xl p-6 flex gap-4 items-start hover:-translate-y-1 transition-transform"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Icon */}
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <a.icon size={22} />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {a.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}