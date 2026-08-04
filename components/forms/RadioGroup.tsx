"use client";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export default function RadioGroup({
  label,
  options,
  value,
  onChange,
  required = false,
  error,
}: RadioGroupProps) {
  return (
    <div className="space-y-3">

      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      <div
        className={`rounded-lg border p-4 space-y-3 ${
          error
            ? "border-red-500"
            : "border-gray-300"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 text-green-600"
            />

            <span className="text-gray-700">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}