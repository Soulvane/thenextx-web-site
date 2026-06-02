"use client";

import { useEffect, useRef, useState } from "react";

type Locale = "en" | "ko";

const STORAGE_KEY = "tnx-locale";
let isApplyingLocale = false;

const ko: Record<string, string> = {
  Home: "홈",
  Services: "서비스",
  "AI Agents": "AI 에이전트",
  Shopify: "쇼피파이",
  "App Dev": "앱 개발",
  Mailing: "메일링",
  Contact: "문의",
  "Get Started": "시작하기",
  "Start a Project": "프로젝트 시작",
  "Explore Services": "서비스 보기",
  "The Agent Workforce Is Here": "AI 에이전트 워크포스 시대",
  "Scale Your Business with": "비즈니스를 확장하세요",
  "Human + AI Power": "사람과 AI의 힘으로",
  "TheNextX blends elite human expertise with cutting-edge AI agents to deliver Shopify stores, mobile apps, direct mail campaigns, and automation workflows — faster than you thought possible.":
    "TheNextX는 전문 인력과 AI 에이전트를 결합해 쇼피파이 스토어, 모바일 앱, 다이렉트 메일 캠페인, 자동화 워크플로를 더 빠르게 실행합니다.",
  "AI-First Approach": "AI 우선 접근",
  "7 Core Services": "7개 핵심 서비스",
  "Global Clients": "글로벌 클라이언트",
  "Rapid Delivery": "빠른 실행",
  "Operating board": "운영 보드",
  "Human + AI delivery system": "사람 + AI 실행 시스템",
  "Live model": "운영 모델",
  "service lanes": "서비스 라인",
  "scope response": "스코프 응답",
  "faster cycles": "빠른 사이클",
  Lanes: "실행 라인",
  "AI agent ops": "AI 에이전트 운영",
  "Shopify / B2B": "쇼피파이 / B2B",
  "Flutter apps": "플러터 앱",
  "Mailing campaigns": "메일링 캠페인",
  "Workflow automation": "워크플로 자동화",
  "Delivery rhythm": "실행 리듬",
  "Map the workflow and success metric": "워크플로와 성공 지표 정의",
  "Build the smallest useful production slice": "바로 쓸 수 있는 최소 단위 구축",
  "Demo, measure, iterate, and hand off": "데모, 측정, 반복, 인수인계",
  "What We Do": "제공 서비스",
  "Everything your business needs": "비즈니스에 필요한 모든 실행",
  "to grow": "성장을 위해",
  "Seven core services, one integrated team. We handle execution so you can focus on strategy.":
    "7개 핵심 서비스를 하나의 팀으로 통합해 실행합니다. 전략에 집중할 수 있도록 구축과 운영을 맡습니다.",
  Strategy: "전략",
  "Discovery + scope": "디스커버리 + 범위 정의",
  Build: "구축",
  "Weekly production slices": "주간 단위 프로덕션 실행",
  Launch: "런칭",
  "Docs, handoff, support": "문서화, 인수인계, 지원",
  "View all services": "전체 서비스 보기",
  "Why TheNextX": "왜 TheNextX인가",
  "The operating model that": "차이를 만드는",
  "sets us apart": "운영 모델",
  "We don't just deliver features. We deliver outcomes — through a methodology built for the AI era.":
    "기능만 납품하지 않습니다. AI 시대에 맞는 실행 방식으로 결과를 만듭니다.",
  "Speed Without Compromise": "품질을 지키는 속도",
  "Embedded Expertise": "내재된 전문성",
  "Iterative & Transparent": "반복적이고 투명한 진행",
  "Built to Scale": "확장 가능한 설계",
  "Ready to activate your": "AI 운영팀을",
  "agent workforce?": "활성화할 준비가 되셨나요?",
  "Tell us about your project. We'll reply with a clear plan, timeline, and pricing within 24 hours.":
    "프로젝트를 알려주시면 24시간 내에 명확한 계획, 일정, 견적을 전달드립니다.",
  "Get in Touch": "문의하기",
  "Browse Services": "서비스 둘러보기",
  "AI Agent Operations": "AI 에이전트 운영",
  "Shopify Development": "쇼피파이 개발",
  "Shopify B2B": "쇼피파이 B2B",
  "Flutter App Development": "플러터 앱 개발",
  "Mailing Campaign Operations": "메일링 캠페인 운영",
  "PDF to HTML Conversion": "PDF to HTML 변환",
  "Business Workflow Automation": "비즈니스 워크플로 자동화",
  "Learn more": "자세히 보기",
  Automation: "자동화",
  Ops: "운영",
  eCommerce: "이커머스",
  "Custom Dev": "맞춤 개발",
  Enterprise: "엔터프라이즈",
  Wholesale: "도매",
  Flutter: "플러터",
  Android: "안드로이드",
  Postcards: "엽서",
  "Direct Mail": "다이렉트 메일",
  Print: "인쇄",
  Conversion: "변환",
  Web: "웹",
  Workflow: "워크플로",
  Integration: "연동",
  "All Services": "전체 서비스",
  "Seven services.": "7개 서비스.",
  "One team.": "하나의 팀.",
  "How We Work": "일하는 방식",
  "A process built for": "명확성과 속도를 위한",
  "clarity and speed": "프로세스",
  Discovery: "디스커버리",
  Scoping: "스코핑",
  Handoff: "인수인계",
  "Not sure which service you need?": "어떤 서비스가 필요한지 모르겠나요?",
  "Talk to Us": "상담하기",
  "Start your project with": "프로젝트를 시작하세요",
  TheNextX: "TheNextX",
  "Fill out the form and we'll respond within 24 hours with a clear plan and next steps.":
    "폼을 작성해주시면 24시간 내에 명확한 계획과 다음 단계를 안내드립니다.",
  "What to expect": "진행 방식",
  "Response in 24 hours": "24시간 내 응답",
  "Detailed proposal": "상세 제안",
  "NDA available": "NDA 가능",
  "Direct contact": "직접 연락",
  "Full name": "이름",
  "Email address": "이메일",
  "Company / Brand": "회사 / 브랜드",
  "Service needed": "필요한 서비스",
  "Budget range": "예산 범위",
  "Tell us about your project": "프로젝트 설명",
  "Send Message": "메시지 보내기",
  "Sending...": "전송 중...",
  "Message received!": "메시지를 받았습니다!",
  "We'll be in touch within 24 hours with a detailed response. Check your inbox.":
    "24시간 내에 자세한 답변을 드리겠습니다. 이메일을 확인해주세요.",
  "We respond within 24 hours at info@thenextx.net. No spam, ever.":
    "info@thenextx.net으로 24시간 내에 답변드립니다. 스팸은 보내지 않습니다.",
  "Select a service": "서비스 선택",
  "Select budget": "예산 선택",
  "Other / Not sure": "기타 / 잘 모르겠음",
  "Under $5,000": "$5,000 미만",
  "$5,000 – $15,000": "$5,000 – $15,000",
  "$15,000 – $50,000": "$15,000 – $50,000",
  "$50,000+": "$50,000 이상",
  "Ongoing retainer": "월간 리테이너",
  "Jane Smith": "홍길동",
  "jane@company.com": "name@company.com",
  "Acme Inc.": "회사명",
  "Describe your goals, current setup, and any specific requirements...":
    "목표, 현재 상황, 필요한 요구사항을 적어주세요...",
  "Your business runs": "비즈니스가",
  "24/7 on autopilot": "24시간 자동으로 운영됩니다",
  "Deploy Your First Agent": "첫 에이전트 도입",
  "Shopify Development & B2B": "쇼피파이 개발 & B2B",
  "Shopify stores that": "전환과 확장이 가능한",
  "convert and scale": "쇼피파이 스토어",
  "Start Your Shopify Project": "쇼피파이 프로젝트 시작",
  "Full-cycle DTC": "DTC 전체 구축",
  "store development": "스토어 개발",
  "Enterprise wholesale &": "엔터프라이즈 도매와",
  "B2B storefronts": "B2B 스토어",
  "Get a Proposal": "제안 받기",
  "Beautiful apps on": "아름다운 앱을",
  "iOS and Android": "iOS와 Android에",
  "Start Your App": "앱 시작하기",
  Deliverables: "산출물",
  "Everything you get": "인수인계 시",
  "at handoff": "받는 것",
  "Discuss Your App": "앱 상담하기",
  "Direct Mail & Offline Marketing": "다이렉트 메일 & 오프라인 마케팅",
  "Offline mail that": "실제 성과를 만드는",
  "drives real results": "오프라인 메일",
  "Start a Mail Campaign": "메일 캠페인 시작",
  "Get a Campaign Plan": "캠페인 계획 받기",
  "Technologies we work with": "사용 기술",
  "Mail formats we produce": "제작 가능한 메일 형식",
  "All rights reserved.": "All rights reserved.",
  "Powered by Human + AI Collaboration": "Human + AI Collaboration 기반",
};

