"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function T({
  children,
  value,
}: {
  children?: string;
  value?: string;
}) {
  const { t } = useI18n();
  return <>{t(value ?? children ?? "")}</>;
}
