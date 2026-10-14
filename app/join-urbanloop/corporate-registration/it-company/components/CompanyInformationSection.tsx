"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {
  COMPANY_CATEGORIES,
  toSelectOptions,
} from "./constants";

interface CompanyInformationSectionProps {
  companyCategory: string;
setCompanyCategory: (value: string) => void;

  companyName: string;

  gstNumber: string;

  panNumber: string;

  website: string;

  yearEstablished: string;

  errors: Record<string, string>;

  setCompanyName: (value: string) => void;

  setGstNumber: (value: string) => void;

  setPanNumber: (value: string) => void;

  setWebsite: (value: string) => void;

  setYearEstablished: (value: string) => void;
}

export default function CompanyInformationSection({
  companyCategory,
setCompanyCategory,
companyName,
  gstNumber,
  panNumber,
  website,
  yearEstablished,
  errors,
  setCompanyName,
  setGstNumber,
  setPanNumber,
  setWebsite,
  setYearEstablished,
}: CompanyInformationSectionProps) {
  return (
    <SectionCard
      title="Company Information"
      description="Provide the basic information about your organization."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
  label="Company Category"
  name="companyCategory"
  value={companyCategory}
  options={toSelectOptions(COMPANY_CATEGORIES)}
  onChange={setCompanyCategory}
  required
/>

        <InputField
          label="Company Name"
          name="companyName"
          value={companyName}
          onChange={setCompanyName}
          required
          error={errors.companyName}
        />

        <InputField
          label="GST Number"
          name="gstNumber"
          value={gstNumber}
          onChange={(value) =>
            setGstNumber(
              value.toUpperCase()
            )
          }
          required
          error={errors.gstNumber}
        />

        <InputField
          label="PAN Number"
          name="panNumber"
          value={panNumber}
          onChange={(value) =>
            setPanNumber(
              value.toUpperCase()
            )
          }
          required
          error={errors.panNumber}
        />

        <InputField
          label="Website"
          name="website"
          value={website}
          onChange={setWebsite}
        />

        <InputField
          label="Year Established"
          name="yearEstablished"
          value={yearEstablished}
          maxLength={4}
          onChange={(value) =>
            setYearEstablished(
              value.replace(/\D/g, "").slice(0, 4)
            )
          }
        />

      </div>
    </SectionCard>
  );
}