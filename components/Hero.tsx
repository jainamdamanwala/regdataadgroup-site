import Container from "./Container";
import { brand, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Brand-tinted overlay (background only) */}
      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/15 via-brand-teal/10 to-brand-blue/15" />

      <Container>
        <div className="section relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="chip">Senior-level leadership</span>
              <span className="chip">FDA + Global pathways</span>
              <span className="chip">Complex & emerging technologies</span>
            </div>

            <p className="mt-6 text-sm font-semibold text-slate-700">{brand.tagline}</p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg text-slate-700">{hero.subhead}</p>
            <p className="mt-4 text-slate-700">{hero.supporting}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={brand.consultLink} className="btn-accent">
                {brand.consultCta}
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-600">
              Built for regulator-ready strategy and documentation—minimizing rework, review cycles, and avoidable risk.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}