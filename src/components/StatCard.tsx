interface StatCardProps {
  title: string;
  value: string;
  highlight?: boolean;
}

export default function StatCard({
  title,
  value,
  highlight = false,
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div
        className={`text-2xl font-bold ${highlight ? "text-blue-600" : "text-gray-900"}`}
      >
        {value}
      </div>
    </div>
  );
}
