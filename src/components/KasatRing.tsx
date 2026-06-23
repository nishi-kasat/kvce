import { cn } from "@/lib/utils";

/** Decorative concentric striped rings inspired by the Kasat logo. */
export function KasatRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <defs>
        <linearGradient id="kasatRingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b12b8a" />
          <stop offset="55%" stopColor="#8d1d74" />
          <stop offset="100%" stopColor="#5d1154" />
        </linearGradient>
      </defs>
      {[190, 158, 126, 94].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="url(#kasatRingGrad)"
          strokeWidth={i % 2 === 0 ? 14 : 6}
          strokeLinecap="round"
          strokeDasharray={`${r * 4.6} ${r * 1.4}`}
          opacity={1 - i * 0.12}
        />
      ))}
    </svg>
  );
}
