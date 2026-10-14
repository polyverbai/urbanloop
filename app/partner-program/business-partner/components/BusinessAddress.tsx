"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

import type {
  BusinessAddress,
  BusinessPartnerForm,
} from "../types";

interface BusinessAddressProps {
  data: BusinessAddress;
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

export default function BusinessAddress({
  data,
  errors,
  updateField,
}: BusinessAddressProps) {
  return (
    <SectionCard
      title="Business Address"
      description="Enter your business location details."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputField
          label="Shop Number"
          name="shopNumber"
          value={data.shopNumber}
          required
          error={errors.shopNumber}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "shopNumber",
              value
            )
          }
        />

        <InputField
          label="Building Name"
          name="buildingName"
          value={data.buildingName}
          required
          error={errors.buildingName}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "buildingName",
              value
            )
          }
        />

        <InputField
          label="Street / Area"
          name="streetArea"
          value={data.streetArea}
          required
          error={errors.streetArea}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "streetArea",
              value
            )
          }
        />

        <InputField
          label="Landmark"
          name="landmark"
          value={data.landmark}
          error={errors.landmark}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "landmark",
              value
            )
          }
        />

        <InputField
          label="City"
          name="city"
          value={data.city}
          required
          error={errors.city}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "city",
              value
            )
          }
        />

        <InputField
          label="State"
          name="state"
          value={data.state}
          required
          error={errors.state}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "state",
              value
            )
          }
        />

        <InputField
          label="PIN Code"
          name="pinCode"
          value={data.pinCode}
          required
          maxLength={6}
          error={errors.pinCode}
          onChange={(value) =>
            updateField(
              "businessAddress",
              "pinCode",
              value.replace(/\D/g, "").slice(0, 6)
            )
          }
        />

      </div>
    </SectionCard>
  );
}