import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { LeadForm } from "./LeadForm";
import { CONTACT } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your Journey"
          highlight="With KVCE Today"
          subtitle="Fill the form for free career guidance, or reach us directly — we're here to help."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold">Get Free Career Guidance</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Our counselors typically respond within a few hours.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4">
                {[
                  { icon: Phone, label: "Call Us", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                  { icon: Mail, label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, label: "Visit Us", value: CONTACT.location },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl kasat-gradient text-white">
                      <c.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-semibold text-foreground hover:text-brand">{c.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="KVCE location — Palghar, Maharashtra"
                  src="https://www.google.com/maps?q=Palghar,+Maharashtra,+India&output=embed"
                  className="h-full min-h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
