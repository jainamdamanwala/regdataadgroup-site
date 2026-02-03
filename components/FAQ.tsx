"use client";

import { useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "What information should we bring to the complimentary consultation?",
    a: "Product description and intended use, current development stage, target markets (U.S./EU/global), any prior regulatory interactions, and available evidence (clinical/analytical/software validation).",
  },
  {
    q: "Do you support both FDA and EU MDR/IVDR pathways?",
    a: "Yes. We support U.S. FDA pathways (510(k), De Novo, PMA, Pre-Subs/Q-Subs) and EU MDR/IVDR strategies and technical documentation, including clinical/performance evaluation support.",
  },
  {
    q: "How do you engage—project-based or embedded leadership?",
    a: "Both. Clients use us for defined projects (e.g., submissions, responses, gap assessments) or embedded/fractional regulatory leadership to drive cross-functional execution and governance.",
  },
  {
    q: "Can you support AI/ML-enabled SaMD and PCCP strategy?",
    a: "Yes. We support AI/ML SaMD classification and strategy, model validation documentation, bias/generalizability analyses, and Predetermined Change Control Plan (PCCP) strategy and lifecycle monitoring.",
  },
  {
    q: "How quickly can you start?",
    a: "We can typically start quickly depending on scope and urgency. We’ll confirm timelines and milestones during the initial discussion and lock an execution plan once scope is defined.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-muted">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          subtitle="Clear answers to accelerate decision-making."
        />

        <div className="grid gap-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={f.q}
                className="rounded-2xl border border-slate-200 bg-white shadow-soft-sm"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <p className="text-sm font-semibold text-slate-950">{f.q}</p>

                  {/* Chevron instead of View/Hide */}
                  <span
                    className={[
                      "flex h-9 w-9 flex-none items-center justify-center rounded-full transition",
                      "border",
                    ].join(" ")}
                    style={{
                      borderColor: isOpen
                        ? "rgba(var(--brand-teal),0.35)"
                        : "rgba(var(--brand-blue),0.25)",
                      background: isOpen
                        ? "rgba(var(--brand-teal),0.10)"
                        : "rgba(var(--brand-blue),0.06)",
                      color: isOpen
                        ? "rgb(var(--brand-teal))"
                        : "rgb(var(--brand-blue))",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={[
                        "h-4 w-4 transition-transform duration-300 ease-out",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Animated expand/collapse (no conditional render) */}
                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div
                      className={[
                        "px-6 pb-6",
                        "transition-all duration-300 ease-out",
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0",
                      ].join(" ")}
                    >
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="text-sm text-slate-700">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}