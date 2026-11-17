import { ReactNode } from "react";

interface AdminCardProps {
  title: string;
  children: ReactNode;
}

export default function AdminCard({
  title,
  children,
}: AdminCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-xl font-bold text-slate-900">
        {title}
      </h2>

      {children}

    </section>
  );
}