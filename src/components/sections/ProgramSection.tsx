import { Link } from "@tanstack/react-router";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { PROGRAMS } from "@/lib/site";

export function ProgramsSection() {
  return (
    <section className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Explore Our"
          highlight="Premium Programs"
          subtitle="University-recognised degrees and career-ready certifications across five focused tracks."
        />

        <Reveal className="mt-12">
          <Tabs defaultValue={PROGRAMS[0].id} className="w-full">
            <TabsList className="mx-auto flex h-auto w-fit max-w-full flex-wrap justify-center gap-1 rounded-full bg-card p-1.5 shadow-soft">
              {PROGRAMS.map((p) => (
                <TabsTrigger
                  key={p.id}
                  value={p.id}
                  className="rounded-full px-4 py-2 text-sm data-[state=active]:kasat-gradient data-[state=active]:text-white"
                >
                  {p.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {PROGRAMS.map((p) => (
              <TabsContent key={p.id} value={p.id} className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {p.courses.map((c, i) => (
                    <Reveal key={c.name} delay={i * 0.05}>
                      <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                        <h3 className="text-lg font-bold leading-snug text-foreground">{c.name}</h3>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Clock className="size-4 text-brand" /> {c.duration}
                          </p>
                          <p className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" /> {c.eligibility}
                          </p>
                        </div>
                        <Link
                          to="/career-guidance"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5"
                        >
                          Learn More <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
