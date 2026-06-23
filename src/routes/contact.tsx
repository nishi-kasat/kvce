import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KVCE — Get Free Career Guidance" },
      {
        name: "description",
        content:
          "Contact Kasat Virtual College of Education in Palghar, Maharashtra. Call +91 92097 17123 or email admissions@kasatvce.in for free career guidance.",
      },
      { property: "og:title", content: "Contact KVCE" },
      { property: "og:description", content: "Reach KVCE for free career guidance and admissions support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Your"
        highlight="Future Together"
        subtitle="Reach out for free career guidance — we typically respond within a few hours."
      />
      <ContactSection />
    </>
  );
}
