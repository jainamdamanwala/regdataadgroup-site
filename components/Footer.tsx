import Container from "./Container";
import { brand } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* LEFT */}
            <div>
              {/* Logo + Name */}
              <div className="flex items-center gap-3">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-8 w-auto"
                  />
                ) : null}

                <p className="text-sm font-semibold text-slate-950">
                  {brand.name}
                </p>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Regulatory science, powered by data. Senior-level
                discipline. Startup agility.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {brand.locations.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex gap-4 text-sm font-semibold">
                <a href="#" className="text-slate-600 hover:text-brand-blue">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-600 hover:text-brand-blue">
                  Terms
                </a>
                <a href="#" className="text-slate-600 hover:text-brand-blue">
                  Disclaimer
                </a>
              </div>

              <p className="max-w-xl text-xs text-slate-500 lg:text-right">
                Disclaimer: Information on this site is for general informational
                purposes and does not constitute legal advice. Regulatory
                outcomes depend on product specifics and agency review.
              </p>

              <p className="text-xs text-slate-500">
                © {year} {brand.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}