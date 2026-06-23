import { motion } from "framer-motion";
import { MessageSquare, ListChecks, FileText, BadgeCheck, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: MessageSquare, title: "Career Discussion", desc: "Understand your goals, background and aspirations." },
  { icon: ListChecks, title: "Program Selection", desc: "Choose the ideal degree and university for you." },
  { icon: FileText, title: "Documentation Support", desc: "We help you prepare and verify every document." },
  { icon: BadgeCheck, title: "Admission & Enrollment", desc: "Secure your seat with full hand-holding." },
  { icon: Rocket, title: "Begin Learning Journey", desc: "Start learning with ongoing student support." },
];

export function AdmissionProcess() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Guided"
          highlight="Admission Process"
          subtitle="Five clear steps from your first conversation to your first class."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-brand/20 via-brand to-brand-dark/30 lg:block" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1, type: "spring", stiffness: 200 }}
                    className="relative z-10 flex size-16 items-center justify-center rounded-full kasat-gradient text-white shadow-glow"
                  >
                    <s.icon className="size-7" />
                    <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full border-2 border-card bg-card text-sm font-bold text-brand">
                      {i + 1}
                    </span>
                  </motion.div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
