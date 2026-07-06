"use client";

import { useEffect, useState } from "react";

export const PLAY_OPTIN =
  "https://play.google.com/apps/testing/com.thenextx.yogylogy";
export const PLAY_DETAILS =
  "https://play.google.com/store/apps/details?id=com.thenextx.yogylogy";
export const APP_STORE = "https://apps.apple.com/app/id6781422538";
export const TESTFLIGHT = "https://testflight.apple.com/join/uAqGmun5";

type OS = "android" | "ios" | "other";

/** 기기 감지 스토어 버튼. Android=Play(테스터 참여), iOS=곧 출시. */
export default function StoreCta({ compact = false }: { compact?: boolean }) {
  const [os, setOs] = useState<OS>("other");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) setOs("android");
    else if (/iphone|ipad|ipod/i.test(ua)) setOs("ios");
    // 이 랜딩은 한국어 우선 — 문서 언어 보정
    document.documentElement.lang = "ko";
  }, []);

  const primaryIsIos = os === "ios";

  return (
    <div className={`flex flex-col gap-2.5 ${compact ? "" : "sm:gap-3"}`}>
      {/* Google Play (오픈 테스팅 opt-in) */}
      <a
        href={PLAY_OPTIN}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full min-w-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-semibold text-white transition-transform active:scale-[0.98]"
        style={{
          background: "#199B68",
          boxShadow: "0 10px 22px rgba(25,155,104,0.28)",
          order: primaryIsIos ? 2 : 1,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
          <path d="M3.6 2.2c-.2.2-.3.5-.3.9v17.8c0 .4.1.7.3.9l9.5-9.8-9.5-9.8Zm12.9 6.3-2.6 2.7 2.6 2.7 3.6-2.1c1-.6 1-1.6 0-2.2l-3.6-1.1Zm-2.4 2.7L5.1 2.6l9.4 5.4-1.4 3.2Zm0 0 1.4 3.2-9.4 5.4 8-8.6Z" />
        </svg>
        <span className="whitespace-nowrap">Google Play</span>
        <span className="shrink-0 rounded-md bg-white/20 px-1.5 py-0.5 text-[11px] font-medium">
          테스터 참여
        </span>
      </a>

      {/* iOS (TestFlight 오픈 베타) */}
      <a
        href={TESTFLIGHT}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full min-w-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-semibold text-white transition-transform active:scale-[0.98]"
        style={{
          background: "#14231C",
          boxShadow: "0 10px 22px rgba(20,35,28,0.25)",
          order: primaryIsIos ? 1 : 2,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
          <path d="M16.4 12.9c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.2 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.2ZM14.2 6.3c.6-.7 1-1.7.9-2.7-.8 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z" />
        </svg>
        <span className="whitespace-nowrap">TestFlight</span>
        <span className="shrink-0 rounded-md bg-white/20 px-1.5 py-0.5 text-[11px] font-medium">
          iOS 베타
        </span>
      </a>
    </div>
  );
}
