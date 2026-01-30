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
        <p className="text-xs font-semibold tracking-wide text-blue-700">{eyebrow.toUpperCase()}</p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-slate-600">{subtitle}</p> : null}
    </div>
  );
}