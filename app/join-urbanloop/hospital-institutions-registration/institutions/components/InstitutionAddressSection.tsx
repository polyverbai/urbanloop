"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

import type { InstitutionAddress } from "./types";

interface InstitutionAddressSectionProps {
  data: InstitutionAddress;
  errors: Record<string, string>;
  onChange: (
    field: keyof InstitutionAddress,
    value: string
  ) => void;
  className?: string;
}

export default function InstitutionAddressSection({
  data,
  errors,
  onChange,
  className = "",
}: InstitutionAddressSectionProps) {
  return (
    <SectionCard
  title="Institution Address"
  className={className}
>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        
        <div className="md:col-span-2">
          <InputField
            name="address"
            label="Institution Address"
            value={data.address}
            onChange={(value) =>
              onChange("address", value)
            }
            required
            error={errors.address}
          />
        </div>

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
            onChange(
              "pinCode",
              value
                .replace(/\D/g, "")
                .slice(0, 6)
            )
          }
          required
          error={errors.pinCode}
        />
      </div>
    </SectionCard>
  );
}