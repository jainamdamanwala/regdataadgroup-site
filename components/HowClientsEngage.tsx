import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { engagement } from "@/lib/content";

export default function HowClientsEngage() {
  return (
    <section className="section section-muted">
      <Container>
        <SectionHeader eyebrow="Engagement Models" title={engagement.title} />

        <div className="grid gap-4 sm:grid-cols-3">
          {engagement.bullets.map((b) => (
            <ScrollReveal key={b}>
              <div className="card">
                <div className="flex items-start gap-3">
                  {/* <div
                    className="mt-1 h-10 w-10 rounded-xl border"
                    style={{
                      borderColor: "rgba(var(--brand-blue), 0.25)",
                      background:
                        "linear-gradient(135deg, rgba(var(--brand-green),0.18), rgba(var(--brand-teal),0.18))",
                    }}
                  /> */}
                  <p className="text-slate-700">{b}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}