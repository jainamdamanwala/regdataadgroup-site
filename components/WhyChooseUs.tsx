import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { whyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white">
      <Container>
        <SectionHeader title={whyChooseUs.title} subtitle={whyChooseUs.intro} />

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.pillars.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="card">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 h-10 w-10 rounded-xl border"
                    style={{
                      borderColor: "rgba(var(--brand-blue), 0.25)",
                      background:
                        "linear-gradient(135deg, rgba(var(--brand-green),0.18), rgba(var(--brand-teal),0.18))",
                    }}
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{p.title}</h3>

                    <div className="mt-4 grid gap-2">
                      {p.points.map((pt) => (
                        <div
                          key={pt}
                          className="rounded-xl border p-4 transition"
                          style={{
                            borderColor: "rgba(var(--brand-blue),0.2)",
                            background:
                              "linear-gradient(135deg, rgba(var(--brand-green),0.06), rgba(255,255,255,0.95))",
                          }}
                        >
                          <p className="text-sm text-slate-700">{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10">
          <div className="mt-10 rounded-3xl border border-slate-200 bg-medical p-8 shadow-soft relative overflow-hidden">
            <p
              className="text-xs font-semibold tracking-wide"
              style={{ color: "rgb(var(--brand-blue))" }}
            >
              OUR COMMITMENT
            </p>
            <p className="mt-4 max-w-4xl text-slate-700">{whyChooseUs.commitment}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}