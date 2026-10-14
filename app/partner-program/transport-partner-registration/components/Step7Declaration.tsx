"use client";

import SectionCard from "@/components/forms/SectionCard";

import type {
  TransportPartnerForm,
  TransportDeclaration,
} from "../types";


interface Step7DeclarationProps {
  data: TransportDeclaration;
  errors: Record<string, string>;

  updateField: <
    T extends keyof TransportPartnerForm,
    K extends keyof TransportPartnerForm[T]
  >(
    section: T,
    field: K,
    value: TransportPartnerForm[T][K]
  ) => void;
}


export default function Step7Declaration({
  data,
  errors,
  updateField,
}: Step7DeclarationProps) {
  return (
    <div className="space-y-8">

      {/* =================================================
          REVIEW SUMMARY
      ================================================= */}

      <SectionCard
        title="Review & Declaration"
        description="Please review your information before submitting your Transport Partner registration."
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
              ✅ Business / Operational Address Completed
            </div>

            <div>
              ✅ Fleet & Vehicle Capability Completed
            </div>

            <div>
              ✅ Service Area & Operations Completed
            </div>

            <div>
              ✅ Commercial & Payment Information Completed
            </div>

          </div>

        </div>

      </SectionCard>


      {/* =================================================
          DECLARATION & CONSENT
      ================================================= */}

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


          {/* VEHICLE / DRIVER COMPLIANCE */}

          <div>

            <label className="flex cursor-pointer items-start gap-3">

              <input
                type="checkbox"
                checked={data.vehicleComplianceConfirmed}
                onChange={(e) =>
                  updateField(
                    "declaration",
                    "vehicleComplianceConfirmed",
                    e.target.checked
                  )
                }
                className="mt-1 h-5 w-5"
              />

              <span>
                I confirm that all vehicles, drivers and transport
                operations used for UrbanLoop assignments will comply
                with applicable statutory and regulatory requirements,
                and that required licences, registrations, insurance,
                permits, fitness certificates, PUC certificates and
                other applicable documents will be maintained valid
                and up to date.
              </span>

            </label>

            {errors.vehicleComplianceConfirmed && (
              <p className="mt-2 text-sm text-red-600">
                {errors.vehicleComplianceConfirmed}
              </p>
            )}

          </div>


          {/* TERMS & CONDITIONS */}

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


          {/* COMMUNICATION CONSENT */}

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
                verification, transport assignments, operational
                updates and service-related communication.
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


      {/* =================================================
          WHAT HAPPENS NEXT
      ================================================= */}

      <SectionCard
        title="What Happens Next?"
        description="After you submit your application"
      >

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">

          <ul className="space-y-3 text-gray-700">

            <li>
              ✅ Your Transport Partner registration will be reviewed by
              the UrbanLoop onboarding team.
            </li>

            <li>
              ✅ Business, identity and applicable transport compliance
              documents will be verified.
            </li>

            <li>
              ✅ UrbanLoop may contact you for additional information,
              vehicle details or operational verification.
            </li>

            <li>
              ✅ Once approved, your organization will become an
              authorized UrbanLoop Transport Partner.
            </li>

            <li>
              ✅ Approved Transport Partners can participate in eligible
              pickup and transportation assignments through UrbanLoop.
            </li>

          </ul>

        </div>

      </SectionCard>

    </div>
  );
}