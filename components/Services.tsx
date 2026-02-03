"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { services as servicesData } from "@/lib/content";

export default function Services() {
  const items = useMemo(() => servicesData, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement | null>(null);

  // Smooth auto-scroll when hero opens
  useEffect(() => {
    if (openIndex === null) return;
    const id = setTimeout(() => {
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
    return () => clearTimeout(id);
  }, [openIndex]);

  const hero = openIndex !== null ? items[openIndex] : null;
  const rest = openIndex === null ? items : items.filter((_, i) => i !== openIndex);

  return (
    <section id="services" className="section bg-white">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Regulatory support across the full product lifecycle"
          subtitle="An integrated model spanning strategy, submissions, lifecycle management, evidence generation, AI/ML SaMD support, and quality/compliance."
        />

        {/* HERO CARD (Animated expand/collapse) */}
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
                className="card w-full text-left"
                style={{
                  boxShadow:
                    "0 0 0 6px rgba(var(--brand-teal),0.10), 0 22px 80px rgba(2,6,23,0.14)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {hero.title}
                    </p>
                    <p className="text-sm text-slate-600">
                      Tap anywhere to collapse
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 rotate-180 text-[rgb(var(--brand-teal))]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {/* Hero Content */}
                <div className="grid gap-6 px-5 pb-6 lg:grid-cols-[1.4fr_1fr]">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-white">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(var(--brand-green),0.05), rgba(var(--brand-blue),0.03))",
                      }}
                    />
                    <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]">
                      <img
                        src={hero.image}
                        alt={hero.title}
                        className="absolute inset-0 h-full w-full object-contain p-10 transition-transform duration-500 scale-100"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 p-6 shadow-soft-sm">
                    <p className="mb-3 text-sm font-semibold text-slate-900">
                      What we deliver
                    </p>
                    <div className="space-y-2">
                      {hero.items.map((it) => (
                        <div
                          key={it}
                          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 p-6 shadow-soft-sm"
                        >
                          <p className="text-sm text-slate-700">{it}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          )}
        </div>

        {/* GRID (Animated reflow) */}
        <div className="grid grid-cols-1 gap-4 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => {
            const originalIndex = items.findIndex((x) => x.title === s.title);

            return (
              <ScrollReveal key={s.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(originalIndex)}
                  className="card w-full text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-sm"
                >
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {s.title}
                    </p>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-[rgb(var(--brand-blue))]"
                      fill="none"
                      stroke="currentColor"
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
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}