import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const alerts = [
  { severity: "critical" as const, text: "Depletion spike in Zone 9A, Rajasthan", time: "14 min ago" },
  { severity: "warning" as const, text: "Pollutant drift detected, Yamuna belt", time: "2 hrs ago" },
  { severity: "critical" as const, text: "Sensor anomaly in DWLR Station 47", time: "5 hrs ago" },
  { severity: "warning" as const, text: "Low recharge prediction, Tamil Nadu", time: "1 day ago" },
];

const severityStyles = {
  critical: "bg-critical/20 text-critical",
  warning: "bg-warning/20 text-warning",
};

export function AlertsPanel() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Active Alerts</h3>
        <span className="rounded-full bg-critical/20 px-2 py-0.5 text-[10px] font-semibold text-critical">
          {alerts.length}
        </span>
      </div>
      <ul className="space-y-3">
        {alerts.map((alert, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${severityStyles[alert.severity]}`}>
              <AlertTriangle className="h-2.5 w-2.5" />
            </div>
            <div>
              <p className="text-sm text-foreground">{alert.text}</p>
              <p className="text-[11px] text-muted-foreground">{alert.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
