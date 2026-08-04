"use client";

import SectionCard from "@/components/forms/SectionCard";

import type {
  CollectionPartnerForm,
  Declaration,
} from "../types";

interface Step7DeclarationProps {
  data: Declaration;
  errors: Record<string, string>;
  updateField: <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: CollectionPartnerForm[T][K]
  ) => void;
}

export default function Step7Declaration({
  data,
  errors,
  updateField,
}: Step7DeclarationProps) {
  return (
    <div className="space-y-8">

      <SectionCard
        title="Review & Declaration"
        description="Please review your information before submitting your registration."
      >

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">

          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Registration Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div>✅ Business Information Completed</div>

            <div>✅ Business Verification Completed</div>

            <div>✅ Business Address Completed</div>

            <div>✅ Material Collection Completed</div>

            <div>✅ Processing Facility Completed</div>

            <div>✅ Coverage & Payment Completed</div>

          </div>

        </div>

      </SectionCard>

      <SectionCard
        title="Declaration"
        description="Please read carefully before submitting."
      >

        <div className="space-y-5">

          <label className="flex items-start gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={data.declarationAccepted}
              onChange={(e) =>
                updateField(
                  "declaration",
                  "declarationAccepted",
                  e.target.checked
                )
              }
              className="mt-1 h-5 w-5"
            />

            <span>
              I hereby declare that all information provided in this
              registration form is true, complete and accurate to the
              best of my knowledge.
            </span>

          </label>

          {errors.declarationAccepted && (
            <p className="text-red-600 text-sm">
              {errors.declarationAccepted}
            </p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={data.termsAccepted}
              onChange={(e) =>
                updateField(
                  "declaration",
                  "termsAccepted",
                  e.target.checked
                )
              }
              className="mt-1 h-5 w-5"
            />

            <span>
              I have read and agree to the UrbanLoop Terms &
              Conditions and Privacy Policy.
            </span>

          </label>

          {errors.termsAccepted && (
            <p className="text-red-600 text-sm">
              {errors.termsAccepted}
            </p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={data.communicationConsent}
              onChange={(e) =>
                updateField(
                  "declaration",
                  "communicationConsent",
                  e.target.checked
                )
              }
              className="mt-1 h-5 w-5"
            />

            <span>
              I agree to receive communication from UrbanLoop through
              Email, SMS and WhatsApp regarding onboarding,
              verification and service updates.
            </span>

          </label>

          {errors.communicationConsent && (
            <p className="text-red-600 text-sm">
              {errors.communicationConsent}
            </p>
          )}

        </div>

      </SectionCard>

      <SectionCard
        title="What Happens Next?"
        description="After you submit your application"
      >

        <div className="rounded-xl bg-blue-50 border border-blue-200 p-6">

          <ul className="space-y-3 text-gray-700">

            <li>
              ✅ Your registration will be reviewed by the UrbanLoop
              onboarding team.
            </li>

            <li>
              ✅ Document verification generally takes 24–48 hours.
            </li>

            <li>
              ✅ Our team may contact you for additional information.
            </li>

            <li>
              ✅ Once approved, you will become an authorized UrbanLoop
              Collection Partner.
            </li>

          </ul>

        </div>

      </SectionCard>

    </div>
  );
}