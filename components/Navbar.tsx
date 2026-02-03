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
              <p className="text-sm font-semibold tracking-tight text-white">{brand.name}</p>
              <p className="text-xs text-white/80">Regulatory science, powered by data</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-semibold text-white/90 transition"
              >
                <span className="transition-colors duration-700 group-hover:text-white">
                  {l.label}
                </span>

                {/* micro-interaction underline "wave" */}
                <span
                  className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 rounded-full opacity-0 transition-all duration-[900ms] ease-out group-hover:scale-x-100 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(var(--brand-green),0.9), rgba(var(--brand-teal),0.9), rgba(255,255,255,0.9))",
                    transformOrigin: "left",
                  }}
                />
              </a>
            ))}
          </nav>

          <a href={brand.consultLink} className="btn-accent">
            Complimentary Consult
          </a>
        </div>
      </Container>
    </header>
  );
}