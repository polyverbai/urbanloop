"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import { INDIAN_STATES } from "../constants";

import type {
  RecyclerFacilityAddress,
  RecyclerPartnerForm,
} from "../types";

interface Step3FacilityAddressProps {
  data: RecyclerFacilityAddress;
  errors: Record<string, string>;

  updateField: <
    T extends keyof RecyclerPartnerForm,
    K extends keyof RecyclerPartnerForm[T]
  >(
    section: T,
    field: K,
    value: RecyclerPartnerForm[T][K]
  ) => void;
}

export default function Step3FacilityAddress({
  data,
  errors,
  updateField,
}: Step3FacilityAddressProps) {
  return (
    <div className="space-y-8">

      <SectionCard
        title="Recycler Facility Address"
        description="Provide the complete address of the recycling or processing facility."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Facility / Unit Number"
            name="facilityNumber"
            value={data.facilityNumber}
            placeholder="Enter facility or unit number"
            required
            error={errors.facilityNumber}
            onChange={(value) =>
              updateField(
                "facilityAddress",
                "facilityNumber",
                value
              )
            }
          />

          <InputField
            label="Building / Facility Name"
            name="facilityName"
            value={data.facilityName}
            placeholder="Enter building or facility name"
            required
            error={errors.facilityName}
            onChange={(value) =>
              updateField(
                "facilityAddress",
                "facilityName",
                value
              )
            }
          />

          <InputField
            label="Street / Industrial Area"
            name="streetArea"
            value={data.streetArea}
            placeholder="Enter street or industrial area"
            required
            error={errors.streetArea}
            onChange={(value) =>
              updateField(
                "facilityAddress",
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
                "facilityAddress",
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
                "facilityAddress",
                "city",
                value
              )
            }
          />

          <SelectField
            label="State"
            name="stateName"
            value={data.stateName}
            placeholder="Select State"
            required
            error={errors.stateName}
            options={INDIAN_STATES.map((state) => ({
              label: state,
              value: state,
            }))}
            onChange={(value) =>
              updateField(
                "facilityAddress",
                "stateName",
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
                "facilityAddress",
                "pinCode",
                value
                  .replace(/\D/g, "")
                  .slice(0, 6)
              )
            }
          />

          </div>
      </SectionCard>

    </div>
  );
}