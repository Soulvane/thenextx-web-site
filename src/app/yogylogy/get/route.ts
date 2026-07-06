import { NextResponse } from "next/server";

/**
 * 기기 감지 리다이렉터 (QR/광고/공유 링크용).
 * - Android → Google Play 오픈 테스트 opt-in
 * - iOS     → TestFlight 오픈 베타
 * - 그 외/봇 → 랜딩 페이지
 *
 * noindex: robots.ts에서 /yogylogy/get 크롤 제외.
 */
export const dynamic = "force-dynamic";

const PLAY_OPTIN =
  "https://play.google.com/apps/testing/com.thenextx.yogylogy";
const TESTFLIGHT = "https://testflight.apple.com/join/uAqGmun5";
const LANDING = "/yogylogy";

export function GET(request: Request) {
  const ua = request.headers.get("user-agent") ?? "";

  if (/android/i.test(ua)) {
    return NextResponse.redirect(PLAY_OPTIN, 302);
  }
  if (/iphone|ipad|ipod/i.test(ua)) {
    return NextResponse.redirect(TESTFLIGHT, 302);
  }
  const url = new URL(LANDING, request.url);
  return NextResponse.redirect(url, 302);
}
