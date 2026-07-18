import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "ko"] as const;

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
}

function detectLocale(req: NextRequest): "en" | "ko" {
  const primary =
    req.headers.get("accept-language")?.split(",")[0]?.trim().toLowerCase() ??
    "";
  return primary.startsWith("ko") ? "ko" : "en";
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const url = req.nextUrl.clone();

  // Root: send visitors to their preferred language (temporary — varies by user).
  if (pathname === "/") {
    url.pathname = `/${detectLocale(req)}`;
    return NextResponse.redirect(url, 307);
  }

  // Legacy unprefixed paths (e.g. /services) -> canonical English (permanent).
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    // Run on everything except API routes, Next internals, the cross-domain
    // yogylogy redirect (handled in next.config), and static files.
    "/((?!api|_next/static|_next/image|yogylogy|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
