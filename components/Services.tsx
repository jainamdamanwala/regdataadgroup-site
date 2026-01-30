"use client";

import { useMemo, useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { services as servicesData } from "@/lib/content";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = useMemo(() => servicesData, []);

  return (
    <section id="services" className="section bg-white">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Regulatory support across the full product lifecycle"
          subtitle="An integrated model spanning strategy, submissions, lifecycle management, evidence generation, AI/ML SaMD support, and quality/compliance."
        />

        <div className="grid gap-4">
          {items.map((s, idx) => {
            const open = openIndex === idx;

            return (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white shadow-soft-sm transition hover:shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl border border-slate-200 bg-slate-50" />
                    <div>
                      <p className="text-base font-semibold text-slate-900">{s.title}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Regulator-ready deliverables and disciplined execution.
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
                    {open ? "Hide" : "View"}
                  </span>
                </button>

                {open ? (
                  <div className="px-6 pb-6">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <div key={it} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm text-slate-700">{it}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}