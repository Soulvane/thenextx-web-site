# Yogylogy 랜딩 페이지 — 작업 인수인계 (Handoff)

> 이 문서는 다른 챗 세션에서 진행된 기술검토·전략 논의를 옮겨온 것입니다.
> 새 세션은 이 문서를 읽고 이어서 구현하면 됩니다.
> (yogylogy 앱 코드: `/Users/taehyounglee/Project/yogylogy-flutter`, 이 웹사이트: 현재 repo)

## 목표

yogylogy 앱을 마케팅하는 **단일 랜딩 페이지**를 이 사이트에 추가한다.

- **검색 노출용** — 태그/검색어로 이 페이지가 검색에 잡히게 (SEO)
- 방문자가 들어오면 **기기에 맞는 스토어로 유도** (Android→Play, iOS→App Store, 데스크톱→배지+QR)
- **thenextx 사이트와 독립** — 상단 Navbar/Footer 등 thenextx 크롬 없이 자체 브랜딩. 사이트 내비게이션엔 링크하지 않음(검색·직접·QR로만 도달). URL은 `/yogylogy` 유지.

## ⚠️ 확정된 핵심 판단

**"검색 외 접근 차단"은 SEO와 충돌하므로 하지 않는다.**
검색 노출되려면 Google이 크롤·색인해야 하고 → URL은 공개여야 함. referrer로 검색엔진만 통과시키는 방식은 클로킹으로 색인에서 빠짐.
→ "독립"의 의미는 **thenextx 메뉴/크롬에 안 엮인 자체 브랜딩 단독 페이지**이지, 접근 게이팅이 아님. (사용자 확인 완료)

**모든 방문자 즉시 하드 리다이렉트도 하지 않는다.** (얇은 페이지·클로킹으로 SEO 하락, 데스크톱 방문자 못 봄)
→ 페이지는 SSR로 콘텐츠를 제공하고, 리다이렉트는 스마트하게 처리(아래 2-라우트).

## 기술 검토 결과 (현 사이트 현황)

| 항목 | 상태 |
|---|---|
| 프레임워크 | Next.js **16.2.7** (App Router) + React + TypeScript |
| 스타일 | Tailwind CSS **v4** (config-less, `globals.css` 기반) |
| 메타데이터 | Metadata API 사용 중. `src/app/layout.tsx`에 title 템플릿(`%s — TheNextX`), description, 대량 keywords, `openGraph` 존재 |
| i18n | 클라이언트 `src/i18n/LanguageProvider.tsx` (en 기본 + ko), `<T>` 컴포넌트 + `t()` 키. `src/i18n/translations.ts`, `src/i18n/locales/` |
| 공통 UI | `src/components/Navbar.tsx`, `Footer.tsx`, `SectionHeader.tsx`, `T.tsx` |
| 기존 페이지 | `src/app/{page,ai-agents,app-development,services,shopify,contact,team,mailing}` + `api/contact`, `auth/{callback,reset-password}` |
| 도메인 | **thenextx.net** (yogylogy 앱의 auth 콜백도 여기 사용) |
| **SEO 공백** | ❌ `sitemap.ts` / `robots.ts` / `manifest.ts` 없음, `metadataBase` 미설정, per-page OG 이미지 없음 |
| 참고 | `src/app/app-development/page.tsx` 가 Flutter 앱개발 마케팅 페이지 — 톤/구조 참고용. metadata 패턴은 페이지별 `export const metadata` |

**장점:** thenextx.net은 운영 중 도메인이라 도메인 authority 상속 → 색인 빠름. yogylogy 앱 repo의 `store-assets/google-play/screenshots/phone/*.png` 스크린샷 재활용 가능.

## 구현 전략

### 라우트 구조 (2개)
```
/yogylogy          → SEO 랜딩 (SSR, 크롤 가능, 콘텐츠 풍부)   ← 검색 노출
/yogylogy/get      → 순수 리다이렉터 (noindex, UA 기반 302)   ← QR/광고/공유 링크
```
- 크롤러(Googlebot)에는 절대 리다이렉트 금지 → 풀 콘텐츠 제공(클로킹 방지)
- 사람 방문자는 기기에 맞는 스토어로 유도

