"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SimulatorHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // subtle cursor parallax for the logo 
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1; // [-1..1]
      const y = ((e.clientY - r.top) / r.height) * 2 - 1;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden border-b border-white/10"
    >
      {/* Moroccan zellige squares background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[#141612]" />

        {/* Zellige pattern (squares/tiles) */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4A84B' stroke-opacity='0.55' stroke-width='1'%3E%3Cpath d='M0 40h160M0 80h160M0 120h160'/%3E%3Cpath d='M40 0v160M80 0v160M120 0v160'/%3E%3Cpath d='M0 0h160v160H0z' stroke-opacity='0.35'/%3E%3Cpath d='M0 0l40 40M40 0L0 40M40 40l40 40M80 40L40 80M80 80l40 40M120 80L80 120M120 120l40 40M160 120L120 160' stroke-opacity='0.25'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "220px 220px",
          }}
        />

        {/* Soft glows */}
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#6B8E23]/18 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#D4A84B]/14 blur-3xl" />

        {/* Grain */}
        <div className="grain opacity-[0.10]" />

        {/* Fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#D4A84B]">
            Training Tool • Outil d&apos;entraînement
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#F5F3EF] md:text-5xl">
            SAQR Drone Simulator
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#9A958A] md:text-base">
            Practice spraying missions, waypoint planning, and wind conditions before
            flying real agricultural drones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg border border-[#D4A84B]/35 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#F5F3EF] transition hover:border-[#D4A84B] hover:text-[#D4A84B]"
            >
              View Dashboard
            </Link>

            <a
              href="#unity"
              className="inline-flex items-center justify-center rounded-lg bg-[#6B8E23] px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition hover:bg-[#5A7A1E]"
            >
              Launch Simulator
            </a>
          </div>
        </div>

        {/* Moving logo block */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div
            className="relative grid place-items-center p-10"
            style={{
              transform:
                "translate3d(calc(var(--mx, 0) * 8px), calc(var(--my, 0) * 6px), 0)",
              transition: "transform 120ms ease-out",
            }}
          >
            {/* glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6B8E23]/20 via-transparent to-[#D4A84B]/16 blur-xl" />

            <Image
              src="/simulator/sim-logo.png"
              alt="SAQR mark"
              width={170}
              height={170}
              priority
              className="relative saqr-float drop-shadow-[0_0_35px_rgba(107,142,35,0.30)]"
            />

          </div>
        </div>
      </div>
    </section>
  );
}