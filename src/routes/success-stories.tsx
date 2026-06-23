import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Achievements } from "@/components/sections/Achievements";
import { CareerGuidanceCTA } from "@/components/sections/CareerGuidanceCTA";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real KVCE Student Outcomes" },
      {
        name: "description",
        content:
          "Read how KVCE students transformed their careers — from working professionals and homemakers to career changers — through flexible online education.",
      },
      { property: "og:title", content: "KVCE Success Stories" },
      { property: "og:description", content: "Real people, real career outcomes with KVCE." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessStoriesPage,
});

function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Journeys That"
        highlight="Inspire"
        subtitle="Thousands have transformed their careers and lives with KVCE guidance. Here are a few of their stories."
      />
      <SuccessStories />
      <Achievements />
      <CareerGuidanceCTA />
    </>
  );
}
