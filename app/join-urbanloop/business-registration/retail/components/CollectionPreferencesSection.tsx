"use client";

import SectionCard from "@/components/forms/SectionCard";
import SelectField from "@/components/forms/SelectField";

const COLLECTION_FREQUENCY = [
  { label: "Weekly", value: "Weekly" },
  { label: "Fortnightly", value: "Fortnightly" },
  { label: "Monthly", value: "Monthly" },
  { label: "On Demand", value: "On Demand" },
];

const COLLECTION_DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
  { label: "Any Day", value: "Any Day" },
];

const COLLECTION_TIME = [
  { label: "8:00 AM - 10:00 AM", value: "8:00 AM - 10:00 AM" },
  { label: "10:00 AM - 12:00 PM", value: "10:00 AM - 12:00 PM" },
  { label: "12:00 PM - 2:00 PM", value: "12:00 PM - 2:00 PM" },
  { label: "2:00 PM - 4:00 PM", value: "2:00 PM - 4:00 PM" },
  { label: "4:00 PM - 6:00 PM", value: "4:00 PM - 6:00 PM" },
  { label: "Any Time", value: "Any Time" },
];

interface CollectionPreferencesSectionProps {
  collectionFrequency: string;
  collectionDay: string;
  collectionTime: string;

  errors: Record<string, string>;

  setCollectionFrequency: (value: string) => void;
  setCollectionDay: (value: string) => void;
  setCollectionTime: (value: string) => void;
}

export default function CollectionPreferencesSection({
  collectionFrequency,
  collectionDay,
  collectionTime,
  errors,
  setCollectionFrequency,
  setCollectionDay,
  setCollectionTime,
}: CollectionPreferencesSectionProps) {
  return (
    <SectionCard
      title="Collection Preferences"
      description="Tell us when you prefer UrbanLoop to collect recyclable materials."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <SelectField
          label="Collection Frequency"
          name="collectionFrequency"
          value={collectionFrequency}
          options={COLLECTION_FREQUENCY}
          onChange={setCollectionFrequency}
          required
          error={errors.collectionFrequency}
        />

        <SelectField
          label="Preferred Collection Day"
          name="collectionDay"
          value={collectionDay}
          options={COLLECTION_DAYS}
          onChange={setCollectionDay}
          required
          error={errors.collectionDay}
        />

        <SelectField
          label="Preferred Collection Time"
          name="collectionTime"
          value={collectionTime}
          options={COLLECTION_TIME}
          onChange={setCollectionTime}
          required
          error={errors.collectionTime}
        />

      </div>
    </SectionCard>
  );
}