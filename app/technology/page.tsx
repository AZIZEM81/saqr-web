import DroneScene from "@/components/technology/DroneScene";

export default function TechnologyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#6B8E23]">
          Technology • Technologie
        </p>
        <h1 className="mt-2 text-4xl font-bold">How SAQR Works</h1>
        <p className="mt-3 max-w-2xl text-white/60">
          Simulation-first training + mission planning for precision agriculture.
          Built for arid and semi-arid farming realities 
        </p>
      </div>

      <DroneScene />

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Mission Planning",
            text: "Waypoint planning, coverage logic, and safe operator training before real flights.",
          },
          {
            title: "Spray Optimization",
            text: "ULV parameters, drift awareness, and resource reduction (water/chemicals).",
          },
          {
            title: "Field Reality",
            text: "Arid climate constraints, terrain + wind factors, Morocco-first constraints — global-ready.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 transition"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-white/60">{c.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}