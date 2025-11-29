import Card from "../../components/ui/Card";

export default function DashboardPage() {
  const stats = [
    { label: "Membres", value: 128 },
    { label: "Cotisations", value: 96 },
    { label: "Logements", value: 7 },
    { label: "Événements", value: 3 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="font-title text-2xl">Tableau de bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="text-center">
            <div className="text-xs text-marine/70">{s.label}</div>
            <div className="text-2xl font-bold">{s.value}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}