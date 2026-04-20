"use client";

import { useState } from "react";

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  remaining: number;
  total: number;
}

const services = [
  { id: "translation", icon: "🌐", name: "번역", desc: "중국어 번역" },
  { id: "consulting", icon: "💡", name: "컨설팅", desc: "채널 & 콘텐츠" },
  { id: "other", icon: "📎", name: "기타", desc: "기타 서비스" },
];

export default function RequestModal({
  isOpen,
  onClose,
  remaining,
  total,
}: RequestModalProps) {
  const [selectedService, setSelectedService] = useState("translation");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[520px] max-w-[90vw] max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-6 flex items-center justify-between">
          <h3 className="text-lg font-bold">새 서비스 신청</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              서비스 종류
            </label>
            <div className="flex gap-2">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className={`flex-1 p-3.5 border-[1.5px] rounded-xl text-center transition-all ${
                    selectedService === svc.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-xl mb-1">{svc.icon}</div>
                  <div className="text-sm font-semibold">{svc.name}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {svc.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              제목
            </label>
            <input
              type="text"
              placeholder="예: 유튜브 영상 자막 번역 요청"
              className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              희망 날짜
            </label>
            <input
              type="date"
              className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              희망 시간대
            </label>
            <select className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all bg-white">
              <option>무관</option>
              <option>오전 (09:00 - 12:00)</option>
              <option>오후 (13:00 - 17:00)</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              상세 내용
            </label>
            <textarea
              placeholder="신청 내용을 자세히 적어주세요. 번역의 경우 원본 링크나 파일 정보를 포함해주세요."
              className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all min-h-[80px] resize-y"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              파일 첨부 (선택)
            </label>
            <input
              type="file"
              className="w-full px-3.5 py-2 border-[1.5px] border-gray-200 rounded-lg text-sm outline-none"
            />
            <p className="text-[11px] text-gray-400 mt-1">
              스크립트, 영상 파일 등 참고 자료를 첨부할 수 있습니다
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg px-4 py-3 mb-4 text-sm text-blue-600">
            이번 달 잔여 신청 횟수: <strong>{remaining}회</strong>
          </div>

          <button className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-[15px] font-semibold hover:bg-blue-700 transition-colors">
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
}
