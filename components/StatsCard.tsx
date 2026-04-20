interface StatsCardProps {
  label: string;
  value: string;
  detail?: string;
  color?: "blue" | "green" | "orange" | "purple" | "red" | "default";
}

const colorMap = {
  blue: "text-blue-600",
  green: "text-emerald-500",
  orange: "text-amber-500",
  purple: "text-purple-500",
  red: "text-red-500",
  default: "text-gray-900",
};

export default function StatsCard({
  label,
  value,
  detail,
  color = "default",
}: StatsCardProps) {
  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-xs text-gray-400 font-medium mb-2">{label}</p>
      <p className={`text-[28px] font-bold ${colorMap[color]}`}>{value}</p>
      {detail && <p className="text-xs text-gray-400 mt-1">{detail}</p>}
    </div>
  );
}
