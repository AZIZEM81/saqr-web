import KpiGrid from "@/components/dashboard/KpiGrid";
import RunsChart from "@/components/dashboard/RunsChart";
import RecentSimTable from "@/components/dashboard/RecentSimTable";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold">SAQR Impact Dashboard</h1>
      <p className="mt-2 text-zinc-400">
        Public investor overview of training, simulation and operational impact.
      </p>

      <div className="mt-8">
        <KpiGrid />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RunsChart />
        <RecentSimTable />
      </div>
    </main>
  );
}