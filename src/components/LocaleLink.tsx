"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { isLocale } from "@/i18n/translations";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Drop-in replacement for next/link that automatically prefixes internal
 * paths with the active locale (`/contact` -> `/ko/contact`). External URLs,
 * anchors, and already-localized paths pass through untouched.
 */
export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { locale } = useI18n();

  let target = href;
  if (href.startsWith("/")) {
    const firstSegment = href.split("/")[1] ?? "";
    if (!isLocale(firstSegment)) {
      target = href === "/" ? `/${locale}` : `/${locale}${href}`;
    }
  }

  return <Link href={target} {...props} />;
}
