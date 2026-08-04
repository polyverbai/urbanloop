"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  SERVICE_REQUIREMENTS,
  toCheckboxOptions,
} from "./constants";

interface ServiceRequirementsSectionProps {
  requiredServices: string[];
  errors: Record<string, string>;

  setRequiredServices: (
    values: string[],
    clickedValue?: string
  ) => void;
}

export default function ServiceRequirementsSection({
  requiredServices,
  errors,
  setRequiredServices,
}: ServiceRequirementsSectionProps) {
  return (
    <SectionCard
      title="Service Requirements"
    >
      <CheckboxGroup
        label="Required Services"
        required
        values={requiredServices}
        options={toCheckboxOptions(SERVICE_REQUIREMENTS)}
        onChange={setRequiredServices}
        error={errors.requiredServices}
      />
    </SectionCard>
  );
}