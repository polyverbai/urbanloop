"use client";

import SectionCard from "@/components/forms/SectionCard";
import FileUploadField from "@/components/forms/FileUpload";

import { VERIFICATION_DOCUMENTS } from "../constants";

import type {
  RecyclerBusinessVerification,
} from "../types";

interface Step2BusinessVerificationProps {
  data: RecyclerBusinessVerification;
  errors: Record<string, string>;

  updateFile: (
    field: keyof RecyclerBusinessVerification,
    file: File | null
  ) => void;
}

export default function Step2BusinessVerification({
  data,
  errors,
  updateFile,
}: Step2BusinessVerificationProps) {
  return (
    <div className="space-y-8">

      <SectionCard
        title="Business & Compliance Verification"
        description="Upload the required business, regulatory, and recycling compliance documents."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {VERIFICATION_DOCUMENTS.map(
            (document) => (
              <FileUploadField
                key={document.field}
                label={document.label}
                name={document.field}
                required={document.required}
                file={
                  data[
                    document.field as keyof RecyclerBusinessVerification
                  ]
                }
                error={
                  errors[document.field]
                }
                onChange={(file) =>
                  updateFile(
                    document.field as keyof RecyclerBusinessVerification,
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