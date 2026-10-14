"use client";

import SectionCard from "@/components/forms/SectionCard";
import Checkbox from "@/components/forms/Checkbox";

import type {
  Declaration as DeclarationType,
  BusinessPartnerForm,
} from "../types";

interface DeclarationProps {
  data: DeclarationType;
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

export default function Declaration({
  data,
  errors,
  updateField,
}: DeclarationProps) {
  return (
    <SectionCard
      title="Declaration"
      description="Please confirm the following before submitting."
    >
      <div className="space-y-4">

        <Checkbox
          label="I hereby declare that all information provided is true and correct."
          checked={data.declarationAccepted}
          onChange={(checked: boolean) =>
            updateField(
              "declaration",
              "declarationAccepted",
              checked
            )
          }
        />

        {errors.declarationAccepted && (
          <p className="text-sm text-red-600">
            {errors.declarationAccepted}
          </p>
        )}

        <Checkbox
          label="I agree to the UrbanLoop Terms & Conditions."
          checked={data.termsAccepted}
          onChange={(checked: boolean) =>
            updateField(
              "declaration",
              "termsAccepted",
              checked
            )
          }
        />

        {errors.termsAccepted && (
          <p className="text-sm text-red-600">
            {errors.termsAccepted}
          </p>
        )}

        <Checkbox
          label="I agree to receive communication from UrbanLoop."
          checked={data.communicationConsent}
          onChange={(checked: boolean) =>
            updateField(
              "declaration",
              "communicationConsent",
              checked
            )
          }
        />

      </div>
    </SectionCard>
  );
}