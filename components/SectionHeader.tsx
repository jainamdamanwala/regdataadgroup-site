import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <ScrollReveal>
          <p
            className="text-xs font-semibold tracking-wide"
            style={{ color: "rgb(var(--brand-blue))" }}
          >
            {eyebrow.toUpperCase()}
          </p>
        </ScrollReveal>
      ) : null}

      <ScrollReveal className="mt-3">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
      </ScrollReveal>

      {subtitle ? (
        <ScrollReveal className="mt-4">
          <p className="max-w-3xl text-slate-600">{subtitle}</p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}