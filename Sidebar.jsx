import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/members", label: "Membres" },
    { to: "/admin/cotisations", label: "Cotisations" },
    { to: "/admin/logements", label: "Logements" },
    { to: "/admin/banquets", label: "Banquets" },
    { to: "/admin/events", label: "Événements" },
    { to: "/admin/social", label: "Réseau social" },
    { to: "/admin/sumup", label: "SumUp" }
  ];

  return (
    <aside className="w-64 bg-marine text-ivoire p-6 hidden md:flex flex-col">
      <h2 className="text-xl font-bold mb-8">UC Suite</h2>

      <nav className="space-y-2">
        {menu.map(m => (
          <NavLink
            key={m.to}
            to={m.to}
            end={m.to === "/admin"}
            className={({ isActive }) =>
              \`block px-3 py-2 rounded-xl \${isActive ? "bg-ivoire text-marine" : "hover:bg-ivoire/10"}\`
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}