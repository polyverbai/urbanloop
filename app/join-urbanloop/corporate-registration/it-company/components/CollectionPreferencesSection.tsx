"use client";

import SectionCard from "@/components/forms/SectionCard";
import SelectField from "@/components/forms/SelectField";

import {
  MONTHLY_RECYCLABLES,
  PICKUP_FREQUENCIES,
  PICKUP_DAYS,
  PICKUP_TIMES,
  toSelectOptions,
} from "./constants";

interface CollectionPreferencesSectionProps {
  monthlyRecyclables: string;
  pickupFrequency: string;
  pickupDay: string;
  pickupTime: string;

  errors: Record<string, string>;

  setMonthlyRecyclables: (value: string) => void;
  setPickupFrequency: (value: string) => void;
  setPickupDay: (value: string) => void;
  setPickupTime: (value: string) => void;
}

export default function CollectionPreferencesSection({
  monthlyRecyclables,
  pickupFrequency,
  pickupDay,
  pickupTime,
  errors,
  setMonthlyRecyclables,
  setPickupFrequency,
  setPickupDay,
  setPickupTime,
}: CollectionPreferencesSectionProps) {
  return (
    <SectionCard
      title="Collection Preferences"
      description="Tell us how frequently your recyclable materials need to be collected."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
          label="Estimated Monthly Recyclables"
          name="monthlyRecyclables"
          value={monthlyRecyclables}
          options={toSelectOptions(MONTHLY_RECYCLABLES)}
          onChange={setMonthlyRecyclables}
          required
          error={errors.monthlyRecyclables}
        />

        <SelectField
          label="Pickup Frequency"
          name="pickupFrequency"
          value={pickupFrequency}
          options={toSelectOptions(PICKUP_FREQUENCIES)}
          onChange={setPickupFrequency}
          required
          error={errors.pickupFrequency}
        />

        <SelectField
          label="Preferred Pickup Day"
          name="pickupDay"
          value={pickupDay}
          options={toSelectOptions(PICKUP_DAYS)}
          onChange={setPickupDay}
          required
          error={errors.pickupDay}
        />

        <SelectField
          label="Preferred Pickup Time"
          name="pickupTime"
          value={pickupTime}
          options={toSelectOptions(PICKUP_TIMES)}

          onChange={setPickupTime}
          required
          error={errors.pickupTime}
        />

      </div>
    </SectionCard>
  );
}