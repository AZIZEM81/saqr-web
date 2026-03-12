export default function MoroccoBand() {
  return (
    <section className="relative py-16 px-6 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6B8E23]/10 via-[#D4A84B]/5 to-[#6B8E23]/10" />

      {/* Subtle Moroccan geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4A84B' stroke-width='1'%3E%3Cpath d='M60 0L120 60L60 120L0 60L60 0z'/%3E%3Cpath d='M60 20L100 60L60 100L20 60L60 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/30 mb-6">
          <svg
            className="w-8 h-8 text-[#6B8E23]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path d="M12 3c2.5 2 4 4.7 4 9s-1.5 7-4 9c-2.5-2-4-4.7-4-9s1.5-7 4-9z" />
            <path d="M3.5 12h17" />
          </svg>
        </div>

        <h2 className="font-bold text-3xl lg:text-4xl mb-4">
          Built in Morocco. Designed for Water-Smart Agriculture.
        </h2>

        <p className="font-mono text-sm uppercase tracking-widest text-[#9A958A] mb-6">
          Conçu au Maroc • Pour l’agriculture aride et semi-aride
        </p>

        <p className="text-[#9A958A] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          SAQR helps operators train and optimize drone missions for real farming
          conditions—wind, terrain, and water constraints. Start in simulation,
          then deploy with confidence in the field.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Marrakech", "Casablanca", "Rabat", "Global"].map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#141612] rounded-full border border-[#D4A84B]/20 text-sm text-[#9A958A]"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B8E23]" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}