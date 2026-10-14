"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

interface AddressSectionProps {
  officeUnitNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  stateName: string;
  pinCode: string;

  errors: Record<string, string>;

  setOfficeUnitNumber: (value: string) => void;
  setBuildingName: (value: string) => void;
  setStreetArea: (value: string) => void;
  setLandmark: (value: string) => void;
  setCity: (value: string) => void;
  setStateName: (value: string) => void;
  setPinCode: (value: string) => void;
}

export default function AddressSection({
  officeUnitNumber,
  buildingName,
  streetArea,
  landmark,
  city,
  stateName,
  pinCode,
  errors,
  setOfficeUnitNumber,
  setBuildingName,
  setStreetArea,
  setLandmark,
  setCity,
  setStateName,
  setPinCode,
}: AddressSectionProps) {
  return (
    <SectionCard
      title="Office Address"
      description="Provide the complete office address for recyclable waste collection."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          label="Office / Unit Number"
          name="officeUnitNumber"
          value={officeUnitNumber}
          onChange={setOfficeUnitNumber}
          required
          error={errors.officeUnitNumber}
        />

        <InputField
          label="Building Name"
          name="buildingName"
          value={buildingName}
          onChange={setBuildingName}
          required
          error={errors.buildingName}
        />

        <InputField
          label="Street / Area"
          name="streetArea"
          value={streetArea}
          onChange={setStreetArea}
          required
          error={errors.streetArea}
        />

        <InputField
          label="Landmark"
          name="landmark"
          value={landmark}
          onChange={setLandmark}
        />

        <InputField
          label="City"
          name="city"
          value={city}
          onChange={setCity}
          required
          error={errors.city}
        />

        <InputField
          label="State"
          name="stateName"
          value={stateName}
          onChange={setStateName}
          required
          error={errors.stateName}
        />

        <InputField
          label="PIN Code"
          name="pinCode"
          value={pinCode}
          maxLength={6}
          onChange={(value) =>
            setPinCode(
              value.replace(/\D/g, "").slice(0, 6)
            )
          }
          required
          error={errors.pinCode}
        />

      </div>
    </SectionCard>
  );
}