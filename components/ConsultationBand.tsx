import Container from "./Container";
import { brand } from "@/lib/content";

export default function ConsultationBand() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container>
        <div className="section">
          <div className="rounded-3xl border border-slate-200 bg-premium-medical p-8 shadow-premium">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-wide text-blue-700">NEXT STEP</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Move forward with regulator-ready clarity
                </h3>
                <p className="mt-4 text-slate-600">
                  Book a 30-minute complimentary consultation to discuss product type, pathway, evidence expectations,
                  and a practical plan for timelines and execution.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a href={brand.consultLink} className="btn-accent">
                  {brand.consultCta}
                </a>
                <a href="#services" className="btn-secondary">
                  Review service areas
                </a>
                <p className="text-xs text-slate-500">
                  Typical response time: same business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}