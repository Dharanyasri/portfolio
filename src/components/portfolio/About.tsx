import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Section } from "./Section";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "B.Tech Information Technology (2023–2027), Dhirajlal Gandhi College of Technology.",
    },
    {
      icon: Sparkles,
      title: "Passion",
      text: "Full Stack Development, Artificial Intelligence and Machine Learning.",
    },
    {
      icon: Target,
      title: "Goal",
      text: "To become a proficient full stack developer with expertise in AI-driven applications and contribute to innovative and meaningful tech solutions.",
    },
  ];

  return (
    <Section id="about" eyebrow="About Me" title="A glimpse of who I am">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="reveal space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm an <span className="text-foreground font-medium">Information Technology student</span> about <span className="text-primary">full stack development and artificial intelligence,</span> with a strong interest in building modern, user-friendly web applications.
          </p>
          <p>
            I enjoy designing and developing applications that are not only functional but also intuitive and visually engaging. My skill set includes <span className="text-foreground font-medium"> Python, React, Node.js, and SQL,</span> and I’m continuously working on improving both my frontend and backend development skills.
          </p>
          <p>
            Through internships and hackathons like  <span className="text-foreground font-medium">Smart India Hackathon and HackIndia,</span> I’ve gained hands-on experience in problem-solving, teamwork, and developing real-world solutions under pressure.
          </p>
          <p>
            I’m focused on growing as a developer by building impactful projects and staying updated with the latest technologies in web and AI.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal gradient-border rounded-2xl p-6 flex gap-4 items-start hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <h.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
