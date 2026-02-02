import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { whoWeServe } from "@/lib/content";

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="section section-muted">
      <Container>
        <SectionHeader title={whoWeServe.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          {whoWeServe.bullets.map((b) => (
            <ScrollReveal key={b}>
              <div className="card">
                <div className="flex items-start gap-3">
                  {/* Icon placeholder */}
                  <div
                    className="mt-1 h-8 w-8 rounded-lg border"
                    style={{
                      borderColor: "rgba(var(--brand-blue),0.25)",
                      background:
                        "linear-gradient(135deg, rgba(var(--brand-green),0.18), rgba(var(--brand-teal),0.18))",
                    }}
                  />

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