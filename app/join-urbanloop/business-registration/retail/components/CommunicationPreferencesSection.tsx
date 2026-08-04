"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  COMMUNICATION_PREFERENCES,
  toCheckboxOptions,
} from "./constants";

interface CommunicationPreferencesSectionProps {
  communicationPreferences: string[];
  errors: Record<string, string>;

  setCommunicationPreferences: (
    values: string[],
    clickedValue?: string
  ) => void;
}

export default function CommunicationPreferencesSection({
  communicationPreferences,
  errors,
  setCommunicationPreferences,
}: CommunicationPreferencesSectionProps) {
  return (
    <SectionCard
      title="Communication Preferences"
    >
      <CheckboxGroup
        label="Communication Preferences"
        required
        values={communicationPreferences}
        options={toCheckboxOptions(COMMUNICATION_PREFERENCES)}
        onChange={setCommunicationPreferences}
        error={errors.communicationPreferences}
      />
    </SectionCard>
  );
}