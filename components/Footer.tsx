import Container from "./Container";
import { brand } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold text-slate-950">{brand.name}</p>
              <p className="mt-2 text-sm text-slate-600">
                Boutique regulatory affairs and data strategy. Senior-level discipline. Startup agility.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {brand.locations.map((l) => (
                  <span key={l} className="chip">{l}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex gap-4 text-sm font-semibold">
                <a href="#" className="text-slate-600 hover:text-slate-900">Privacy Policy</a>
                <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
                <a href="#" className="text-slate-600 hover:text-slate-900">Disclaimer</a>
              </div>
              <p className="text-xs text-slate-500 max-w-xl lg:text-right">
                Disclaimer: Information on this site is for general informational purposes and does not constitute legal advice.
                Regulatory outcomes depend on product specifics and agency review.
              </p>
              <p className="text-xs text-slate-500">© {year} {brand.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}