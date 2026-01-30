import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { engagement } from "@/lib/content";

export default function HowClientsEngage() {
  return (
    <section className="section section-muted">
      <Container>
        <SectionHeader eyebrow="Engagement Models" title={engagement.title} />
        <div className="grid gap-4 sm:grid-cols-3">
          {engagement.bullets.map((b) => (
            <div key={b} className="card lift">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl border border-slate-200 bg-slate-50" />
                <p className="text-slate-700">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}