import {
  Clock,
  TrendingUp,
  GraduationCap,
  Wallet,
  LayoutGrid,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

const cards = [
  { icon: Clock, title: "Flexible Learning", desc: "Study at your own pace, anywhere, anytime — designed around your work and life." },
  { icon: TrendingUp, title: "Career Advancement", desc: "Industry-relevant degrees and certifications that accelerate promotions and pay." },
  { icon: GraduationCap, title: "Expert Academic Guidance", desc: "Seasoned mentors and counselors guide every step of your academic journey." },
  { icon: Wallet, title: "Affordable Education Pathways", desc: "Transparent fees and flexible payment options that make degrees accessible." },
  { icon: LayoutGrid, title: "Wide Range of Programs", desc: "From UG and PG degrees to law, education and professional certifications." },
  { icon: HeartHandshake, title: "Dedicated Student Support", desc: "A responsive support team that stays with you from enquiry to graduation." },
];

export function WhyChoose() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why KVCE"
          title="Why Thousands of Students"
          highlight="Trust KVCE"
          subtitle="Two decades of educational expertise, distilled into a modern learning experience built for real life."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="flex size-14 items-center justify-center rounded-2xl kasat-gradient text-white shadow-glow transition-transform group-hover:scale-110">
                  <c.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
