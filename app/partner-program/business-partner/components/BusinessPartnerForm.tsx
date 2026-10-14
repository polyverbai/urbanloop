"use client";

import BusinessInformation from "./BusinessInformation";
import BusinessAddress from "./BusinessAddress";
import BusinessRegistration from "./BusinessRegistration";
import Declaration from "./Declaration";

import type { BusinessPartnerForm as BusinessPartnerFormType } from "../types";

interface Props {
  data: BusinessPartnerFormType;
  errors: Record<string, string>;

  updateField: <
    T extends keyof BusinessPartnerFormType,
    K extends keyof BusinessPartnerFormType[T]
  >(
    section: T,
    field: K,
    value: BusinessPartnerFormType[T][K]
  ) => void;

  handleSubmit: () => void;
  isSubmitting: boolean;
}

export default function BusinessPartnerForm({
  data,
  errors,
  updateField,
  handleSubmit,
  isSubmitting,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <BusinessInformation
        data={data.businessInformation}
        errors={errors}
        updateField={updateField}
      />

      <BusinessAddress
        data={data.businessAddress}
        errors={errors}
        updateField={updateField}
      />

      <BusinessRegistration
        data={data.businessRegistration}
        errors={errors}
        updateField={updateField}
      />

      <Declaration
        data={data.declaration}
        errors={errors}
        updateField={updateField}
      />

      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </div>

    </div>
  );
}