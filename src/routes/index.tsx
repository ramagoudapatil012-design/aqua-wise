import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { WaterHealthScore } from "@/components/WaterHealthScore";
import { AlertsPanel } from "@/components/AlertsPanel";
import { PredictionChart } from "@/components/PredictionChart";
import { RegionalMap } from "@/components/RegionalMap";
import { MetricCards } from "@/components/MetricCards";
import { RecommendationsPanel } from "@/components/RecommendationsPanel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AquaVista — AI Groundwater Intelligence" },
      { name: "description", content: "AI-powered real-time groundwater monitoring, prediction, and smart recommendations for sustainable water management in India." },
    ],
  }),
});

function Index() {
  const [role, setRole] = useState<"Farmer" | "Researcher" | "Government">("Researcher");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader role={role} onRoleChange={setRole} />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside className="col-span-12 space-y-6 md:col-span-3">
            <WaterHealthScore score={74.2} />
            <AlertsPanel />
          </aside>

          {/* Main content */}
          <section className="col-span-12 space-y-6 md:col-span-9">
            <RegionalMap />
            <MetricCards />
            <PredictionChart />
            <RecommendationsPanel />
          </section>
        </div>
      </main>
    </div>
  );
}
