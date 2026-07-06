import type { Metadata } from "next";
import Image from "next/image";
import StoreCta, { PLAY_DETAILS } from "@/components/yogylogy/StoreCta";
import StickyCta from "@/components/yogylogy/StickyCta";

const TITLE = "yogylogy — 뭐든 남기는 일상 기록 앱 · 다이어트·여행·공유";
const DESC =
  "찍고 쓰면 AI가 정리하는 일상 기록 앱. 다이어트·운동 기록, 여행·맛집 메모, 사진 공유, 관심사 모임과 정보·쿠폰·공동구매까지 — 기록이 정보가 되는 yogylogy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thenextx.net"),
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    // 핵심 (검색량 높은 '기록' 중심)
    "기록 앱", "일상 기록 앱", "AI 기록 앱", "메모 앱", "사진 기록 앱", "하루 기록",
    "다이어트 기록 앱", "운동 기록 앱", "습관 기록 앱", "감정 기록", "위치 기록",
    "여행 기록 앱", "맛집 기록", "가족 공유 앱", "사진 공유 앱",
    "소모임 앱", "취미 커뮤니티", "공동구매", "쿠폰 공유", "정보 공유 커뮤니티",
    "캘린더 기록", "포토 로그", "라이프로그", "로그앱",
    // 보조 (일기/다이어리 계열 — 검색 유입용, 숨은 키워드)
    "일기 앱", "AI 일기", "다이어리 앱", "포토 다이어리", "추억 저장",
    // 영문
    "journaling app", "AI journal", "AI diary", "daily diary app", "photo journal",
    "life log app", "diet tracker", "workout journal", "habit tracker",
    "memory keeping app", "private journal", "social journaling", "group sharing app",
    "coupon sharing", "group buy community",
  ],
  alternates: { canonical: "/yogylogy" },
  openGraph: {
    type: "website",
    url: "https://thenextx.net/yogylogy",
    siteName: "yogylogy",
    title: TITLE,
    description: DESC,
    locale: "ko_KR",
    images: [{ url: "/yogylogy/generated/hero.webp", width: 1344, height: 768, alt: "yogylogy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/yogylogy/generated/hero.webp"],
  },
  robots: { index: true, follow: true },
  other: { "apple-itunes-app": "app-id=6781422538" },
};

const BASE = "https://thenextx.net";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "yogylogy",
  operatingSystem: "ANDROID, IOS",
  applicationCategory: "LifestyleApplication",
  description: DESC,
  url: `${BASE}/yogylogy`,
  image: `${BASE}/yogylogy/icon.png`,
  downloadUrl: PLAY_DETAILS,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  inLanguage: ["ko", "en"],
  featureList: [
    "사진·위치·기분과 함께 매일 기록 (Nest)",
    "다이어트·운동·습관을 날짜별로 비교",
    "사진·위치를 분석한 AI 글쓰기 초안 및 요약",
    "공개 범위 선택(나만 보기·그룹·전체)과 위치 노출 끄기",
    "관심사 커뮤니티 Grove에 기록 공유",
    "정보·쿠폰·공동구매 공유",
    "근처·공개 기록 위치 기반 탐색 (Explore)",
    "필터·위치를 담는 인앱 카메라",
    "과거의 오늘 추억 알림 (On This Day)",
  ],
  screenshot: [
    `${BASE}/yogylogy/screenshots/nest.jpg`,
    `${BASE}/yogylogy/screenshots/explore.jpg`,
    `${BASE}/yogylogy/screenshots/newlog.jpg`,
    `${BASE}/yogylogy/screenshots/camera.jpg`,
    `${BASE}/yogylogy/screenshots/login.jpg`,
  ],
};

// 브랜드 팔레트
const INK = "#14231C";
const SUB = "#5B6B61";

type UseCase = {
  img: string;
  tag: string;
  title: string;
  body: string;
  accent: string;
};

const USE_CASES: UseCase[] = [
  {
    img: "usecase-diet",
    tag: "다이어트 · 운동 · 습관",
    title: "어제와 오늘이, 눈에 보이게",
    body: "사진·몸무게·기분을 매일 남기면 날짜별로 나란히 비교돼요. ‘한 달 전보다 달라진’ 변화가 한눈에.",
    accent: "#199B68",
  },
  {
    img: "usecase-family",
    tag: "가족 · 친구 · 프라이빗",
    title: "우리끼리만, 소중하게",
    body: "공개 범위를 골라 가까운 사람과만. 흘러가 사라지지 않고 우리 앨범처럼 쌓여요. 위치 노출도 끌 수 있어요.",
    accent: "#2E7FB8",
  },
  {
    img: "usecase-grove",
    tag: "관심사 Grove",
    title: "같은 취향끼리, 오래 남게",
    body: "관심사로 Grove를 만들면 모임의 기록이 함께 쌓이는 아카이브가 돼요. 대화는 사라져도 기록은 남죠.",
    accent: "#168AAD",
  },
  {
    img: "usecase-deals",
    tag: "정보 · 쿠폰 · 공동구매",
    title: "필요한 정보, 함께 나눠 이득",
    body: "정보·쿠폰·공동구매를 Grove에서 함께. 흩어진 딜을 한 곳에 모아 같이 사면 더 저렴하게.",
    accent: "#C0567A",
  },
];

