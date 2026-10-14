"use client";

import SectionCard from "@/components/forms/SectionCard";
import FileUploadField from "@/components/forms/FileUpload";

import {
  TRANSPORT_VERIFICATION_DOCUMENTS,
} from "../constants";

import type {
  TransportBusinessInformation,
  TransportBusinessVerification,
  TransportFleetCapability,
} from "../types";


interface Step2BusinessVerificationProps {
  data: TransportBusinessVerification;

  businessInformation: TransportBusinessInformation;

  fleetCapability: TransportFleetCapability;

  errors: Record<string, string>;

  updateFile: (
    field: keyof TransportBusinessVerification,
    file: File | null
  ) => void;
}


export default function Step2BusinessVerification({
  data,
  businessInformation,
  fleetCapability,
  errors,
  updateFile,
}: Step2BusinessVerificationProps) {
  
  const isDocumentRequired = (
  field: keyof TransportBusinessVerification
) => {
  if (
    field === "panCard" ||
    field === "authorizedPersonId"
  ) {
    return true;
  }

  if (
    field === "gstCertificate" &&
    Boolean(
      businessInformation.gstNumber.trim()
    )
  ) {
    return true;
  }

  if (
    field === "drivingLicence" &&
    businessInformation.transportPartnerCategory ===
      "Individual Vehicle Owner"
  ) {
    return true;
  }

  if (
    fleetCapability.ownsOperatesVehicles === "Yes" &&
    (
      field === "vehicleRegistrationCertificate" ||
      field === "vehicleInsurance" ||
      field === "pucCertificate" ||
      field === "vehiclePhoto"
    )
  ) {
    return true;
  }

  return false;
};
    return (
    <div className="space-y-8">

      <SectionCard
        title="Business & Compliance Verification"
        description="Upload the required identity, business, vehicle, and transport compliance documents."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {TRANSPORT_VERIFICATION_DOCUMENTS.map(
            (document) => (
              <FileUploadField
                key={document.field}
                label={document.label}
                name={document.field}
                required={isDocumentRequired(
  document.field as keyof TransportBusinessVerification
)}
                file={
                  data[
                    document.field as keyof TransportBusinessVerification
                  ]
                }
                error={
                  errors[document.field]
                }
                onChange={(file) =>
                  updateFile(
                    document.field as keyof TransportBusinessVerification,
                    file
                  )
                }
              />
            )
          )}

        </div>

      </SectionCard>

    </div>
  );
}