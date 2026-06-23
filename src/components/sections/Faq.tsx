import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

export const FAQS = [
  {
    q: "Are online degrees valid?",
    a: "Yes. KVCE offers programs from UGC-recognised and approved universities. Online and distance degrees from such universities hold the same validity as regular degrees for jobs and higher education.",
  },
  {
    q: "Can working professionals apply?",
    a: "Absolutely. Our flexible learning model is specifically designed so working professionals can study and complete their degrees without pausing their careers.",
  },
  {
    q: "What programs are available?",
    a: "We offer online UG and PG degrees, education programs (B.Ed, D.El.Ed, M.Ed), law programs (LL.B, LL.M), and a wide range of professional certifications.",
  },
  {
    q: "How does the admission process work?",
    a: "It's a simple five-step process: career discussion, program selection, documentation support, admission & enrollment, and finally beginning your learning journey — all with personal guidance.",
  },
  {
    q: "Do you provide counseling support?",
    a: "Yes. Free, personalised career counseling is at the heart of KVCE. Our experienced counselors help you choose the right degree, university, and pathway for your goals.",
  },
];

export function Faq() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked" highlight="Questions" />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
