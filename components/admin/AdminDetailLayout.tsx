"use client";

import { ReactNode } from "react";

interface AdminDetailLayoutProps {
  hero: ReactNode;
  children: ReactNode;
}

export default function AdminDetailLayout({
  hero,
  children,
}: AdminDetailLayoutProps) {
  return (
    <main className="flex h-screen flex-col bg-slate-50">

      {/* Hero */}
      <div className="px-8 pt-4 xl:px-10 2xl:px-12">
        {hero}
      </div>

      {/* Content */}
      <div className="mt-5 flex-1 min-h-0">
  <div
    className="
      h-full
      overflow-y-auto
      px-8
      pb-8
      xl:px-10
      2xl:px-12
    "
  >
    {children}
  </div>
</div>

    </main>
  );
}