interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  let className = "bg-slate-100 text-slate-700";

  switch (status) {
    case "Approved":
      className = "bg-green-100 text-green-700";
      break;

    case "Pending":
      className = "bg-yellow-100 text-yellow-700";
      break;

    case "On Hold":
      className = "bg-orange-100 text-orange-700";
      break;

    case "Rejected":
      className = "bg-red-100 text-red-700";
      break;

    default:
      className = "bg-slate-100 text-slate-700";
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${className}`}
    >
      {status}
    </span>
  );
}