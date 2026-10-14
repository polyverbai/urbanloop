"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import RadioGroup from "@/components/forms/RadioGroup";
import InputField from "@/components/forms/InputField";

import {
  COMMERCIAL_PREFERENCES,
  SETTLEMENT_METHODS,
} from "../constants";

import type {
  TransportCommercialPayment,
  TransportPartnerForm,
} from "../types";


interface Step6CommercialPaymentProps {
  data: TransportCommercialPayment;
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


export default function Step6CommercialPayment({
  data,
  errors,
  updateField,
}: Step6CommercialPaymentProps) {
  return (
    <div className="space-y-8">

      {/* =================================================
          COMMERCIAL PREFERENCE
      ================================================= */}

      <SectionCard
        title="Commercial Preference"
        description="Select your preferred commercial models for UrbanLoop transport assignments."
      >

        <CheckboxGroup
          label="Commercial Preferences"
          values={data.commercialPreferences}
          required
          error={errors.commercialPreferences}
          options={COMMERCIAL_PREFERENCES.map(
            (preference) => ({
              label: preference,
              value: preference,
            })
          )}
          onChange={(values) =>
            updateField(
              "commercialPayment",
              "commercialPreferences",
              values
            )
          }
        />

      </SectionCard>


      {/* =================================================
          SETTLEMENT METHOD
      ================================================= */}

      <SectionCard
        title="Settlement Preference"
        description="Select how you prefer to receive payments for completed UrbanLoop transport assignments."
      >

        <RadioGroup
          label="Preferred Settlement Method"
          value={data.preferredSettlementMethod}
          required
          error={errors.preferredSettlementMethod}
          options={SETTLEMENT_METHODS.map(
            (method) => ({
              label: method,
              value: method,
            })
          )}
          onChange={(value) =>
            updateField(
              "commercialPayment",
              "preferredSettlementMethod",
              value
            )
          }
        />

      </SectionCard>


      {/* =================================================
          BANK DETAILS
      ================================================= */}

      {data.preferredSettlementMethod ===
        "Bank Transfer" && (
        <SectionCard
          title="Bank Account Information"
          description="Provide the bank account details where UrbanLoop settlements should be credited."
        >

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <InputField
              label="Account Holder Name"
              name="accountHolderName"
              value={data.accountHolderName}
              placeholder="Enter account holder name"
              required
              error={errors.accountHolderName}
              onChange={(value) =>
                updateField(
                  "commercialPayment",
                  "accountHolderName",
                  value
                )
              }
            />

            <InputField
              label="Bank Name"
              name="bankName"
              value={data.bankName}
              placeholder="Enter bank name"
              required
              error={errors.bankName}
              onChange={(value) =>
                updateField(
                  "commercialPayment",
                  "bankName",
                  value
                )
              }
            />

            <InputField
              label="Account Number"
              name="accountNumber"
              value={data.accountNumber}
              placeholder="Enter account number"
              required
              error={errors.accountNumber}
              onChange={(value) =>
                updateField(
                  "commercialPayment",
                  "accountNumber",
                  value.replace(/\D/g, "")
                )
              }
            />

            <InputField
              label="Confirm Account Number"
              name="confirmAccountNumber"
              value={data.confirmAccountNumber}
              placeholder="Re-enter account number"
              required
              error={errors.confirmAccountNumber}
              onChange={(value) =>
                updateField(
                  "commercialPayment",
                  "confirmAccountNumber",
                  value.replace(/\D/g, "")
                )
              }
            />

            <InputField
              label="IFSC Code"
              name="ifscCode"
              value={data.ifscCode}
              placeholder="Enter IFSC Code"
              required
              error={errors.ifscCode}
              onChange={(value) =>
                updateField(
                  "commercialPayment",
                  "ifscCode",
                  value.toUpperCase()
                )
              }
            />

          </div>

        </SectionCard>
      )}


      {/* =================================================
          UPI DETAILS
      ================================================= */}

      {data.preferredSettlementMethod === "UPI" && (
        <SectionCard
          title="UPI Information"
          description="Provide the UPI ID where UrbanLoop settlements should be credited."
        >

          <InputField
            label="UPI ID"
            name="upiId"
            value={data.upiId}
            placeholder="Example: name@bank"
            required
            error={errors.upiId}
            onChange={(value) =>
              updateField(
                "commercialPayment",
                "upiId",
                value
              )
            }
          />

        </SectionCard>
      )}

    </div>
  );
}