import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", actual: 12.4, predicted: 12.4 },
  { month: "Feb", actual: 11.8, predicted: 11.9 },
  { month: "Mar", actual: 10.2, predicted: 10.5 },
  { month: "Apr", actual: 8.6, predicted: 8.9 },
  { month: "May", actual: 7.1, predicted: 7.4 },
  { month: "Jun", actual: 6.8, predicted: 7.0 },
  { month: "Jul", predicted: 8.2 },
  { month: "Aug", predicted: 10.1 },
  { month: "Sep", predicted: 11.5 },
  { month: "Oct", predicted: 12.0 },
  { month: "Nov", predicted: 12.4 },
  { month: "Dec", predicted: 12.6 },
];

export function PredictionChart() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Water Level Forecast (meters bgl)
        </h3>
        <div className="flex gap-4 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-pulse" /> Actual
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-chart-2" /> Predicted
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gradActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.19 155)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="oklch(0.72 0.19 155)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 5%)" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: "oklch(0.6 0.02 250)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "oklch(0.6 0.02 250)" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.12 0.015 260)",
              border: "1px solid oklch(1 0 0 / 10%)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "oklch(0.9 0.01 250)",
            }}
          />
          <Area type="monotone" dataKey="actual" stroke="oklch(0.72 0.19 155)" fill="url(#gradActual)" strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="predicted" stroke="oklch(0.65 0.15 200)" fill="url(#gradPredicted)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
