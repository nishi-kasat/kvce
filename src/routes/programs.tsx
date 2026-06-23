import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { Segments } from "@/components/sections/Segments";
import { CareerGuidanceCTA } from "@/components/sections/CareerGuidanceCTA";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Online Degrees, Law, Education & Certifications" },
      {
        name: "description",
        content:
          "Explore KVCE's online UG & PG degrees, education programs (B.Ed, D.El.Ed), law programs (LL.B, LL.M) and professional certifications.",
      },
      { property: "og:title", content: "KVCE Programs — Degrees & Certifications" },
      { property: "og:description", content: "Recognised online and distance learning programs for every goal." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Find the Right"
        highlight="Program for You"
        subtitle="University-recognised degrees and career-ready certifications across five focused tracks."
      />
      <ProgramsSection />
      <Segments />
      <CareerGuidanceCTA />
    </>
  );
}
