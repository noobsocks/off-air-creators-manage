interface RemainingBarProps {
  used: number;
  total: number;
}

export default function RemainingBar({ used, total }: RemainingBarProps) {
  const percentage = (used / total) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 mb-6">
      <span className="text-sm font-medium whitespace-nowrap">
        이번 달 신청 현황
      </span>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-bold text-blue-600 whitespace-nowrap">
        {used} / {total}회 사용
      </span>
    </div>
  );
}
