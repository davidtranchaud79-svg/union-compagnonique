export default function Badge({ children, color = "default" }) {
  const colors = {
    default: "bg-ivoire text-marine",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    warning: "bg-yellow-100 text-yellow-800"
  };
  return <span className={`px-2 py-1 rounded-lg text-xs font-medium ${colors[color]}`}>{children}</span>;
}