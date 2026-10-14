"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import { PARTNER_TYPES } from "../constants";

import type {
  BusinessInformation,
  BusinessPartnerForm,
} from "../types";

interface BusinessInformationProps {
  data: BusinessInformation;
  errors: Record<string, string>;

  updateField: <
    T extends keyof BusinessPartnerForm,
    K extends keyof BusinessPartnerForm[T]
  >(
    section: T,
    field: K,
    value: BusinessPartnerForm[T][K]
  ) => void;
}

export default function BusinessInformation({
  data,
  errors,
  updateField,
}: BusinessInformationProps) {
  return (
    <SectionCard
      title="Business Information"
      description="Provide your business details."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <SelectField
          label="Partner Type"
          name="partnerType"
          value={data.partnerType}
          placeholder="Select Partner Type"
          required
          options={PARTNER_TYPES}
          error={errors.partnerType}
          onChange={(value) =>
            updateField(
              "businessInformation",
              "partnerType",
              value as
                | ""
                | "Collection Partner"
                | "Transport Partner"
                | "Recycler Partner"
            )
          }
        />

        <InputField
          label="Business Name"
          name="businessName"
          value={data.businessName}
          required
          error={errors.businessName}
          onChange={(value) =>
            updateField(
              "businessInformation",
              "businessName",
              value
            )
          }
        />

        <InputField
          label="Owner Name"
          name="ownerName"
          value={data.ownerName}
          required
          error={errors.ownerName}
          onChange={(value) =>
            updateField(
              "businessInformation",
              "ownerName",
              value
            )
          }
        />

        <InputField
          label="Mobile Number"
          name="mobileNumber"
          value={data.mobileNumber}
          required
          maxLength={10}
          error={errors.mobileNumber}
          onChange={(value) =>
            updateField(
              "businessInformation",
              "mobileNumber",
              value.replace(/\D/g, "").slice(0, 10)
            )
          }
        />

        <InputField
          label="Email Address"
          name="email"
          value={data.email}
          required
          error={errors.email}
          onChange={(value) =>
            updateField(
              "businessInformation",
              "email",
              value
            )
          }
        />

      </div>
    </SectionCard>
  );
}