"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import { INDIAN_STATES } from "../constants";

import type {
  BusinessAddress,
  CollectionPartnerForm,
} from "../types";

interface Step3BusinessAddressProps {
  data: BusinessAddress;
  errors: Record<string, string>;
  updateField: <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: CollectionPartnerForm[T][K]
  ) => void;
}

export default function Step3BusinessAddress({
  data,
  errors,
  updateField,
}: Step3BusinessAddressProps) {
  return (
    <div className="space-y-8">

      <SectionCard
        title="Business Address"
        description="Provide the complete address of your business."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Shop Number"
            name="shopNumber"
            value={data.shopNumber}
            placeholder="Enter shop number"
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
            placeholder="Enter building name"
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
            placeholder="Enter street or area"
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
            placeholder="Nearby landmark"
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
            placeholder="Enter city"
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

          <SelectField
            label="State"
            name="state"
            value={data.state}
            placeholder="Select State"
            required
            error={errors.state}
            options={INDIAN_STATES.map((state) => ({
              label: state,
              value: state,
            }))}
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
            placeholder="Enter PIN Code"
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

          <InputField
            label="Latitude"
            name="latitude"
            value={data.latitude}
            placeholder="Optional"
            onChange={(value) =>
              updateField(
                "businessAddress",
                "latitude",
                value
              )
            }
          />

          <InputField
            label="Longitude"
            name="longitude"
            value={data.longitude}
            placeholder="Optional"
            onChange={(value) =>
              updateField(
                "businessAddress",
                "longitude",
                value
              )
            }
          />

        </div>
      </SectionCard>

    </div>
  );
}