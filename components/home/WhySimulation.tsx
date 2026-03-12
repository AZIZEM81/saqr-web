import Image from "next/image";

const reasons = [
  {
    title: "Train Without Risk",
    titleFr: "Formation sans risque",
    description:
      "Practice emergency procedures, master flight controls, and build confidence in a safe environment before touching real equipment.",
    image: "/home/capability-1.jpg",
  },
  {
    title: "Reduce Water & Chemical Use",
    titleFr: "Économie d’eau & intrants",
    description:
      "Optimize ULV spraying parameters and flight paths in simulation to reduce waste before field deployment.",
    image: "/home/capability-2.jpg",
  },
  {
    title: "Operate in Real Conditions",
    titleFr: "Conditions réelles",
    description:
      "Train with wind and terrain constraints typical of arid and semi-arid farming environments.",
    image: "/home/capability-3.jpg",
  },
];

export default function WhySimulation() {
  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#6B8E23] block mb-3">
            Pourquoi la simulation ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3EF]">
            Why Simulation Matters
          </h2>
          <p className="mt-3 text-[#9A958A] max-w-2xl">
            Training safely + optimizing resources before real flights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="card-border bg-[#141612] overflow-hidden">
              <div className="relative h-44">
                <Image src={r.image} alt={r.title} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141612] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#9A958A] mt-1">
                  {r.titleFr}
                </p>
                <p className="text-[#9A958A] text-sm mt-3 leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}