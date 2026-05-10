import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Internships } from "@/components/portfolio/Internships";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharanya Sridharan" },
      {
        name: "description",
        content:
          "Portfolio of Dharanya Sridharan — B.Tech IT student passionate about full stack development and AI.",
      },
      {
        property: "og:title",
        content: "Dharanya Sridharan — Portfolio",
      },
      {
        property: "og:description",
        content:
          "Showcasing projects, skills, and achievements in full stack development and AI.",
      },
      { property: "og:type", content: "website" },
    ],

    // ✅ This removes Lovable favicon completely
    links: [
      {
        rel: "icon",
        href: "data:,",
      },
    ],
  }),

  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Internships />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}