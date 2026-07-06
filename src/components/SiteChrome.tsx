"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Renders the shared TheNextX chrome (Navbar/Footer) on all routes EXCEPT
 * the standalone Yogylogy landing (`/yogylogy*`), which has its own branding.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const standalone = pathname?.startsWith("/yogylogy") ?? false;

  return (
    <>
      {!standalone && <Navbar />}
      <main className="flex-1">{children}</main>
      {!standalone && <Footer />}
    </>
  );
}
