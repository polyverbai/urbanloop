"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  COMMUNICATION_PREFERENCES,
} from "./constants";

import type {
  CommunicationInformation,
} from "./types";

interface CommunicationSectionProps {
  data: CommunicationInformation;
  errors: Record<string, string>;
  onChange: (
    field: "communicationPreferences",
    value: string[]
  ) => void;

  className?: string;
}

export default function CommunicationSection({
  data,
  errors,
  onChange,
  className,
}: CommunicationSectionProps) {
  return (
    <SectionCard
  title="Communication Preferences"
  className={className}
>

      <CheckboxGroup
        label="Communication Preferences"
        options={COMMUNICATION_PREFERENCES}
        values={data.communicationPreferences}
        onChange={(values) =>
          onChange(
            "communicationPreferences",
            values
          )
        }
        required
        error={errors.communicationPreferences}
      />

    </SectionCard>
  );
}