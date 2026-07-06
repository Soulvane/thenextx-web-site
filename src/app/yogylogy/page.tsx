import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import StoreCta, { PLAY_DETAILS } from "@/components/yogylogy/StoreCta";
import StickyCta from "@/components/yogylogy/StickyCta";
import { COPY, META, KEYWORDS, getLocale, type Lang } from "./dictionary";

const BASE = "https://thenextx.net";
const INK = "#14231C";
const SUB = "#5B6B61";

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLocale((await headers()).get("accept-language"));
  const m = META[lang];
  return {
    metadataBase: new URL(BASE),
    title: { absolute: m.title },
    description: m.desc,
    keywords: KEYWORDS,
    alternates: { canonical: "/yogylogy" },
    openGraph: {
      type: "website",
      url: `${BASE}/yogylogy`,
      siteName: "yogylogy",
      title: m.title,
      description: m.desc,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      images: [{ url: "/yogylogy/generated/hero.webp", width: 1344, height: 768, alt: "yogylogy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.desc,
      images: ["/yogylogy/generated/hero.webp"],
    },
    robots: { index: true, follow: true },
    other: { "apple-itunes-app": "app-id=6781422538" },
  };
}

// 이미지·색상(언어 무관) — 텍스트는 dictionary 에서
const UC = [
  { img: "style-ba", accent: "#199B68", labeled: true },
  { img: "usecase-family", accent: "#2E7FB8", labeled: false },
  { img: "usecase-grove", accent: "#168AAD", labeled: false },
  { img: "usecase-deals", accent: "#C0567A", labeled: false },
] as const;

const SHOT_SRC = ["nest", "explore", "newlog", "camera", "login"] as const;

function jsonLdFor(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "yogylogy",
    operatingSystem: "ANDROID, IOS",
    applicationCategory: "LifestyleApplication",
    description: META[lang].desc,
    url: `${BASE}/yogylogy`,
    image: `${BASE}/yogylogy/icon.png`,
    downloadUrl: PLAY_DETAILS,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    inLanguage: ["ko", "en"],
    featureList: COPY[lang].useCases.map((u) => `${u.title} — ${u.body}`),
    screenshot: SHOT_SRC.map((s) => `${BASE}/yogylogy/screenshots/${s}.jpg`),
  };
}

function PhoneShot({ src, label, priority }: { src: string; label: string; priority?: boolean }) {
  return (
    <figure className="w-[190px] shrink-0 snap-center sm:w-[210px]">
      <div
        className="relative aspect-[1440/3120] overflow-hidden rounded-[26px] border-[5px] bg-black"
        style={{ borderColor: INK, boxShadow: "0 24px 50px -18px rgba(20,35,28,0.45)" }}
      >
        <Image
          src={`/yogylogy/screenshots/${src}.jpg`}
          alt={`${label} — yogylogy`}
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

export default async function YogylogyLanding() {
  const lang = getLocale((await headers()).get("accept-language"));
  const t = COPY[lang];

  return (
    <div lang={lang} style={{ background: "#F7F8F3", color: INK }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(lang)) }}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
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
                {t.nameMeaning}
              </span>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            <div className="text-center lg:text-left">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "#EAF6F0", color: "#199B68" }}
              >
                {t.eyebrow}
              </span>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.15] sm:text-5xl">
                {t.h1a}
                <br />
                <span style={{ color: "#199B68" }}>{t.h1b}</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base lg:mx-0" style={{ color: SUB }}>
                {t.sub}
              </p>
              <div className="mx-auto mt-7 max-w-sm lg:mx-0">
                <StoreCta lang={lang} />
                <p className="mt-2.5 text-center text-[12px] lg:text-left" style={{ color: SUB }}>
                  {t.trust}
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/yogylogy/generated/hero.webp"
                alt="yogylogy"
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
                  <Image src="/yogylogy/screenshots/nest.jpg" alt="yogylogy Nest" fill sizes="150px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== USE CASES ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">{t.ucTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: SUB }}>
            {t.ucSub}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {UC.map((m, i) => {
            const c = t.useCases[i];
            return (
              <article
                key={m.img}
                className="overflow-hidden rounded-3xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E4E9E2",
                  boxShadow: "0 18px 44px -26px rgba(20,35,28,0.28)",
                }}
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={`/yogylogy/generated/${m.img}.webp`}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 560px"
                    className="object-cover"
                  />
                  {m.labeled && (
                    <>
                      <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                        {t.beforeAfter[0]}
                      </span>
                      <span
                        className="absolute bottom-2.5 right-2.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm"
                        style={{ background: m.accent }}
                      >
                        {t.beforeAfter[1]}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <span
                    className="inline-block rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                    style={{ background: m.accent }}
                  >
                    {c.tag}
                  </span>
                  <h3 className="mt-2.5 text-xl font-extrabold sm:text-[22px]">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: SUB }}>
                    {c.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===================== REAL SCREENS ===================== */}
      <section style={{ background: "#EFF3ED" }}>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{t.realTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: SUB }}>
              {t.realSub}
            </p>
          </div>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 sm:justify-center">
            {SHOT_SRC.map((src, i) => (
              <PhoneShot key={src} src={src} label={t.shots[i]} priority={i === 0} />
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
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: SUB }}>
            {t.finalSub}
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <StoreCta lang={lang} />
            <p className="mt-3 text-[12px]" style={{ color: SUB }}>
              {t.trust}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 pb-24 pt-8 text-center text-xs sm:pb-8" style={{ borderColor: "#E4E9E2", color: SUB }}>
        © {new Date().getFullYear()} yogylogy · {t.footer}
      </footer>

      <StickyCta lang={lang} />
    </div>
  );
}
