import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { about } from "@/lib/content";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <Container>
        <SectionHeader title={about.title} />
                        {/* Image before header */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/about.jpg"
            alt="About us"
            width={900}
            height={450}
            className="rounded-2xl shadow-soft-sm object-cover"
            priority
          />
        </div>
        <div className="grid gap-4">
          {about.paragraphs.map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-green/5 via-white to-brand-blue/5 p-6 shadow-soft-sm"
            >
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}