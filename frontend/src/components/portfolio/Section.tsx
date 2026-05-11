import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 reveal">
          {eyebrow && (
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="mt-4 h-0.5 w-24 rounded-full bg-linear-to-r from-primary to-accent" />
        </div>
        {children}
      </div>
    </section>
  );
}
