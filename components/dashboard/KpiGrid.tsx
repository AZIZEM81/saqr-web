import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { kpis } from "@/lib/data/mockStats";

type Accent = "green" | "amber" | "sky" | "blue";

const ACCENT: Record<Accent, { ring: string; glow: string; chip: string }> = {
  green: {
    ring: "from-[#6B8E23]/40 via-[#6B8E23]/10 to-transparent",
    glow: "shadow-[0_0_35px_rgba(107,142,35,0.18)]",
    chip: "bg-[#6B8E23]/15 text-[#B7E35B] border-[#6B8E23]/30",
  },
  amber: {
    ring: "from-[#D4A84B]/40 via-[#D4A84B]/10 to-transparent",
    glow: "shadow-[0_0_35px_rgba(212,168,75,0.16)]",
    chip: "bg-[#D4A84B]/15 text-[#FFD88A] border-[#D4A84B]/30",
  },
  sky: {
    ring: "from-sky-400/35 via-sky-400/10 to-transparent",
    glow: "shadow-[0_0_35px_rgba(56,189,248,0.14)]",
    chip: "bg-sky-400/10 text-sky-200 border-sky-400/25",
  },
  blue: {
    ring: "from-blue-500/30 via-blue-500/10 to-transparent",
    glow: "shadow-[0_0_35px_rgba(59,130,246,0.14)]",
    chip: "bg-blue-500/10 text-blue-200 border-blue-500/25",
  },
};

export default function KpiGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => {
        const a = ACCENT[k.accent as Accent];

        const progress = Math.min(90, 35 + (k.delta ?? 0));

        return (
          <div
            key={k.id}
            className={[
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
              "backdrop-blur-md transition duration-300",
              "hover:-translate-y-1 hover:border-white/20",
              a.glow,
            ].join(" ")}
          >
            {/* Accent ring */}
            <div
              className={[
                "pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-gradient-to-br",
                a.ring,
                "blur-2xl opacity-80 group-hover:opacity-100 transition",
              ].join(" ")}
            />

            {/* Subtle scanline */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent_40%)]" />

            <div className="relative p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-white/70">
                    {k.labelEN} • {k.labelFR}
                  </p>

                  <div className="mt-3 text-3xl font-semibold tracking-tight">
                    <AnimatedNumber
                      value={k.value}
                      duration={1100}
                      suffix={k.unit}
                    />
                  </div>

                  <p className="mt-1 text-xs text-white/45">Public (mock)</p>
                </div>

                {/* Delta badge */}
                <div
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
                    a.chip,
                  ].join(" ")}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                  <span>+{k.delta}%</span>
                </div>
              </div>

              {/* Mini progress bar */}
              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-black/30">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-70 group-hover:opacity-90 transition"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}