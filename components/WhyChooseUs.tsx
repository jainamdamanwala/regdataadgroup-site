"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { whyChooseUs } from "@/lib/content";

export default function WhyChooseUs() {
  const items = useMemo(() => whyChooseUs.pillars, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement | null>(null);

  // Smooth auto-scroll when hero opens
  useEffect(() => {
    if (openIndex === null) return;
    const id = window.setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [openIndex]);

  const hero = openIndex !== null ? items[openIndex] : null;
  const rest =
    openIndex === null ? items : items.filter((_, i) => i !== openIndex);

  return (
    <section id="why-us" className="section bg-white">
      <Container>
        <SectionHeader title={whyChooseUs.title} subtitle={whyChooseUs.intro} />

        {/* HERO CARD */}
        <div
          ref={heroRef}
          className={[
            "overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]",
            hero ? "max-h-[1200px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0",
          ].join(" ")}
        >
          {hero && (
            <ScrollReveal>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="card w-full overflow-hidden text-left"
                style={{
                  boxShadow:
                    "0 0 0 6px rgba(var(--brand-teal),0.10), 0 22px 80px rgba(2,6,23,0.14)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold text-slate-900 sm:text-xl">
                      {hero.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Tap anywhere to collapse
                    </p>
                  </div>

                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(var(--brand-teal),0.10)",
                      color: "rgb(var(--brand-teal))",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>

                {/* CONTENT: image LEFT, points RIGHT (VERTICALLY CENTERED) */}
                <div className="grid gap-6 px-5 pb-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-white">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(var(--brand-green),0.05), rgba(var(--brand-blue),0.03))",
                      }}
                    />
                    <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
                      <img
                        src={hero.image}
                        alt={hero.title}
                        className="absolute inset-0 h-full w-full object-contain p-8 sm:p-10"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Points (RIGHT side) - centered relative to image */}
                  <div className="grid gap-3">
                    {hero.points.map((pt) => (
                      <div
                        key={pt}
                        className="rounded-xl border p-4 transition"
                        style={{
                          borderColor: "rgba(var(--brand-blue),0.16)",
                          background:
                            "linear-gradient(135deg, rgba(var(--brand-green),0.05), rgba(255,255,255,0.96))",
                        }}
                      >
                        <p className="text-sm text-slate-700">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            </ScrollReveal>
          )}
        </div>

        {/* GRID (collapsed cards) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {rest.map((p) => {
            const originalIndex = items.findIndex((x) => x.title === p.title);

            return (
              <ScrollReveal key={p.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(originalIndex)}
                  className="card w-full overflow-hidden text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-sm"
                >
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm font-semibold text-slate-950">
                      {p.title}
                    </p>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="rgb(var(--brand-blue))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="relative h-[220px] overflow-hidden rounded-2xl bg-white">
                      <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(var(--brand-green),0.05), rgba(var(--brand-blue),0.03))",
                        }}
                      />
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-contain p-6"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Commitment */}
        <ScrollReveal className="mt-10">
          <div className="mt-10 rounded-3xl border border-slate-200 bg-medical p-8 shadow-soft relative overflow-hidden">
            <p
              className="text-xs font-semibold tracking-wide"
              style={{ color: "rgb(var(--brand-blue))" }}
            >
              OUR COMMITMENT
            </p>
            <p className="mt-4 max-w-4xl text-slate-700">
              {whyChooseUs.commitment}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}