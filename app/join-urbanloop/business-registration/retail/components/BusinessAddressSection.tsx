"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

interface BusinessAddressSectionProps {
  shopNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  stateName: string;
  pinCode: string;

  errors: Record<string, string>;

  setShopNumber: (value: string) => void;
  setBuildingName: (value: string) => void;
  setStreetArea: (value: string) => void;
  setLandmark: (value: string) => void;
  setCity: (value: string) => void;
  setStateName: (value: string) => void;
  setPinCode: (value: string) => void;
}

export default function BusinessAddressSection({
  shopNumber,
  buildingName,
  streetArea,
  landmark,
  city,
  stateName,
  pinCode,
  errors,
  setShopNumber,
  setBuildingName,
  setStreetArea,
  setLandmark,
  setCity,
  setStateName,
  setPinCode,
}: BusinessAddressSectionProps) {
  return (
    <SectionCard title="Business Address">
      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          label="Unit / Shop Number"
          name="shopNumber"
          value={shopNumber}
          onChange={setShopNumber}
          required
          error={errors.shopNumber}
        />

        <InputField
          label="Business / Building Name"
          name="buildingName"
          value={buildingName}
          onChange={setBuildingName}
          required
          error={errors.buildingName}
        />

        <div className="md:col-span-2">
          <InputField
            label="Street / Area"
            name="streetArea"
            value={streetArea}
            onChange={setStreetArea}
            required
            error={errors.streetArea}
          />
        </div>

        <InputField
          label="Landmark"
          name="landmark"
          value={landmark}
          onChange={setLandmark}
          required
          error={errors.landmark}
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

      </div>
    </SectionCard>
  );
}