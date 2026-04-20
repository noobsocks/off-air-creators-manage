"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/dashboard", icon: "📊", label: "대시보드" },
  { href: "/calendar", icon: "📅", label: "서비스 신청" },
  { href: "/history", icon: "📋", label: "신청 내역" },
];

const accountItems = [
  { href: "#", icon: "👤", label: "내 정보" },
  { href: "/", icon: "🚪", label: "로그아웃" },
];

export default function CreatorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white border-r border-gray-200 p-6 flex-shrink-0 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          C
        </div>
        <span className="font-semibold text-[15px]">크리에이터 서비스</span>
      </div>

      <div className="mb-6">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
          메뉴
        </p>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors mb-0.5 ${
              pathname === item.href
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <span className="w-5 text-center text-[15px]">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
          계정
        </p>
        {accountItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors mb-0.5"
          >
            <span className="w-5 text-center text-[15px]">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
