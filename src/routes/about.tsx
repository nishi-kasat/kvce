import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { AboutKasat } from "@/components/sections/AboutKasat";
import { Achievements } from "@/components/sections/Achievements";
import { CareerGuidanceCTA } from "@/components/sections/CareerGuidanceCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KVCE — Two Decades of Educational Excellence" },
      {
        name: "description",
        content:
          "Learn how Kasat Virtual College of Education, a Kasat Group venture, has guided 10,000+ students through online learning, admissions and career success.",
      },
      { property: "og:title", content: "About KVCE — Kasat Virtual College of Education" },
      { property: "og:description", content: "Two decades of educational excellence, now a virtual college." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About KVCE"
        title="Education That"
        highlight="Changes Lives"
        subtitle="Kasat Virtual College of Education is the flagship educational venture of Kasat Group of Companies — uniting over two decades of expertise in education, career guidance and student success."
      />
      <AboutKasat />
      <Achievements />
      <WhyChoose />
      <CareerGuidanceCTA />
    </>
  );
}
