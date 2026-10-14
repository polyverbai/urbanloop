"use client";

interface RadioOption {
  label: string;
  value: string;
}

import { ReactNode } from "react";

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;

  children?: ReactNode;
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

      <div
  className={`space-y-3 ${
    error ? "" : ""
  }`}
>

  <div className="flex flex-col gap-3">

    <label className="text-sm font-semibold text-gray-700">
      {label}
      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>

    <div className="flex items-center gap-8">

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

  </div>

</div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}