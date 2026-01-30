import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { whyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white">
      <Container>
        <SectionHeader title={whyChooseUs.title} subtitle={whyChooseUs.intro} />

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.pillars.map((p) => (
            <div key={p.title} className="card lift-strong">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl border border-slate-200 bg-slate-50" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{p.title}</h3>
                  <div className="mt-4 grid gap-2">
                    {p.points.map((pt) => (
                      <div key={pt} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm text-slate-700">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-premium-medical p-8 shadow-premium relative overflow-hidden">
          <p className="text-xs font-semibold tracking-wide text-blue-700">OUR COMMITMENT</p>
          <p className="mt-4 max-w-4xl text-slate-700">{whyChooseUs.commitment}</p>
        </div>
      </Container>
    </section>
  );
}