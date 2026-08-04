"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";

interface BusinessContactSectionProps {
  fullName: string;
  mobileNumber: string;
  email: string;
  alternateMobile: string;

  errors: Record<string, string>;

  setFullName: (value: string) => void;
  setMobileNumber: (value: string) => void;
  setEmail: (value: string) => void;
  setAlternateMobile: (value: string) => void;
}

export default function BusinessContactSection({
  fullName,
  mobileNumber,
  email,
  alternateMobile,
  errors,
  setFullName,
  setMobileNumber,
  setEmail,
  setAlternateMobile,
}: BusinessContactSectionProps) {
  return (
    <SectionCard title="Business Contact Information">
      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          label="Full Name"
          name="fullName"
          value={fullName}
          onChange={setFullName}
          required
          error={errors.fullName}
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
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />

        <InputField
          label="Alternate Mobile"
          name="alternateMobile"
          value={alternateMobile}
          maxLength={10}
          onChange={(value) =>
            setAlternateMobile(
              value.replace(/\D/g, "").slice(0, 10)
            )
          }
          error={errors.alternateMobile}
        />

      </div>
    </SectionCard>
  );
}