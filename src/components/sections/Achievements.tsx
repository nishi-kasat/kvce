import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { KasatRing } from "@/components/KasatRing";

const stats = [
  { value: 20, suffix: "+", label: "Years Legacy" },
  { value: 100, suffix: "+", label: "Programs" },
  { value: 10000, suffix: "+", label: "Students Guided" },
  { value: 95, suffix: "%", label: "Student Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative overflow-hidden kasat-gradient py-20">
      <KasatRing className="animate-spin-slow absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-10" />
      <KasatRing className="absolute -right-40 -top-20 h-[500px] w-[500px] opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-5xl font-extrabold text-white lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
