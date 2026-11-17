interface InfoRowProps {
  label: string;
  value: React.ReactNode;
}

export default function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-base font-semibold text-slate-900 break-words">
        {value || "-"}
      </p>
    </div>
  );
}