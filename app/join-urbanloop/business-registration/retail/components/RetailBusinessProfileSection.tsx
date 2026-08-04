"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import {
  BUSINESS_PROFILE_TYPES,
  MONTHLY_RECYCLABLES,
  STORAGE_SPACE_OPTIONS,
  toSelectOptions,
} from "./constants";

interface RetailBusinessProfileSectionProps {
  businessProfileType: string;
  outletCount: string;
  monthlyRecyclables: string;
  storageSpaceAvailable: string;

  errors: Record<string, string>;

  setBusinessProfileType: (value: string) => void;
  setOutletCount: (value: string) => void;
  setMonthlyRecyclables: (value: string) => void;
  setStorageSpaceAvailable: (value: string) => void;
}

export default function RetailBusinessProfileSection({
  businessProfileType,
  outletCount,
  monthlyRecyclables,
  storageSpaceAvailable,
  errors,
  setBusinessProfileType,
  setOutletCount,
  setMonthlyRecyclables,
  setStorageSpaceAvailable,
}: RetailBusinessProfileSectionProps) {
  return (
    <SectionCard title="Business Profile">
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
          label="Business Type"
          name="businessProfileType"
          value={businessProfileType}
          options={toSelectOptions(BUSINESS_PROFILE_TYPES)}
          onChange={setBusinessProfileType}
          required
          placeholder="Select Business Type"
          error={errors.businessProfileType}
        />

        {[
  "Retail Store",
  "Restaurant & Café",
  "Hotel & Hospitality",
].includes(businessProfileType) && (
  <InputField
    label={
      businessProfileType === "Hotel & Hospitality"
        ? "Number of Properties"
        : "Number of Outlets"
    }
    name="outletCount"
    type="number"
    value={outletCount}
    onChange={setOutletCount}
    required
    error={errors.outletCount}
  />
)}

        <SelectField
          label="Monthly Recyclables Generated"
          name="monthlyRecyclables"
          value={monthlyRecyclables}
          options={toSelectOptions(MONTHLY_RECYCLABLES)}
          onChange={setMonthlyRecyclables}
          required
          placeholder="Select Quantity"
          error={errors.monthlyRecyclables}
        />

        <SelectField
          label="Storage Space Available"
          name="storageSpaceAvailable"
          value={storageSpaceAvailable}
          options={toSelectOptions(STORAGE_SPACE_OPTIONS)}
          onChange={setStorageSpaceAvailable}
          required
          placeholder="Select Option"
          error={errors.storageSpaceAvailable}
        />

      </div>
    </SectionCard>
  );
}