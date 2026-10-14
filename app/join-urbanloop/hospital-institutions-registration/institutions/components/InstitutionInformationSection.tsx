"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import type {
  InstitutionInformation,
  ContactInformation,
} from "./types";

interface InstitutionInformationSectionProps {
  institutionData: InstitutionInformation;
  contactData: ContactInformation;
  errors: Record<string, string>;

  onInstitutionChange: (
    field: keyof InstitutionInformation,
    value: string
  ) => void;

  onContactChange: (
    field: keyof ContactInformation,
    value: string
  ) => void;
}

const INSTITUTION_CATEGORIES = [
  { value: "Hospital", label: "Hospital" },
  { value: "Clinic", label: "Clinic" },
  {
    value: "Diagnostic Centre",
    label: "Diagnostic Centre",
  },
  {
    value: "Nursing Home",
    label: "Nursing Home",
  },
  {
    value: "Medical College",
    label: "Medical College",
  },
  {
    value: "Blood Bank",
    label: "Blood Bank",
  },
  {
    value: "Rehabilitation Centre",
    label: "Rehabilitation Centre",
  },
  {
    value: "Healthcare Institution",
    label: "Healthcare Institution",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export default function InstitutionInformationSection({
  institutionData,
  contactData,
  errors,
  onInstitutionChange,
  onContactChange,
}: InstitutionInformationSectionProps) {
  return (
    <SectionCard title="Institution Information">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SelectField
          name="institutionCategory"
          label="Institution Category"
          value={institutionData.institutionCategory}
          onChange={(value) =>
            onInstitutionChange(
              "institutionCategory",
              value
            )
          }
          options={INSTITUTION_CATEGORIES}
          required
          error={errors.institutionCategory}
        />

        <InputField
          name="institutionName"
          label="Institution Name"
          value={institutionData.institutionName}
          onChange={(value) =>
            onInstitutionChange(
              "institutionName",
              value
            )
          }
          required
          error={errors.institutionName}
        />

        <InputField
          name="website"
          label="Website"
          value={institutionData.website}
          onChange={(value) =>
            onInstitutionChange(
              "website",
              value
            )
          }
          error={errors.website}
        />

        <InputField
          name="yearEstablished"
          label="Year Established"
          type="number"
          value={institutionData.yearEstablished}
          onChange={(value) =>
            onInstitutionChange(
              "yearEstablished",
              value
            )
          }
          error={errors.yearEstablished}
        />

        <InputField
          name="contactPersonName"
          label="Contact Person Name"
          value={contactData.contactPersonName}
          onChange={(value) =>
            onContactChange(
              "contactPersonName",
              value
            )
          }
          required
          error={errors.contactPersonName}
        />

        <InputField
          name="designation"
          label="Designation"
          value={contactData.designation}
          onChange={(value) =>
            onContactChange(
              "designation",
              value
            )
          }
          required
          error={errors.designation}
        />

        <InputField
          name="mobileNumber"
          label="Mobile Number"
          type="tel"
          value={contactData.mobileNumber}
          onChange={(value) =>
            onContactChange(
              "mobileNumber",
              value
                .replace(/\D/g, "")
                .slice(0, 10)
            )
          }
          required
          error={errors.mobileNumber}
        />

        <InputField
          name="email"
          label="Email Address"
          type="email"
          value={contactData.email}
          onChange={(value) =>
            onContactChange(
              "email",
              value
            )
          }
          required
          error={errors.email}
        />
      </div>
    </SectionCard>
  );
}