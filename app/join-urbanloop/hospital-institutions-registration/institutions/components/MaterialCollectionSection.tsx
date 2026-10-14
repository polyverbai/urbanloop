"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";

import type { MaterialCollection } from "./types";

interface MaterialCollectionSectionProps {
  data: MaterialCollection;
  errors: Record<string, string>;
  onChange: (
    field: keyof MaterialCollection,
    value: string | string[]
  ) => void;

  className?: string;
}

const MATERIAL_CATEGORIES = [
  {
    value: "Paper & Cardboard",
    label: "Paper & Cardboard",
  },
  {
    value: "Plastic Packaging",
    label: "Plastic Packaging",
  },
  {
    value: "Metal",
    label: "Metal",
  },
  {
    value: "Glass",
    label: "Glass",
  },
  {
    value: "E-Waste",
    label: "E-Waste",
  },
  {
    value: "Office Equipment",
    label: "Office Equipment",
  },
  {
    value: "Furniture",
    label: "Furniture",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const PICKUP_FREQUENCIES = [
  {
    value: "Daily",
    label: "Daily",
  },
  {
    value: "Weekly",
    label: "Weekly",
  },
  {
    value: "Bi-Weekly",
    label: "Bi-Weekly",
  },
  {
    value: "Monthly",
    label: "Monthly",
  },
  {
    value: "One-Time",
    label: "One-Time",
  },
];

const PICKUP_DAYS = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

const PICKUP_TIMES = [
  {
    value: "Morning",
    label: "Morning",
  },
  {
    value: "Afternoon",
    label: "Afternoon",
  },
  {
    value: "Evening",
    label: "Evening",
  },
];

export default function MaterialCollectionSection({
  data,
  errors,
  onChange,
  className,
}: MaterialCollectionSectionProps) {
  return (
    <SectionCard
  title="Material Collection & Recycling"
  className={className}
>
      <div className="space-y-8">
        {/* Material Categories */}
        <CheckboxGroup
          label="Material Categories"
          options={MATERIAL_CATEGORIES}
          values={data.materialCategories}
          onChange={(values) =>
            onChange(
              "materialCategories",
              values
            )
          }
          required
          error={errors.materialCategories}
        />

        {/* Collection Preferences */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900">
            Collection Preferences
          </h3>

          <p className="mb-6 text-sm text-slate-600">
            Tell us how frequently your recyclable
            materials need to be collected.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SelectField
              name="pickupFrequency"
              label="Collection Frequency"
              value={data.pickupFrequency}
              onChange={(value) =>
                onChange(
                  "pickupFrequency",
                  value
                )
              }
              options={PICKUP_FREQUENCIES}
              required
              error={errors.pickupFrequency}
            />

            <SelectField
              name="pickupDay"
              label="Preferred Collection Day"
              value={data.pickupDay}
              onChange={(value) =>
                onChange(
                  "pickupDay",
                  value
                )
              }
              options={PICKUP_DAYS}
              required
              error={errors.pickupDay}
            />

            <SelectField
              name="pickupTime"
              label="Preferred Collection Time"
              value={data.pickupTime}
              onChange={(value) =>
                onChange(
                  "pickupTime",
                  value
                )
              }
              options={PICKUP_TIMES}
              required
              error={errors.pickupTime}
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}