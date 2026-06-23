import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function SuccessStories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real People,"
          highlight="Real Outcomes"
          subtitle="Thousands have transformed their careers and lives with KVCE guidance."
        />

        <Reveal className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                    <Quote className="size-8 text-brand/30" />
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
                    <div className="mt-4 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                      <div className="flex size-11 items-center justify-center rounded-full kasat-gradient text-sm font-bold text-white">
                        {initials(t.name)}
                      </div>
                      <div>
                        <p className="font-bold leading-tight text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role} · {t.program}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
