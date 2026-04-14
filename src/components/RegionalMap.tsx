import { motion } from "framer-motion";

const regions = [
  { name: "Punjab", x: 28, y: 18, status: "critical" as const, score: 32 },
  { name: "Rajasthan", x: 22, y: 38, status: "critical" as const, score: 28 },
  { name: "Gujarat", x: 15, y: 55, status: "warning" as const, score: 52 },
  { name: "Maharashtra", x: 30, y: 62, status: "warning" as const, score: 58 },
  { name: "Madhya Pradesh", x: 40, y: 42, status: "safe" as const, score: 76 },
  { name: "Uttar Pradesh", x: 45, y: 28, status: "warning" as const, score: 61 },
  { name: "Bihar", x: 60, y: 30, status: "safe" as const, score: 72 },
  { name: "West Bengal", x: 68, y: 38, status: "safe" as const, score: 78 },
  { name: "Karnataka", x: 35, y: 75, status: "safe" as const, score: 81 },
  { name: "Tamil Nadu", x: 42, y: 85, status: "warning" as const, score: 48 },
  { name: "Andhra Pradesh", x: 48, y: 68, status: "safe" as const, score: 69 },
  { name: "Telangana", x: 43, y: 58, status: "safe" as const, score: 74 },
  { name: "Kerala", x: 32, y: 88, status: "safe" as const, score: 85 },
  { name: "Odisha", x: 58, y: 50, status: "safe" as const, score: 70 },
  { name: "Jharkhand", x: 58, y: 38, status: "warning" as const, score: 55 },
  { name: "Haryana", x: 32, y: 22, status: "critical" as const, score: 35 },
];

const statusColors = {
  safe: "bg-pulse",
  warning: "bg-warning",
  critical: "bg-critical",
};

const glowStyles = {
  safe: "glow-pulse",
  warning: "glow-warning",
  critical: "glow-critical",
};

export function RegionalMap() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Groundwater Health Map — India
        </h3>
        <div className="flex gap-3 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-pulse" /> Safe
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-warning" /> Moderate
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-critical" /> Critical
          </span>
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-background">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / 20%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 20%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Region dots */}
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            className="group absolute"
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05, type: "spring" }}
          >
            <div className={`h-3 w-3 rounded-full ${statusColors[r.status]} ${glowStyles[r.status]} cursor-pointer transition-transform hover:scale-150`} />
            <div className="pointer-events-none absolute -left-12 -top-10 z-10 hidden w-28 rounded-lg border border-border bg-surface px-2 py-1.5 text-center text-[10px] shadow-lg group-hover:block">
              <p className="font-semibold text-foreground">{r.name}</p>
              <p className="text-muted-foreground">Score: {r.score}/100</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