### thenextx 크롬 제거 방식 — ✅ **결정: ② 조건부 크롬**
- 루트 `app/layout.tsx` 유지. Navbar/Footer를 `usePathname()` 기반 `SiteChrome` 클라이언트 컴포넌트로 감싸 `/yogylogy*` 경로에서 **렌더 안 함**.
- 랜딩 페이지 metadata에 `title: { absolute: "Yogylogy — ..." }`로 "— TheNextX" 접미사 제거, description/openGraph도 yogylogy 전용으로 override.
- **기존 페이지는 전혀 건드리지 않음.** (① 완전분리/라우트그룹 방식은 채택 안 함)

### SEO 극대화 요소
1. **JSON-LD 구조화 데이터** `MobileApplication`/`SoftwareApplication` — 앱명·OS·카테고리·평점·가격·스토어 링크 → 구글 앱 리치 결과 (앱 랜딩 SEO 핵심)
2. **Apple Smart App Banner** (`apple-itunes-app` 메타) — iOS Safari 네이티브 설치 배너
3. 타깃 키워드를 H1/H2 + 본문 + 이미지 alt에 실제 텍스트로 (앱 카테고리 기준 — 일기/기록/위치 다이어리/AI 요약 등)
4. OG/Twitter 카드 + 전용 이미지(앱 스크린샷 재활용)
5. `sitemap.ts` / `robots.ts` 추가 + `/yogylogy` 등록, `metadataBase` 설정(OG 절대 URL)
6. ko/en 이중 언어 (기존 i18n 활용)

### 페이지 콘텐츠 뼈대
히어로(앱명 + 한 줄 가치제안 + 기기별 CTA) → 스크린샷 → 핵심 기능 3~5개 → (선택)FAQ/키워드 리치 섹션 → 스토어 배지/QR 푸터. thenextx 메뉴에는 링크 안 걸음.

## 만들 파일
```
src/app/yogylogy/page.tsx              # SEO 랜딩 (metadata + JSON-LD + 히어로/기능/CTA)
src/app/yogylogy/get/route.ts          # UA 감지 리다이렉터 (noindex)
src/app/yogylogy/opengraph-image.tsx   # OG 이미지 (동적 or 정적)
src/app/sitemap.ts                     # 신규 (전체 페이지 등록)
src/app/robots.ts                      # 신규
src/components/StoreButtons.tsx        # 기기별 스토어 배지/QR
src/components/SiteChrome.tsx          # (②안 선택 시) 크롬 조건부 렌더
src/i18n/... 에 yogylogy 번역 키 추가
public/yogylogy/                       # 스크린샷·배지 자산 (앱 repo에서 복사)
```

## 진행 전 필요한 입력 (사용자에게 받을 것)
1. **크롬 제거 방식 ① vs ②** (추천 ②)
2. **스토어 URL/상태** — ✅ Play 오픈테스팅 확정
   - **Android 설치(상세 페이지)**: `https://play.google.com/store/apps/details?id=com.thenextx.yogylogy` — 테스터 등록 후 설치되는 곳
   - **오픈테스팅 opt-in(테스터 등록)**: `https://play.google.com/apps/testing/com.thenextx.yogylogy` — 신규 방문자는 **여기 먼저** 태워야 함
   - → 랜딩의 Android CTA는 **opt-in 링크(`/apps/testing/...`)를 1차로** 걸고, 정식 출시 시 상세 페이지로 교체. (오픈테스팅은 등록 없이 상세 페이지로 바로 가면 설치 불가)
   - **Apple App Store ID**: `6781422538` (App Store Connect의 "Apple ID"). 상태 **"1.0 제출 준비 중" = 아직 미출시** → 링크가 공개적으로 안 열림.
     - iOS 스토어 URL: `https://apps.apple.com/app/id6781422538`
     - 스마트 배너 메타: `<meta name="apple-itunes-app" content="app-id=6781422538">`
     - → iOS 버튼은 **출시 전엔 "곧 출시(coming soon)" 상태**로, 출시 후 활성화. iOS 번들 ID = `com.thenextx.yogylogy`.
3. **콘텐츠**: ✅ 완료 — 아래 "랜딩 콘텐츠 (앱에서 추출)" 섹션 참고

