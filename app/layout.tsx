import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import BrandLogo from "@/components/layout/BrandLogo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAQR Platform",
  description: "Drone simulation platform for precision agriculture in Morocco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Avoid hydration noise in some setups/extensions
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${mono.variable} min-h-screen antialiased bg-[#141612] text-[#F5F3EF]`}
      >
        {/* Navbar */}
        <header className="relative border-b border-white/10 bg-[#141612]/85 backdrop-blur">
          {/* Zellige pattern behind navbar */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,168,75,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,75,0.35) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Soft glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#6B8E23]/10 via-transparent to-[#D4A84B]/10" />

          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <BrandLogo />

            <nav className="flex items-center gap-10 text-sm text-[#9A958A]">
              {[
                { href: "/dashboard", label: "Dashboard" },
                { href: "/simulator", label: "Simulator" },
                { href: "/technology", label: "Technology" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative cursor-pointer transition-all duration-300 hover:text-[#F5F3EF] hover:-translate-y-[1px]"
                >
                  {item.label}
                  {/* underline */}
                  <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#6B8E23] via-[#D4A84B] to-transparent transition-all duration-300 group-hover:w-full" />
                  {/* glow dot */}
                  <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#6B8E23] opacity-0 transition duration-300 group-hover:block group-hover:opacity-80" />
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        <footer className="border-t border-[#2A2820] bg-[#0a0908]/50 mt-24">
          <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-[#9A958A]">
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div>
                <h4 className="font-semibold text-[#F5F3EF] mb-4">
                  About SAQR
                </h4>
                <p className="text-sm leading-relaxed">
                  Precision agriculture simulation for the next generation of
                  operators in arid environments.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#F5F3EF] mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#F5F3EF] mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/drsaqr/posts/?feedView=all"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:demo@saqr.ma"
                      className="hover:text-[#D4A84B] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#2A2820] pt-8">
              © {year} SAQR — Engineered in Morocco. Global precision agriculture
              platform.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}