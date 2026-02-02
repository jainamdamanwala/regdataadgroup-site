import Container from "./Container";
import ScrollReveal from "./ScrollReveal";
import { brand, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--brand-green),0.15)] via-transparent to-[rgba(var(--brand-blue),0.15)]" />

      <Container>
        <div className="section relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Senior-level leadership</span>
                <span className="chip">FDA + Global pathways</span>
                <span className="chip">Complex & emerging technologies</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-6">
              <p className="text-sm font-semibold text-slate-700">{brand.tagline}</p>
            </ScrollReveal>

            <ScrollReveal className="mt-4">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {hero.headline}
              </h1>
            </ScrollReveal>

            <ScrollReveal className="mt-6">
              <p className="text-lg text-slate-700">{hero.subhead}</p>
              <p className="mt-4 text-slate-700">{hero.supporting}</p>
            </ScrollReveal>

            <ScrollReveal className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={brand.consultLink} className="btn-accent">
                  {brand.consultCta}
                </a>
                <a href="#services" className="btn-outline-brand">
                  Explore Services
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-6">
              <p className="text-xs text-slate-600">
                Built for regulator-ready strategy and documentation—minimizing rework, review cycles, and avoidable risk.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}