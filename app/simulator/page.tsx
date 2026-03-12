import SimulatorHero from "@/components/simulator/SimulatorHero";
import UnityFrame from "@/components/simulator/UnityFrame";

export default function SimulatorPage() {
  return (
    <main className="min-h-screen bg-[#141612] text-[#F5F3EF]">
      <SimulatorHero />
      <section id="launch" className="mx-auto max-w-6xl px-6 py-10">
        <UnityFrame />
      </section>
    </main>
  );
}