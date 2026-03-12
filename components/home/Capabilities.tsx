import Image from "next/image";

const capabilities = [
  { title: "ULV Spraying Training", titleFr: "Pulvérisation ULV", image: "/home/capability-1.jpg" },
  { title: "Waypoint Mission Planning", titleFr: "Planification de missions", image: "/home/capability-2.jpg" },
  { title: "Weather & Wind Conditions", titleFr: "Météo & vent", image: "/home/capability-3.jpg" },
  { title: "Mapping & Crop Monitoring", titleFr: "Cartographie & surveillance", image: "/home/capability-4.jpg" },
  { title: "Irrigation Efficiency", titleFr: "Efficacité d’irrigation", image: "/home/capability-5.jpg" },
  { title: "Analytics & Reporting", titleFr: "Analyses & rapports", image: "/home/capability-6.jpg" },
];

export default function Capabilities() {
  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#1A1916]/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B8E23] block mb-3">
              Capacités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3EF]">
              Platform Capabilities
            </h2>
            <p className="mt-3 text-[#9A958A] max-w-xl">
              Tools designed for precision agriculture simulation.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="card-border bg-[#141612] overflow-hidden card-glow">
              <div className="relative h-36 target-bracket">
                <Image src={c.image} alt={c.title} fill className="object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141612] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#9A958A] mt-1">
                  {c.titleFr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}