function translateText(original: string, locale: Locale) {
  if (locale === "en") return original;
  return ko[original] ?? original;
}

function applyLocale(locale: Locale) {
  if (isApplyingLocale) return;
  isApplyingLocale = true;
  try {
    document.documentElement.lang = locale;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.textContent?.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });

    while (walker.nextNode()) {
      const node = walker.currentNode as Text & { __tnxOriginal?: string };
      node.__tnxOriginal ??= node.textContent ?? "";
      const original = node.__tnxOriginal;
      const trimmed = original.trim();
      const translated = translateText(trimmed, locale);
      node.textContent = original.replace(trimmed, translated);
    }

    document
      .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input[placeholder], textarea[placeholder]"
      )
      .forEach((element) => {
        element.dataset.tnxOriginalPlaceholder ??= element.placeholder;
        element.placeholder = translateText(
          element.dataset.tnxOriginalPlaceholder,
          locale
        );
      });

    document.querySelectorAll<HTMLElement>("[aria-label]").forEach((element) => {
      element.dataset.tnxOriginalAriaLabel ??=
        element.getAttribute("aria-label") ?? "";
      element.setAttribute(
        "aria-label",
        translateText(element.dataset.tnxOriginalAriaLabel, locale)
      );
    });
  } finally {
    isApplyingLocale = false;
  }
}

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem(STORAGE_KEY) === "ko" ? "ko" : "en";
  });
  const localeRef = useRef<Locale>("en");

  useEffect(() => {
    localeRef.current = locale;
    applyLocale(locale);

    const observer = new MutationObserver(() => applyLocale(localeRef.current));
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [locale]);

  function changeLocale(nextLocale: Locale) {
    localeRef.current = nextLocale;
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    applyLocale(nextLocale);
  }

  return (
    <div
      data-no-translate
      className="flex items-center rounded-lg border p-0.5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      aria-label="Language selector"
    >
      {(["en", "ko"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => changeLocale(item)}
          className="rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors"
          style={{
            background: locale === item ? "var(--foreground)" : "transparent",
            color: locale === item ? "#ffffff" : "var(--secondary-foreground)",
          }}
          aria-pressed={locale === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
