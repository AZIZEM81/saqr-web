export const kpis = [
  {
    id: "pilots",
    labelEN: "Pilots Trained",
    labelFR: "Pilotes formés",
    value: 42,
    unit: "",
    delta: 12, // %
    accent: "green" as const,
  },
  {
    id: "hours",
    labelEN: "Hours Simulated",
    labelFR: "Heures simulées",
    value: 1280,
    unit: "",
    delta: 8,
    accent: "amber" as const,
  },
  {
    id: "runs",
    labelEN: "Scenarios Run",
    labelFR: "Scénarios exécutés",
    value: 310,
    unit: "",
    delta: 15,
    accent: "sky" as const,
  },
  {
    id: "water",
    labelEN: "Estimated Water Saved",
    labelFR: "Économie d’eau estimée",
    value: 18,
    unit: "%",
    delta: 5,
    accent: "blue" as const,
  },
] as const;
export const simulationActivity = [
  { day: "Mon", runs: 12 },
  { day: "Tue", runs: 18 },
  { day: "Wed", runs: 9 },
  { day: "Thu", runs: 22 },
  { day: "Fri", runs: 17 },
  { day: "Sat", runs: 6 },
  { day: "Sun", runs: 14 },
];   

export const recentSimulations = [
  { id: "SIM-001", scenario: "ULV Spraying Training", durationMin: 18, result: "OK" },
  { id: "SIM-002", scenario: "Waypoint Mission Planning", durationMin: 25, result: "OK" },
  { id: "SIM-003", scenario: "Wind + Fog Conditions", durationMin: 40, result: "Warning" },
];