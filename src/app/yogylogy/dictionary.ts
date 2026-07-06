// ============================================================
// yogylogy 랜딩 전용 다국어 사전 (ko / en)
// - 이 파일에서만 문구를 관리합니다. (page.tsx 는 키만 사용)
// - 언어 추가 시 Lang 유니온 + COPY/META 에 항목만 추가하면 됩니다.
// ============================================================

export type Lang = "ko" | "en";

/** Accept-Language 헤더로 로케일 판별 (ko 아니면 en) */
export function getLocale(acceptLanguage: string | null | undefined): Lang {
  const first = (acceptLanguage ?? "").split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("ko") ? "ko" : "en";
}

/** SEO 키워드 — 언어 무관하게 항상 노출(숨은 태그). 한/영 모두 포함해 검색 커버리지 확보. */
export const KEYWORDS: string[] = [
  // 핵심 (검색량 높은 '기록' 중심)
  "기록 앱", "일상 기록 앱", "AI 기록 앱", "메모 앱", "사진 기록 앱", "하루 기록",
  "다이어트 기록 앱", "운동 기록 앱", "습관 기록 앱", "감정 기록", "위치 기록",
  "여행 기록 앱", "맛집 기록", "가족 공유 앱", "사진 공유 앱",
  "소모임 앱", "취미 커뮤니티", "공동구매", "쿠폰 공유", "정보 공유 커뮤니티",
  "캘린더 기록", "포토 로그", "라이프로그", "로그앱",
  // 보조 (일기/다이어리 계열 — 검색 유입용)
  "일기 앱", "AI 일기", "다이어리 앱", "포토 다이어리", "추억 저장",
  // 영문
  "journaling app", "AI journal", "AI diary", "daily diary app", "photo journal",
  "life log app", "diet tracker", "workout journal", "habit tracker",
  "memory keeping app", "private journal", "social journaling", "group sharing app",
  "coupon sharing", "group buy community",
];

/** <title> / meta description (로케일별) */
export const META: Record<Lang, { title: string; desc: string }> = {
  ko: {
    title: "yogylogy — 뭐든 남기는 일상 기록 앱 · 다이어트·여행·공유",
    desc:
      "찍고 쓰면 AI가 정리하는 일상 기록 앱. 다이어트·운동 기록, 여행·맛집 메모, 사진 공유, 관심사 모임과 정보·쿠폰·공동구매까지 — 기록이 정보가 되는 yogylogy.",
  },
  en: {
    title: "yogylogy — the everyday logging app for anything",
    desc:
      "A daily logging app that organizes itself with AI. Diet & workout logs, travel notes, photo sharing, interest communities and group buys — where your records become information.",
  },
};

export type UseCaseText = { tag: string; title: string; body: string };

export type Copy = {
  eyebrow: string;
  nameMeaning: string;
  h1a: string;
  h1b: string;
  sub: string;
  ctaHint: string;
  trust: string;
  ucTitle: string;
  ucSub: string;
  useCases: [UseCaseText, UseCaseText, UseCaseText, UseCaseText];
  beforeAfter: [string, string];
  realTitle: string;
  realSub: string;
  shots: [string, string, string, string, string];
  finalTitle: string;
  finalSub: string;
  footer: string;
  cta: {
    play: string;
    playBadge: string;
    ios: string;
    iosBadge: string;
    stickyTitle: string;
    stickySub: string;
    stickyGet: string;
  };
};

