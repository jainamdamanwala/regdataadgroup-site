import Container from "./Container";
import SectionHeader from "./SectionHeader";

const cases = [
  {
    title: "510(k) Strategy + Submission Execution",
    body: "End-to-end pathway planning, predicate strategy, and submission-ready documentation with disciplined timelines and consistent narratives.",
    outcome: "Reduced rework and accelerated review cycle confidence.",
  },
  {
    title: "EU MDR / IVDR Technical Documentation",
    body: "Technical documentation strategy aligned to clinical/performance expectations, risk, and labeling with regulator-ready consistency.",
    outcome: "Improved audit readiness and defensibility under scrutiny.",
  },
  {
    title: "AI/ML SaMD Validation + PCCP Support",
    body: "Model validation documentation, bias/generalizability analyses, and change control planning aligned to intended use and lifecycle monitoring.",
    outcome: "Stronger evidence story for modern review expectations.",
  },
];

export default function CaseHighlights() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeader
          eyebrow="Selected Outcomes"
          title="High-impact support across complex programs"
          subtitle="Examples are anonymized and representative of how clients use our services."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="card lift-strong">
              <p className="text-sm font-semibold text-slate-950">{c.title}</p>
              <p className="mt-3 text-sm text-slate-600">{c.body}</p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-brand-blue">Outcome</p>
                <p className="mt-2 text-sm text-slate-700">{c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}