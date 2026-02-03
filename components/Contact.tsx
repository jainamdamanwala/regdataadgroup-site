"use client";

import { useMemo, useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { brand } from "@/lib/content";

// === CONFIG ===
const USE_CALENDLY_EMBED = false;
const CALENDLY_URL = "https://calendly.com/jainamdamanwala21/consultation";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqbveep";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const locations = useMemo(() => brand.locations, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Form submit failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section bg-white">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title={brand.consultCta}
          subtitle="Tell us a bit about your product and regulatory goals. We’ll respond quickly with clear next steps."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-premium">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {USE_CALENDLY_EMBED ? "Schedule a consultation" : "Send a message"}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {USE_CALENDLY_EMBED
                    ? "Pick a time that works best. We’ll come prepared with pathway and execution guidance."
                    : "Share product type, region, timeline, and what you need. We’ll follow up fast."}
                </p>
              </div>
              <span className="chip">30 minutes</span>
            </div>

            {USE_CALENDLY_EMBED ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <iframe src={CALENDLY_URL} className="h-[720px] w-full" frameBorder="0" title="Schedule Consultation" />
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required placeholder="Your name" />
                  <Field label="Company" name="company" placeholder="Company / organization" />
                </div>

                <Field label="Email" name="email" type="email" required placeholder="you@company.com" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Select
                    label="Product Type"
                    name="product_type"
                    required
                    options={[
                      "Medical Device",
                      "IVD / Diagnostics",
                      "SaMD / Digital Health",
                      "AI/ML-enabled SaMD",
                      "Combination Product",
                      "Pharmaceutical",
                      "Other",
                    ]}
                  />
                  <Select label="Region" name="region" required options={["U.S. (FDA)", "EU (MDR/IVDR)", "U.K.", "Global"]} />
                </div>

                <Textarea
                  label="Message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Briefly describe the product, timeline, and what support you need."
                />

                <button type="submit" disabled={status === "sending"} className="btn-accent">
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "sent" ? (
                  <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Thanks — we received your message and will follow up shortly.
                    </p>
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/10 p-4">
                    <p className="text-sm font-semibold text-brand-blue">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                ) : null}

                <p className="text-xs text-slate-500">
                  Launch checklist: replace Formspree endpoint (and optionally enable Calendly embed).
                </p>
              </form>
            )}
          </div>

          {/* RIGHT */}
          <div className="grid gap-6">
            <div className="card lift-strong">
              <h4 className="text-sm font-semibold text-slate-950">Locations</h4>
              <div className="mt-4 grid gap-3">
                {locations.map((l) => (
                  <div key={l} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{l}</p>
                    <p className="mt-1 text-xs text-slate-500">Serving clients globally</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-premium-medical p-6 shadow-premium relative overflow-hidden">
              <p className="text-xs font-semibold tracking-wide text-brand-blue">WHAT TO EXPECT</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  Senior-led review of product type, pathway, evidence, and risk.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  Clear next steps with timeline discipline and regulator-ready deliverables.
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  A right-sized engagement model (project-based, embedded, or advisory).
                </li>
              </ul>

              <a href="#services" className="mt-6 inline-flex btn-secondary w-full">
                Review service areas
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function baseInputClass() {
  return "rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-teal/25 focus:border-brand-teal";
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-slate-900">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className={baseInputClass()} />
    </div>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  required,
  rows,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows: number;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-slate-900">{label}</label>
      <textarea name={name} required={required} rows={rows} placeholder={placeholder} className={baseInputClass()} />
    </div>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-slate-900">{label}</label>
      <select name={name} required={required} className={baseInputClass()} defaultValue="">
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}