import { Link } from "@tanstack/react-router";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { KasatRing } from "@/components/KasatRing";

export function CareerGuidanceCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] kasat-gradient px-8 py-16 text-center shadow-glow sm:px-16">
            <KasatRing className="animate-spin-slow absolute -right-24 -top-24 h-96 w-96 opacity-20" />
            <KasatRing className="absolute -bottom-32 -left-24 h-96 w-96 opacity-10" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
                Confused About Your Next Academic Step?
              </h2>
              <p className="mt-5 text-lg text-white/85">
                Our experienced counselors help you choose the right degree, university, and career
                pathway based on your goals and aspirations.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-9 bg-white text-brand-dark shadow-soft hover:bg-white/90"
              >
                <Link to="/career-guidance">
                  <PhoneCall className="size-4" /> Book Free Counseling Session
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
