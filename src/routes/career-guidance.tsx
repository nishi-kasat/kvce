import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { LeadForm } from "@/components/sections/LeadForm";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { Faq } from "@/components/sections/Faq";
import { Compass, Target, GraduationCap, Users } from "lucide-react";

const points = [
  { icon: Compass, title: "Direction", desc: "Clarity on which degree and university fit your goals." },
  { icon: Target, title: "Goal Mapping", desc: "A pathway aligned to your career aspirations." },
  { icon: GraduationCap, title: "Right Program", desc: "Honest advice — no pushy sales, just guidance." },
  { icon: Users, title: "Ongoing Support", desc: "Mentors who stay with you beyond admission." },
];

export const Route = createFileRoute("/career-guidance")({
  head: () => ({
    meta: [
      { title: "Free Career Guidance & Counseling — KVCE" },
      {
        name: "description",
        content:
          "Confused about your next academic step? Get free, personalised career counseling from KVCE's experienced education counselors.",
      },
      { property: "og:title", content: "Free Career Guidance — KVCE" },
      { property: "og:description", content: "Personalised counseling to choose the right degree and career pathway." },
      { property: "og:url", content: "/career-guidance" },
    ],
    links: [{ rel: "canonical", href: "/career-guidance" }],
  }),
  component: CareerGuidancePage,
});

function CareerGuidancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career Guidance"
        title="Confused About Your"
        highlight="Next Academic Step?"
        subtitle="Our experienced counselors help you choose the right degree, university, and career pathway based on your goals and aspirations."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex size-12 items-center justify-center rounded-xl kasat-gradient text-white">
                    <p.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="text-2xl">Book Your Free Counseling Session</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about yourself and a counselor will reach out shortly.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AdmissionProcess />
      <Faq />
    </>
  );
}
