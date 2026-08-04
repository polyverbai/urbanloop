"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";
import InputField from "@/components/forms/InputField";

import {
  FULFILMENT_PREFERENCES,
  RECEIVING_DAYS,
  RECEIVING_TIME_OPTIONS,
  VEHICLE_TYPES,
} from "../constants";

import type {
  RecyclerLogisticsCommercial,
  RecyclerPartnerForm,
} from "../types";

interface Step6LogisticsCommercialProps {
  data: RecyclerLogisticsCommercial;
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

export default function Step6LogisticsCommercial({
  data,
  errors,
  updateField,
}: Step6LogisticsCommercialProps) {

  /* =====================================================
     RECEIVING DAYS
  ===================================================== */

  const handleReceivingDaysChange = (
    values: string[],
    clickedValue?: string
  ) => {

    const allDays = RECEIVING_DAYS.filter(
      (day) => day !== "All Days"
    );

    if (clickedValue === "All Days") {

      if (
        data.receivingDays.length ===
        allDays.length
      ) {
        updateField(
          "logisticsCommercial",
          "receivingDays",
          []
        );
      } else {
        updateField(
          "logisticsCommercial",
          "receivingDays",
          allDays
        );
      }

      return;
    }

    const selectedDays = values.filter(
      (value) => value !== "All Days"
    );

    updateField(
      "logisticsCommercial",
      "receivingDays",
      selectedDays
    );
  };


  /* =====================================================
     VEHICLE TYPES
  ===================================================== */

  const handleVehicleTypesChange = (
    values: string[]
  ) => {

    updateField(
      "logisticsCommercial",
      "vehicleTypes",
      values
    );
  };


  return (
    <div className="space-y-8">

      {/* PROCUREMENT COVERAGE */}

      <SectionCard
        title="Procurement Coverage"
        description="Specify the locations from which your organization can procure recyclable materials."
      >

        <InputField
          label="Procurement Areas"
          name="procurementAreas"
          value={data.procurementAreas.join(", ")}
          placeholder="Example: Bengaluru, Mysuru, Tumakuru"
          required
          error={errors.procurementAreas}
          onChange={(value) =>
            updateField(
              "logisticsCommercial",
              "procurementAreas",
              value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            )
          }
        />

      </SectionCard>


      {/* RECEIVING & LOGISTICS */}

      <SectionCard
        title="Receiving & Logistics"
        description="Provide your preferred material fulfilment and receiving arrangements."
      >

        <SelectField
          label="Fulfilment Preference"
          name="fulfilmentPreference"
          value={data.fulfilmentPreference}
          placeholder="Select Fulfilment Preference"
          required
          error={errors.fulfilmentPreference}
          options={FULFILMENT_PREFERENCES.map(
            (option) => ({
              label: option,
              value: option,
            })
          )}
          onChange={(value) =>
            updateField(
              "logisticsCommercial",
              "fulfilmentPreference",
              value
            )
          }
        />

        <div className="mt-8">

          <CheckboxGroup
            label="Receiving Days"
            required
            values={
              data.receivingDays.length ===
              RECEIVING_DAYS.length - 1
                ? RECEIVING_DAYS
                : data.receivingDays
            }
            error={errors.receivingDays}
            options={RECEIVING_DAYS.map(
              (day) => ({
                label: day,
                value: day,
              })
            )}
            onChange={handleReceivingDaysChange}
          />

        </div>

        <div className="mt-8">

          <SelectField
            label="Preferred Receiving Time"
            name="preferredReceivingTime"
            value={data.preferredReceivingTime}
            placeholder="Select Receiving Time"
            required
            error={errors.preferredReceivingTime}
            options={RECEIVING_TIME_OPTIONS.map(
              (time) => ({
                label: time,
                value: time,
              })
            )}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "preferredReceivingTime",
                value
              )
            }
          />

        </div>

        <div className="mt-8">

          <CheckboxGroup
            label="Vehicle Types Available"
            values={data.vehicleTypes}
            error={errors.vehicleTypes}
            options={VEHICLE_TYPES.map(
              (vehicle) => ({
                label: vehicle,
                value: vehicle,
              })
            )}
            onChange={handleVehicleTypesChange}
          />

        </div>

        <div className="mt-8">

          <InputField
            label="Number of Vehicles"
            name="numberOfVehicles"
            value={data.numberOfVehicles}
            placeholder="Example: 5"
            error={errors.numberOfVehicles}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "numberOfVehicles",
                value.replace(/\D/g, "")
              )
            }
          />

        </div>

      </SectionCard>


      {/* PAYMENT INFORMATION */}

      <SectionCard
        title="Payment Information"
        description="Provide the bank account details for commercial transactions with UrbanLoop."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Bank Name"
            name="bankName"
            value={data.bankName}
            error={errors.bankName}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "bankName",
                value
              )
            }
          />

          <InputField
            label="Account Holder Name"
            name="accountHolderName"
            value={data.accountHolderName}
            error={errors.accountHolderName}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "accountHolderName",
                value
              )
            }
          />

          <InputField
            label="Account Number"
            name="accountNumber"
            value={data.accountNumber}
            error={errors.accountNumber}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "accountNumber",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="IFSC Code"
            name="ifscCode"
            value={data.ifscCode}
            error={errors.ifscCode}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "ifscCode",
                value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "")
                  .slice(0, 11)
              )
            }
            maxLength={11}
          />

          <InputField
            label="UPI ID"
            name="upiId"
            value={data.upiId}
            error={errors.upiId}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "upiId",
                value
              )
            }
          />

        </div>

      </SectionCard>


      {/* EMERGENCY / AUTHORIZED CONTACT */}

      <SectionCard
        title="Authorized / Emergency Contact"
        description="Provide an alternate contact person for operational or urgent communication."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Contact Name"
            name="emergencyContactName"
            value={data.emergencyContactName}
            required
            error={errors.emergencyContactName}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "emergencyContactName",
                value
              )
            }
          />

          <InputField
            label="Contact Number"
            name="emergencyContactNumber"
            value={data.emergencyContactNumber}
            placeholder="Enter 10-digit mobile number"
            required
            maxLength={10}
            error={errors.emergencyContactNumber}
            onChange={(value) =>
              updateField(
                "logisticsCommercial",
                "emergencyContactNumber",
                value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}