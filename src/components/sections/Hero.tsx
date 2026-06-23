import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KasatRing } from "@/components/KasatRing";
import heroImg from "@/assets/hero-learners.jpg";

const trust = [
  "20+ Years Legacy",
  "10,000+ Students Guided",
  "Online & Distance Learning Experts",
  "Personalized Career Counseling",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Background motifs */}
      <KasatRing className="animate-spin-slow absolute -right-40 -top-32 h-[700px] w-[700px] opacity-[0.10]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-light/60 blur-3xl" />
      <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-secondary px-4 py-1.5 text-sm font-medium text-brand-dark"
          >
            <Sparkles className="size-4" /> A Kasat Group of Companies Initiative
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Transform Your Future Through{" "}
            <span className="gradient-text">Flexible Online Education</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Complete your degree, upgrade your career, and unlock new opportunities through
            industry-relevant online and distance learning programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="kasat-gradient text-white shadow-glow hover:opacity-95">
              <Link to="/career-guidance">
                Get Free Career Guidance <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand/30 text-brand-dark hover:bg-secondary">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <span className="flex size-5 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-3" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-white/40">
            <img
              src={heroImg}
              alt="Online learners, graduates and working professionals studying with KVCE"
              width={1024}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 shadow-soft">
            <p className="font-display text-2xl font-extrabold gradient-text">95%</p>
            <p className="text-xs font-medium text-muted-foreground">Student Satisfaction</p>
          </div>
          <div className="glass absolute -right-4 top-8 rounded-2xl px-5 py-4 shadow-soft">
            <p className="font-display text-2xl font-extrabold gradient-text">100+</p>
            <p className="text-xs font-medium text-muted-foreground">Programs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
