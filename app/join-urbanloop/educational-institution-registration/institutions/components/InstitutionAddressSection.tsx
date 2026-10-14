"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

import type {
  InstitutionAddress,
} from "./types";

interface InstitutionAddressSectionProps {
  data: InstitutionAddress;
  errors: Record<string, string>;

  onChange: (
    field: keyof InstitutionAddress,
    value: string
  ) => void;
}

export default function InstitutionAddressSection({
  data,
  errors,
  onChange,
}: InstitutionAddressSectionProps) {
  return (
  <SectionCard title="Institution Address">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <InputField
      name="buildingNumber"
      label="Building / Unit Number"
      value={data.buildingNumber}
      onChange={(value) =>
        onChange("buildingNumber", value)
      }
      required
      error={errors.buildingNumber}
    />

<InputField
  name="buildingName"
  label="Building Name"
  value={data.buildingName}
  onChange={(value) =>
    onChange("buildingName", value)
  }
  required
  error={errors.buildingName}
/>

<InputField
  name="streetArea"
  label="Street / Area"
  value={data.streetArea}
  onChange={(value) =>
    onChange("streetArea", value)
  }
  required
  error={errors.streetArea}
/>

<InputField
  name="landmark"
  label="Landmark"
  value={data.landmark}
  onChange={(value) =>
    onChange("landmark", value)
  }
  required
  error={errors.landmark}
/>

<InputField
  name="city"
  label="City"
  value={data.city}
  onChange={(value) =>
    onChange("city", value)
  }
  required
  error={errors.city}
/>

<InputField
  name="stateName"
  label="State"
  value={data.stateName}
  onChange={(value) =>
    onChange("stateName", value)
  }
  required
  error={errors.stateName}
/>

<InputField
  name="pinCode"
  label="PIN Code"
  value={data.pinCode}
  onChange={(value) =>
    onChange("pinCode", value)
  }
  required
  error={errors.pinCode}
/>

  </div>

</SectionCard>
);
}