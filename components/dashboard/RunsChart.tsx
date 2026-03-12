"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { simulationActivity } from "@/lib/data/mockStats";

export default function RunsChart() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#6B8E23]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#D4A84B]/10 blur-3xl" />

      <h3 className="text-lg font-semibold">Simulation Activity</h3>
      <p className="mt-1 text-sm text-white/60">
        Runs over the last 7 days • Activité sur 7 jours
      </p>

      <div className="mt-5 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={simulationActivity} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="saqrFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(107,142,35,0.40)" />
                <stop offset="70%" stopColor="rgba(107,142,35,0.05)" />
                <stop offset="100%" stopColor="rgba(107,142,35,0)" />
              </linearGradient>

              <linearGradient id="saqrStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(212,168,75,0.65)" />
                <stop offset="50%" stopColor="rgba(107,142,35,0.85)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.65)" />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.12)" strokeDasharray="4 6" />
            <XAxis dataKey="day" stroke="rgba(255,255,255,0.55)" tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.55)" tickLine={false} axisLine={false} width={28} />

            <Tooltip
              cursor={{ stroke: "rgba(255,255,255,0.15)" }}
              contentStyle={{
                background: "rgba(20,22,18,0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                color: "rgba(245,243,239,1)",
                boxShadow: "0 0 30px rgba(107,142,35,0.18)",
              }}
              labelStyle={{ color: "rgba(245,243,239,0.9)" }}
            />

            <Area
              type="monotone"
              dataKey="runs"
              stroke="url(#saqrStroke)"
              strokeWidth={2.4}
              fill="url(#saqrFill)"
              dot={{ r: 3, stroke: "rgba(245,243,239,0.9)", strokeWidth: 1 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}