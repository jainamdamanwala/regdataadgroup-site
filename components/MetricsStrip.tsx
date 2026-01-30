import Container from "./Container";
import { brand } from "@/lib/content";

export default function MetricsStrip() {
  return (
    <section className="section-muted">
      <Container>
        <div className="grid gap-3 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {brand.metrics.map((m) => (
            <div key={m} className="card">
              <p className="text-sm font-semibold text-slate-900">{m}</p>
              <p className="mt-2 text-xs text-slate-500">
                Experience-backed outcomes and regulator-ready delivery.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}