"use client";

import SectionCard from "@/components/forms/SectionCard";
import RadioGroup from "@/components/forms/RadioGroup";
import InputField from "@/components/forms/InputField";

import { YES_NO } from "../constants";

import type {
  BusinessRegistration as BusinessRegistrationType,
  BusinessPartnerForm,
} from "../types";

interface BusinessRegistrationProps {
  data: BusinessRegistrationType;
  errors: Record<string, string>;

  updateField: <
    T extends keyof BusinessPartnerForm,
    K extends keyof BusinessPartnerForm[T]
  >(
    section: T,
    field: K,
    value: BusinessPartnerForm[T][K]
  ) => void;
}

export default function BusinessRegistration({
  data,
  errors,
  updateField,
}: BusinessRegistrationProps) {
  return (
    <SectionCard
      title="Business Registration"
      description="Provide your business registration details."
    >
      <div className="space-y-8">

        {/* PAN */}

        <RadioGroup
          label="PAN Available"
          required
          value={data.panAvailable}
          options={YES_NO}
          error={errors.panAvailable}
          onChange={(value) =>
  updateField(
    "businessRegistration",
    "panAvailable",
    value as "" | "Yes" | "No"
  )
}
        />

        {data.panAvailable === "Yes" && (
          <InputField
            label="PAN Number"
            name="panNumber"
            value={data.panNumber}
            required
            error={errors.panNumber}
            onChange={(value) =>
              updateField(
                "businessRegistration",
                "panNumber",
                value.toUpperCase()
              )
            }
          />
        )}

        {/* GST */}

        <RadioGroup
          label="GST Available"
            required
          value={data.gstAvailable}
          options={YES_NO}
          error={errors.gstAvailable}
          onChange={(value) =>
  updateField(
    "businessRegistration",
    "gstAvailable",
    value as "" | "Yes" | "No"
  )
}
/>
        {data.gstAvailable === "Yes" && (
          <InputField
            label="GST Number"
            name="gstNumber"
            value={data.gstNumber}
            required
            error={errors.gstNumber}
            onChange={(value) =>
              updateField(
                "businessRegistration",
                "gstNumber",
                value.toUpperCase()
              )
            }
          />
        )}

        {/* Trade License */}

       <RadioGroup
  label="Trade License Available"
  required
  value={data.tradeLicenseAvailable}
  options={YES_NO}
  error={errors.tradeLicenseAvailable}
  onChange={(value) =>
    updateField(
      "businessRegistration",
      "tradeLicenseAvailable",
      value as "" | "Yes" | "No"
    )
  }
/>

        {data.tradeLicenseAvailable === "Yes" && (
          <InputField
            label="Trade License Number"
            name="tradeLicenseNumber"
            value={data.tradeLicenseNumber}
            required
            error={errors.tradeLicenseNumber}
            onChange={(value) =>
              updateField(
                "businessRegistration",
                "tradeLicenseNumber",
                value
              )
            }
          />
        )}

      </div>
    </SectionCard>
     );
}