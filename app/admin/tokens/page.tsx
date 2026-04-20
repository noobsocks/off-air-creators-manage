"use client";

import AdminSidebar from "@/components/AdminSidebar";
import StatsCard from "@/components/StatsCard";

const tokens = [
  { id: 1, creator: "김하린", token: "A7X3K9", issuedDate: "2026.03.01", limit: 6, used: 3, active: true, note: "" },
  { id: 2, creator: "이준혁", token: "B2M8P4", issuedDate: "2026.03.01", limit: 6, used: 5, active: true, note: "" },
  { id: 3, creator: "왕리리", token: "C5N1Q7", issuedDate: "2026.03.15", limit: 6, used: 2, active: true, note: "" },
  { id: 4, creator: "박소연", token: "D9R6W2", issuedDate: "2026.02.01", limit: 6, used: 6, active: true, note: "" },
  { id: 5, creator: "정민수", token: "E3T4Y8", issuedDate: "2026.01.15", limit: 0, used: 0, active: false, note: "(해지)" },
];

export default function AdminTokensPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-7">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[22px] font-bold">토큰 관리</h2>
            <p className="text-sm text-gray-400 mt-0.5">크리에이터 로그인 토큰을 발급하고 관리하세요</p>
          </div>
          <button className="px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-1.5">
            <span>+</span> 토큰 생성
          </button>
        </div>

        <div className="bg-amber-50 border border-dashed border-amber-300 rounded-lg px-4 py-3 mb-5 flex items-center gap-2">
          <span className="text-sm">⚠</span>
          <p className="text-xs text-amber-800"><strong>토큰 자릿수 미정</strong> — 현재 6자리(영문+숫자)로 예시. 추후 자릿수 및 형식 변경 가능</p>
        </div>

        <div className="flex gap-4 mb-6">
          <StatsCard label="전체 발급" value="24" />
          <StatsCard label="활성" value="18" color="green" />
          <StatsCard label="비활성" value="6" color="red" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">크리에이터</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">토큰</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">발급일</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">월 신청 한도</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">이번 달 사용</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">상태</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400">액션</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((t) => (
                <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className={`px-5 py-3 text-sm font-semibold ${!t.active ? "text-gray-400" : ""}`}>
                    {t.creator}{t.note && <span className="text-gray-400 font-normal"> {t.note}</span>}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`font-mono font-semibold text-sm bg-gray-100 px-2.5 py-1 rounded-md tracking-wider ${!t.active ? "opacity-40" : ""}`}>{t.token}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500">{t.issuedDate}</td>
                  <td className="px-5 py-3 text-sm text-gray-500">{t.active ? `${t.limit}회` : "—"}</td>
                  <td className="px-5 py-3 text-sm text-gray-500">{t.active ? `${t.used} / ${t.limit}` : "—"}</td>
                  <td className="px-5 py-3 text-sm">
                    {t.active ? <span className="text-emerald-500 font-semibold">● 활성</span> : <span className="text-red-500 font-semibold">● 비활성</span>}
                  </td>
                  <td className="px-5 py-3">
                    <button className="px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      {t.active ? "편집" : "재활성화"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