## 앱 사실관계 (참고)
- 패키지: `com.thenextx.yogylogy`, 현재 버전 1.0.11+14, minSdk 24 ~ targetSdk 36
- 성격: 개인 기록(nest) + 공개/그룹(grove) 공유 소셜, 위치 기반 탐색, AI 요약, YouTube 로그 등
- 앱 태그라인(국문): "나를 위한 기록이 모두를 위한 정보가 되는 곳"
- 스크린샷: 앱 repo `store-assets/google-play/screenshots/phone/{01_login,02_nest,03_explore,04_create_log,05_settings,06_grove}.png`

---

## 랜딩 콘텐츠 (#3 — 앱에서 추출)

> 앱 repo(`yogylogy-flutter`)의 l10n / theme / store-assets 에서 추출·정리. 카피는 검수/윤문 여지 있음.

### 앱명 · 태그라인
- **앱명:** Yogylogy  *(주의: 앱 repo/기존 스토어 README에 옛 이름 "logylogy" 잔재 있음 → 표기 "Yogylogy"로 통일)*
- **태그라인**
  - KO: 나를 위한 기록이 모두를 위한 정보가 되는 곳
  - EN: Where your records become information for everyone
- **히어로 서브카피(짧은 소개)**
  - KO: 매일의 순간을 기록하고, 기억하고, 연결하세요.
  - EN: Capture your day. Remember it. Share what matters.

### 핵심 기능 (5 — 앱 실제 기능 기준)
1. **Nest — 나만의 기록** / *My Nest* : 사진·위치·기분과 함께 일상을 기록하는 개인 공간 (캘린더/홈)
2. **AI 초안 & 요약** / *AI draft & summary* : 사진·위치를 분석해 글쓰기 초안·요약 자동 생성 (YouTube 영상 요약도 지원)
3. **Grove — 커뮤니티 공유** / *Groves* : 관심사로 연결된 그룹에 기록을 공유 (공개/승인/초대 정책)
4. **Explore & 근처 탐색** / *Explore & Nearby* : 공개 기록과 내 주변 장소를 위치 기반으로 발견
5. **On This Day — 추억** / *On This Day* : 과거 같은 날의 기억을 매일 알림으로
   - (부가) 의미 검색(자연어), 스티커·사진 편집, 감정 기록

### 타깃 키워드 (SEO)
- **EN:** journaling app, AI journal, daily diary app, photo journal, location diary, life log app, memory keeping app, private journal, social journaling, mood journal, AI diary, journal with photos
- **KO:** 일기 앱, 기록 앱, AI 일기, 사진 일기, 위치 기록, 라이프로그, 하루 기록, 감정 기록, 추억 저장, 다이어리 앱, AI 다이어리, 기록 공유

### 브랜드
- **메인 컬러(세이지 그린):** 라이트 `#199B68`, 다크(밝은 변형) `#38C184`
- **배경:** 라이트 `#F7F8F3`(웜 오프화이트), 다크 `#111116` / `#0F1411`
- **에러/포인트:** `#FF7667`(coral), 성공 `#4DD38A`
- **폰트:** 앱은 시스템 + Roboto. 웹은 기존 사이트 폰트(Inter)와 통일 무방
- 앱에 선택형 테마 다수 존재(green 기본, pink `#E85D75`, blue `#168AAD`, orange `#F2A51A`) — 랜딩은 **그린 기본**으로

### 재활용 자산 (앱 repo 경로)
- 아이콘: `store-assets/google-play/icon/icon-512x512-actual.png` (또는 `assets/images/icon.png`)
- 피처 그래픽: `store-assets/google-play/feature-graphic/feature-graphic-1024x500.png`
- 폰 스크린샷: `store-assets/google-play/screenshots/phone/{01_login,02_nest,03_explore,04_create_log,05_settings,06_grove}.png`
- → 웹으로 옮길 때 `public/yogylogy/`에 복사, WebP 변환 권장

### 기존 스토어 장문 설명 (참고 — 최신화 필요)
앱 repo `store-assets/google-play/README.md`에 단문/장문 설명 초안 있음. 단, 옛 이름·일부 옛 기능(Moments 등) 표현 섞여 있어 **위 "핵심 기능" 기준으로 갱신** 후 사용.
