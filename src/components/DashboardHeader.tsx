import { Droplets, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

const roles = ["Farmer", "Researcher", "Government"] as const;
type Role = (typeof roles)[number];

export function DashboardHeader({ role, onRoleChange }: { role: Role; onRoleChange: (r: Role) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pulse to-emerald-800">
          <Droplets className="h-4 w-4 text-pulse-foreground" />
        </div>
        <h1 className="font-display text-lg font-semibold tracking-tight text-foreground">
          AQUAVISTA
        </h1>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Groundwater Intelligence
        </span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#" className="text-foreground transition-colors hover:text-pulse">Explorer</a>
          <a href="#" className="transition-colors hover:text-pulse">Predictions</a>
          <a href="#" className="transition-colors hover:text-pulse">Anomalies</a>
        </nav>

        <button className="relative text-muted-foreground transition-colors hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-critical" />
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-alt"
          >
            {role}
            <ChevronDown className="h-3 w-3" />
          </button>
          {open && (
            <div className="absolute right-0 top-full z-50 mt-1 rounded-lg border border-border bg-surface p-1 shadow-lg">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => { onRoleChange(r); setOpen(false); }}
                  className="block w-full rounded-md px-4 py-1.5 text-left text-xs text-foreground transition-colors hover:bg-surface-alt"
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
