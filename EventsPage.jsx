export default function EventsPage() {
  const events = [
    { id: 1, nom: "Banquet de Juin", date: "14/06/2025", lieu: "Cayenne de Paris" },
    { id: 2, nom: "Agapes de Novembre", date: "23/11/2025", lieu: "Cayenne de Bordeaux" }
  ];

  return (
    <div className="space-y-4">
      <h1 className="font-title text-2xl">Événements</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {events.map(ev => (
          <div key={ev.id} className="bg-white rounded-2xl shadow-soft p-4 text-sm space-y-1">
            <div className="font-title text-base">{ev.nom}</div>
            <div className="text-xs text-marine/60">{ev.date} • {ev.lieu}</div>
          </div>
        ))}
      </div>
    </div>
  );
}