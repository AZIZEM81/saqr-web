import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle zellige-inspired background pattern */}
      {/* Background layers */}
<div className="absolute inset-0 -z-10">
  <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#6B8E23]/10 blur-3xl floaty" />
  <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#D4A84B]/10 blur-3xl floaty" />
  <div className="grain" />
</div>
      <div
  className="absolute inset-0 opacity-[0.06] pointer-events-none"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4A84B' stroke-width='1'%3E%3Cpath d='M60 0L120 60L60 120L0 60L60 0z'/%3E%3Cpath d='M60 22L98 60L60 98L22 60L60 22z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "120px 120px",
  }}
/>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141612]/80 via-transparent to-[#141612]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141612]/90 via-[#141612]/50 to-transparent" />

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
        <Image
          src="/home/hero.jpg"
          alt="Agricultural drone over Moroccan olive grove"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#141612]/30 to-[#141612]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6">
            <svg
              className="w-4 h-4 text-[#D4A84B]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A84B]">
              Conçu au Maroc. Déployé globalement.
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-4">
            <span className="block">Simulate.</span>
            <span className="block">Optimize.</span>
            <span className="block text-[#6B8E23]">Cultivate.</span>
          </h1>

          <p className="font-mono text-xs uppercase tracking-widest text-[#9A958A] mt-2 mb-8">
            Simuler. Optimiser. Cultiver.
          </p>

          {/* Subheadline */}
          <p className="text-[#9A958A] text-lg leading-relaxed mb-10 max-w-xl">
            Precision agriculture drone simulation for training, spraying
            optimization, and mission planning. Reduce water usage, minimize
            chemical waste, and maximize yields—designed for arid and semi-arid
            farming environments.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/simulator"
              className="inline-flex items-center justify-center gap-2 bg-[#6B8E23] hover:bg-[#5A7A1E] text-white px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Launch Simulator
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 border border-[#D4A84B]/40 hover:border-[#D4A84B] text-[#F5F3EF] hover:text-[#D4A84B] px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-widest transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              View Impact Dashboard
            </Link>
          </div>

          {/* Small tag */}
          <div className="mt-12 flex items-center gap-3 text-[#9A958A] text-sm">
            <div className="w-2 h-2 bg-[#6B8E23] rounded-full animate-pulse" />
            <span>Entraînement sans risque • Optimisation des ressources</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141612] to-transparent" />
    </section>
  );
}