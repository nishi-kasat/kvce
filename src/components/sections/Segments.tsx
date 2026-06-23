import { Briefcase, BookOpen, Home, Repeat, RotateCcw, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

const segments = [
  { icon: Briefcase, title: "Working Professionals", desc: "Upskill or finish a degree without pausing your career." },
  { icon: BookOpen, title: "Students", desc: "Add recognised qualifications and certifications to your profile." },
  { icon: Home, title: "Homemakers", desc: "Restart your education journey with flexible, supportive learning." },
  { icon: Repeat, title: "Career Changers", desc: "Pivot into a new field with guided, structured pathways." },
  { icon: RotateCcw, title: "Dropouts", desc: "Complete unfinished degrees and reclaim your future." },
  { icon: Layers, title: "Dual Degree Aspirants", desc: "Pursue parallel qualifications to stand out faster." },
];

export function Segments() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="For Everyone"
          title="Education For Every"
          highlight="Stage Of Life"
          subtitle="Whatever your starting point, there's a KVCE pathway designed for you."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="absolute -right-8 -top-8 size-28 rounded-full kasat-gradient-soft opacity-70 transition-transform group-hover:scale-125" />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-brand">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
