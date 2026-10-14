"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

const SUSTAINABILITY_INITIATIVES = [
  "Waste Segregation at Source",
  "Recycling Program",
  "E-Waste Management",
  "Plastic Reduction Initiative",
  "Paperless Office",
  "Green Procurement",
  "Carbon Footprint Reduction",
  "ESG / Sustainability Reporting",
  "Renewable Energy Usage",
  "Other",
];

interface SustainabilityInitiativesSectionProps {
  sustainabilityInitiatives: string[];

  setSustainabilityInitiatives: (
    value: string[]
  ) => void;
}

export default function SustainabilityInitiativesSection({
  sustainabilityInitiatives,
  setSustainabilityInitiatives,
}: SustainabilityInitiativesSectionProps) {
  return (
    <SectionCard
      title="Sustainability Initiatives"
      description="Tell us about any sustainability practices already implemented within your organization. This information is optional and helps UrbanLoop provide suitable sustainability solutions."
    >
      <CheckboxGroup
        label="Current Sustainability Initiatives"
        values={sustainabilityInitiatives}
        options={SUSTAINABILITY_INITIATIVES.map((item) => ({
          label: item,
          value: item,
        }))}
        onChange={setSustainabilityInitiatives}
      />
    </SectionCard>
  );
}