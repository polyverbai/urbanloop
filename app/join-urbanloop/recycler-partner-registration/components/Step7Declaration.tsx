"use client";

import SectionCard from "@/components/forms/SectionCard";

import type {
  RecyclerPartnerForm,
  RecyclerDeclaration,
} from "../types";

interface Step7DeclarationProps {
  data: RecyclerDeclaration;
  errors: Record<string, string>;

  updateField: <
    T extends keyof RecyclerPartnerForm,
    K extends keyof RecyclerPartnerForm[T]
  >(
    section: T,
    field: K,
    value: RecyclerPartnerForm[T][K]
  ) => void;
}

export default function Step7Declaration({
  data,
  errors,
  updateField,
}: Step7DeclarationProps) {
  return (
    <div className="space-y-8">

      {/* REVIEW SUMMARY */}

      <SectionCard
        title="Review & Declaration"
        description="Please review your information before submitting your Recycler Partner registration."
      >

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">

          <h3 className="mb-4 text-lg font-semibold text-green-700">
            Registration Summary
          </h3>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

            <div>
              ✅ Business Information Completed
            </div>

            <div>
              ✅ Business & Compliance Verification Completed
            </div>

            <div>
              ✅ Recycler Facility Address Completed
            </div>

            <div>
              ✅ Materials & Processing Capability Completed
            </div>

            <div>
              ✅ Procurement Requirements Completed
            </div>

            <div>
              ✅ Logistics & Commercial Information Completed
            </div>

          </div>

        </div>

      </SectionCard>


      {/* DECLARATION */}

      <SectionCard
        title="Declaration & Consent"
        description="Please read each declaration carefully before submitting your registration."
      >

        <div className="space-y-5">

          {/* INFORMATION CONFIRMATION */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

              <input
                type="checkbox"
                checked={data.informationConfirmed}
                onChange={(e) =>
                  updateField(
                    "declaration",
                    "informationConfirmed",
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

            {errors.informationConfirmed && (
              <p className="mt-2 text-sm text-red-600">
                {errors.informationConfirmed}
              </p>
            )}

          </div>


          {/* COMPLIANCE CONFIRMATION */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

              <input
                type="checkbox"
                checked={data.complianceConfirmed}
                onChange={(e) =>
                  updateField(
                    "declaration",
                    "complianceConfirmed",
                    e.target.checked
                  )
                }
                className="mt-1 h-5 w-5"
              />

              <span>
                I confirm that the recycling facility operates in
                accordance with applicable statutory, environmental,
                pollution control and regulatory requirements.
              </span>

            </label>

            {errors.complianceConfirmed && (
              <p className="mt-2 text-sm text-red-600">
                {errors.complianceConfirmed}
              </p>
            )}

          </div>


          {/* TERMS */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

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
              <p className="mt-2 text-sm text-red-600">
                {errors.termsAccepted}
              </p>
            )}

          </div>


          {/* RECYCLING COMPLIANCE */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

              <input
                type="checkbox"
                checked={data.recyclingComplianceAccepted}
                onChange={(e) =>
                  updateField(
                    "declaration",
                    "recyclingComplianceAccepted",
                    e.target.checked
                  )
                }
                className="mt-1 h-5 w-5"
              />

              <span>
                I confirm that recyclable materials procured through
                UrbanLoop will be handled, processed and recycled only
                through authorized facilities and in accordance with
                applicable environmental regulations.
              </span>

            </label>

            {errors.recyclingComplianceAccepted && (
              <p className="mt-2 text-sm text-red-600">
                {errors.recyclingComplianceAccepted}
              </p>
            )}

          </div>


          {/* COMMUNICATION */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

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
                verification, procurement, orders and service updates.
              </span>

            </label>

            {errors.communicationConsent && (
              <p className="mt-2 text-sm text-red-600">
                {errors.communicationConsent}
              </p>
            )}

          </div>

        </div>

      </SectionCard>


      {/* WHAT HAPPENS NEXT */}

      <SectionCard
        title="What Happens Next?"
        description="After you submit your application"
      >

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">

          <ul className="space-y-3 text-gray-700">

            <li>
              ✅ Your Recycler Partner registration will be reviewed by
              the UrbanLoop onboarding team.
            </li>

            <li>
              ✅ Business, regulatory and recycling authorization
              documents will be verified.
            </li>

            <li>
              ✅ UrbanLoop may contact you for additional information or
              facility verification.
            </li>

            <li>
              ✅ Once approved, your organization will become an
              authorized UrbanLoop Recycler Partner.
            </li>

            <li>
              ✅ Approved Recycler Partners can participate in recyclable
              material procurement and order workflows through UrbanLoop.
            </li>

          </ul>

        </div>

      </SectionCard>

    </div>
  );
}