export const COPY: Record<Lang, Copy> = {
  ko: {
    eyebrow: "생활에 녹아 있는 로그앱",
    nameMeaning: "yogy(요기) + log · 지금 여기를 기록해요",
    h1a: "뭐든 기록하세요.",
    h1b: "생활에 녹아드는 로그.",
    sub: "다이어트·운동 기록, 여행·맛집 메모, 가족·친구와의 공유, 관심사 모임과 정보·공동구매까지 — 하나의 로그앱으로 생활 속 모든 순간을. 찍고 쓰면 나머지는 AI가 알아서 해줘요.",
    ctaHint: "지금 무료로 시작하기",
    trust: "무료 · Android(Play) · iOS(TestFlight) 오픈 베타 진행 중",
    ucTitle: "이렇게 쓰면, 매일 열게 됩니다",
    ucSub: "혼자의 기록이든, 가까운 사람과의 공유든, 관심사로 모인 커뮤니티든 — 당신의 용도에 딱 맞게.",
    useCases: [
      {
        tag: "다이어트 · 스타일 · 습관",
        title: "어제와 오늘이, 눈에 보이게",
        body: "다이어트·스타일·습관을 매일 남기면 날짜별로 확인할 수 있어요. 쌓인 기록으로 ‘이렇게 달라졌네’ 하는 변화가 한눈에 보여요.",
      },
      {
        tag: "가족 · 친구 · 프라이빗",
        title: "우리끼리만, 소중하게",
        body: "공개 범위를 골라 가까운 사람과만. 흘러가 사라지지 않고 우리 앨범처럼 쌓여요. 위치 노출도 끌 수 있어요.",
      },
      {
        tag: "관심사 Grove",
        title: "같은 취향끼리, 오래 남게",
        body: "관심사로 Grove를 만들면 모임의 기록이 함께 쌓이는 아카이브가 돼요. 대화는 사라져도 기록은 남죠.",
      },
      {
        tag: "정보 · 쿠폰 · 공동구매",
        title: "필요한 정보, 함께 나눠 이득",
        body: "정보·쿠폰·공동구매를 Grove에서 함께. 흩어진 딜을 한 곳에 모아 같이 사면 더 저렴하게.",
      },
    ],
    beforeAfter: ["Before", "After"],
    realTitle: "직접 보세요, 실제 화면",
    realSub: "깔끔한 캘린더, AI 초안, 커뮤니티, 필터 카메라까지 — 매일 쓰고 싶은 앱.",
    shots: [
      "Nest — 캘린더로 매일 기록",
      "Explore — 공개·근처 탐색",
      "New Log — AI 초안 작성",
      "Camera — 필터·위치 기록",
      "간편 로그인 (Google·Apple)",
    ],
    finalTitle: "오늘부터, 당신의 하루를 남겨보세요",
    finalSub: "찍고 쓰면 AI가 정리하고, 원하는 사람과 나누고, 나중에 가장 큰 자산이 됩니다.",
    footer: "Made by TheNextX",
    cta: {
      play: "Google Play",
      playBadge: "테스터 참여",
      ios: "TestFlight",
      iosBadge: "iOS 베타",
      stickyTitle: "yogylogy 시작하기",
      stickySub: "무료 · Android · iOS 오픈 베타",
      stickyGet: "무료로 시작",
    },
  },
  en: {
    eyebrow: "A log app woven into your life",
    nameMeaning: "yogy (here) + log · log your here & now",
    h1a: "Log anything.",
    h1b: "It blends into your life.",
    sub: "Track diet and workouts, note trips and meals, share privately with family and friends, join interest groups and group buys — all in one app. Just snap and jot; AI does the rest.",
    ctaHint: "Start free now",
    trust: "Free · Android (Play) · iOS (TestFlight) open beta",
    ucTitle: "Made to open every day",
    ucSub: "Whether it’s just for you, shared with close ones, or a community around a shared interest — it fits your use.",
    useCases: [
      {
        tag: "Diet · Style · Habits",
        title: "See yesterday vs today",
        body: "Log your diet, style and habits daily and check them by date. Your entries add up, so the change is easy to see at a glance.",
      },
      {
        tag: "Family · Friends · Private",
        title: "Just us, kept close",
        body: "Pick who can see it and share only with close ones. It doesn’t scroll away — it stacks up like your own album. You can hide your location too.",
      },
      {
        tag: "Interest Groves",
        title: "Same taste, kept for good",
        body: "Start a Grove around an interest and everyone’s logs become a shared archive. Chats fade — records stay.",
      },
      {
        tag: "Info · Coupons · Group buys",
        title: "Share useful info, save together",
        body: "Share info, coupons and group buys in a Grove. Gather scattered deals in one place and buy together for less.",
      },
    ],
    beforeAfter: ["Before", "After"],
    realTitle: "See the real app",
    realSub: "A clean calendar, AI drafts, communities and a filter camera — an app you’ll want to open daily.",
    shots: [
      "Nest — daily log calendar",
      "Explore — public & nearby",
      "New Log — AI draft",
      "Camera — filters & location",
      "Easy sign-in (Google·Apple)",
    ],
    finalTitle: "Start capturing your day today",
    finalSub: "Snap and jot, let AI organize, share with who you choose — it becomes your greatest asset.",
    footer: "Made by TheNextX",
    cta: {
      play: "Google Play",
      playBadge: "Join beta",
      ios: "TestFlight",
      iosBadge: "iOS beta",
      stickyTitle: "Get yogylogy",
      stickySub: "Free · Android · iOS open beta",
      stickyGet: "Get it free",
    },
  },
};
