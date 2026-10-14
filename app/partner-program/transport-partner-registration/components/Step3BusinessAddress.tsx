"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import { INDIAN_STATES } from "../constants";

import type {
  TransportBusinessAddress,
  TransportPartnerForm,
} from "../types";


interface Step3BusinessAddressProps {
  data: TransportBusinessAddress;

  errors: Record<string, string>;

  updateField: <
    T extends keyof TransportPartnerForm,
    K extends keyof TransportPartnerForm[T]
  >(
    section: T,
    field: K,
    value: TransportPartnerForm[T][K]
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
        title="Business / Operational Address"
        description="Provide the primary business or operational address for your transport operations."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Address Line / Office Number"
            name="addressLine"
            value={data.addressLine}
            placeholder="Enter address line or office number"
            required
            error={errors.addressLine}
            onChange={(value) =>
              updateField(
                "businessAddress",
                "addressLine",
                value
              )
            }
          />

          <InputField
            label="Building / Business Name"
            name="buildingName"
            value={data.buildingName}
            placeholder="Enter building or business name"
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