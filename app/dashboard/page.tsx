"use client";

import { useState } from "react";
import CreatorSidebar from "@/components/CreatorSidebar";
import StatsCard from "@/components/StatsCard";
import RemainingBar from "@/components/RemainingBar";
import RequestModal from "@/components/RequestModal";

const recentRequests = [
  { id: 1, type: "translation", typeLabel: "번역", title: "유튜브 자막 번역", reservedDate: "4월 18일", requestDate: "4월 14일", status: "confirmed", statusLabel: "예약확정" },
  { id: 2, type: "consulting", typeLabel: "컨설팅", title: "채널 전략 상담", reservedDate: "4월 22일", requestDate: "4월 15일", status: "pending", statusLabel: "대기중" },
  { id: 3, type: "translation", typeLabel: "번역", title: "틱톡 스크립트 번역", reservedDate: "4월 10일", requestDate: "4월 8일", status: "complete", statusLabel: "완료" },
];

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const used = 3;
  const total = 6;

  return (
    <div className="flex min-h-screen">
      <CreatorSidebar />
      <main className="flex-1 p-7">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[22px] font-bold">안녕하세요, 크리에이터님 👋</h2>
            <p className="text-sm text-gray-400 mt-0.5">이번 달 서비스 현황을 확인하세요</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5">
            <span>+</span> 새 신청
          </button>
        </div>

        <RemainingBar used={used} total={total} />

        <div className="flex gap-4 mb-6">
          <StatsCard label="잔여 신청 횟수" value={`${total - used}회`} detail={`이번 달 ${total}회 중 ${used}회 사용`} color="blue" />
          <StatsCard label="진행 중" value="2건" detail="번역 1건, 컨설팅 1건" color="orange" />
          <StatsCard label="완료" value="1건" detail="이번 달 완료된 서비스" color="green" />
        </div>

        <h3 className="text-base font-semibold mb-3">최근 신청</h3>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_120px_120px_100px_80px] px-5 py-3 border-b border-gray-200 text-xs font-semibold text-gray-400">
            <span>서비스</span><span>예약일</span><span>신청일</span><span>상태</span><span></span>
          </div>
          {recentRequests.map((req) => (
            <div key={req.id} className="grid grid-cols-[1fr_120px_120px_100px_80px] px-5 py-3.5 border-b border-gray-50 text-sm items-center hover:bg-gray-50 transition-colors">
              <div><span className={`badge-${req.type}`}>{req.typeLabel}</span><span className="ml-2">{req.title}</span></div>
              <div className="text-gray-500">{req.reservedDate}</div>
              <div className="text-gray-500">{req.requestDate}</div>
              <div><span className={`status-${req.status}`}>{req.statusLabel}</span></div>
              <div className="text-blue-600 text-xs cursor-pointer hover:underline">상세 →</div>
            </div>
          ))}
        </div>
      </main>
      <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} remaining={total - used} total={total} />
    </div>
  );
}
