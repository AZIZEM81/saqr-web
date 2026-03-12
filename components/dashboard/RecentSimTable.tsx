import { recentSimulations } from "@/lib/data/mockStats";

export default function RecentSimTable() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
      <h2 className="text-lg font-semibold">Recent Simulations</h2>
      <p className="mt-1 text-sm text-zinc-400">
        Latest sessions • Dernières sessions
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-zinc-400">
            <tr>
              <th className="py-2 text-left">ID</th>
              <th className="py-2 text-left">Scenario</th>
              <th className="py-2 text-left">Duration</th>
              <th className="py-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {recentSimulations.map((r) => (
              <tr key={r.id} className="border-t border-zinc-800">
                <td className="py-2">{r.id}</td>
                <td className="py-2">{r.scenario}</td>
                <td className="py-2">{r.durationMin} min</td>
                <td className="py-2">{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}