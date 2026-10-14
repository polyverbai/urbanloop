import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
  className={`bg-white p-8 border-b border-gray-200 last:border-b-0 ${className}`}
>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}