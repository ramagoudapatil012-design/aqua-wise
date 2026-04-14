import { motion } from "framer-motion";

export function WaterHealthScore({ score = 74.2 }: { score?: number }) {
  const status = score >= 70 ? "Stable" : score >= 40 ? "Moderate" : "Critical";
  const statusColor = score >= 70 ? "text-pulse" : score >= 40 ? "text-warning" : "text-critical";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Regional Health Score
      </h2>
      <motion.div
        className="mt-4 font-display text-6xl font-semibold tabular-lining text-pulse"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {score}
        <span className="text-xl text-muted-foreground">/100</span>
      </motion.div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-alt">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pulse to-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <p className={`mt-3 text-sm font-medium ${statusColor}`}>
        {status}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Current aquifer replenishment rate indicates stable retrieval levels across monitored basins.
      </p>
    </div>
  );
}
