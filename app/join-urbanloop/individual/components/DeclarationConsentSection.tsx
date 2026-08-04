"use client";

import SectionCard from "@/components/forms/SectionCard";

interface DeclarationConsentSectionProps {
  declarationConfirmed: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;

  errors: Record<string, string>;

  setDeclarationConfirmed: (value: boolean) => void;
  setTermsAccepted: (value: boolean) => void;
  setCommunicationConsent: (value: boolean) => void;
}

export default function DeclarationConsentSection({
  declarationConfirmed,
  termsAccepted,
  communicationConsent,
  errors,
  setDeclarationConfirmed,
  setTermsAccepted,
  setCommunicationConsent,
}: DeclarationConsentSectionProps) {
  return (
    <SectionCard title="Declaration & Consent">

      <div className="space-y-5">

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={declarationConfirmed}
            onChange={(e) =>
              setDeclarationConfirmed(e.target.checked)
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
            checked={termsAccepted}
            onChange={(e) =>
              setTermsAccepted(e.target.checked)
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
            checked={communicationConsent}
            onChange={(e) =>
              setCommunicationConsent(e.target.checked)
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