const SHOTS = [
  { src: "nest", label: "Nest — 캘린더로 매일 기록" },
  { src: "explore", label: "Explore — 공개·근처 탐색" },
  { src: "newlog", label: "New Log — AI 초안 작성" },
  { src: "camera", label: "Camera — 필터·위치 기록" },
  { src: "login", label: "간편 로그인 (Google·Apple)" },
];

function PhoneShot({ src, label, priority }: { src: string; label: string; priority?: boolean }) {
  return (
    <figure className="w-[190px] shrink-0 snap-center sm:w-[210px]">
      <div
        className="relative aspect-[1440/3120] overflow-hidden rounded-[26px] border-[5px] bg-black"
        style={{ borderColor: INK, boxShadow: "0 24px 50px -18px rgba(20,35,28,0.45)" }}
      >
        <Image
          src={`/yogylogy/screenshots/${src}.jpg`}
          alt={`yogylogy ${label} 화면`}
          fill
          sizes="210px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium" style={{ color: SUB }}>
        {label}
      </figcaption>
    </figure>
  );
}

export default function yogylogyLanding() {
  return (
    <div style={{ background: "#F7F8F3", color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* soft glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 78% 12%, rgba(56,193,132,0.20), transparent 60%), radial-gradient(50% 45% at 12% 8%, rgba(25,155,104,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
          <div className="flex items-center justify-center gap-2.5">
            <Image src="/yogylogy/icon.png" alt="yogylogy" width={40} height={40} className="rounded-[11px]" priority />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl font-extrabold tracking-tight">
                yogy<span style={{ color: "#199B68" }}>log</span>y
              </span>
              <span className="mt-1 text-[11px]" style={{ color: SUB }}>
                yogy(요기) + log · 지금 여기를 기록해요
              </span>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            {/* pitch */}
            <div className="text-center lg:text-left">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "#EAF6F0", color: "#199B68" }}
              >
                생활에 녹아 있는 로그앱
              </span>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.15] sm:text-5xl">
                뭐든 기록하세요.
                <br />
                <span style={{ color: "#199B68" }}>생활에 녹아드는 로그.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base lg:mx-0" style={{ color: SUB }}>
                다이어트·운동 기록, 여행·맛집 메모, 가족·친구와의 공유, 관심사 모임과
                정보·공동구매까지 — 하나의 로그앱으로 생활 속 모든 순간을. 찍고 쓰면
                AI가 정리해줘요.
              </p>
              <div className="mx-auto mt-7 max-w-sm lg:mx-0">
                <StoreCta />
                <p className="mt-2.5 text-center text-[12px] lg:text-left" style={{ color: SUB }}>
                  무료 · Android(Play) · iOS(TestFlight) 오픈 베타 진행 중
                </p>
              </div>
            </div>

            {/* visual: illustration + floating real phone */}
            <div className="relative">
              <Image
                src="/yogylogy/generated/hero.webp"
                alt="yogylogy로 하루를 기록하는 모습"
                width={1344}
                height={768}
                priority
                className="w-full"
              />
              <div className="absolute -bottom-2 right-0 w-[34%] max-w-[150px] sm:right-4">
                <div
                  className="relative aspect-[1440/3120] overflow-hidden rounded-[22px] border-[5px] bg-black"
                  style={{ borderColor: INK, boxShadow: "0 26px 50px -16px rgba(20,35,28,0.5)" }}
                >
                  <Image src="/yogylogy/screenshots/nest.jpg" alt="yogylogy Nest 화면" fill sizes="150px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== USE CASES ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">이렇게 쓰면, 매일 열게 됩니다</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: SUB }}>
            혼자의 기록이든, 가까운 사람과의 공유든, 관심사로 모인 커뮤니티든 —
            당신의 용도에 딱 맞게.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <article
              key={u.img}
              className="overflow-hidden rounded-3xl"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E4E9E2",
                boxShadow: "0 18px 44px -26px rgba(20,35,28,0.28)",
              }}
            >
              <Image
                src={`/yogylogy/generated/${u.img}.webp`}
                alt={u.title}
                width={1216}
                height={896}
                className="w-full"
              />
              <div className="p-5 sm:p-6">
                <span
                  className="inline-block rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                  style={{ background: u.accent }}
                >
                  {u.tag}
                </span>
                <h3 className="mt-2.5 text-xl font-extrabold sm:text-[22px]">{u.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: SUB }}>
                  {u.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== REAL SCREENS ===================== */}
      <section style={{ background: "#EFF3ED" }}>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">직접 보세요, 실제 화면</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: SUB }}>
              깔끔한 캘린더, AI 초안, 커뮤니티, 필터 카메라까지 — 매일 쓰고 싶은 앱.
            </p>
          </div>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 sm:justify-center">
            {SHOTS.map((s, i) => (
              <PhoneShot key={s.src} src={s.src} label={s.label} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(56,193,132,0.18), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-3xl font-extrabold sm:text-4xl">오늘부터, 당신의 하루를 남겨보세요</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: SUB }}>
            찍고 쓰면 AI가 정리하고, 원하는 사람과 나누고, 나중에 가장 큰 자산이 됩니다.
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <StoreCta />
            <p className="mt-3 text-[12px]" style={{ color: SUB }}>
              무료 · Android(Play) · iOS(TestFlight) 오픈 베타 진행 중
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 pb-24 pt-8 text-center text-xs sm:pb-8" style={{ borderColor: "#E4E9E2", color: SUB }}>
        © {new Date().getFullYear()} yogylogy · Made by TheNextX
      </footer>

      <StickyCta />
    </div>
  );
}
