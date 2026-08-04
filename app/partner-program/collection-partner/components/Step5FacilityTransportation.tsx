"use client";

import SectionCard from "@/components/forms/SectionCard";
import RadioGroup from "@/components/forms/RadioGroup";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  STORAGE_CAPACITY,
  VEHICLE_TYPES,
} from "../constants";

import type {
  FacilityTransportation,
  CollectionPartnerForm,
} from "../types";

interface Step5FacilityTransportationProps {
  data: FacilityTransportation;
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

export default function Step5FacilityTransportation({
  data,
  errors,
  updateField,
}: Step5FacilityTransportationProps) {

const handleVehicleTypesChange = (
  values: string[],
  clickedValue?: string
) => {

  const allVehicles = VEHICLE_TYPES.filter(
    (vehicle) => vehicle !== "All Vehicles"
  );

  // User clicked All Vehicles.
  if (clickedValue === "All Vehicles") {

    // Everything already selected.
    if (
      data.vehicleTypes.length ===
      allVehicles.length
    ) {
      updateField(
        "facilityTransportation",
        "vehicleTypes",
        []
      );
    } else {
      updateField(
        "facilityTransportation",
        "vehicleTypes",
        allVehicles
      );
    }

    return;
  }

  // Remove All Vehicles before saving.
  const selectedVehicles = values.filter(
    (value) => value !== "All Vehicles"
  );

  updateField(
    "facilityTransportation",
    "vehicleTypes",
    selectedVehicles
  );
};

  return (
    <div className="space-y-8">

      <SectionCard
        title="Processing Facility"
        description="Provide details about your processing facility."
      >

        <RadioGroup
          label="Do you have a processing facility?"
          value={data.processingFacilityAvailable}
          required
          error={errors.processingFacilityAvailable}
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          onChange={(value) =>
            updateField(
              "facilityTransportation",
              "processingFacilityAvailable",
              value
            )
          }
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Facility Address"
            name="facilityAddress"
            value={data.facilityAddress}
            placeholder="Enter facility address"
            error={errors.facilityAddress}
            onChange={(value) =>
              updateField(
                "facilityTransportation",
                "facilityAddress",
                value
              )
            }
          />

          <SelectField
            label="Storage Capacity"
            name="storageCapacity"
            value={data.storageCapacity}
            placeholder="Select Capacity"
            options={STORAGE_CAPACITY}
            error={errors.storageCapacity}
            onChange={(value) =>
              updateField(
                "facilityTransportation",
                "storageCapacity",
                value
              )
            }
          />

        </div>

      </SectionCard>

      <SectionCard
        title="Transportation"
        description="Provide transportation details."
      >

        <CheckboxGroup
          label="Vehicle Types"
          values={
  data.vehicleTypes.length ===
  VEHICLE_TYPES.length - 1
    ? VEHICLE_TYPES
    : data.vehicleTypes
}
          required
          error={errors.vehicleTypes}
          options={VEHICLE_TYPES.map((vehicle) => ({
            label: vehicle,
            value: vehicle,
          }))}
          onChange={handleVehicleTypesChange}
        />

        <div className="mt-8">

          <InputField
            label="Number of Vehicles"
            name="numberOfVehicles"
            value={data.numberOfVehicles}
            placeholder="Enter number of vehicles"
            required
            error={errors.numberOfVehicles}
            onChange={(value) =>
              updateField(
                "facilityTransportation",
                "numberOfVehicles",
                value.replace(/\D/g, "")
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}