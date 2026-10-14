"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  COMMUNICATION_PREFERENCES,
} from "./constants";

import type {
  CommunicationInformation,
} from "./types";

interface CommunicationPreferenceSectionProps {
  data: CommunicationInformation;
  errors: Record<string, string>;

  onChange: (
    field: keyof CommunicationInformation,
    value: string[]
  ) => void;
}

export default function CommunicationPreferenceSection({
  data,
  errors,
  onChange,
}: CommunicationPreferenceSectionProps) {
  return (
    <SectionCard title="Communication Preferences">

      <div className="space-y-6">

        <CheckboxGroup
          label="Preferred Communication Methods"
          options={COMMUNICATION_PREFERENCES}
          values={data.communicationPreferences}
          onChange={(values) =>
            onChange("communicationPreferences", values)
          }
          required
          error={errors.communicationPreferences}
        />

      </div>

    </SectionCard>
  );
}