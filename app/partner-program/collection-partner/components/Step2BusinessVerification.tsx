"use client";

import SectionCard from "@/components/forms/SectionCard";
import FileUploadField from "@/components/forms/FileUpload";

import { VERIFICATION_DOCUMENTS } from "../constants";

import type {
  BusinessVerification,
} from "../types";

interface Step2BusinessVerificationProps {
  data: BusinessVerification;
  errors: Record<string, string>;
  updateFile: (
    field: keyof BusinessVerification,
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
        title="Business Verification"
        description="Upload the required business and identity documents."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {VERIFICATION_DOCUMENTS.map((document) => (
            <FileUploadField
              key={document.field}
              label={document.label}
              name={document.field}
              required={document.required}
              file={data[document.field as keyof BusinessVerification]}
              error={errors[document.field]}
              onChange={(file) =>
                updateFile(
                  document.field as keyof BusinessVerification,
                  file
                )
              }
            />
          ))}

        </div>

      </SectionCard>

    </div>
  );
}