import { motion } from "framer-motion";
import { TrendingDown, Zap, CloudRain } from "lucide-react";

const metrics = [
  {
    label: "Forecast Drawdown",
    value: "-2.4m",
    sub: "Projected at current extraction rate",
    icon: TrendingDown,
    color: "border-b-critical/50",
  },
  {
    label: "Extraction Intensity",
    value: "87%",
    sub: "Industrial drawdown exceeding recharge",
    icon: Zap,
    color: "border-b-warning/50",
  },
  {
    label: "Recharge Efficacy",
    value: "94%",
    sub: "Monsoon catchment at peak efficiency",
    icon: CloudRain,
    color: "border-b-pulse/50",
  },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className={`rounded-xl border border-border bg-surface p-5 ${m.color} border-b-2`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</h4>
            <m.icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="font-display text-2xl font-semibold text-foreground">{m.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{m.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
