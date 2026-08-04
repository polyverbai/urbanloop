"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import {
  RESIDENTIAL_CATEGORIES,
  toSelectOptions,
} from "./constants";

interface ContactInformationSectionProps {
  residencyCategory: string;
  contactPersonName: string;
  mobileNumber: string;
  email: string;

  errors: Record<string, string>;

  setResidencyCategory: (value: string) => void;
  setContactPersonName: (value: string) => void;
  setMobileNumber: (value: string) => void;
  setEmail: (value: string) => void;
}

export default function ContactInformationSection({
  residencyCategory,
  contactPersonName,
  mobileNumber,
  email,
  errors,
  setResidencyCategory,
  setContactPersonName,
  setMobileNumber,
  setEmail,
}: ContactInformationSectionProps) {
  return (
    <SectionCard
      title="Contact Information"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
          label="Residential Category"
          name="residencyCategory"
          value={residencyCategory}
          options={toSelectOptions(
            RESIDENTIAL_CATEGORIES
          )}
          onChange={setResidencyCategory}
          required
          placeholder="Select Residential Category"
          error={errors.residencyCategory}
        />

        <InputField
          label="Contact Person Name"
          name="contactPersonName"
          value={contactPersonName}
          onChange={setContactPersonName}
          required
          error={errors.contactPersonName}
        />

        <InputField
          label="Mobile Number"
          name="mobileNumber"
          value={mobileNumber}
          maxLength={10}
          onChange={(value) =>
            setMobileNumber(
              value.replace(/\D/g, "").slice(0, 10)
            )
          }
          required
          error={errors.mobileNumber}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />

      </div>
    </SectionCard>
  );
}