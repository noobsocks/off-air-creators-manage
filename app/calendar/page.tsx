"use client";

import { useState } from "react";
import CreatorSidebar from "@/components/CreatorSidebar";
import RemainingBar from "@/components/RemainingBar";
import RequestModal from "@/components/RequestModal";

const calendarEvents: Record<number, { label: string; type: string }[]> = {
  8: [{ label: "번역 신청", type: "translation" }],
  10: [{ label: "번역 완료 ✓", type: "complete" }],
  14: [{ label: "번역 신청", type: "translation" }],
  15: [{ label: "컨설팅 신청", type: "consulting" }],
  18: [{ label: "번역 예약", type: "translation" }],
  22: [{ label: "컨설팅 예약", type: "consulting" }],
};

const eventColors: Record<string, string> = {
  translation: "bg-blue-50 text-blue-600",
  consulting: "bg-purple-50 text-purple-600",
  complete: "bg-emerald-50 text-emerald-600",
  pending: "bg-amber-50 text-amber-600",
};

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

export default function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<"월" | "주" | "일">("월");
  const used = 3;
  const total = 6;
  const today = 16;
  const prevDays = [29, 30, 31];
  const daysInMonth = 30;
  const nextDays = [1, 2];

  return (
    <div className="flex min-h-screen">
      <CreatorSidebar />
      <main className="flex-1 p-7">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[22px] font-bold">서비스 신청</h2>
            <p className="text-sm text-gray-400 mt-0.5">캘린더에서 일정을 확인하고 새로운 서비스를 신청하세요</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5">
            <span>+</span> 새 신청
          </button>
        </div>

        <RemainingBar used={used} total={total} />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 border border-gray-200 rounded-lg bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">‹</button>
            <span className="text-lg font-semibold min-w-[140px] text-center">2026년 4월</span>
            <button className="w-8 h-8 border border-gray-200 rounded-lg bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">›</button>
          </div>
          <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
            {(["월", "주", "일"] as const).map((view) => (
              <button key={view} onClick={() => setActiveView(view)} className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${activeView === view ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>
                {view}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-7 border-b border-gray-200">
            {weekdays.map((day) => (
              <div key={day} className="py-2.5 text-center text-xs font-semibold text-gray-400">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {prevDays.map((day) => (
              <div key={`prev-${day}`} className="min-h-[100px] p-2 border-r border-b border-gray-50">
                <span className="text-sm text-gray-300">{day}</span>
              </div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div key={day} className="min-h-[100px] p-2 border-r border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <span className={`text-sm font-medium ${day === today ? "bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs" : "text-gray-900"}`}>{day}</span>
                <div className="mt-1.5 space-y-0.5">
                  {calendarEvents[day]?.map((event, idx) => (
                    <div key={idx} className={`px-2 py-0.5 rounded text-[10px] font-medium truncate ${eventColors[event.type]}`}>{event.label}</div>
                  ))}
                </div>
              </div>
            ))}
            {nextDays.map((day) => (
              <div key={`next-${day}`} className="min-h-[100px] p-2 border-r border-b border-gray-50">
                <span className="text-sm text-gray-300">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} remaining={total - used} total={total} />
    </div>
  );
}
