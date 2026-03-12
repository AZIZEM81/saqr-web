import Hero from "../components/home/Hero";
import WhySimulation from "../components/home/WhySimulation";
import Capabilities from "../components/home/Capabilities";
import MoroccoBand from "../components/home/MoroccoBand";
import FinalCTA from "../components/home/FinalCTA";
import Reveal from "../components/home/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141612] text-[#F5F3EF]">
      <Hero />
      <Reveal delay={50}><WhySimulation /></Reveal>
      <Reveal delay={80}><Capabilities /></Reveal>
      <Reveal delay={100}><MoroccoBand /></Reveal>
      <Reveal delay={120}><FinalCTA /></Reveal>
    </main>
  );
}