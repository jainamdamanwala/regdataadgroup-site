import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <Container>
        <SectionHeader title={about.title} />
        <div className="grid gap-4">
          {about.paragraphs.map((p) => (
            <div key={p} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft-sm">
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}