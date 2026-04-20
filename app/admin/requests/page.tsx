"use client";

import AdminSidebar from "@/components/AdminSidebar";
import StatsCard from "@/components/StatsCard";

const adminRequests = [
  { id: 1, creator: "김하린", type: "translation", typeLabel: "번역", title: "유튜브 자막", desiredDate: "4월 18일", requestDate: "4월 16일", status: "pending", statusLabel: "대기중", action: { label: "확정", style: "primary" } },
  { id: 2, creator: "이준혁", type: "consulting", typeLabel: "컨설팅", title: "채널 전략", desiredDate: "4월 20일", requestDate: "4월 16일", status: "pending", statusLabel: "대기중", action: { label: "확정", style: "primary" } },
  { id: 3, creator: "왕리리", type: "translation", typeLabel: "번역", title: "틱톡 스크립트", desiredDate: "4월 19일", requestDate: "4월 15일", status: "confirmed", statusLabel: "예약확정", action: { label: "진행 시작", style: "default" } },
  { id: 4, creator: "박소연", type: "other", typeLabel: "기타", title: "섬네일 피드백", desiredDate: "4월 17일", requestDate: "4월 14일", status: "progress", statusLabel: "진행중", action: { label: "완료", style: "green" } },
  { id: 5, creator: "천유안", type: "consulting", typeLabel: "컨설팅", title: "콘텐츠 방향", desiredDate: "4월 12일", requestDate: "4월 10일", status: "complete", statusLabel: "완료", action: { label: "상세", style: "default" } },
];

const actionStyles: Record<string, string> = {
  primary: "border-blue-600 text-blue-600 hover:bg-blue-50",
  green: "border-emerald-500 text-emerald-500 hover:bg-emerald-50",
  default: "border-gray-200 text-gray-600 hover:bg-gray-50",
};

export default function AdminRequestsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-7">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold">신청 관리</h2>
          <p className="text-sm text-gray-400 mt-0.5">크리에이터들의 서비스 신청을 확인하고 처리하세요</p>
        </div>

        <div className="flex gap-4 mb-6">
          <StatsCard label="대기 중" value="5건" color="orange" />
          <StatsCard label="예약 확정" value="3건" color="blue" />
          <StatsCard label="진행 중" value="2건" color="purple" />
          <StatsCard label="이번 달 완료" value="12건" color="green" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_120px_120px_100px_120px] px-5 py-3 border-b border-gray-200 text-xs font-semibold text-gray-400">
            <span>크리에이터</span><span>서비스</span><span>희망일</span><span>신청일</span><span>상태</span><span>액션</span>
          </div>
          {adminRequests.map((req) => (
            <div key={req.id} className="grid grid-cols-[120px_1fr_120px_120px_100px_120px] px-5 py-3.5 border-b border-gray-50 text-sm items-center hover:bg-gray-50 transition-colors">
              <div className="font-semibold">{req.creator}</div>
              <div><span className={`badge-${req.type}`}>{req.typeLabel}</span><span className="ml-2 text-gray-600">{req.title}</span></div>
              <div className="text-gray-500">{req.desiredDate}</div>
              <div className="text-gray-500">{req.requestDate}</div>
              <div><span className={`status-${req.status}`}>{req.statusLabel}</span></div>
              <div><button className={`px-3 py-1.5 border rounded-md text-xs font-medium transition-colors ${actionStyles[req.action.style]}`}>{req.action.label}</button></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
