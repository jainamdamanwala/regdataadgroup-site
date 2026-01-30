import Container from "./Container";

export default function TrustStrip() {
  const placeholders = ["FDA", "EU MDR", "IVDR", "ISO 13485", "ISO 14971", "IEC 62304"];

  return (
    <section className="section-muted">
      <Container>
        <div className="py-10">
          <p className="text-xs font-semibold tracking-wide text-slate-600">
            TRUSTED REGULATORY COVERAGE
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {placeholders.map((p) => (
              <div key={p} className="card lift">
                <p className="text-sm font-semibold text-slate-800">{p}</p>
                <p className="mt-1 text-xs text-slate-500">Framework expertise</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}