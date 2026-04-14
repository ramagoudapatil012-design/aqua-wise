import { Lightbulb, Droplets, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const recommendations = [
  {
    icon: Droplets,
    title: "Shift to Drip Irrigation",
    desc: "Predicted water shortages in your zone suggest switching to drip irrigation. Could reduce consumption by 40%.",
  },
  {
    icon: Leaf,
    title: "Rainwater Harvesting",
    desc: "Local subsidies available for catchment systems. Capturing monsoon runoff can offset groundwater use by 25%.",
  },
  {
    icon: Users,
    title: "Community Balancing",
    desc: "Surplus detected in Basin 12. Consider inter-basin transfer agreements with deficit Zone 9A.",
  },
  {
    icon: Lightbulb,
    title: "Optimal Irrigation Window",
    desc: "Best irrigation window: 5AM–7AM. Soil moisture levels peak, reducing evaporation loss by 30%.",
  },
];

export function RecommendationsPanel() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h3 className="mb-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Smart Recommendations
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {recommendations.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="group rounded-xl border border-border bg-background p-4 transition-colors hover:border-pulse/30"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pulse/10 text-pulse">
                <r.icon className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">{r.title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
