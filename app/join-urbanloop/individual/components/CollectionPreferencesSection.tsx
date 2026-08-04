"use client";

import SectionCard from "@/components/forms/SectionCard";
import SelectField from "@/components/forms/SelectField";

import {
  COLLECTION_FREQUENCIES,
  COLLECTION_DAYS,
  COLLECTION_TIME_SLOTS,
  toSelectOptions,
} from "./constants";

interface CollectionPreferencesSectionProps {
  pickupFrequency: string;
  pickupDay: string;
  pickupTime: string;

  errors: Record<string, string>;

  setPickupFrequency: (value: string) => void;
  setPickupDay: (value: string) => void;
  setPickupTime: (value: string) => void;
}

export default function CollectionPreferencesSection({
  pickupFrequency,
  pickupDay,
  pickupTime,
  errors,
  setPickupFrequency,
  setPickupDay,
  setPickupTime,
}: CollectionPreferencesSectionProps) {
  return (
    <SectionCard
      title="Collection Preferences"
    >
      <div className="grid gap-6 md:grid-cols-3">

        <SelectField
          label="Collection Frequency"
          name="pickupFrequency"
          value={pickupFrequency}
          options={toSelectOptions(COLLECTION_FREQUENCIES)}
          onChange={setPickupFrequency}
          required
          placeholder="Select Frequency"
          error={errors.pickupFrequency}
        />

        <SelectField
          label="Preferred Collection Day"
          name="pickupDay"
          value={pickupDay}
          options={toSelectOptions(COLLECTION_DAYS)}
          onChange={setPickupDay}
          required
          placeholder="Select Day"
          error={errors.pickupDay}
        />

        <SelectField
          label="Preferred Collection Time"
          name="pickupTime"
          value={pickupTime}
          options={toSelectOptions(COLLECTION_TIME_SLOTS)}
          onChange={setPickupTime}
          required
          placeholder="Select Time"
          error={errors.pickupTime}
        />

      </div>
    </SectionCard>
  );
}