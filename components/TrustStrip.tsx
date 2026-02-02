import Container from "./Container";
import ScrollReveal from "./ScrollReveal";

export default function TrustStrip() {
  const placeholders = ["FDA", "EU MDR", "IVDR", "ISO 13485", "ISO 14971", "IEC 62304"];

  return (
    <section className="section-muted">
      <Container>
        <div className="py-10">
          <ScrollReveal>
            <p
              className="text-xs font-semibold tracking-wide"
              style={{ color: "rgb(var(--brand-blue))" }}
            >
              TRUSTED REGULATORY COVERAGE
            </p>
          </ScrollReveal>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {placeholders.map((p) => (
              <ScrollReveal key={p}>
                <div className="card">
                  <div className="flex items-start gap-3">
                    {/* Small brand icon */}
                    <div
                      className="mt-0.5 h-8 w-8 rounded-lg border"
                      style={{
                        borderColor: "rgba(var(--brand-blue),0.25)",
                        background:
                          "linear-gradient(135deg, rgba(var(--brand-green),0.18), rgba(var(--brand-teal),0.18))",
                      }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{p}</p>
                      <p className="mt-1 text-xs text-slate-500">Framework expertise</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}