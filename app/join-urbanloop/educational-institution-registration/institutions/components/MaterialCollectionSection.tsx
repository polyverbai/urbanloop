"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";

import {
  MATERIAL_CATEGORIES,
  MONTHLY_RECYCLABLES,
  PICKUP_FREQUENCIES,
  PICKUP_DAYS,
  PICKUP_TIMES,
} from "./constants";

import type {
  MaterialCollection,
} from "./types";

interface MaterialCollectionSectionProps {
  data: MaterialCollection;
  errors: Record<string, string>;

  onChange: (
    field: keyof MaterialCollection,
    value: string | string[]
  ) => void;
}

export default function MaterialCollectionSection({
  data,
  errors,
  onChange,
}: MaterialCollectionSectionProps) {
  return (
  <SectionCard title="Material Collection & Recycling">

    {/* Material Categories */}

<CheckboxGroup
  label="Material Categories"
  options={MATERIAL_CATEGORIES}
  values={data.materialCategories}
  onChange={(values) =>
    onChange("materialCategories", values)
  }
  required
  error={errors.materialCategories}
/>

{/* Collection Preferences */}

<div className="mt-10">

  <h3 className="text-lg font-semibold text-slate-900">
    Collection Preferences
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Tell us how frequently your recyclable materials need to be collected.
  </p>

</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

  <SelectField
    name="monthlyRecyclables"
    label="Estimated Monthly Recyclables"
    value={data.monthlyRecyclables}
    onChange={(value) =>
      onChange("monthlyRecyclables", value)
    }
    options={MONTHLY_RECYCLABLES}
    required
    error={errors.monthlyRecyclables}
  />

  <SelectField
    name="pickupFrequency"
    label="Collection Frequency"
    value={data.pickupFrequency}
    onChange={(value) =>
      onChange("pickupFrequency", value)
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
      onChange("pickupDay", value)
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
      onChange("pickupTime", value)
    }
    options={PICKUP_TIMES}
    required
    error={errors.pickupTime}
  />

</div>
  </SectionCard>
);
}