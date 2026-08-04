"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";
import InputField from "@/components/forms/InputField";

import {
  PICKUP_DAYS,
  PICKUP_TIME,
} from "../constants";

import type {
  CoveragePayment,
  CollectionPartnerForm,
} from "../types";

interface Step6CoveragePaymentProps {
  data: CoveragePayment;
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

export default function Step6CoveragePayment({
  data,
  errors,
  updateField,
}: Step6CoveragePaymentProps) {

    const handlePickupDaysChange = (
  values: string[],
  clickedValue?: string
) => {

  const allDays = PICKUP_DAYS.filter(
    (day) => day !== "All Days"
  );

  // User clicked All Days.
  if (clickedValue === "All Days") {

    // Everything already selected.
    if (
      data.preferredPickupDays.length ===
      allDays.length
    ) {
      updateField(
        "coveragePayment",
        "preferredPickupDays",
        []
      );
    } else {
      updateField(
        "coveragePayment",
        "preferredPickupDays",
        allDays
      );
    }

    return;
  }

  // Remove All Days before saving.
  const selectedDays = values.filter(
    (value) => value !== "All Days"
  );

  updateField(
    "coveragePayment",
    "preferredPickupDays",
    selectedDays
  );
};

  return (
    <div className="space-y-8">

      <SectionCard
        title="Coverage Area"
        description="Specify the locations and pickup schedule."
      >

        <InputField
          label="Operating Areas"
          name="operatingAreas"
          value={data.operatingAreas.join(", ")}
          placeholder="Example: Bengaluru North, Whitefield, Indiranagar"
          required
          error={errors.operatingAreas}
          onChange={(value) =>
            updateField(
              "coveragePayment",
              "operatingAreas",
              value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            )
          }
        />

        <div className="mt-8">

          <CheckboxGroup
            label="Preferred Pickup Days"
            values={
  data.preferredPickupDays.length ===
  PICKUP_DAYS.length - 1
    ? PICKUP_DAYS
    : data.preferredPickupDays
}
            required
            error={errors.preferredPickupDays}
            options={PICKUP_DAYS.map((day) => ({
              label: day,
              value: day,
            }))}
            onChange={handlePickupDaysChange}
          />

        </div>

        <div className="mt-8">

          <SelectField
            label="Preferred Pickup Time"
            name="preferredPickupTime"
            value={data.preferredPickupTime}
            placeholder="Select Pickup Time"
            required
            error={errors.preferredPickupTime}
            options={PICKUP_TIME}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "preferredPickupTime",
                value
              )
            }
          />

        </div>

      </SectionCard>

      <SectionCard
        title="Payment Information"
        description="Provide your bank account details."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Bank Name"
            name="bankName"
            value={data.bankName}
            required
            error={errors.bankName}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "bankName",
                value
              )
            }
          />

          <InputField
            label="Account Holder Name"
            name="accountHolderName"
            value={data.accountHolderName}
            required
            error={errors.accountHolderName}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "accountHolderName",
                value
              )
            }
          />

          <InputField
            label="Account Number"
            name="accountNumber"
            value={data.accountNumber}
            required
            error={errors.accountNumber}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "accountNumber",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="IFSC Code"
            name="ifscCode"
            value={data.ifscCode}
            required
            error={errors.ifscCode}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "ifscCode",
                value.toUpperCase()
              )
            }
          />

          <InputField
            label="UPI ID"
            name="upiId"
            value={data.upiId}
            error={errors.upiId}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "upiId",
                value
              )
            }
          />

        </div>

      </SectionCard>

      <SectionCard
        title="Emergency Contact"
        description="Provide an alternate emergency contact."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Emergency Contact Name"
            name="emergencyContactName"
            value={data.emergencyContactName}
            required
            error={errors.emergencyContactName}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "emergencyContactName",
                value
              )
            }
          />

          <InputField
            label="Emergency Contact Number"
            name="emergencyContactNumber"
            value={data.emergencyContactNumber}
            required
            maxLength={10}
            error={errors.emergencyContactNumber}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "emergencyContactNumber",
                value.replace(/\D/g, "").slice(0, 10)
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}