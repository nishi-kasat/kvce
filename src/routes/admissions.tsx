import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Simple 5-Step Enrollment | KVCE" },
      {
        name: "description",
        content:
          "KVCE makes admissions effortless: career discussion, program selection, documentation support, enrollment and your learning journey — with full guidance.",
      },
      { property: "og:title", content: "KVCE Admissions — Apply Now" },
      { property: "og:description", content: "A simple, guided 5-step admission process with personal support." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Your Admission, Made"
        highlight="Effortless"
        subtitle="From your first conversation to your first class, we guide you through every step."
      />
      <AdmissionProcess />
      <ContactSection />
      <Faq />
    </>
  );
}
