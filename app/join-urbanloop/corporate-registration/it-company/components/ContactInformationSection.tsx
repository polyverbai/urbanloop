"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

interface ContactInformationSectionProps {
  contactPersonName: string;
  designation: string;
  mobileNumber: string;
  email: string;

  errors: Record<string, string>;

  setContactPersonName: (value: string) => void;

  setDesignation: (value: string) => void;

  setMobileNumber: (value: string) => void;

  setEmail: (value: string) => void;
}

export default function ContactInformationSection({
  contactPersonName,
  designation,
  mobileNumber,
  email,
  errors,
  setContactPersonName,
  setDesignation,
  setMobileNumber,
  setEmail,
}: ContactInformationSectionProps) {
  return (
    <SectionCard
      title="Contact Information"
      description="Provide the primary contact details for this organization."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          label="Contact Person Name"
          name="contactPersonName"
          value={contactPersonName}
          onChange={setContactPersonName}
          required
          error={errors.contactPersonName}
        />

<InputField
  label="Designation"
  name="designation"
  value={designation}
  onChange={setDesignation}
/>

        <InputField
          label="Mobile Number"
          name="mobileNumber"
          value={mobileNumber}
          maxLength={10}
          onChange={(value) =>
            setMobileNumber(
              value.replace(/\D/g, "").slice(0, 10)
            )
          }
          required
          error={errors.mobileNumber}
        />

        <InputField
          label="Email Address"
          name="email"
          value={email}
          onChange={setEmail}
          required
          error={errors.email}
        />

      </div>
    </SectionCard>
  );
}