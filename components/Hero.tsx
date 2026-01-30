import Container from "./Container";
import { brand, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="bg-medical">
      <Container>
        <div className="section">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="chip">Senior-level leadership</span>
              <span className="chip">FDA + Global pathways</span>
              <span className="chip">Complex & emerging technologies</span>
            </div>

            <p className="mt-6 text-sm font-semibold text-slate-600">{brand.tagline}</p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg text-slate-600">{hero.subhead}</p>
            <p className="mt-4 text-slate-600">{hero.supporting}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={brand.consultLink} className="btn-accent">
                {brand.consultCta}
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Built for regulator-ready strategy and documentation—minimizing rework, review cycles, and avoidable risk.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}