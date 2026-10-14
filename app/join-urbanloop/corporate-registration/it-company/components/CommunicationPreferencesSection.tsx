"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import { COMMUNICATION_PREFERENCES } from "./constants";

interface CommunicationPreferencesSectionProps {
  communicationPreferences: string[];

  errors: Record<string, string>;

  setCommunicationPreferences: (value: string[]) => void;
}

export default function CommunicationPreferencesSection({
  communicationPreferences,
  errors,
  setCommunicationPreferences,
}: CommunicationPreferencesSectionProps) {
  return (
    <SectionCard
      title="Communication Preferences"
      description="Choose how you would like UrbanLoop to communicate with your organization."
    >
      <CheckboxGroup
        label="Preferred Communication Methods"
        required
        values={communicationPreferences}
        options={COMMUNICATION_PREFERENCES.map((item) => ({
          label: item,
          value: item,
        }))}
        onChange={setCommunicationPreferences}
        error={errors.communicationPreferences}
      />
    </SectionCard>
  );
}