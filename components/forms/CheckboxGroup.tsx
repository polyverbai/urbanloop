"use client";

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (
  values: string[],
  clickedValue?: string
) => void;
  required?: boolean;
  error?: string;
}

export default function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  required = false,
  error,
}: CheckboxGroupProps) {
  const toggleValue = (value: string) => {
  if (values.includes(value)) {
    onChange(
      values.filter((item) => item !== value),
      value
    );
  } else {
    onChange(
      [...values, value],
      value
    );
  }
};

  return (
    <div className="space-y-3">

      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-3 rounded-lg border p-4
        ${
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
              type="checkbox"
              checked={values.includes(option.value)}
              onChange={() => toggleValue(option.value)}
              className="h-4 w-4 text-green-600 rounded"
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