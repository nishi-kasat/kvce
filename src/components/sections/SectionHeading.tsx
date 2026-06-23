import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "inline-block rounded-full px-4 py-1.5 text-sm font-semibold",
            light ? "bg-white/15 text-white" : "bg-secondary text-brand-dark",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title} {highlight && <span className={light ? "text-brand-light" : "gradient-text"}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", light ? "text-white/80" : "text-muted-foreground")}>{subtitle}</p>
      )}
    </Reveal>
  );
}
