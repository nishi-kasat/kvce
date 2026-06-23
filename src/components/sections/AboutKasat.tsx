import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  { year: "2000s", title: "Foundation in Education", desc: "Kasat Group begins guiding students through admissions and career decisions." },
  { year: "2010s", title: "Expanding Horizons", desc: "Skill development and overseas education consulting join the portfolio." },
  { year: "2020s", title: "The Digital Leap", desc: "Online and distance learning programs make quality education borderless." },
  { year: "Today", title: "KVCE Is Born", desc: "A flagship virtual college uniting two decades of educational excellence." },
];

export function AboutKasat() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Legacy"
          title="Powered By"
          highlight="Kasat Group Of Companies"
          subtitle="Kasat Group has served the education sector for over two decades through career guidance, admissions support, skill development, online learning, overseas education consulting, and student success."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-brand via-brand-secondary to-brand-dark lg:left-1/2 lg:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 lg:w-1/2 lg:pl-0 ${
                    i % 2 === 0 ? "lg:mr-auto lg:pr-12 lg:text-right" : "lg:ml-auto lg:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-1.5 size-3.5 rounded-full kasat-gradient ring-4 ring-card lg:left-auto ${
                      i % 2 === 0 ? "lg:-right-[7px]" : "lg:-left-[7px]"
                    }`}
                  />
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <span className="text-sm font-bold gradient-text">{t.year}</span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
