export default function BanquetsPage() {
  const banquets = [
    { id: 1, type: "Banquet de Juin", inscrit: 48, lieu: "Paris" },
    { id: 2, type: "Banquet de Novembre", inscrit: 62, lieu: "Lyon" }
  ];

  return (
    <div className="space-y-4">
      <h1 className="font-title text-2xl">Banquets</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {banquets.map(b => (
          <div key={b.id} className="bg-white rounded-2xl shadow-soft p-4 text-sm space-y-1">
            <div className="font-title text-base">{b.type}</div>
            <div className="text-xs text-marine/60">{b.lieu}</div>
            <div>{b.inscrit} inscrits</div>
          </div>
        ))}
      </div>
    </div>
  );
}