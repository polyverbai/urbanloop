"use client";

import SectionCard from "@/components/forms/SectionCard";

import type {
  DeclarationInformation,
} from "./types";

interface DeclarationSectionProps {
  data: DeclarationInformation;
  errors: Record<string, string>;
  onChange: (
    field: keyof DeclarationInformation,
    value: boolean
  ) => void;

  className?: string;
}

export default function DeclarationSection({
  data,
  errors,
  onChange,
  className = "",
}: DeclarationSectionProps) {
  return (
    <SectionCard
  title="Declaration & Consent"
  className={className}
>

      <div className="space-y-5">

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={data.declarationConfirmed}
            onChange={(e) =>
              onChange(
                "declarationConfirmed",
                e.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-[#72B543]"
          />

          <span>
            I confirm that all information provided in this
            registration form is accurate and complete to the
            best of my knowledge.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={data.termsAccepted}
            onChange={(e) =>
              onChange(
                "termsAccepted",
                e.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-[#72B543]"
          />

          <span>
            I agree to UrbanLoop's Terms & Conditions and
            Privacy Policy.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={data.communicationConsent}
            onChange={(e) =>
              onChange(
                "communicationConsent",
                e.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-[#72B543]"
          />

          <span>
            I consent to receiving service updates,
            pickup reminders, payment notifications and
            sustainability reports.
          </span>
        </label>

      </div>

      {(errors.declarationConfirmed ||
        errors.termsAccepted ||
        errors.communicationConsent) && (
        <p className="mt-4 text-sm text-red-600">
          Please accept all declarations and consents.
        </p>
      )}

    </SectionCard>
  );
}