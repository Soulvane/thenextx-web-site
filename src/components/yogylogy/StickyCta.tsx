"use client";

import { useEffect, useState } from "react";
import { PLAY_OPTIN } from "./StoreCta";

/** 스크롤하면 나타나 항상 붙어있는 다운로드 바 (길어도 CTA는 한 탭). */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-[130%]"
      }`}
    >
      <div className="mx-auto max-w-3xl px-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <div
          className="flex items-center gap-3 rounded-2xl px-3.5 py-2.5"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E4E9E2",
            boxShadow: "0 -8px 30px rgba(20,35,28,0.14)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/yogylogy/icon.png"
            alt=""
            width={30}
            height={30}
            className="shrink-0 rounded-[9px]"
          />
          <div className="min-w-0">
            <p className="text-[13px] font-bold leading-tight" style={{ color: "#14231C" }}>
              yogylogy 시작하기
            </p>
            <p className="truncate text-[11px]" style={{ color: "#5B6B61" }}>
              무료 · Android · iOS 오픈 베타
            </p>
          </div>
          <a
            href={PLAY_OPTIN}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 rounded-xl px-4 py-2.5 text-[14px] font-bold text-white active:scale-[0.98]"
            style={{ background: "#199B68", boxShadow: "0 8px 18px rgba(25,155,104,0.3)" }}
          >
            무료로 시작
          </a>
        </div>
      </div>
    </div>
  );
}
