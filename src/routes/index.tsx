import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { Segments } from "@/components/sections/Segments";
import { CareerGuidanceCTA } from "@/components/sections/CareerGuidanceCTA";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { Achievements } from "@/components/sections/Achievements";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { AboutKasat } from "@/components/sections/AboutKasat";
import { Faq, FAQS } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ProgramsSection />
      <Segments />
      <CareerGuidanceCTA />
      <AdmissionProcess />
      <Achievements />
      <SuccessStories />
      <AboutKasat />
      <Faq />
      <ContactSection />
    </>
  );
}
