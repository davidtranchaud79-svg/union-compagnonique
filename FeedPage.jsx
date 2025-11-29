export default function FeedPage() {
  const sample = [
    {
      id: 1,
      auteur: "Jean – Cayenne de Paris",
      date: "12/11/2025",
      contenu: "Bienvenue à Antoine dans la Cayenne de Lyon !"
    },
    {
      id: 2,
      auteur: "Claire – Itinérante",
      date: "08/11/2025",
      contenu: "Retour d’un tour de France compagnonnique."
    }
  ];

  return (
    <div className="space-y-4">
      <h1 className="font-title text-2xl">Fil compagnonnique</h1>

      {sample.map(p => (
        <div key={p.id} className="bg-white shadow-soft rounded-2xl p-4 text-sm space-y-1">
          <div className="flex justify-between">
            <div className="font-semibold">{p.auteur}</div>
            <div className="text-xs text-marine/60">{p.date}</div>
          </div>
          <div>{p.contenu}</div>
        </div>
      ))}
    </div>
  );
}