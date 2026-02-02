import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { coreValues } from "@/lib/content";

export default function CoreValues() {
  return (
    <section id="values" className="section bg-white">
      <Container>
        <SectionHeader title={coreValues.title} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.values.map((v) => (
            <div key={v.title} className="card-muted">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl border border-slate-200 bg-gradient-to-br from-brand-green/25 via-white to-brand-blue/25" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{v.title}</h3>
                  <p className="mt-3 text-slate-600">
                    <span className="font-semibold text-slate-800">What it means: </span>
                    {v.meaning}
                  </p>
                  <p className="mt-3 text-slate-600">
                    <span className="font-semibold text-slate-800">What clients get: </span>
                    {v.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}