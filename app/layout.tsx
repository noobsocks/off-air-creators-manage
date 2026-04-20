import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "크리에이터 서비스",
  description: "숏폼 크리에이터 파트너십 서비스 신청 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
