import {
  Users,
  Clock3,
  BadgeCheck,
  PauseCircle,
  XCircle,
} from "lucide-react";

interface StatisticsCardsProps {
  partners: any[];
}

export default function StatisticsCards({
  partners,
}: StatisticsCardsProps) {

  const total = partners.length;

  const pending = partners.filter(
    (p) => p.application_status === "Pending"
  ).length;

  const approved = partners.filter(
    (p) => p.application_status === "Approved"
  ).length;

  const hold = partners.filter(
    (p) => p.application_status === "On Hold"
  ).length;

  const rejected = partners.filter(
    (p) => p.application_status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Total Partners",
      value: total,
      icon: Users,
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      bg: "bg-yellow-50",
      text: "text-yellow-700",
    },
    {
      title: "Approved",
      value: approved,
      icon: BadgeCheck,
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      title: "On Hold",
      value: hold,
      icon: PauseCircle,
      bg: "bg-orange-50",
      text: "text-orange-700",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
      bg: "bg-red-50",
      text: "text-red-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <div className={`${item.bg} rounded-xl p-3`}>
                <Icon className={`h-7 w-7 ${item.text}`} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}