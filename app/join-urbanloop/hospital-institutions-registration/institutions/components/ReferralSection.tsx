"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import {
  REFERRAL_SOURCES,
} from "./constants";

import type {
  ReferralInformation,
} from "./types";

interface ReferralInformationSectionProps {
  data: ReferralInformation;
  errors: Record<string, string>;
  onChange: (
    field: keyof ReferralInformation,
    value: string
  ) => void;

  className?: string;
}

export default function ReferralSection({
  data,
  errors,
  onChange,
  className = "",
}: ReferralInformationSectionProps) {
  return (
    <SectionCard
  title="Referral Information"
  className={className}
>
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
  label="Referral Source"
  name="referralSource"
  value={data.referralSource}
  options={REFERRAL_SOURCES}
  onChange={(value) =>
    onChange("referralSource", value)
  }
  placeholder="Select Source"
  error={errors.referralSource}
/>

        <InputField
  label="Referral Code"
  name="referralCode"
  value={data.referralCode}
  onChange={(value) =>
    onChange("referralCode", value)
  }
/>

      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Comments
        </label>

        <textarea
          rows={4}
          value={data.additionalComments}
          onChange={(e)=>
  onChange(
    "additionalComments",
    e.target.value
  )
}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none"
          placeholder="Additional Comments"
        />
      </div>
    </SectionCard>
  );
}