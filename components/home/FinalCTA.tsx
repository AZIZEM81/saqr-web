import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/6 via-transparent to-[#D4A84B]/6" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1916] rounded-full border border-[#6B8E23]/30 mb-8">
          <span className="w-2 h-2 bg-[#6B8E23] rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#9A958A]">
            Pilot program open
          </span>
        </div>

        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl mb-6">
          Train in simulation. Deploy in the field.
        </h2>

        <p className="font-mono text-sm uppercase tracking-widest text-[#9A958A] mb-6">
          Simuler • Optimiser • Cultiver
        </p>

        <p className="text-[#9A958A] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          See the simulator, explore the impact dashboard, and request a demo for
          your operators.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/simulator"
            className="inline-flex items-center justify-center bg-[#6B8E23] hover:bg-[#5A7A1E] text-white px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
          >
            Launch Simulator
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center border border-[#D4A84B]/40 hover:border-[#D4A84B] text-[#F5F3EF] hover:text-[#D4A84B] px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-widest transition-all duration-300"
          >
            View Dashboard
          </Link>
        </div>

        <div className="mt-10 text-sm text-[#9A958A]">
          Demo contact:{" "}
          <a className="underline hover:text-[#D4A84B]" href="mailto:demo@saqr.ma">
            demo@saqr.ma
          </a>
        </div>
      </div>
    </section>
  );
}