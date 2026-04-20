"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const TOKEN_LENGTH = 6;
  const [digits, setDigits] = useState<string[]>(Array(TOKEN_LENGTH).fill(""));

  const handleChange = (index: number, value: string) => {
    const newDigits = [...digits];
    newDigits[index] = value.toUpperCase();
    setDigits(newDigits);
    if (value && index < TOKEN_LENGTH - 1) {
      const next = document.getElementById(`digit-${index + 1}`);
      next?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      const prev = document.getElementById(`digit-${index - 1}`);
      prev?.focus();
    }
  };

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white rounded-2xl p-12 w-[400px] max-w-[90vw] shadow-lg text-center">
        <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold">
          C
        </div>
        <h1 className="text-[22px] font-bold mb-1.5">크리에이터 서비스</h1>
        <p className="text-gray-400 text-sm mb-7">
          회사에서 발급받은 토큰을 입력해주세요
        </p>
        <div className="flex gap-2 justify-center mb-6">
          {digits.map((digit, i) => (
            <input
              key={i}
              id={`digit-${i}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 border-2 border-gray-200 rounded-xl text-center text-[22px] font-semibold outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
            />
          ))}
        </div>
        <div className="bg-amber-50 border border-dashed border-amber-300 rounded-lg px-4 py-3 mb-6 text-left">
          <p className="text-xs text-amber-800">
            <strong>토큰 자릿수 미정</strong> — 현재 {TOKEN_LENGTH}자리로 예시.
            추후 변경 가능
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-[15px] font-semibold hover:bg-blue-700 transition-colors"
        >
          로그인
        </button>
        <p className="mt-4 text-xs text-gray-400">
          토큰을 분실했다면 담당 매니저에게 문의해주세요
        </p>
      </div>
    </div>
  );
}
