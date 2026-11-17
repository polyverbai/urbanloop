interface TagListProps {
  label: string;
  values?: string[] | null;
}

export default function TagList({
  label,
  values,
}: TagListProps) {
  return (
    <div>
      <h4 className="mb-3 font-semibold text-slate-700">
        {label}
      </h4>

      {values && values.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {values.map((value) => (
            <span
              key={value}
              className="
                rounded-full
                bg-[#E8F5DD]
                px-3
                py-1
                text-sm
                font-medium
                text-[#3C7A1E]
              "
            >
              {value}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">
          Not Available
        </p>
      )}
    </div>
  );
}