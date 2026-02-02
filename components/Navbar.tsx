import Image from "next/image";
import Container from "./Container";
import { brand } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#why-us", label: "Why Us" },
  { href: "#values", label: "Core Values" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgb(var(--brand-blue))",
        borderColor: "rgba(255,255,255,0.15)",
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white shadow-soft-sm">
              <Image
                src="/logo.png"
                alt={`${brand.name} logo`}
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-white">
                {brand.name}
              </p>
              <p className="text-xs text-white/80">
                Regulatory Affairs & Data Strategy
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/90 transition hover:text-[rgb(var(--brand-teal))]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={brand.consultLink}
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold text-white transition"
            style={{
              borderColor: "rgba(255,255,255,0.45)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Complimentary Consult
          </a>
        </div>
      </Container>
    </header>
  );
}