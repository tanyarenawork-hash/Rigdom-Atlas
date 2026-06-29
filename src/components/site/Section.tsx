import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "mist";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={tone === "mist" ? "bg-muted/50 border-y border-border" : ""}
    >
      <div className="container-page py-20 md:py-28">
        {(eyebrow || title || intro) && (
          <header className="max-w-3xl">
            {eyebrow && (
              <p className="eyebrow flex items-center gap-3">
                <span className="gold-rule" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground leading-[1.05]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
            )}
          </header>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="container-page pt-20 pb-16 md:pt-28 md:pb-20 max-w-4xl">
        <p className="eyebrow flex items-center gap-3">
          <span className="gold-rule" />
          {eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] text-foreground">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
