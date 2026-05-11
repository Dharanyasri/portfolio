import { Award } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";

import cyberImg from "../../assets/cybersecurity.png";
import aiImg from "../../assets/ai-fundamentals.png";
import sawitImg from "../../assets/sawit.png";
import fullstackImg from "../../assets/fullstack.png";
import genaiImg from "../../assets/genai.png";

const CERTS = [
  {
    title: "Cybersecurity Program",
    issuer: "AICTE LearnFlu",
    image: cyberImg,
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    image: aiImg,
  },
  {
    title: "SAWIT AI Learnathon",
    issuer: "GUVI, HCL",
    image: sawitImg,
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    image: fullstackImg,
  },
  {
    title: "GenAI",
    issuer: "Forage, Tata",
    image: genaiImg,
  },
];

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Credentials & learning"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <div
              key={c.title}
              className="reveal gradient-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Clickable Image */}
              <img
                src={c.image}
                alt={c.title}
                onClick={() => setSelectedImage(c.image)}
                className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-5 flex gap-4 items-start">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Award size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ Modal OUTSIDE Section */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </>
  );
}