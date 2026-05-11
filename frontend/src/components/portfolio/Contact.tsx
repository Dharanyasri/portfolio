import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "dharanyasri3@gmail.com",
      href: "mailto:dharanyasri3@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90255 72658",
      href: "tel:+919025572658",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dharanyasri",
      href: "https://github.com/Dharanyasri",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dharanya-s",
      href: "https://www.linkedin.com/in/dharanya-s-7b41222b7",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://portfolio-kctw.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="reveal space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have an opportunity, project idea, or just want to say hi? My inbox
            is always open — I'll do my best to get back to you quickly.
          </p>

          <div className="grid gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="gradient-border rounded-xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-primary-foreground shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <c.icon size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>

                  <p className="text-sm text-foreground truncate">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal gradient-border rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              name="name"
              label="Name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />

            <Field
              name="email"
              label="Email"
              placeholder="you@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <Field
            name="subject"
            label="Subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
          />

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more..."
              className="w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      />
    </div>
  );
}