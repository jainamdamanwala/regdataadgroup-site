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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 shadow-soft-sm" />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">{brand.name}</p>
              <p className="text-xs text-slate-500">Regulatory Affairs & Data Strategy</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                {l.label}
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