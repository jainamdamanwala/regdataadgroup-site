import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { whoWeServe } from "@/lib/content";

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="section section-muted">
      <Container>
        <SectionHeader title={whoWeServe.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          {whoWeServe.bullets.map((b) => (
            <div key={b} className="card lift">
              <div className="flex items-start gap-3">
                <div className="card" />
                <p className="text-slate-700">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}