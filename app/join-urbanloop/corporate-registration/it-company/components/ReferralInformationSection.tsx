"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import {
  REFERRAL_SOURCES,
  toSelectOptions,
} from "./constants";

interface ReferralInformationSectionProps {
  referralSource: string;
  referralCode: string;
  additionalComments: string;

  errors: Record<string, string>;

  setReferralSource: (value: string) => void;
  setReferralCode: (value: string) => void;
  setAdditionalComments: (value: string) => void;
}

export default function ReferralInformationSection({
  referralSource,
  referralCode,
  additionalComments,
  errors,
  setReferralSource,
  setReferralCode,
  setAdditionalComments,
}: ReferralInformationSectionProps) {
  return (
    <SectionCard title="Referral Information">
      <div className="grid gap-6 md:grid-cols-2">

        <SelectField
          label="Referral Source"
          name="referralSource"
          value={referralSource}
          options={toSelectOptions(REFERRAL_SOURCES)}
          onChange={setReferralSource}
          required
          placeholder="Select Source"
          error={errors.referralSource}
        />

        <InputField
          label="Referral Code"
          name="referralCode"
          value={referralCode}
          onChange={setReferralCode}
        />

      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Comments
        </label>

        <textarea
          rows={4}
          value={additionalComments}
          onChange={(e) =>
            setAdditionalComments(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none"
          placeholder="Additional Comments"
        />
      </div>
    </SectionCard>
  );
}